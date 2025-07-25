import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './cart.service';

export interface OrderData {
  name: string;
  email: string;
  address: string;
  cart: CartItem[];
  total: number;
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  private orderSubject = new BehaviorSubject<OrderData | null>(null);
  order$ = this.orderSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('order');
    if (saved) {
      this.orderSubject.next(JSON.parse(saved));
    }
  }

  setOrder(data: OrderData) {
    this.orderSubject.next(data);
    localStorage.setItem('order', JSON.stringify(data));
  }

  getOrder(): OrderData | null {
    return this.orderSubject.value;
  }

  clearOrder() {
    this.orderSubject.next(null);
    localStorage.removeItem('order');
  }
}
