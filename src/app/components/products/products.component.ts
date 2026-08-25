// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RevealDirective } from '../../shared/reveal.directive';

// interface Product {
//   name: string;
//   tag: string;
//   description: string;
//   packs?: string[];
//   uses?: string[];
// }

// @Component({
//   selector: 'app-products',
//   standalone: true,
//   imports: [CommonModule, RevealDirective],
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.scss',
// })
// export class ProductsComponent {
//   products: Product[] = [
//     {
//       name: 'Wheat Flour / Atta',
//       tag: 'Bestseller',
//       description:
//         'Made from carefully selected quality wheat to deliver soft, nutritious and delicious rotis every day.',
//       packs: ['5 kg', '10 kg', '26 kg', '30 kg', '50 kg'],
//     },
//     {
//       name: 'Multigrain Flour',
//       tag: 'Wholesome',
//       description:
//         'A nutritious blend of selected grains designed for people who want more variety and nutrition in their daily diet.',
//       uses: ['Healthy Rotis', 'Parathas', 'Traditional Recipes', 'Daily Family Meals'],
//     },
//     {
//       name: 'Bajra Flour',
//       tag: 'Traditional',
//       description:
//         'Made from quality pearl millet, a traditional and nutritious choice for Indian households — perfect for Bajra Rotis.',
//     },
//     {
//       name: 'Jowar Flour',
//       tag: 'Traditional',
//       description:
//         'Quality Jowar Flour for delicious and nutritious traditional recipes, ideal for Jowar Bhakri and rotis.',
//     },
//     {
//       name: 'Corn Flour / Makka Flour',
//       tag: 'Versatile',
//       description:
//         'Quality corn-based flour for traditional and modern recipes — perfect for households, restaurants and food-service businesses.',
//     },
//     {
//       name: 'Wheat Bran',
//       tag: 'Bulk',
//       description:
//         'Quality wheat bran suitable for food and other applications, available for bulk requirements.',
//     },
//   ];
// }


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RevealDirective } from '../../shared/reveal.directive';

// interface Product {
//   name: string;
//   tag: string;
//   description: string;
//   packs?: string[];
//   uses?: string[];
//   image?: string;
// }

// @Component({
//   selector: 'app-products',
//   standalone: true,
//   imports: [CommonModule, RevealDirective],
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.scss',
// })
// export class ProductsComponent {
//   products: Product[] = [
//     {
//       name: 'Wheat Flour / Atta',
//       tag: 'Bestseller',
//       description:
//         'Made from carefully selected quality wheat to deliver soft, nutritious and delicious rotis every day.',
//       packs: ['5 kg', '10 kg', '26 kg', '30 kg', '50 kg'],
//       image: 'assets/images/packaging-mockup.jpeg',
//     },
//     {
//       name: 'Multigrain Flour',
//       tag: 'Wholesome',
//       description:
//         'A nutritious blend of selected grains designed for people who want more variety and nutrition in their daily diet.',
//       uses: ['Healthy Rotis', 'Parathas', 'Traditional Recipes', 'Daily Family Meals'],
//     },
//     {
//       name: 'Bajra Flour',
//       tag: 'Traditional',
//       description:
//         'Made from quality pearl millet, a traditional and nutritious choice for Indian households — perfect for Bajra Rotis.',
//     },
//     {
//       name: 'Jowar Flour',
//       tag: 'Traditional',
//       description:
//         'Quality Jowar Flour for delicious and nutritious traditional recipes, ideal for Jowar Bhakri and rotis.',
//     },
//     {
//       name: 'Corn Flour / Makka Flour',
//       tag: 'Versatile',
//       description:
//         'Quality corn-based flour for traditional and modern recipes — perfect for households, restaurants and food-service businesses.',
//     },
//     {
//       name: 'Wheat Bran',
//       tag: 'Bulk',
//       description:
//         'Quality wheat bran suitable for food and other applications, available for bulk requirements.',
//     },
//   ];
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

interface Product {
  name: string;
  tag: string;
  description: string;
  packs?: string[];
  uses?: string[];
  image?: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Wheat Flour / Atta',
      tag: 'Bestseller',
      description:
        'Made from carefully selected quality wheat to deliver soft, nutritious and delicious rotis every day.',
      packs: ['5 kg', '10 kg', '26 kg', '30 kg', '50 kg'],
      uses: ['Rotis & Chapatis', 'Parathas', 'Daily Family Meals'],
      image: 'assets/images/packaging.jpeg',
    },
    {
      name: 'Multigrain Flour',
      tag: 'Wholesome',
      description:
        'A nutritious blend of selected grains designed for people who want more variety and nutrition in their daily diet.',
      packs: ['5 kg', '10 kg', '26 kg'],
      uses: ['Healthy Rotis', 'Parathas', 'Daily Family Meals'],
      image: 'assets/images/multigrainFlour.jpeg',
    },
    {
      name: 'Bajra Flour',
      tag: 'Traditional',
      description:
        'Made from quality pearl millet, a traditional and nutritious choice for Indian households — perfect for Bajra Rotis.',
      packs: ['5 kg', '10 kg', '26 kg'],
      uses: ['Bajra Roti', 'Khichdi', 'Traditional Recipes'],
      image: 'assets/images/bajraFlour.jpeg',
    },
    {
      name: 'Jowar Flour',
      tag: 'Traditional',
      description:
        'Quality Jowar Flour for delicious and nutritious traditional recipes, ideal for Jowar Bhakri and rotis.',
      packs: ['5 kg', '10 kg', '26 kg'],
      uses: ['Jowar Bhakri', 'Rotis', 'Traditional Recipes'],
      image: 'assets/images/jowarFlour.jpeg',
    },
    {
      name: 'Maida',
      tag: 'Refined',
      description:
        'Finely milled refined wheat flour, ideal for bakeries, sweet shops and food businesses that need consistent, smooth texture.',
      packs: ['5 kg', '10 kg', '26 kg', '50 kg'],
      uses: ['Bakery Items', 'Bread & Buns', 'Sweets & Snacks'],
      image: 'assets/images/maida.jpeg',
    },
    {
      name: 'Corn Flour / Makka Flour',
      tag: 'Versatile',
      description:
        'Quality corn-based flour for traditional and modern recipes — perfect for households, restaurants and food-service businesses.',
      packs: ['5 kg', '10 kg', '26 kg'],
      uses: ['Makki Roti', 'Thickening Gravies', 'Snacks & Recipes'],
      image: 'assets/images/cornFlour.jpeg',
    },
    {
      name: 'Wheat Bran',
      tag: 'Bulk',
      description:
        'Quality wheat bran, rich in fiber, suitable for food applications, animal feed and other bulk business requirements.',
      packs: ['30 kg', '50 kg'],
      uses: ['Fiber-Rich Recipes', 'Animal Feed', 'Bulk Food Processing'],
      image: 'assets/images/wheatBran.jpeg',
    },
    {
      name: 'Spices',
      tag: 'Everyday Essentials',
      description:
        'A range of quality, hygienically processed spices to bring authentic flavour and aroma to everyday Indian cooking.',
      packs: ['100 g', '500 g', '1 kg'],
      uses: ['Daily Cooking', 'Curries & Gravies', 'Tempering & Masalas'],
      image: 'assets/images/spices.jpeg',
    },
    {
      name: 'Makka Papad',
      tag: 'Snack',
      description:
        'Crispy corn-based papad made with quality makka flour — a light, flavourful snack that pairs well with any Indian meal.',
      packs: ['200 g', '500 g'],
      uses: ['Side with Meals', 'Roasted or Fried Snack', 'Evening Snack'],
      image: 'assets/images/makkaPapad.jpeg',
    },
  ];
}