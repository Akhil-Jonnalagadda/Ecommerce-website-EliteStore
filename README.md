# Welcome to your Lovable project

## Project info

**URL**: https://vendoria-spark.vercel.app/


<img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/0c703717-a357-4c24-a45e-0459b3bf3ca6" />
<img width="1916" height="914" alt="image" src="https://github.com/user-attachments/assets/8d2c431f-d46e-40c8-bc8a-b5d2b7c33d80" />
<img width="1918" height="908" alt="image" src="https://github.com/user-attachments/assets/8dbe827f-85e4-423c-9638-4175db808958" />
<img width="1919" height="922" alt="image" src="https://github.com/user-attachments/assets/c6582ad7-2443-4a84-94b8-f04d4395e687" />

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:


# EliteStore Ecommerce Website

EliteStore is a modern, full-featured ecommerce web application built with React, TypeScript, Vite, and Tailwind CSS. It provides a seamless shopping experience with secure Stripe payments, user account management, and a variety of informational and utility pages.

## Features
- Product catalog and categories
- Shopping cart and checkout
- Stripe payment integration
- Order tracking
- User profile and order history
- Quick links: About Us, Contact, Shipping Info, Returns & Exchanges, FAQ
- Careers, Blog, Gift Cards, Store Locator
- Responsive design for desktop and mobile

## Tech Stack
- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express, Stripe API
- **State Management:** React Context
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **Payments:** Stripe

## Implementation Overview
- The frontend is built with React and TypeScript, using Vite for fast development and Tailwind CSS for styling.
- Stripe integration is handled via the Stripe API and React Stripe.js for secure payments.
- The backend (in `/server`) uses Express and Stripe to create payment intents and handle payment processing.
- All pages are routed using React Router, including utility pages like Track Order, Careers, Blog, Gift Cards, and Store Locator.
- Context API is used for cart state management.

## Getting Started

### Prerequisites
- Node.js and npm installed
- Stripe account for API keys

### Installation
1. Clone the repository:
	```sh
	git clone https://github.com/Akhil-Jonnalagadda/Ecommerce-website-EliteStore.git
	cd Ecommerce-website-EliteStore
	```
2. Install frontend dependencies:
	```sh
	npm install
	```
3. Install backend dependencies:
	```sh
	cd server
	npm install
	cd ..
	```
4. Add your Stripe secret key to `server/.env`:
	```env
	STRIPE_SECRET_KEY=your_stripe_secret_key
	PORT=4242
	```

### Running the Application
1. Start the backend server:
	```sh
	cd server
	node index.cjs
	```
2. Start the frontend development server:
	```sh
	npm run dev
	```
3. Open your browser at [http://localhost:8080](http://localhost:8080)

## Usage
- Browse products, add to cart, and checkout securely with Stripe.
- Track your order using the Track Order page.
- Explore informational pages via the footer and header navigation.
- Apply for jobs, read blog posts, purchase gift cards, and locate stores.

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

## License
This project is licensed under the MIT License.

---

For any questions or support, contact Akhil Jonnalagadda.
