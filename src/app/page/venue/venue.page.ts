import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, RouterModule, IonicModule],
})
export class VenuePage implements OnInit {
  venues = [
    {
      name: 'Court A',
      slug: 'court-a',
      location: 'Indoor • South Jakarta',
      price: 'IDR 150.000/hours',
      facilities: 'AC, Parking, Canteen',
      image: 'assets/pexels-bence-szemerey-337043-7513413.jpg',
      badgeClass: 'text-green-300',
      buttonClass:
        'bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500',
      iconClass: 'text-green-300',
    },
    {
      name: 'Court B',
      slug: 'court-b',
      location: 'Outdoor • West Jakarta',
      price: 'IDR 120.000/hours',
      facilities: 'Outdoor, Parking, Mushola',
      image:
        'https://images.unsplash.com/photo-1598026878267-1f22ae804eac?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      badgeClass: 'text-blue-300',
      buttonClass:
        'bg-gradient-to-r from-blue-500 to-yellow-400 hover:from-blue-600 hover:to-yellow-500',
      iconClass: 'text-blue-300',
    },
    {
      name: 'Court C',
      slug: 'court-c',
      location: 'Indoor • Bekasi',
      price: 'IDR 100.000/hours',
      facilities: 'AC, Locker, Canteen',
      image:
        'https://images.unsplash.com/photo-1521217078329-f8fc1becab68?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      badgeClass: 'text-green-300',
      buttonClass:
        'bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500',
      iconClass: 'text-green-300',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
