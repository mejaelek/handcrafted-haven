# Handcrafted Haven

A Next.js marketplace for handcrafted artisan products — built for the WDD430 group project.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: Vercel

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build

# 4. Lint
npm run lint
```

## Project Structure
```
src/
  app/           # Next.js App Router pages
    page.tsx     # Landing page
    products/    # Product listing & detail pages
    sellers/     # Artisan profiles
    about/       # About page
    auth/        # Login & registration
  components/
    layout/      # Navbar, Footer
    ui/          # ProductCard, SellerCard
  data/          # Mock data (replace with DB)
  types/         # TypeScript interfaces
```

## User Stories
- As a shopper, I can browse all products filtered by category and price
- As a shopper, I can view product details and read/leave reviews
- As a shopper, I can view artisan profiles and their products
- As an artisan, I can register and set up a seller profile
- As an artisan, I can list products with images, descriptions, and pricing
- As any user, I can leave star ratings and written reviews on products

## Team Meeting Notes
**Challenge**: Deciding on a database (PostgreSQL vs MongoDB — went with PostgreSQL for relational integrity)
**Success**: Completed full file structure and landing page in first sprint
**Insight**: Starting with mock data made it much faster to build UI before the DB was ready

## Deployment
Connect GitHub repo to Vercel — auto-deploys on push to `main`.
