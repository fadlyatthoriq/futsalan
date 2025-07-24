import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  ngOnInit() {
    // Mouse follow orb effect
    document.addEventListener('mousemove', (e) => {
      const orb = document.querySelector('.orb');
      if (orb) {
        orb.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px;`);
      }
    });
  }
}
