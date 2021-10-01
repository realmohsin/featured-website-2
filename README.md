# React SSG with Headless CMS 

A modern static site generator (SSG) application built with React and Gatsby.js, integrated with a headless CMS architecture using Contentful. This template demonstrates best practices for building performant, SEO-optimized websites with dynamic content management capabilities and professional UI components.

The application features a complete content management workflow with Material-UI theming, responsive design patterns, comprehensive testing coverage, and optimized image handling. It showcases advanced Gatsby features including GraphQL data layer, static generation, and seamless CMS integration for scalable web applications.

## Features

* **Modern Gatsby Architecture**: Static site generation with React for optimal performance and SEO
* **Contentful CMS Integration**: Dynamic content management for easy updates without code changes
* **Responsive Design**: Mobile-first approach with Material-UI components and custom breakpoints
* **Professional Sections**: Hero, About, Services, Team, Reviews, Media, Instagram, and Contact sections
* **Contact Forms**: Interactive contact and inquiry forms with validation
* **Career Portal**: Job listings and application functionality for potential hires
* **Image Optimization**: Gatsby Image plugin for optimized image loading and performance
* **SEO Optimized**: React Helmet integration for meta tags and search engine optimization
* **Comprehensive Testing**: Jest and React Testing Library setup with extensive test coverage
* **Material-UI Theming**: Custom theme with professional color scheme and typography

## Development Instructions

### Environment Setup

Clone the repository:
```bash
git clone <repository-url>
cd ssg-template-1
```

Install dependencies:
```bash
npm install
```

Set up environment variables:
Create a `.env.development` file in the root directory with:
```
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
```

### Running the Application

Development mode:
```bash
npm run develop
# or
npm start
```
This runs the app in development mode with GraphQL playground. Open http://localhost:8000 to view it in the browser.

Production build:
```bash
npm run build
```
Builds the app for production to the `public/` folder.

Serve production build:
```bash
npm run serve
```
Serves the production build locally for testing.

Clean cache:
```bash
npm run clean
```
Cleans the Gatsby cache and public directories.

### Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Run tests with coverage:
```bash
npm run test:coverage
```

## Project Structure

```
ssg-template-1/
├── static/
│   └── favicon.ico                 # Site favicon
├── src/
│   ├── assets/
│   │   ├── images/                 # Static images and graphics
│   │   └── svgs/                   # SVG icons and graphics
│   ├── components/
│   │   ├── AboutPage/
│   │   │   ├── AboutHeroSection.jsx    # About page hero section
│   │   │   ├── AboutSection.jsx        # Main about content
│   │   │   ├── Review.jsx              # Individual review component
│   │   │   ├── ReviewsSection.jsx      # Client reviews section
│   │   │   └── TeamSection.jsx         # Team members display
│   │   ├── CareersPage/
│   │   │   ├── CareersIntro.jsx        # Careers page introduction
│   │   │   └── JobListings.jsx         # Job openings and applications
│   │   ├── ContactPage/
│   │   │   ├── ContactHero.jsx         # Contact page hero
│   │   │   └── ContactInfo.jsx         # Contact information and map
│   │   ├── Headers/
│   │   │   ├── LogoHeader.jsx          # Main logo header
│   │   │   └── StickyCTA.jsx           # Sticky call-to-action header
│   │   ├── HomePage/
│   │   │   ├── FeaturedOnSection.jsx   # Media mentions section
│   │   │   ├── FocusSection.jsx        # Practice areas focus
│   │   │   ├── HeroSection.jsx         # Homepage hero section
│   │   │   ├── InstagramSection.jsx    # Instagram feed integration
│   │   │   ├── IntroSection.jsx        # Firm introduction
│   │   │   └── MediaSection.jsx        # Media appearances
│   │   ├── Navigation/
│   │   │   ├── NavLinks/               # Navigation link components
│   │   │   ├── SideDrawer/             # Mobile navigation drawer
│   │   │   ├── MobileCtaNavbar.jsx     # Mobile CTA navigation
│   │   │   ├── Navbar.jsx              # Main navigation bar
│   │   │   ├── Toggle.jsx              # Mobile menu toggle
│   │   │   └── index.jsx               # Navigation main component
│   │   ├── __tests__/                  # Component test files
│   │   ├── Button.jsx                  # Reusable button component
│   │   ├── ContactForm.jsx             # Contact form with validation
│   │   ├── DecoratedTitle.jsx          # Styled title component
│   │   ├── Footer.jsx                  # Site footer
│   │   ├── HtmlHead.jsx                # SEO head component
│   │   ├── Input.jsx                   # Form input component
│   │   └── Layout.jsx                  # Main layout wrapper
│   ├── data/
│   │   ├── reviews.js                  # Client reviews data
│   │   └── team-members.js             # Team member information
│   ├── mocks/                          # Test mocks and fixtures
│   ├── pages/
│   │   ├── 404.js                      # 404 error page
│   │   ├── about.js                    # About page
│   │   ├── careers.js                  # Careers page
│   │   ├── contact.js                  # Contact page
│   │   └── index.js                    # Homepage
│   ├── styles/
│   │   └── theme.js                    # Material-UI theme configuration
│   ├── templates/                      # Gatsby page templates
│   └── setupTests.js                   # Jest test configuration
├── __mocks__/                          # Global test mocks
├── gatsby-config.js                    # Gatsby configuration
├── gatsby-node.js                      # Gatsby Node.js APIs
├── jest.config.js                      # Jest testing configuration
├── jest-preprocess.js                  # Jest preprocessing setup
├── package.json                        # Dependencies and scripts
└── README.md                           # Project documentation
```

## Key Dependencies

* **Gatsby 3.1.2**: Static site generator with React
* **React 17.0.1**: Core React library for UI components
* **Material-UI 4.11.3**: React component library for professional UI
* **Contentful**: Headless CMS for content management
* **gatsby-plugin-image**: Optimized image processing and loading
* **react-helmet**: SEO and document head management
* **react-icons**: Icon library for UI elements
* **react-transition-group**: Animation and transition components

## Development Dependencies

* **Jest 27.0.6**: JavaScript testing framework
* **React Testing Library**: Testing utilities for React components
* **MSW 0.35.0**: Mock Service Worker for API mocking
* **Cross-env**: Cross-platform environment variable handling

## Application Flow

1. **Homepage**: Visitors land on a professional homepage with hero section, firm introduction, practice areas, and contact form
2. **About Page**: Detailed information about the firm, team members, and client reviews
3. **Contact Page**: Contact information, office locations, and inquiry forms
4. **Careers Page**: Job listings and application process for potential hires
5. **Content Management**: Admins can update content through Contentful CMS without code changes
6. **Responsive Experience**: Seamless experience across desktop, tablet, and mobile devices

## Content Management

The application integrates with Contentful CMS for dynamic content management:

* **Homepage Content**: Hero images, introductory text, and featured content
* **Team Information**: Attorney profiles, photos, and biographies
* **Practice Areas**: Service descriptions and focus areas
* **Media Content**: Press mentions, articles, and media appearances
* **Contact Information**: Office details, contact methods, and location data

## Styling Architecture

* **Material-UI Theme**: Custom theme with professional color palette and typography
* **Responsive Breakpoints**: Mobile-first design with tablet and desktop optimizations
* **Component Styling**: makeStyles hook for component-scoped styling
* **CSS-in-JS**: Styled components with theme integration
* **Professional Design**: Clean, modern aesthetic appropriate for legal services

## Testing Strategy

The application includes comprehensive testing with:

* **Unit Tests**: Individual component functionality testing
* **Integration Tests**: Component interaction and data flow testing
* **Accessibility Tests**: Screen reader and keyboard navigation testing
* **Responsive Tests**: Mobile and desktop layout validation
* **Form Tests**: Contact form validation and submission testing
* **SEO Tests**: Meta tag and structured data validation

## SEO Optimization

* **React Helmet**: Dynamic meta tags and title management
* **Structured Data**: Schema.org markup for legal services
* **Image Optimization**: WebP format and responsive images
* **Static Generation**: Pre-rendered pages for fast loading
* **Sitemap Generation**: Automatic sitemap creation for search engines
* **Mobile Optimization**: Mobile-first responsive design

## Deployment

The application is optimized for deployment on:

* **Netlify**: Automatic builds from Git with form handling
* **Vercel**: Serverless deployment with edge optimization
* **AWS S3/CloudFront**: Static hosting with CDN distribution
* **Traditional Hosting**: Standard web hosting with build output
