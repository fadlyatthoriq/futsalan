import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

export interface ScheduleSlot {
  time: string;
  monday: SlotStatus[];
  tuesday: SlotStatus[];
  wednesday: SlotStatus[];
  thursday: SlotStatus[];
  friday: SlotStatus[];
  saturday: SlotStatus[];
  sunday: SlotStatus[];
}

export interface SlotStatus {
  status: 'available' | 'booked' | 'maintenance' | 'tournament';
  field: string;
  description: string;
}

@Component({
  selector: 'app-schedule-preview',
  templateUrl: './schedule-preview.component.html',
  styleUrls: ['./schedule-preview.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class SchedulePreviewComponent {
  @Input() selectedPeriod: 'today' | 'week' | 'month' = 'today';

  periodOptions = [
    { key: 'today' as const, label: 'Hari Ini' },
    { key: 'week' as const, label: 'Minggu Ini' },
    { key: 'month' as const, label: 'Bulan' },
  ];

  daysOfWeek: { idx: number; key: keyof Omit<ScheduleSlot, 'time'> }[] = [
    { idx: 1, key: 'monday' },
    { idx: 2, key: 'tuesday' },
    { idx: 3, key: 'wednesday' },
    { idx: 4, key: 'thursday' },
    { idx: 5, key: 'friday' },
    { idx: 6, key: 'saturday' },
    { idx: 0, key: 'sunday' },
  ];

  scheduleData: ScheduleSlot[] = this.generateNextThreeHours();

  generateNextThreeHours(): ScheduleSlot[] {
    const now = new Date();
    // Bulatkan ke jam berikutnya
    const startHour =
      now.getMinutes() > 0 || now.getSeconds() > 0 ? now.getHours() + 1 : now.getHours();
    const slots: ScheduleSlot[] = [];
    for (let i = 0; i < 3; i++) {
      const slotTime = new Date(now);
      slotTime.setHours(startHour + i, 0, 0, 0);
      const timeStr = slotTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      slots.push({
        time: timeStr,
        monday: [
          { status: 'available', field: 'Lapangan A', description: 'Tersedia' },
          { status: 'booked', field: 'Lapangan B', description: 'Dibooking' },
          { status: 'maintenance', field: 'Lapangan C', description: 'Maintenance' },
        ],
        tuesday: [
          { status: 'tournament', field: 'Lapangan A', description: 'Tournament' },
          { status: 'booked', field: 'Lapangan B', description: 'Dibooking' },
          { status: 'maintenance', field: 'Lapangan C', description: 'Maintenance' },
        ],
        wednesday: [
          { status: 'available', field: 'Lapangan A', description: 'Tersedia' },
          { status: 'booked', field: 'Lapangan B', description: 'Dibooking' },
          { status: 'maintenance', field: 'Lapangan C', description: 'Maintenance' },
        ],
        thursday: [
          { status: 'available', field: 'Lapangan A', description: 'Tersedia' },
          { status: 'booked', field: 'Lapangan B', description: 'Dibooking' },
          { status: 'maintenance', field: 'Lapangan C', description: 'Maintenance' },
        ],
        friday: [
          { status: 'available', field: 'Lapangan A', description: 'Tersedia' },
          { status: 'booked', field: 'Lapangan B', description: 'Dibooking' },
          { status: 'maintenance', field: 'Lapangan C', description: 'Maintenance' },
        ],
        saturday: [
          { status: 'available', field: 'Lapangan A', description: 'Tersedia' },
          { status: 'booked', field: 'Lapangan B', description: 'Dibooking' },
          { status: 'maintenance', field: 'Lapangan C', description: 'Maintenance' },
        ],
        sunday: [
          { status: 'available', field: 'Lapangan A', description: 'Tersedia' },
          { status: 'booked', field: 'Lapangan B', description: 'Dibooking' },
          { status: 'maintenance', field: 'Lapangan C', description: 'Maintenance' },
        ],
      });
    }
    return slots;
  }

  getStatusClasses(status: string): string {
    const baseClasses =
      'border-b border-r border-gray-600/30 px-3 py-6 rounded-lg m-2 shadow-lg backdrop-blur-sm text-center transition-all duration-200';

    switch (status) {
      case 'available':
        return `${baseClasses} bg-gradient-to-br from-green-500/20 to-green-400/10 text-green-300 hover:from-green-500/30 hover:to-green-400/20 cursor-pointer`;
      case 'booked':
        return `${baseClasses} bg-gradient-to-br from-red-500/20 to-red-400/10 text-red-300`;
      case 'maintenance':
        return `${baseClasses} bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 text-yellow-300`;
      case 'tournament':
        return `${baseClasses} bg-gradient-to-br from-blue-500/20 to-blue-400/10 text-blue-300`;
      default:
        return baseClasses;
    }
  }

  getStatusTextColor(status: string): string {
    switch (status) {
      case 'available':
        return 'text-green-200';
      case 'booked':
        return 'text-red-200';
      case 'maintenance':
        return 'text-yellow-200';
      case 'tournament':
        return 'text-blue-200';
      default:
        return 'text-gray-200';
    }
  }

  getStatusDescriptionColor(status: string): string {
    switch (status) {
      case 'available':
        return 'text-green-300/80';
      case 'booked':
        return 'text-red-300/80';
      case 'maintenance':
        return 'text-yellow-300/80';
      case 'tournament':
        return 'text-blue-300/80';
      default:
        return 'text-gray-300/80';
    }
  }

  onSlotClick(slot: SlotStatus): void {
    if (slot.status === 'available') {
      console.log('Booking slot:', slot);
      // Implement booking logic here
    }
  }

  getTodayIndex(): number {
    // Returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    return new Date().getDay();
  }
}
