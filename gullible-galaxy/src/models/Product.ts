import type { IProduct } from './ProductInterface';

export class Product {
  public id: number;
  public title: string;
  public slug: string;
  public price: number;
  public category: string;
  public image: string;
  public description: string;
  public inStock: boolean;

  constructor(data: IProduct) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.price = data.price;
    this.category = data.category;
    this.image = data.image;
    this.description = data.description;
    this.inStock = data.inStock;
  }

  getFormattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }

  isInStock(): boolean {
    return this.inStock;
  }
  
  getStockStatus(): string {
  return this.inStock ? "Currently in Stock" : "Temporarily Out of Stock";
  }
}