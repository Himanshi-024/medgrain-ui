import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  label: string;
  target: number;
  suffix: string;
  value: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  slides = [
    'assets/images/packaging.jpeg',
    'https://images.unsplash.com/photo-1737091971375-3fff54afa732?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1601387448308-66ae6aa1f1f7?q=80&w=1800&auto=format&fit=crop',
  ];
  activeSlide = 0;
  private slideTimer?: ReturnType<typeof setInterval>;

  stats: Stat[] = [
    { label: 'States Served', target: 4, suffix: '', value: 0 },
    { label: 'Flour Varieties', target: 7, suffix: '', value: 0 },
    { label: 'Max Pack Size', target: 50, suffix: 'kg', value: 0 },
  ];
  private countTimer?: ReturnType<typeof setInterval>;
  packSizes = ['5 kg', '10 kg', '26 kg', '30 kg', '50 kg'];

  ngOnInit() {
    this.slideTimer = setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }, 5500);

    this.animateStats();
  }

  ngOnDestroy() {
    if (this.slideTimer) clearInterval(this.slideTimer);
    if (this.countTimer) clearInterval(this.countTimer);
  }

  private animateStats() {
    const durationMs = 1400;
    const stepMs = 30;
    const steps = durationMs / stepMs;
    let step = 0;

    this.countTimer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      this.stats.forEach((s) => (s.value = Math.round(s.target * progress)));
      if (progress >= 1 && this.countTimer) clearInterval(this.countTimer);
    }, stepMs);
  }
}
