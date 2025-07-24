import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  initials: string;
}

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TestimonialComponent {
  @Input() testimonial!: Testimonial;
}
