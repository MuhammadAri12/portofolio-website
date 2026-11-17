# DESIGN.md — Muhammad Al Qadri Portfolio

## Brand Identity
**Name:** AL QADRI  
**Role:** Graphic Designer — Visual & Motion  
**Affiliation:** Telkom University, Multimedia Student  
**Specializations:** Digital Branding, Motion Graphics, Visual Identity, Content Creation

## Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| --bg | #08080c | Primary background |
| --text | #f2f2f4 | Primary text |
| --text-dim | #a2a2ad | Secondary/muted text |
| --accent | #8ab4ff | Primary brand (cool blue) |
| --accent-2 | #c084fc | Secondary brand (purple) |
| --accent-3 | #5eead4 | Tertiary accent (mint) |
| --glass | rgba(255,255,255,0.04) | Subtle glass surface |
| --glass-strong | rgba(255,255,255,0.07) | Elevated glass surface |
| --glass-border | rgba(255,255,255,0.1) | Glass border |

**Rationale:** Dark base with cool blue/purple/mint accents. Glass used sparingly (max 2 surfaces per viewport) for hierarchy, not decoration.

## Typography
| Token | Font | Scale (clamp) |
|-------|------|---------------|
| --font-display | Space Grotesk | Headlines, labels, UI chrome |
| --font-body | Inter | Body copy, long-form reading |
| --fs-xs | clamp(0.7rem, 1.8vw, 0.8rem) | Meta, labels |
| --fs-sm | clamp(0.8rem, 2vw, 0.9rem) | Small UI |
| --fs-base | clamp(0.95rem, 2.2vw, 1.05rem) | Body |
| --fs-lg | clamp(1.15rem, 3vw, 1.35rem) | Subheadings |
| --fs-xl | clamp(1.5rem, 4vw, 1.85rem) | Section titles |
| --fs-2xl | clamp(2rem, 5.5vw, 2.5rem) | Hero title (mobile) |
| --fs-3xl | clamp(2.8rem, 9vw, 6.2rem) | Hero title (desktop) |

**Rationale:** Space Grotesk for technical/creative display character; Inter for readability. Fluid scale prevents overflow on narrow viewports.

## Spacing & Layout
| Token | Value | Notes |
|-------|-------|-------|
| --radius | 16px | Cards, modals |
| --radius-sm | 8px | Buttons, chips, inputs |
| --radius-pill | 999px | Pills, tags |
| --gutter | 1rem (mobile) → 2rem (desktop) | Container padding |
| --container | 100% (mobile) → 1100px (desktop) | Max content width |
| --section-y | clamp(3rem, 6vw, 6rem) | Section vertical rhythm

## Glassmorphism Policy (Dose-Capped)
- **Max 2 glass surfaces per viewport** (antislop-ui R-10)
- Hero stats card: glass
- Nav pill: glass
- Project cards: solid with subtle border (not glass)
- Contact cards: solid with subtle border
- Certificates: solid with subtle border

**Rationale:** Overuse flattens hierarchy. Glass reserved for primary focal surfaces only.

## Elevation & Shadow
- **Level 0 (flat):** Most surfaces — no shadow
- **Level 1 (hover):** 0 6px 20px rgba(0,0,0,0.15) — cards on hover
- **Level 2 (primary CTA):** 0 14px 40px rgba(138,180,255,0.35) — solid buttons
- **Level 3 (modal/overlay):** 0 20px 50px rgba(0,0,0,0.4) — lightbox, mobile menu

## Motion
| Token | Value | Usage |
|-------|-------|-------|
| --ease | cubic-bezier(0.22, 1, 0.36, 1) | Default easing
| --duration-fast | 150ms | Micro-interactions
| --duration-base | 250ms | State transitions
| --duration-slow | 400ms | Panel animations

**Reduced motion:** All animations disabled via prefers-reduced-motion: reduce (WCAG 2.2 AA)

## Breakpoints (Content-Driven)
| Breakpoint | Trigger | Layout Change |
|------------|---------|---------------|
| 600px | Cards become readable side-by-side | 2-col grids |
| 900px | Nav links fit horizontally | Desktop nav, 3-col grids |
| 1200px | Comfortable reading width | Max container, larger orbs |

**Rationale:** Breakpoints set where content breaks, not device widths (antislop-layoutmobile)

## Accessibility Targets
- WCAG 2.2 AA minimum
- Contrast: 4.5:1 normal text, 3:1 large text/UI components
- Focus visible: 2px solid accent, 2px offset
- Touch targets: 44x44px all interactive elements
- Text resizes to 200% without horizontal scroll

## Component Inventory
- **Nav:** Fixed pill (mobile) → inline links (desktop)
- **Hero:** Centered (mobile) → left-aligned (desktop)
- **Stats:** 1-col (mobile) → 2-col (tablet) → 4-col (desktop)
- **Projects/Certificates/Motion:** 1-col → 2-col → 3-col
- **Contact:** 1-col → 2-col → 4-col
- **Buttons:** Full-width stacked (mobile) → inline (desktop)
- **Chips:** Wrapped (mobile) → inline row (desktop)

## Visual Tone
**Keywords:** Technical craft, motion-aware, dark sophistication, glass restraint
**Anti-patterns to avoid:** Rainbow gradients, neon glow everywhere, bento grids, fake terminal windows, emoji decoration, AI badges
