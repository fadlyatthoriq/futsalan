import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VenueDetailPage } from './venue-detail.page';

describe('VenueDetailPage', () => {
  let component: VenueDetailPage;
  let fixture: ComponentFixture<VenueDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
