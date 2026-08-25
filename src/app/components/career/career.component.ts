// // // import { Component } from '@angular/core';

// // // @Component({
// // //   selector: 'app-career.component',
// // //   standalone: true,
// // //   imports: [],
// // //   templateUrl: './career.component.component.html',
// // //   styleUrl: './career.component.component.css'
// // // })
// // // export class CareerComponentComponent {

// // // }
// // import { Component } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { RevealDirective } from '../../shared/reveal.directive';

// // interface JobPosting {
// //   title: string;
// //   location: string;
// //   type: string;
// // }

// // interface GoogleReview {
// //   name: string;
// //   rating: number;
// //   text: string;
// // }

// // @Component({
// //   selector: 'app-career',
// //   standalone: true,
// //   imports: [CommonModule, RevealDirective],
// //   templateUrl: './career.component.html',
// //   styleUrl: './career.component.scss',
// // })
// // export class CareerComponent {
// //   // TODO: replace with the company's real WhatsApp Business number (with country code, no + or spaces)
// //   whatsappNumber = '918839038419';

// //   // TODO: replace with the real Google review / Google Business Profile links
// //   googleReviewLink = 'https://g.page/r/REPLACE_WITH_PLACE_ID/review';
// //   googleAllReviewsLink = 'https://g.page/r/REPLACE_WITH_PLACE_ID';

// //   averageRating = 4.8;
// //   totalReviews = 120;

// //   jobs: JobPosting[] = [
// //     { title: 'Production Supervisor', location: 'Betul, Madhya Pradesh', type: 'Full-time' },
// //     { title: 'Sales Executive – Distributor Network', location: 'Indore, Madhya Pradesh', type: 'Full-time' },
// //     { title: 'Quality Control Officer', location: 'Betul, Madhya Pradesh', type: 'Full-time' },
// //     { title: 'Warehouse & Logistics Executive', location: 'Indore, Madhya Pradesh', type: 'Full-time' },
// //   ];

// //   reviews: GoogleReview[] = [
// //     { name: 'Rohit Sharma', rating: 5, text: 'Atta ki quality bahut achhi hai, ghar jaisa taste milta hai.' },
// //     { name: 'Priya Verma', rating: 5, text: 'Consistent quality and quick delivery every single time.' },
// //     { name: 'Anil Patidar', rating: 4, text: 'Bulk order ke liye best supplier, packaging bhi solid hai.' },
// //   ];

// //   get ratingStars(): number[] {
// //     return [1, 2, 3, 4, 5];
// //   }

// //   jobApplyLink(job: JobPosting): string {
// //     const msg = `Hi Medgrain, I would like to apply for the ${job.title} position (${job.location}). Please share more details.`;
// //     return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
// //   }

// //   get generalWhatsappLink(): string {
// //     const msg = 'Hi Medgrain, I am interested in your quality Atta products. Please share more details.';
// //     return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
// //   }
// // }


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RevealDirective } from '../../shared/reveal.directive';

// interface JobPosting {
//   title: string;
//   location: string;
//   type: string;
// }

// interface GoogleReview {
//   name: string;
//   rating: number;
//   text: string;
// }

// @Component({
//   selector: 'app-career',
//   standalone: true,
//   imports: [CommonModule, RevealDirective],
//   templateUrl: './career.component.html',
//   styleUrl: './career.component.scss',
// })
// export class CareerComponent {
//   whatsappNumber = '918839038419';

//   // TODO: replace with the real Google review / Google Business Profile links once available
//   googleReviewLink = 'https://g.page/r/REPLACE_WITH_PLACE_ID/review';
//   googleAllReviewsLink = 'https://g.page/r/REPLACE_WITH_PLACE_ID';

//   averageRating = 4.8;
//   totalReviews = 120;

//   jobs: JobPosting[] = [
//     { title: 'Production Supervisor', location: 'Betul, Madhya Pradesh', type: 'Full-time' },
//     { title: 'Sales Executive – Distributor Network', location: 'Indore, Madhya Pradesh', type: 'Full-time' },
//     { title: 'Quality Control Officer', location: 'Betul, Madhya Pradesh', type: 'Full-time' },
//     { title: 'Warehouse & Logistics Executive', location: 'Indore, Madhya Pradesh', type: 'Full-time' },
//   ];

//   reviews: GoogleReview[] = [
//     { name: 'Rohit Sharma', rating: 5, text: 'Atta ki quality bahut achhi hai, ghar jaisa taste milta hai.' },
//     { name: 'Priya Verma', rating: 5, text: 'Consistent quality and quick delivery every single time.' },
//     { name: 'Anil Patidar', rating: 4, text: 'Bulk order ke liye best supplier, packaging bhi solid hai.' },
//   ];

//   get ratingStars(): number[] {
//     return [1, 2, 3, 4, 5];
//   }

//   jobApplyLink(job: JobPosting): string {
//     const msg = `Hi Medgrain, I would like to apply for the ${job.title} position (${job.location}). Please share more details.`;
//     return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
//   }

//   get generalWhatsappLink(): string {
//     const msg = 'Hi Medgrain, I am interested in your quality Atta products. Please share more details.';
//     return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
//   }
// }


// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-career.component',
// //   standalone: true,
// //   imports: [],
// //   templateUrl: './career.component.component.html',
// //   styleUrl: './career.component.component.css'
// // })
// // export class CareerComponentComponent {

// // }
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RevealDirective } from '../../shared/reveal.directive';

// interface JobPosting {
//   title: string;
//   location: string;
//   type: string;
// }

// interface GoogleReview {
//   name: string;
//   rating: number;
//   text: string;
// }

// @Component({
//   selector: 'app-career',
//   standalone: true,
//   imports: [CommonModule, RevealDirective],
//   templateUrl: './career.component.html',
//   styleUrl: './career.component.scss',
// })
// export class CareerComponent {
//   // TODO: replace with the company's real WhatsApp Business number (with country code, no + or spaces)
//   whatsappNumber = '918839038419';

//   // TODO: replace with the real Google review / Google Business Profile links
//   googleReviewLink = 'https://g.page/r/REPLACE_WITH_PLACE_ID/review';
//   googleAllReviewsLink = 'https://g.page/r/REPLACE_WITH_PLACE_ID';

//   averageRating = 4.8;
//   totalReviews = 120;

//   jobs: JobPosting[] = [
//     { title: 'Production Supervisor', location: 'Betul, Madhya Pradesh', type: 'Full-time' },
//     { title: 'Sales Executive – Distributor Network', location: 'Indore, Madhya Pradesh', type: 'Full-time' },
//     { title: 'Quality Control Officer', location: 'Betul, Madhya Pradesh', type: 'Full-time' },
//     { title: 'Warehouse & Logistics Executive', location: 'Indore, Madhya Pradesh', type: 'Full-time' },
//   ];

//   reviews: GoogleReview[] = [
//     { name: 'Rohit Sharma', rating: 5, text: 'Atta ki quality bahut achhi hai, ghar jaisa taste milta hai.' },
//     { name: 'Priya Verma', rating: 5, text: 'Consistent quality and quick delivery every single time.' },
//     { name: 'Anil Patidar', rating: 4, text: 'Bulk order ke liye best supplier, packaging bhi solid hai.' },
//   ];

//   get ratingStars(): number[] {
//     return [1, 2, 3, 4, 5];
//   }

//   jobApplyLink(job: JobPosting): string {
//     const msg = `Hi Medgrain, I would like to apply for the ${job.title} position (${job.location}). Please share more details.`;
//     return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
//   }

//   get generalWhatsappLink(): string {
//     const msg = 'Hi Medgrain, I am interested in your quality Atta products. Please share more details.';
//     return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

interface JobPosting {
  title: string;
  location: string;
  type: string;
}

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
  whatsappNumber = '918839038419';

  jobs: JobPosting[] = [
    { title: 'Production Supervisor', location: 'Betul, Madhya Pradesh', type: 'Full-time' },
    { title: 'Sales Executive – Distributor Network', location: 'Indore, Madhya Pradesh', type: 'Full-time' },
    { title: 'Quality Control Officer', location: 'Betul, Madhya Pradesh', type: 'Full-time' },
    { title: 'Warehouse & Logistics Executive', location: 'Indore, Madhya Pradesh', type: 'Full-time' },
  ];

  jobApplyLink(job: JobPosting): string {
    const msg = `Hi Medgrain, I would like to apply for the ${job.title} position (${job.location}). Please share more details.`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }

  get generalWhatsappLink(): string {
    const msg = 'Hi Medgrain, I am interested in your quality Atta products. Please share more details.';
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }
}