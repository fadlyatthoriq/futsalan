import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../../cart.service';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class CheckoutPage implements OnInit {
  step = 0;
  name = '';
  email = '';
  address = '';
  cart: CartItem[] = [];
  total = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  nextStep() {
    if (this.step < 2) this.step++;
  }

  prevStep() {
    if (this.step > 0) this.step--;
  }

  submit() {
    this.orderService.setOrder({
      name: this.name,
      email: this.email,
      address: this.address,
      cart: this.cart,
      total: this.total,
    });
    this.cartService.clearCart();
    this.router.navigate(['/order-summary']);
  }
}
