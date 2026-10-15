# Design System

## Visual Theme & Metaphor
Apple Human Interface Guidelines translated for the modern web. High-end translucency (`backdrop-filter: blur(20px)`), refined radii (12–16px), subtle borders (`rgba(255,255,255,0.08)` in dark mode, `rgba(0,0,0,0.08)` in light mode), and physical spring motion.

## Color Palette

### Base
- App Background (Dark): `#000000`
- App Background (Light): `#F5F5F7`
- Surface Elevated (Dark): `#1C1C1E`
- Surface Elevated (Light): `#FFFFFF`
- Glass Chrome (Dark): `rgba(18, 18, 20, 0.75)`
- Glass Chrome (Light): `rgba(255, 255, 255, 0.75)`

### Primary Accent
- Apple Blue (Dark): `#2997FF`
- Apple Blue (Light): `#0071E3`
- Accent Muted: `rgba(41, 151, 255, 0.16)`

### Semantic Status (Status Only)
- Success / Healthy (50–100%): `#30D158` (Dark) / `#34C759` (Light)
- Warning / Gap: `#FFD60A` (Dark) / `#FF9F0A` (Light)
- Danger / Overloaded (>100%): `#FF453A` (Dark) / `#FF3B30` (Light)
- Underutilized (<50%): `#64D2FF` (Dark) / `#0A84FF` (Light)

## Typography

- Font Family: `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Inter", sans-serif`
- Optical Tracking:
  - Display / H1: `letter-spacing: -0.025em`
  - H2: `letter-spacing: -0.02em`
  - H3: `letter-spacing: -0.015em`
  - Body: `letter-spacing: -0.005em`
  - Micro Badges: `letter-spacing: 0.02em`

## Motion & Springs

- Library: `framer-motion`
- Standard Springs: `type: 'spring', damping: 25, stiffness: 280, mass: 0.9`
- Settle Physics: Critically damped (`damping: 1.0` equivalent) for normal UI; underdamped (`damping: ~0.8`) only for flick releases.
- Interactions: Instant `:active { transform: scale(0.97); }` on pointer-down.
- Fallback: `@media (prefers-reduced-motion: reduce)` zeroes out spring durations with instantaneous or opacity cross-fades.

## Key Component Patterns

- `ScoreRing`: Radial Apple Watch-style progress ring with spring fill and center percentage.
- `UtilizationBar`: Horizontal progress bar with 50% and 100% threshold markers and dynamic semantic tinting.
- `Drawer`: Side-sheet with drag-to-dismiss, velocity-aware spring snapping, and rubber-band edge drag.
- `StatCard`: Elevated card with animated number counting and micro-interaction on hover.
