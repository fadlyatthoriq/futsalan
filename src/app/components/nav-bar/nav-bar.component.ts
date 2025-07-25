import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../cart.service';
import { CartDrawerComponent } from '../cart-drawer/cart-drawer.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CartDrawerComponent],
})
export class NavBarComponent implements OnInit {
  isMobileMenuOpen = false;
  cart: CartItem[] = [];
  isCartOpen = false;

  constructor(
    private router: Router,
    private cartService: CartService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((cart) => (this.cart = cart));
  }

  openCart() {
    this.isCartOpen = true;
  }
  closeCart() {
    console.log('closeCart dipanggil');
    this.isCartOpen = false;
    this.cdr.detectChanges();
  }
  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item);
  }
  get cartTotal() {
    return this.cartService.getTotal();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  handleCheckout() {
    this.closeCart();
    this.router.navigate(['/checkout']);
  }
}
