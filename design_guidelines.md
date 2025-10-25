# Afghan Cultural Heritage Platform - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based with inspiration from Airbnb (visual storytelling), Tasty/Bon Appétit (recipe presentation), and National Geographic (cultural documentation)

**Core Principle:** Create an immersive cultural experience that celebrates Afghan heritage through rich visual storytelling, making traditional knowledge accessible and engaging.

---

## Typography System

**Primary Font:** Playfair Display (serif) - for headlines and cultural gravitas
**Secondary Font:** Inter (sans-serif) - for body text and UI elements

**Hierarchy:**
- Hero Headlines: 4xl to 6xl, font-weight 700
- Section Headers: 3xl to 4xl, font-weight 600
- Card Titles: xl to 2xl, font-weight 600
- Body Text: base to lg, font-weight 400
- Captions/Meta: sm to base, font-weight 400
- Right-to-left (RTL) support for Dari content with appropriate font fallbacks

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20 (e.g., p-4, mb-8, space-y-12)

**Container Strategy:**
- Full-width sections with inner max-w-7xl containers
- Content-focused areas: max-w-6xl
- Reading content: max-w-4xl
- Consistent horizontal padding: px-4 (mobile) to px-8 (desktop)

**Vertical Rhythm:**
- Section spacing: py-16 (mobile) to py-24 (desktop)
- Card spacing: p-6 to p-8
- Between elements: space-y-6 to space-y-8

---

## Page Structure & Layouts

### Homepage

**Hero Section (80vh minimum):**
- Full-width background image showcasing Afghan cultural imagery (traditional celebration, architectural detail, or landscape)
- Centered content overlay with translucent backdrop blur
- Primary headline + descriptive tagline
- Dual CTAs: "Explore Festivals" and "Browse Recipes"
- Subtle scroll indicator

**Featured Events Grid:**
- 3-column grid (desktop) reducing to single column (mobile)
- Cards featuring festival imagery, countdown timers, event names, and brief descriptions
- Hover effects revealing more details
- Spacing: gap-8

**Recipe Showcase:**
- Asymmetric masonry grid layout
- Mix of card sizes (featured recipes get 2x width)
- Each card: dish image, recipe name, difficulty level, cooking time
- Category tags visible on hover
- Spacing: gap-6

**Handicrafts Gallery Preview:**
- Horizontal scrolling carousel on mobile, 4-column grid on desktop
- Square aspect ratio images with minimal padding
- Item name and craft type overlay on hover
- "View Full Gallery" CTA

**Cultural Insights Section:**
- 2-column layout alternating between text and imagery
- Timeline visualization for historical events
- Rich paragraph text with supporting imagery

### Events Calendar Page

**Calendar Header:**
- Month navigation with elegant date picker
- Filter toggles for event types (Religious, National, Regional, Seasonal)
- Search functionality

**Calendar Grid:**
- Traditional month view with highlighted event days
- Click to expand event details in modal overlay
- Upcoming events sidebar with countdown timers and quick info

**Event Detail Pages:**
- Hero image representing the festival
- Comprehensive sections: History, Traditions, Celebrations, Regional Variations
- 2-column layout for desktop (main content + sidebar with key facts)
- Photo galleries in 3-column grids
- Related events carousel at bottom

### Recipes Section

**Recipe Listing:**
- Filter sidebar: Meal Type, Region, Difficulty, Cooking Time, Occasion
- Grid layout: 3 columns (desktop), 2 (tablet), 1 (mobile)
- Card design: Large image, recipe title, meta info (servings, time, difficulty)
- Search bar with autocomplete

**Recipe Detail Page:**
- Prominent featured image or video player (16:9 aspect ratio)
- Two-column layout for ingredients (left) and instructions (right) on desktop
- Step-by-step instruction cards with numbers
- Video player positioned prominently if cooking video exists
- Nutrition info sidebar
- Print recipe button
- Related recipes carousel (4 items, horizontal scroll)

### Clothing & Handicrafts Gallery

**Gallery Grid:**
- Masonry layout showcasing varied image sizes
- Filter system: Type (Textiles, Jewelry, Embroidery, Clothing), Region, Era
- Lightbox functionality for enlarged views
- Item cards: High-quality image, item name, brief description, region tag

**Item Detail View:**
- Large image gallery (main image with thumbnail carousel below)
- Two-column layout: Image gallery (left, 60%), Details (right, 40%)
- Rich text describing cultural significance, materials, techniques
- Artisan information if available
- Related items grid at bottom

---

## Component Library

### Navigation
- Sticky header with logo (left), main nav links (center), language toggle for Dari/English (right)
- Mobile: Hamburger menu with slide-in drawer
- Mega menu for "Recipes" showing category previews

### Cards (Event/Recipe/Handicraft)
- Image-first design with 4:3 aspect ratio
- Rounded corners: rounded-lg
- Shadow: shadow-md with shadow-lg on hover
- Padding: p-6
- Clear visual hierarchy: Image → Title → Meta → Description

### Video Player
- Custom controls with Afghan cultural accent elements
- 16:9 aspect ratio maintained
- Thumbnail preview on hover
- Fullscreen capability

### Countdown Timer
- Prominent numerical display
- Labels for Days, Hours, Minutes
- Integrated into event cards and detail pages

### Filter System
- Checkbox groups for multi-select
- Tag display showing active filters with remove option
- "Clear All" functionality
- Mobile: Collapsible drawer

### Modal Overlays
- Centered with backdrop blur
- Close button (top-right)
- Maximum width constraints: max-w-4xl
- Smooth fade-in animation

### Form Elements
- Text inputs with clear labels and placeholder text
- Search bars with icon (magnifying glass)
- Consistent border styling and focus states
- Language input considerations for Dari (RTL)

---

## Images & Media Strategy

**Essential Images:**

1. **Homepage Hero:** Grand cultural scene - traditional celebration, architectural detail, or festival gathering
2. **Festival Cards:** Representative imagery for each event (Nowruz: Haft-sin table, Eid: mosque/celebration, Independence Day: national symbols)
3. **Recipe Images:** High-quality food photography for each dish
4. **Cooking Videos:** Embedded video players for tutorials
5. **Handicraft Gallery:** Professional photography of textiles, jewelry, embroidery pieces
6. **Background Textures:** Subtle traditional Afghan patterns for section dividers

**Image Specifications:**
- Hero images: Minimum 1920x1080
- Recipe/Event cards: 800x600
- Gallery items: Minimum 1200x1200 for quality zoom
- Thumbnails: 400x400

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px - Single column, stacked layouts
- Tablet: 768px-1024px - 2-column grids, condensed navigation
- Desktop: > 1024px - Full multi-column layouts, expanded sidebars

**Key Adaptations:**
- Navigation: Hamburger menu on mobile
- Grids: 3-col → 2-col → 1-col cascade
- Recipe instructions: Stacked layout on mobile
- Event calendar: List view on mobile instead of full grid

---

## Accessibility Considerations

- Semantic HTML throughout
- Alt text for all cultural images describing content
- Keyboard navigation support
- ARIA labels for interactive elements
- High contrast text (especially over images)
- Focus indicators on all interactive elements
- RTL layout support for Dari language toggle