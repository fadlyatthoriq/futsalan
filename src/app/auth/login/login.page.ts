import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { IonicModule, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  errorMessage = '';
  passwordVisible = false;
  rememberMe = false;
  loading = false;

  constructor(
    private router: Router,
    private auth: Auth,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController,
  ) {}

  ngOnInit() {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      this.email = savedEmail;
      this.rememberMe = true;
    }
  }

  ionViewWillEnter() {
    this.password = '';
  }

  private isValidPassword(password: string): boolean {
    const minLength = 6;
    const hasNumber = /\d/;
    return password.length >= minLength && hasNumber.test(password);
  }

  async loginUser() {
    if (!this.email || !this.password) {
      await this.showAlert('Email and password are required.', 'Login Error');
      return;
    }
    if (!this.email.includes('@')) {
      await this.showAlert('Please enter a valid email address.', 'Login Error');
      return;
    }
    if (!this.isValidPassword(this.password)) {
      await this.showAlert(
        'Password must be at least 6 characters long and contain at least one number.',
        'Login Error',
      );
      return;
    }
    const loading = await this.loadingController.create({ message: 'Logging in...' });
    await loading.present();
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password,
      );
      // Store email if rememberMe is checked
      if (this.rememberMe) {
        localStorage.setItem('rememberedEmail', this.email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
      await this.showToast('Login successful!', 'success');
      // TODO: Fetch user data/role if needed, then navigate
      this.router.navigate(['/index']);
    } catch (error: any) {
      await this.handleLoginError(error);
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

  private async handleLoginError(error: any) {
    let message = 'Login failed. Please try again.';
    if (error?.message) {
      message = error.message;
    } else if (error?.code) {
      message = this.getErrorMessageByCode(error.code);
    }
    await this.showAlert(message, 'Login Error');
  }

  private getErrorMessageByCode(code: string): string {
    const errorMessages: { [key: string]: string } = {
      'auth/user-not-found': 'User not found.',
      'auth/wrong-password': 'Wrong password.',
      'auth/network-request-failed': 'Network error. Please check your connection.',
      'auth/invalid-credential': 'Invalid credentials. Please check your email and password.',
      'auth/too-many-requests': 'Too many failed attempts. Account temporarily locked.',
    };
    return errorMessages[code] || 'An unknown error occurred.';
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToForgetPassword(event: MouseEvent): void {
    event.preventDefault();
    this.router.navigate(['/forget-password']);
  }

  goBack() {
    this.router.navigate(['/index']);
  }
}
