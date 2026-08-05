import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

interface Product {
  name: string;
  tag: string;
  description: string;
  packs?: string[];
  uses?: string[];
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
    },
    {
      name: 'Multigrain Flour',
      tag: 'Wholesome',
      description:
        'A nutritious blend of selected grains designed for people who want more variety and nutrition in their daily diet.',
      uses: ['Healthy Rotis', 'Parathas', 'Traditional Recipes', 'Daily Family Meals'],
    },
    {
      name: 'Bajra Flour',
      tag: 'Traditional',
      description:
        'Made from quality pearl millet, a traditional and nutritious choice for Indian households — perfect for Bajra Rotis.',
    },
    {
      name: 'Jowar Flour',
      tag: 'Traditional',
      description:
        'Quality Jowar Flour for delicious and nutritious traditional recipes, ideal for Jowar Bhakri and rotis.',
    },
    {
      name: 'Corn Flour / Makka Flour',
      tag: 'Versatile',
      description:
        'Quality corn-based flour for traditional and modern recipes — perfect for households, restaurants and food-service businesses.',
    },
    {
      name: 'Wheat Bran',
      tag: 'Bulk',
      description:
        'Quality wheat bran suitable for food and other applications, available for bulk requirements.',
    },
  ];
}
