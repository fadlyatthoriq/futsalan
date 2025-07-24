import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialComponent, Testimonial } from '../testimonial/testimonial.component';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss'],
  standalone: true,
  imports: [CommonModule, TestimonialComponent],
})
export class TestimonialSectionComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      text: 'High-quality courts with easy booking. No more hassle for futsal court reservations!',
      author: 'Muhammad Ikram',
      role: 'Regular Player',
      initials: 'MI',
    },
    {
      id: 2,
      text: 'Very user-friendly booking system. Real-time availability makes planning much easier.',
      author: 'Naufal',
      role: 'Team Captain',
      initials: 'N',
    },
    {
      id: 3,
      text: 'Secure payment gateway and fast booking process. Highly recommended for all futsal players!',
      author: 'Jeiver Lahilote',
      role: 'Futsal Enthusiast',
      initials: 'JL',
    },
    {
      id: 4,
      text: 'High-quality pitches with easy booking. No more hassle when it comes to reserving a futsal pitch!',
      author: 'Muhammad Ikram',
      role: 'Player',
      initials: 'MI',
    },
    {
      id: 5,
      text: 'A very user-friendly booking system. Real-time availability makes planning easier.',
      author: 'Naufal',
      role: 'Captain Team',
      initials: 'N',
    },
    {
      id: 6,
      text: 'Secure payment gateway and fast booking process. Highly recommended for all futsal players!',
      author: 'Jeiver Lahilote',
      role: 'Futsal Enthusiast',
      initials: 'JL',
    },
    {
      id: 7,
      text: 'Responsive customer service and the pitch is always in top condition. An incredible playing experience!',
      author: 'Aaron James',
      role: 'Pro Player',
      initials: 'AJ',
    },
    {
      id: 8,
      text: '24/7 booking is very helpful for our team, which often practices at night. Very convenient!',
      author: 'Christian Bryan',
      role: 'Team Manager',
      initials: 'CB',
    },
    {
      id: 9,
      text: 'A clean and modern interface. No more confusion when booking a futsal field!',
      author: 'Ahmad Malik',
      role: 'Player',
      initials: 'AM',
    },
  ];

  get firstRowTestimonials(): Testimonial[] {
    return this.testimonials.slice(0, 6);
  }

  get secondRowTestimonials(): Testimonial[] {
    return this.testimonials.slice(6, 9);
  }
}
