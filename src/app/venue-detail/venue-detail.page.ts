import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../components/footer/footer.component';

interface Venue {
  name: string;
  slug: string;
  location: string;
  price: string;
  facilities: string;
  image: string;
}

interface Schedule {
  time: string;
  status: 'available' | 'booked';
  price: number;
}

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.page.html',
  styleUrls: ['./venue-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavBarComponent, FooterComponent, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VenueDetailPage implements OnInit {
  slug: string | null = null;
  venue: Venue | undefined;
  showSchedule = false;
  schedules: Schedule[] = [
    { time: '00:00 - 01:00', status: 'booked', price: 150000 },
    { time: '01:00 - 02:00', status: 'available', price: 150000 },
    { time: '02:00 - 03:00', status: 'booked', price: 150000 },
    { time: '03:00 - 04:00', status: 'booked', price: 150000 },
    { time: '04:00 - 05:00', status: 'booked', price: 150000 },
    { time: '05:00 - 06:00', status: 'booked', price: 150000 },
    { time: '06:00 - 07:00', status: 'booked', price: 150000 },
    { time: '07:00 - 08:00', status: 'booked', price: 150000 },
    { time: '08:00 - 09:00', status: 'booked', price: 150000 },
    { time: '09:00 - 10:00', status: 'booked', price: 150000 },
    { time: '10:00 - 11:00', status: 'booked', price: 150000 },
    { time: '11:00 - 12:00', status: 'booked', price: 150000 },
    { time: '12:00 - 13:00', status: 'booked', price: 150000 },
    { time: '13:00 - 14:00', status: 'booked', price: 150000 },
    { time: '14:00 - 15:00', status: 'booked', price: 150000 },
    { time: '15:00 - 16:00', status: 'booked', price: 150000 },
    { time: '16:00 - 17:00', status: 'booked', price: 150000 },
    { time: '17:00 - 18:00', status: 'booked', price: 150000 },
    { time: '18:00 - 19:00', status: 'booked', price: 150000 },
    { time: '19:00 - 20:00', status: 'booked', price: 150000 },
    { time: '20:00 - 21:00', status: 'booked', price: 150000 },
    { time: '21:00 - 22:00', status: 'booked', price: 150000 },
    { time: '22:00 - 23:00', status: 'booked', price: 150000 },
    { time: '23:00 - 00:00', status: 'booked', price: 150000 },
  ];

  selectedSchedule: Schedule | null = null;
  selectedDate = '';

  venues: Venue[] = [
    {
      name: 'Court A',
      slug: 'court-a',
      location: 'Indoor • South Jakarta',
      price: 'IDR 150.000/hours',
      facilities: 'AC, Parking, Canteen',
      image: 'assets/pexels-bence-szemerey-337043-7513413.jpg',
    },
    {
      name: 'Court B',
      slug: 'court-b',
      location: 'Outdoor • West Jakarta',
      price: 'IDR 120.000/hours',
      facilities: 'Outdoor, Parking, Mushola',
      image:
        'https://images.unsplash.com/photo-1598026878267-1f22ae804eac?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Court C',
      slug: 'court-c',
      location: 'Indoor • Bekasi',
      price: 'IDR 100.000/hours',
      facilities: 'AC, Locker, Canteen',
      image:
        'https://images.unsplash.com/photo-1521217078329-f8fc1becab68?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.venue = this.venues.find((v) => v.slug === this.slug);

    // Inisialisasi tanggal hari ini (format yyyy-MM-dd)
    const today = new Date();
    this.selectedDate = today.toISOString().slice(0, 10);
    this.onDateChange();
  }

  onDateChange(): void {
    // Simulasi: jika tanggal genap, ada 2 slot available, jika ganjil, 1 slot available
    const date = new Date(this.selectedDate);
    const isEven = date.getDate() % 2 === 0;

    if (isEven) {
      this.schedules = [
        { time: '08:00 - 09:00', status: 'available', price: 150000 },
        { time: '09:00 - 10:00', status: 'available', price: 150000 },
        { time: '10:00 - 11:00', status: 'booked', price: 150000 },
        { time: '11:00 - 12:00', status: 'booked', price: 150000 },
        { time: '12:00 - 13:00', status: 'booked', price: 150000 },
        { time: '13:00 - 14:00', status: 'booked', price: 150000 },
        { time: '14:00 - 15:00', status: 'booked', price: 150000 },
        { time: '15:00 - 16:00', status: 'booked', price: 150000 },
        { time: '16:00 - 17:00', status: 'booked', price: 150000 },
        { time: '17:00 - 18:00', status: 'booked', price: 150000 },
        { time: '18:00 - 19:00', status: 'booked', price: 150000 },
        { time: '19:00 - 20:00', status: 'booked', price: 150000 },
        { time: '20:00 - 21:00', status: 'booked', price: 150000 },
        { time: '21:00 - 22:00', status: 'booked', price: 150000 },
        { time: '22:00 - 23:00', status: 'booked', price: 150000 },
        { time: '23:00 - 00:00', status: 'booked', price: 150000 },
      ];
    } else {
      this.schedules = [
        { time: '08:00 - 09:00', status: 'available', price: 150000 },
        { time: '09:00 - 10:00', status: 'available', price: 150000 },
        { time: '10:00 - 11:00', status: 'available', price: 150000 },
        { time: '11:00 - 12:00', status: 'available', price: 150000 },
        { time: '12:00 - 13:00', status: 'available', price: 150000 },
        { time: '13:00 - 14:00', status: 'booked', price: 150000 },
        { time: '14:00 - 15:00', status: 'booked', price: 150000 },
        { time: '15:00 - 16:00', status: 'booked', price: 150000 },
        { time: '16:00 - 17:00', status: 'booked', price: 150000 },
        { time: '17:00 - 18:00', status: 'booked', price: 150000 },
        { time: '18:00 - 19:00', status: 'booked', price: 150000 },
        { time: '19:00 - 20:00', status: 'booked', price: 150000 },
        { time: '20:00 - 21:00', status: 'booked', price: 150000 },
        { time: '21:00 - 22:00', status: 'booked', price: 150000 },
        { time: '22:00 - 23:00', status: 'booked', price: 150000 },
        { time: '23:00 - 00:00', status: 'booked', price: 150000 },
      ];
    }
    this.selectedSchedule = null;
  }

  selectSchedule(s: Schedule): void {
    if (s.status === 'available') {
      this.selectedSchedule = s;
    }
  }

  get availableScheduleCount(): number {
    return this.schedules.filter((s) => s.status === 'available').length;
  }
}
