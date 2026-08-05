import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-vision-presence',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './vision-presence.component.html',
  styleUrl: './vision-presence.component.scss',
})
export class VisionPresenceComponent {
  missionPoints = [
    'Responsible sourcing',
    'Modern processing',
    'Hygienic manufacturing',
    'Consistent quality standards',
    'Strong customer relationships',
  ];

  states = ['Madhya Pradesh', 'Gujarat', 'Maharashtra', 'Rajasthan', 'Expanding'];
}
