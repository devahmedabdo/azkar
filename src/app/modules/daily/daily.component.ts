import { Component, inject } from '@angular/core';
import { ZikrService } from './services/zikr.service';
import { Zikr } from './interface/interface';
import { SaIconComponent } from 'sa-icon';
@Component({
  selector: 'app-daily',
  standalone: true,
  imports: [SaIconComponent],
  templateUrl: './daily.component.html',
  styleUrl: './daily.component.scss',
})
export class DailyComponent {
  services = inject(ZikrService);
  azkar: Zikr[] = this.services.azkar;
  step: number = +(localStorage.getItem('step') || 1);
  counter: number = +(localStorage.getItem('counter') || 1);
  increas() {
    if (this.azkar[this.step - 1].counter) {
      if (this.counter == this.azkar[this.step - 1].counter) {
        ++this.step;
        this.counter = 1;
      } else {
        ++this.counter;
      }
    } else {
      ++this.step;
    }
    
    if (this.step == this.azkar.length) {
      alert('بارك الله فيك ورزقك  السداد');
      this.step = 1;
    }
    this.save();
  }
  decrease() {
    --this.step;
    this.counter = 1;
    this.save();
  }
  save() {
    localStorage.setItem('counter', `${this.counter}`);
    localStorage.setItem('step', `${this.step}`);
  }
}
