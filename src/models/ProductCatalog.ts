import { Product } from './Product';
import type { IProduct } from './ProductInterface';

export class ProductCatalog {
  private products: Product[];

  constructor(jsonData: IProduct[]) {
    this.products = jsonData.map(item => new Product(item));
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(p => p.slug === slug);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }
}