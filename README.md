# Matoshree Agro Agencies

A production-ready React website for a local agro shop with e-commerce catalog and WhatsApp ordering system.

## Features

- 🌱 **Farmer-Friendly Design**: Clean, professional UI optimized for local farmers
- 📱 **Mobile-First Responsive**: Works perfectly on all devices
- 🛒 **Product Catalog**: Browse fertilizers, pesticides, and agricultural inputs
- 📞 **WhatsApp Integration**: Direct ordering via WhatsApp
- 🌍 **Multi-Language**: Marathi + English mixed content support
- 🎨 **Modern UI**: Built with Tailwind CSS and React
- ⚡ **Fast Performance**: Vite-based build system
- 🚀 **Netlify Ready**: Optimized for easy deployment

## Tech Stack

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Vite** - Build tool and dev server
- **Netlify** - Deployment platform

## Project Structure

```
src/
 ├─ assets/           # Images and icons
 ├─ components/        # Reusable React components
 │   ├─ Navbar.jsx
 │   ├─ Footer.jsx
 │   ├─ ProductCard.jsx
 │   ├─ TestimonialCard.jsx
 │   ├─ WhatsAppButton.jsx
 │   └─ SectionTitle.jsx
 ├─ pages/            # Page components
 │   ├─ Home.jsx
 │   ├─ Products.jsx
 │   ├─ ProductDetails.jsx
 │   ├─ About.jsx
 │   └─ Contact.jsx
 ├─ data/             # Static data
 │   ├─ products.js
 │   └─ testimonials.js
 ├─ routes/           # React Router configuration
 │   └─ AppRoutes.jsx
 ├─ App.jsx           # Main App component
 ├─ main.jsx          # App entry point
 └─ index.css         # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd matoshree-agro-agencies
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Netlify Deployment

1. Push your code to a Git repository (GitHub/GitLab/Bitbucket)

2. Connect your repository to Netlify:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select your repository

3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

4. Deploy! Netlify will automatically build and deploy your site.

The `netlify.toml` file is already configured for SPA routing, so all routes will work correctly.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider.

## Customization

### Adding Products

Edit `src/data/products.js` to add or modify products:

```javascript
{
  id: 1,
  name: "Product Name",
  category: "fertilizers",
  description: "Product description",
  marathiDescription: "उत्पादनाचे वर्णन",
  price: 999,
  unit: "50 kg",
  bestSeller: true,
  featured: true,
  // ... other properties
}
```

### Adding Testimonials

Edit `src/data/testimonials.js` to add customer testimonials:

```javascript
{
  id: 1,
  name: "ग्राहकाचे नाव",
  englishName: "Customer Name",
  location: "गाव, जिल्हा",
  englishLocation: "Village, District",
  rating: 5,
  feedback: "ग्राहकाचे मत",
  englishFeedback: "Customer feedback"
}
```

### Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      'agro-green': '#2d5016',    // Primary green
      'agro-light': '#8bc34a',     // Light green
      'agro-lighter': '#c5e1a5',   // Lightest green
    }
  }
}
```

## Features Breakdown

### Home Page
- Hero section with call-to-action buttons
- Featured products showcase
- Customer testimonials
- Why choose us section
- Highlights panel

### Products Page
- Grid layout with product cards
- Category filtering
- Search functionality
- Responsive design

### Product Details Page
- Full product information
- Usage guidance
- Supported crops
- WhatsApp ordering

### About Page
- Company information
- Services overview
- Contact information
- Quick links

### Contact Page
- Multiple contact methods
- Business hours
- Location map
- Quick contact options

## WhatsApp Integration

The site uses WhatsApp's click-to-chat feature:
- Base URL: `https://wa.me/919130061948`
- Pre-filled messages for easy ordering
- Floating WhatsApp button on all pages

## SEO Optimization

- Semantic HTML5 structure
- Meta tags for search engines
- Proper heading hierarchy
- Mobile-friendly design
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Matoshree Agro Agencies.

## Support

For support, please contact:
- **Phone/WhatsApp**: +91 9130061948
- **Address**: Shop No 1, Matoshree Agro Agencies, Mandve, Giravi, Solapur, Maharashtra 413111

---

Built with ❤️ for farmers in Maharashtra
