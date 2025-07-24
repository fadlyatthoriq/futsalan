import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchedulePreviewComponent } from '../components/schedule-preview/schedule-preview.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { TestimonialSectionComponent } from '../components/testimonial-section/testimonial-section.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SchedulePreviewComponent,
    NavBarComponent,
    TestimonialSectionComponent,
    FooterComponent,
  ],
})
export class IndexPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
