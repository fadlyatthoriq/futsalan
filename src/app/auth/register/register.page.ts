import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { IonicModule, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RegisterPage implements OnInit {
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  passwordVisible = false;
  loading = false;

  constructor(
    private router: Router,
    private auth: Auth,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController,
  ) {}

  ngOnInit() {}

  private isValidPassword(password: string): boolean {
    const minLength = 6;
    const hasNumber = /\d/;
    return password.length >= minLength && hasNumber.test(password);
  }

  async registerUser() {
    if (!this.email || !this.password || !this.confirmPassword) {
      await this.showAlert('All fields are required.', 'Register Error');
      return;
    }
    if (!this.email.includes('@')) {
      await this.showAlert('Please enter a valid email address.', 'Register Error');
      return;
    }
    if (!this.isValidPassword(this.password)) {
      await this.showAlert(
        'Password must be at least 6 characters long and contain at least one number.',
        'Register Error',
      );
      return;
    }
    if (this.password !== this.confirmPassword) {
      await this.showAlert('Passwords do not match.', 'Register Error');
      return;
    }
    const loading = await this.loadingController.create({ message: 'Registering...' });
    await loading.present();
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password,
      );
      await this.showToast('Registration successful!', 'success');
      this.router.navigate(['/login']);
    } catch (error: any) {
      await this.handleRegisterError(error);
    } finally {
      loading.dismiss();
    }
  }

  private async showAlert(message: string, header: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
    });
    await toast.present();
  }

  private async handleRegisterError(error: any) {
    let message = 'Registration failed. Please try again.';
    if (error?.message) {
      message = error.message;
    } else if (error?.code) {
      message = this.getErrorMessageByCode(error.code);
    }
    await this.showAlert(message, 'Register Error');
  }

  private getErrorMessageByCode(code: string): string {
    const errorMessages: { [key: string]: string } = {
      'auth/email-already-in-use': 'Email is already in use.',
      'auth/invalid-email': 'Invalid email address.',
      'auth/operation-not-allowed': 'Registration is not allowed.',
      'auth/weak-password': 'Password is too weak.',
      'auth/network-request-failed': 'Network error. Please check your connection.',
    };
    return errorMessages[code] || 'An unknown error occurred.';
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  goBack() {
    this.router.navigate(['/index']);
  }
}
