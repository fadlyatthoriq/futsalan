import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
  time: string;
  status: 'available' | 'booked';
  price: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartSubject: BehaviorSubject<CartItem[]>;
  cart$: Observable<CartItem[]>;

  constructor() {
    const saved = localStorage.getItem('cart');
    const initialCart = saved ? JSON.parse(saved) : [];
    this.cartSubject = new BehaviorSubject<CartItem[]>(initialCart);
    this.cart$ = this.cartSubject.asObservable();
    // Sync to localStorage on every change
    this.cart$.subscribe((cart) => {
      localStorage.setItem('cart', JSON.stringify(cart));
    });
  }

  getCart(): CartItem[] {
    return this.cartSubject.value;
  }

  addToCart(item: CartItem): void {
    const cart = this.cartSubject.value;
    if (!cart.find((i) => i.time === item.time)) {
      this.cartSubject.next([...cart, item]);
    }
  }

  removeFromCart(item: CartItem): void {
    const cart = this.cartSubject.value.filter((i) => i.time !== item.time);
    this.cartSubject.next(cart);
  }

  clearCart(): void {
    this.cartSubject.next([]);
    localStorage.removeItem('cart');
  }

  getTotal(): number {
    return this.cartSubject.value.reduce((sum, i) => sum + i.price, 0);
  }
}
