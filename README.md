# 💄 BeautyHub - Premium Beauty Products E-Commerce Website

A modern, fully responsive e-commerce website for premium beauty products built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## 🌟 Features

### ✨ Core Features
- **Modern Hero Section** - Eye-catching gradient design
- **Product Catalog** - 12+ premium beauty products
- **Advanced Search** - Real-time product search functionality
- **Category Filtering** - Filter by Skincare, Makeup, Hair Care
- **Smart Sorting** - Sort by Featured, Price, Rating
- **Product Cards** - Beautiful cards with ratings, badges, and discounts
- **Responsive Design** - Works seamlessly on all devices
- **Shopping Cart** - Add to cart with visual feedback
- **Wishlist** - Save favorite products
- **Newsletter Signup** - Email subscription CTA
- **Professional Footer** - Complete company information

### 🎨 Design
- **Modern UI** - Pink and purple luxury theme
- **Smooth Animations** - Hover effects and transitions
- **Accessibility** - Semantic HTML and ARIA labels
- **Mobile-First** - Optimized for all screen sizes

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: npm/yarn

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (optional)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Bhawna137/beauty-products-website.git
cd beauty-products-website
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run Development Server
```bash
npm run dev
# or
yarn dev
```

### 4. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
beauty-products-website/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── ...
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   ├── ProductCard.tsx      # Individual product card
│   └── ...
├── data/
│   └── products.ts          # Product data and interfaces
├── public/                  # Static assets
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.js           # Next.js configuration
└── README.md                # This file
```

## 🎯 Key Components

### Header Component
- Navigation menu
- Search functionality
- Cart and wishlist icons
- Responsive mobile menu

### ProductCard Component
- Product image with hover zoom
- Category badge
- Star rating with review count
- Price display with discount percentage
- Add to cart button
- Wishlist toggle

### HomePage
- Hero section with gradient background
- Search bar with real-time filtering
- Category filter buttons
- Sort dropdown
- Product grid display
- CTA section for newsletter signup

### Footer Component
- Company information
- Quick links
- Customer service links
- Contact information
- Social media links
- Copyright info

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Customize Products
Edit `data/products.ts` to add or modify products:
```typescript
{
  id: 1,
  name: 'Product Name',
  category: 'Skincare',
  price: 49.99,
  originalPrice: 69.99,
  description: 'Product description',
  rating: 5,
  reviews: 234,
  image: 'image-url',
  badge: 'Best Seller',
}
```

## 🚀 Building for Production

```bash
npm run build
npm run start
```

The application will be optimized and ready for production.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#E91E63',      // Pink
  secondary: '#9C27B0',    // Purple
  accent: '#FF69B4',       // Light Pink
}
```

### Fonts
Customize in `app/globals.css`

### Theme
Modify gradient backgrounds and color schemes throughout the components

## 🔮 Future Enhancements

- [ ] Payment Integration (Stripe/PayPal)
- [ ] User Authentication
- [ ] Database Integration (MongoDB/Firebase)
- [ ] Shopping Cart Persistence
- [ ] User Reviews & Ratings
- [ ] Product Details Page
- [ ] Admin Dashboard
- [ ] Order Management
- [ ] Email Notifications
- [ ] Analytics Integration

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Your site will be live! 🎉

### Deploy to Other Platforms
- **Netlify**: Supports Next.js out of the box
- **AWS Amplify**: Full-featured hosting
- **DigitalOcean**: Affordable VPS option

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 💬 Support

Have questions? Open an issue on GitHub or contact support@beautyhub.com

## 🎉 Credits

Created with ❤️ by BeautyHub Team

---

**Happy Coding!** 🚀✨
