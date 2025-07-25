import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-cart-drawer',
  templateUrl: './cart-drawer.component.html',
  styleUrls: ['./cart-drawer.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  animations: [
    trigger('drawerAnim', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '300ms cubic-bezier(0.4,0,0.2,1)',
          style({ transform: 'translateX(0)', opacity: 1 }),
        ),
      ]),
      transition(':leave', [
        animate(
          '250ms cubic-bezier(0.4,0,0.2,1)',
          style({ transform: 'translateX(100%)', opacity: 0 }),
        ),
      ]),
    ]),
    trigger('overlayAnim', [
      transition(':enter', [style({ opacity: 0 }), animate('200ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('200ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CartDrawerComponent {
  @Input() cart: any[] = [];
  @Input() isOpen = false;
  @Input() total = 0;
  @Output() close = new EventEmitter<void>();
  @Output() remove = new EventEmitter<any>();
  @Output() checkout = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onRemove(item: any) {
    this.remove.emit(item);
  }

  onCheckout() {
    this.checkout.emit();
  }
}
