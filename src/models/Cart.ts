import type { IProduct } from './ProductInterface';

export class Cart {
  private static instance: Cart;
  private items: IProduct[] = [];

  private constructor() {}

  public static getInstance(): Cart {
    if (!Cart.instance) {
      Cart.instance = new Cart();
    }
    return Cart.instance;
  }

  addItem(product: IProduct): void {
    this.items.push(product);
    this.saveToStorage();
  }

  getItems(): IProduct[] {
    return this.items;
  }

  private saveToStorage(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('shopping_cart', JSON.stringify(this.items));
    }
  }

  loadFromStorage(): void {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('shopping_cart');
      if (saved) {
        this.items = JSON.parse(saved);
      }
    }
  }
}