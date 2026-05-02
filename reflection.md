# Final Project Reflection

**Live Hosted URL:** [https://final-project-astro.netlify.app/](https://final-project-astro.netlify.app/)

## 1. How I Made Product Pages
I used **Dynamic Routes** with `[slug].astro`. This way, I don't have to make a separate file for every single product.

## 2. Why I Chose This Way
My project uses a `products.json` file. It’s much easier to let Astro automatically create pages from that data. If I add more products to the JSON file later, the pages will just appear by themselves.

## 3. What I Liked About This Method
*   **Easy to manage:** I only have to look at one file (`[slug].astro`) to change the design of all product pages.
*   **Fast speed:** Astro makes these pages very fast for users because they are pre-rendered.
*   **Learning TypeScript:** Using TypeScript classes helped me organize my data much better than just using basic JavaScript.

## 4. Challenges and Regrets (The Hard Part)
*   **Folder Structure Issues:** I had a hard time managing folders because I accidentally created an Astro project inside another Astro folder. This made the directory structure very messy. Moving everything back to the root folder broke all my "import" paths, and fixing the dots (`../`) and TypeScript errors was really tricky.
*   **More Features:** I really wanted to add a "Shopping Cart" or a "Search" bar, but I didn't have enough time to finish them perfectly. I wish I could have added more interactive features.

## 5. What I Learned
I learned a lot about **OOP (Object-Oriented Programming)** by making a `ProductCatalog` class. It was hard at first, but now I understand how to keep my code clean and professional.