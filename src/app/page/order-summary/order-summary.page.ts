import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { OrderService, OrderData } from '../../order.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonIcon,
  ],
})
export class OrderSummaryPage implements OnInit {
  order: OrderData | null = null;
  private orderSub?: Subscription;

  constructor(
    private orderService: OrderService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.orderSub = this.orderService.order$.subscribe((order) => {
      this.order = order;
      if (!order) {
        // Jika tidak ada order, redirect ke checkout
        this.router.navigate(['/checkout']);
      }
    });
  }

  ngOnDestroy() {
    this.orderSub?.unsubscribe();
  }

  goHome() {
    this.router.navigate(['/']);
  }

  finishOrder() {
    this.orderService.clearOrder();
    this.router.navigate(['/']);
  }
}
