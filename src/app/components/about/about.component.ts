// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RevealDirective } from '../../shared/reveal.directive';

// interface Leader {
//   name: string;
//   role: string;
//   bio: string;
// }

// @Component({
//   selector: 'app-about',
//   standalone: true,
//   imports: [CommonModule, RevealDirective],
//   templateUrl: './about.component.html',
//   styleUrl: './about.component.scss',
// })
// export class AboutComponent {
//   owners = [
//     'Mr. Deepak Sahu — Co-Founder & Director',
//     'Mr. Ankit Mishra — Co-Founder & Director',
//     'Mr. Devendra Kumar Shaktawat — Co-Founder & Director',
//   ];

//   leaders: Leader[] = [
//     {
//       name: 'Deepak Sahu',
//       role: 'Executive Director – Business Operations, Quality & Strategy',
//       bio: 'Provides strategic leadership for business operations, quality management, business development and organizational growth, with a vision to establish Medgrain as a trusted food brand.',
//     },
//     {
//       name: 'Ankit Mishra',
//       role: 'Head – Legal, Purchase, Marketing & Documentation',
//       bio: 'Leads legal compliance, procurement, contracts and documentation, ensuring efficient business operations and regulatory compliance.',
//     },
//     {
//       name: 'Devendra Kumar Shaktawat',
//       role: 'Head – Plant Operations',
//       bio: 'Responsible for overseeing day-to-day plant operations, production planning, process efficiency, equipment management and ensuring consistent product quality through smooth manufacturing operations.',
//     },
//   ];
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

interface Leader {
  name: string;
  role: string;
  bio: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  owners = [
    'Mr. Deepak Sahu — Co-Founder & Director',
    'Mr. Ankit Kumar Mishra — Co-Founder & Director',
    'Mr. Devendra Singh Shaktawat — Co-Founder & Director',
  ];

  leaders: Leader[] = [
    {
      name: 'Deepak Sahu',
      role: 'Executive Director – Business Operations, Quality & Strategy',
      bio: 'Provides strategic leadership for business operations, quality management, business development and organizational growth, with a vision to establish Medgrain as a trusted food brand.',
    },
    {
      name: 'Ankit Kumar Mishra',
      role: 'Head – Legal, Purchase, Marketing & Documentation',
      bio: 'Leads legal compliance, procurement, contracts and documentation, ensuring efficient business operations and regulatory compliance.',
    },
    {
      name: 'Devendra Singh Shaktawat',
      role: 'Head – Plant Operations',
      bio: 'Responsible for overseeing day-to-day plant operations, production planning, process efficiency, equipment management and ensuring consistent product quality through smooth manufacturing operations.',
    },
  ];
}