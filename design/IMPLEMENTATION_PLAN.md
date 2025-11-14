# About & Product Pages - Implementation Plan

## Overview

This document outlines the complete implementation plan for the About and Product pages based on the design files. All implementations will follow the existing codebase patterns for consistency.

---

## Codebase Patterns & Standards

### Styling Patterns

- **Colors**: `dark` (#171717), `light` (#e5e0d2), `accent` (#a88e6b), `white`, `black`
- **Typography**:
  - Headings: `font-bebas` (Bebas Neue)
  - Body: `font-poppins` (Poppins)
  - Scale: `text-h1` through `text-h6` (fluid responsive)
- **Spacing**:
  - `section-padding`: Responsive padding for sections
  - `container-padding`: Responsive horizontal padding
  - `section-padding-top`: Top padding only
- **Components**:
  - `Section` wrapper with `bgColor` and `textColor` props
  - `AnimatedHeading` for headings with reveal animation
  - `FadeInParagraph` for fade-in text animations
  - `Parallax` component for parallax effects

### Animation Patterns

- **Framer Motion** (`motion/react`) for all animations
- **Scroll-based animations**: `useScroll`, `useTransform`, `useMotionValueEvent`
- **Viewport animations**: `useInView` for scroll-triggered animations
- **Easing**: Custom cubic bezier `[0.77, 0, 0.175, 1]` for smooth animations
- **Sticky sections**: Full-screen sticky containers with scroll progress tracking
- **Parallax**: Using `Parallax` component or custom `useTransform` with scroll progress

---

## ABOUT PAGE IMPLEMENTATION

### Section 1: Hero Section (Already Exists - Needs Enhancement)

**File**: `src/sections/about/HeroAboutSection.tsx`

**Current State**: Basic hero with title and subtitle at bottom-left

**Design Requirements**:

- Full-screen hero image background (from `content.hero.backgroundImage`)
- Large headline: Use `content.hero.title` (white, large)
- Subtitle below: Use `content.hero.subtitle` (white, smaller)
- Large bottom headline: Use `content.hero.bigTextLine1` (white) + `content.about.bigTextLine2` (accent color)
- Text positioned at bottom-left, extending into next section

**Content Source**: `public/content/en/about.json` → `hero` object

**Animations Needed**:

1. **Parallax background image** - Image moves slower than scroll (30-50% speed)
2. **Title fade in** - Slide up + fade on scroll into view
3. **Subtitle fade in** - Delay after title (0.3s delay)
4. **Bottom headline** - Fade in as user scrolls down, positioned to overlap with next section

**Implementation Steps**:

1. Add background image to hero section
2. Implement parallax effect using `Parallax` component or `useTransform`
3. Add bottom headline with accent color for "MEETS HOME"
4. Add scroll-triggered fade animations using `useInView`
5. Position bottom headline to overlap with next section

---

### Section 2: About Intro Section (Already Exists - Needs Enhancement)

**File**: `src/sections/about/AboutIntroSection.tsx`

**Current State**: Simple centered paragraph

**Design Requirements**:

- Dark background (`bg-dark`)
- Centered paragraph text (white)
- Max-width container (4xl)
- Paragraph text: Use `content.about.paragraph`
- Large bottom text: Use `content.about.bigTextLine2` (accent color, if needed)

**Content Source**: `public/content/en/about.json` → `about` object

**Animations Needed**:

1. **Fade in on scroll** - Already using `FadeInParagraph`, ensure smooth transition
2. **Optional**: Stagger word/line animations for more dynamic effect

**Implementation Steps**:

1. Verify current implementation matches design
2. Ensure proper spacing and typography
3. Test fade-in animation timing

---

### Section 3: Image + Text Section (Already Exists - Needs Enhancement)

**File**: `src/sections/about/ImageTextSection.tsx`

**Current State**: Has parallax image and text with accent line

**Design Requirements**:

- Left: Large rounded-corner image - Use `content.imageText.image`
- Right: Light beige background (`bg-light`)
- Text with accent line indicator on left side
- Paragraph text: Use `content.imageText.paragraph`

**Content Source**: `public/content/en/about.json` → `imageText` object

**Animations Needed**:

1. **Image parallax** - Already implemented, verify intensity
2. **Text slide in from right** - On scroll into view
3. **Accent line grow** - Animate from top to bottom on scroll
4. **Image zoom on hover** - Subtle scale effect (optional)

**Implementation Steps**:

1. Verify image has rounded corners (`rounded-lg`)
2. Ensure light background for text section
3. Add slide-in animation for text using `motion.div` with `useInView`
4. Animate accent line growth using `motion.div` with height transform
5. Add hover effect to image (scale 1.05)

---

### Section 4: Features Grid Section (Already Exists - Needs Enhancement)

**File**: `src/sections/about/FeaturesGridSection.tsx`

**Current State**: Simple 2x2 grid with cards

**Design Requirements**:

- 2x2 grid layout
- Each card has:
  - Background image (full card) - Add `imageUrl` property to each item in JSON
  - Large white headline at top - Use `content.featuresGrid.items[].title`
  - White descriptive text at bottom - Use `content.featuresGrid.items[].text`
  - Dark overlay for text readability
- Cards: Use `content.featuresGrid.items` array (4 items)

**Content Source**: `public/content/en/about.json` → `featuresGrid.items[]` array
**Note**: Need to add `imageUrl` property to each feature item in the JSON file

**Animations Needed**:

1. **Staggered card animations** - Cards fade in + slide up in sequence (0.1s delay between each)
2. **Hover effects** - Scale up slightly (1.02) + brightness increase
3. **Image parallax on scroll** - Subtle parallax effect within each card

**Implementation Steps**:

1. Update card structure to have background images
2. Add dark gradient overlay for text readability
3. Position text absolutely at top and bottom of cards
4. Implement staggered animations using `motion.div` with `useInView` and delay
5. Add hover effects with `hover:scale-105` and brightness filter
6. Add subtle parallax to background images using `useTransform`

---

## PRODUCT PAGE IMPLEMENTATION

### Section 1: Hero Section (NEW - Needs Creation)

**File**: `src/sections/product/HeroProductSection.tsx`

**Design Requirements**:

- Full-screen hero image - Use `content.hero.backgroundImage`
- Bottom-left overlay:
  - Headline: Use `content.hero.title` (white, large)
  - Subtitle: Use `content.hero.subtitle` (white, smaller)

**Content Source**: `public/content/en/product.json` → `hero` object (needs to be created)

**Animations Needed**:

1. **Parallax background** - Image moves slower than scroll
2. **Text fade in** - Slide up + fade on scroll into view
3. **Optional**: Image zoom effect on scroll

**Implementation Steps**:

1. Create `src/sections/product/HeroProductSection.tsx`
2. Similar structure to `HeroAboutSection` but with different content
3. Add parallax effect using `Parallax` component
4. Position text at bottom-left with `container-padding`
5. Add fade-in animations

---

### Section 2: Specifications Section (NEW - Needs Creation)

**File**: `src/sections/product/SpecificationsSection.tsx`

**Design Requirements**:

- Light beige background (`bg-light`)
- Two-column layout:
  - Left: Floor plan diagram - Use `content.specifications.floorPlanImage`
    - Label: Use `content.specifications.floorPlanLabel` (e.g., "FIRST FLOOR")
    - Area: Use `content.specifications.area` (e.g., "97 sq.m. / 720 sq.ft.")
  - Right: Specifications list - Use `content.specifications.specs[]` array
    - Each spec has: `label` and `value`
    - Large, bold numbers for values
    - Labels in smaller text

**Content Source**: `public/content/en/product.json` → `specifications` object (needs to be created)

**Animations Needed**:

1. **Floor plan fade in** - Slide from left on scroll
2. **Specs stagger animation** - Each spec item fades in sequentially (0.1s delay)
3. **Number counter animation** - Numbers count up from 0 to target value

**Implementation Steps**:

1. Create `src/sections/product/SpecificationsSection.tsx`
2. Use `Section` with `bgColor='light'` and `textColor='dark'`
3. Two-column responsive layout (stack on mobile)
4. Add floor plan image/SVG
5. Create spec items with large numbers
6. Implement counter animation using `useSpring` or `animate` from framer-motion
7. Add stagger animations for spec items

---

### Section 3: Detailed Description Section (NEW - Needs Creation)

**File**: `src/sections/product/ProductDescriptionSection.tsx`

**Design Requirements**:

- Two-part section:
  - Top: Large rounded-corner image - Use `content.description.image`
  - Bottom: Dark background (`bg-dark`) with white text
    - Description: Use `content.description.paragraph`

**Content Source**: `public/content/en/product.json` → `description` object (needs to be created)

**Animations Needed**:

1. **Image parallax** - Subtle parallax effect
2. **Text fade in** - Slide up + fade on scroll
3. **Image zoom on hover** - Subtle scale effect

**Implementation Steps**:

1. Create `src/sections/product/ProductDescriptionSection.tsx`
2. Two-part layout: image top, text bottom
3. Add rounded corners to image (`rounded-lg`)
4. Implement parallax using `Parallax` component
5. Add fade-in animation for text
6. Add hover effect to image

---

### Section 4: Stacked Images Section (NEW - Needs Creation)

**File**: `src/sections/product/StackedImagesSection.tsx`

**Design Requirements**:

- Full-height section with stacked images (like a deck of cards)
- Images are layered on top of each other
- As user scrolls, the top image moves backward (scales down, moves back in z-index) revealing the next image
- Each image should have rounded corners
- Images array: Use `content.stackedImages.images[]` array
- Each image has: `url` and optional `alt` text

**Content Source**: `public/content/en/product.json` → `stackedImages` object (needs to be created)

**Animations Needed**:

1. **Stacked deck effect** - Images positioned absolutely, stacked with decreasing z-index
2. **Scroll-triggered reveal** - As scroll progresses, top image:
   - Scales down (from 1.0 to ~0.8)
   - Moves backward (translateZ or translateY)
   - Opacity decreases (from 1.0 to ~0.3)
   - Z-index decreases (moves to back of stack)
3. **Next image reveal** - Next image in stack becomes visible and moves to front
4. **Smooth transitions** - Use spring animations for natural movement

**Implementation Steps**:

1. Create `src/sections/product/StackedImagesSection.tsx`
2. Use `useScroll` to track scroll progress through section
3. Calculate section height: `images.length * 100vh` (similar to FeatureCarousel)
4. Create sticky container with `h-screen` to hold stacked images
5. For each image:
   - Calculate its progress based on scroll position
   - When image is "active" (at front):
     - Scale: 1.0, Opacity: 1.0, Z-index: highest
   - When image is "passing" (moving back):
     - Scale: 0.8-0.9, Opacity: 0.3-0.7, Z-index: decreasing
   - When image is "behind" (already passed):
     - Scale: 0.7, Opacity: 0.2, Z-index: lowest
6. Use `useTransform` to map scroll progress to scale, opacity, and z-index
7. Apply transforms using `motion.div` with `style` prop
8. Add rounded corners (`rounded-xl` or `rounded-2xl`)
9. Ensure images are centered and fill container properly
10. Test smooth transitions between images

**Technical Reference**:

- Similar pattern to `FeatureCarousel` but with scale/opacity/z-index instead of translateY
- Use `useTransform` for each image's progress calculation
- Z-index should be: `images.length - index - currentActiveIndex` (or similar logic)

---

### Section 5: Explore Our Homes Section (Already Exists - Needs Enhancement)

**File**: `src/sections/home/ExploreHomesSection.tsx`

**Current State**: Has heading and module list

**Design Requirements**:

- Light beige background (`bg-light`)
- Heading: Use `content.explore.title` (dark)
- Subtitle: Use `content.explore.subtitle` (dark)
- 2x2 grid of home model images - Use `content.explore.modules[]` or reuse `getModules()` function
  - Each module has: `image`, `name`, `specs` (sqft, bedrooms, bathrooms, modules)
  - Each image has rounded corners
  - Overlay with specs
  - Model name with external link icon
  - Hover effect reveals more info

**Content Source**: `public/content/en/product.json` → `explore` object OR reuse `modules.json` via `getModules()`

**Animations Needed**:

1. **Grid items stagger** - Fade in + slide up in sequence
2. **Hover effects** - Scale up + overlay fade in
3. **Image parallax** - Subtle parallax on scroll

**Implementation Steps**:

1. Check current `ModuleList` component implementation
2. Ensure light background
3. Add overlay with specs to each module card
4. Implement stagger animations
5. Add hover effects with overlay
6. Verify responsive grid layout

---

## IMPLEMENTATION ORDER & PRIORITY

### Phase 1: About Page Enhancements

1. ✅ Hero Section - Add background image, parallax, bottom headline (use `content.hero`)
2. ✅ About Intro Section - Verify content from `content.about`
3. ✅ Image + Text Section - Enhance animations, use `content.imageText`
4. ✅ Features Grid - Add background images, overlays, stagger animations (use `content.featuresGrid.items`)

### Phase 2: Product Page Creation

1. ✅ Hero Section - Create new component (use `content.hero` from product.json)
2. ✅ Specifications Section - Create with floor plan and counter animations (use `content.specifications`)
3. ✅ Product Description Section - Create with image and text (use `content.description`)
4. ✅ Stacked Images Section - Create with deck effect animation (use `content.stackedImages`)
5. ✅ Explore Our Homes - Enhance existing component (use `content.explore` or `getModules()`)

---

## ANIMATION SPECIFICATIONS

### Scroll-Triggered Animations

- **Trigger**: `useInView` with `amount: 0.5` (50% visible)
- **Once**: `once: true` (animate only once)
- **Duration**: 0.5-0.8s for fade-ins
- **Easing**: `ease: 'easeOut'` or custom `[0.77, 0, 0.175, 1]`

### Parallax Effects

- **Intensity**: 30-50% of scroll speed (subtle)
- **Implementation**: `Parallax` component or `useTransform` with scroll progress
- **Range**: Typically 100-200px movement over section

### Stagger Animations

- **Delay**: 0.1s between items
- **Implementation**: Map with index-based delay
- **Effect**: Creates cascading reveal effect

### Hover Effects

- **Scale**: 1.02-1.05 (subtle)
- **Transition**: 0.2s ease-in-out
- **Brightness**: Optional filter brightness increase

---

## TECHNICAL NOTES

### File Structure

```
src/
  sections/
    about/
      HeroAboutSection.tsx (enhance - use content.hero)
      AboutIntroSection.tsx (verify - use content.about)
      ImageTextSection.tsx (enhance - use content.imageText)
      FeaturesGridSection.tsx (enhance - use content.featuresGrid.items)
    product/
      HeroProductSection.tsx (create - use content.hero)
      SpecificationsSection.tsx (create - use content.specifications)
      ProductDescriptionSection.tsx (create - use content.description)
      StackedImagesSection.tsx (create - use content.stackedImages)
```

**Page Files**:

```
src/
  app/
    about/
      page.tsx (already exists - uses getContent('about', 'en'))
    product/
      page.tsx (create - uses getContent('product', 'en'))
```

### Type Definitions

**About Types** (`src/types/about.ts`):

- ✅ Already exists
- ⚠️ **Action Required**: Update `IFeatureItem` interface to include `imageUrl?: string`

**Product Types** (`src/types/product.ts` - **NEEDS TO BE CREATED**):

```typescript
export interface IHeroProduct {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export interface ISpecification {
  label: string;
  value: number;
}

export interface ISpecifications {
  floorPlanImage: string;
  floorPlanLabel: string;
  area: string;
  specs: ISpecification[];
}

export interface IProductDescription {
  image: string;
  paragraph: string;
}

export interface IStackedImage {
  url: string;
  alt?: string;
}

export interface IStackedImages {
  images: IStackedImage[];
}

export interface IExplore {
  title: string;
  subtitle: string;
}

export interface IProductContent {
  hero: IHeroProduct;
  specifications: ISpecifications;
  description: IProductDescription;
  stackedImages: IStackedImages;
  explore: IExplore;
}
```

**Content Map** (`src/types/content.ts`):

- ⚠️ **Action Required**: Add `product: IProductContent` to `IContentMap`

### Content Data

**About Page** (`public/content/en/about.json`):

- ✅ Already exists with: `hero`, `about`, `imageText`, `featuresGrid`
- ⚠️ **Action Required**: Add `imageUrl` property to each item in `featuresGrid.items[]` array

**Product Page** (`public/content/en/product.json` - **NEEDS TO BE CREATED**):

```json
{
  "hero": {
    "title": "SMART COMPACT LIVING",
    "subtitle": "A compact and elegant unit ideal for guest homes, ADUs, or urban lots.",
    "backgroundImage": "/assets/product-hero-image.jpg"
  },
  "specifications": {
    "floorPlanImage": "/assets/floor-plan.jpg",
    "floorPlanLabel": "FIRST FLOOR",
    "area": "97 sq.m. / 720 sq.ft.",
    "specs": [
      { "label": "SIZE (sqft)", "value": 480 },
      { "label": "BEDROOM", "value": 1 },
      { "label": "BATHROOMS", "value": 1 },
      { "label": "MODULES", "value": 2 }
    ]
  },
  "description": {
    "image": "/assets/product-description-image.jpg",
    "paragraph": "Smart Compact Living offers a refined minimalist layout with a focus on natural light and space efficiency. Its modern finishes and clean geometry make it perfect for singles, couples, or as a rental unit."
  },
  "stackedImages": {
    "images": [
      {
        "url": "/assets/stacked-image-1.jpg",
        "alt": "Product image 1"
      },
      {
        "url": "/assets/stacked-image-2.jpg",
        "alt": "Product image 2"
      },
      {
        "url": "/assets/stacked-image-3.jpg",
        "alt": "Product image 3"
      },
      {
        "url": "/assets/stacked-image-4.jpg",
        "alt": "Product image 4"
      }
    ]
  },
  "explore": {
    "title": "EXPLORE OUR HOMES",
    "subtitle": "Explore our range of models, each designed for flexibility and comfort."
  }
}
```

**Important**: All images should be referenced from `/public/assets/` directory. Update JSON files with actual image paths.

### Responsive Breakpoints

- Mobile: < 768px (md)
- Tablet: 768px - 1024px (md to lg)
- Desktop: > 1024px (lg+)

---

## CONSISTENCY CHECKLIST

- [ ] Use `Section` component wrapper
- [ ] Use `AnimatedHeading` for all headings
- [ ] Use `FadeInParagraph` for body text
- [ ] Follow color palette (dark, light, accent)
- [ ] Use responsive typography scale (text-h1 to text-h6)
- [ ] Use spacing utilities (section-padding, container-padding)
- [ ] Implement scroll-triggered animations with `useInView`
- [ ] Use Framer Motion for all animations
- [ ] Follow existing animation timing and easing
- [ ] Ensure mobile responsiveness
- [ ] Test all animations on scroll
- [ ] Verify parallax effects are smooth

---

## CONTENT MANAGEMENT

### All Content Must Come From JSON Files

**Pattern**: All sections receive content via props from `getContent()` function:

```typescript
// In page component
const content = await getContent('about', 'en'); // or 'product', 'en'

// Pass to sections
<HeroAboutSection {...content.hero} />
<AboutIntroSection {...content.about} />
```

**Images**: All image paths come from JSON properties (e.g., `backgroundImage`, `image`, `imageUrl`)

- Images should be in `/public/assets/` directory
- Reference in JSON as `/assets/filename.jpg`

**Text**: All text content comes from JSON properties

- Headlines, subtitles, paragraphs, labels, etc.
- No hardcoded text in components

### Required JSON Updates

1. **About Page** (`public/content/en/about.json`):
   - Add `imageUrl` to each item in `featuresGrid.items[]`

2. **Product Page** (`public/content/en/product.json`):
   - Create new file with structure shown above
   - Add all required image paths
   - Add all text content

---

## NEXT STEPS

1. ✅ Review this plan for accuracy
2. ✅ Update `public/content/en/about.json` - Add `imageUrl` to features grid items
3. ✅ Create `public/content/en/product.json` with all required content
4. ✅ Create `src/types/product.ts` with type definitions
5. ✅ Update `src/types/content.ts` to include product content
6. ✅ Start with About page enhancements (Phase 1)
7. ✅ Then move to Product page creation (Phase 2)
8. ✅ Test all animations and responsive behavior
9. ✅ Verify all content comes from JSON files
10. ✅ Refine based on feedback
