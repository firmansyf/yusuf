# Yusuf Firmansyah — Portfolio

Personal portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Designed to showcase experience, projects, and skills to recruiters and potential clients.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15.5 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Icons | React Icons v5 |
| Email | EmailJS |
| Font | Geist (Sans + Mono) |
| Bundler | Turbopack |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, typewriter animation, stats, tech stack |
| `/tentang` | About — bio, experience timeline, skills grid |
| `/portfolio` | Portfolio — project cards with descriptions |
| `/kontak` | Contact — EmailJS form + contact info |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Header + Navigations)
│   ├── page.tsx            # Home page
│   ├── tentang/page.tsx    # About page
│   ├── portfolio/page.tsx  # Portfolio page
│   └── kontak/page.tsx     # Contact page
├── components/
│   ├── header/             # Sticky top header
│   ├── dataDisplay/        # Bottom navigation bar
│   └── AnimatedBackground  # Shared mouse-tracking blob background
├── data/
│   ├── experience/         # Work experience data
│   ├── project/            # Project data
│   └── skill/              # Skills list
├── viewModel/
│   ├── homeVM/             # Home page hook
│   ├── aboutVM/            # About page hook
│   ├── portfolioVM/        # Portfolio page hook
│   └── contactVM/          # Contact form hook (EmailJS)
├── types/                  # TypeScript type definitions
└── helpers/
    └── constant.ts         # EmailJS configuration keys
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/yusuf-firmansyah.git
cd yusuf-firmansyah

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3007](http://localhost:3007) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Environment — EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails without a backend. Keys are stored in `src/helpers/constant.ts`:

```ts
export const SERVICE_EMAIL_ID  = 'your_service_id'
export const EMAIL_TEMPLATE_ID = 'your_template_id'
export const EMAILjS_PUBLIC_KEY = 'your_public_key'
```

> **Note:** For production, move these values to environment variables (`.env.local`) and reference them via `process.env`.

---

## Features

- Typewriter animation cycling through role titles
- Mouse-tracking animated blob background (shared component)
- Responsive layout — mobile first, desktop two-column hero
- Skill grid with tech icons and brand colors
- Experience timeline with current/past indicators
- Project cards with role badge, date range, and hover effects
- EmailJS contact form with loading and status feedback
- Staggered slide-up entrance animations
- Sticky header with "Open to Work" badge
- Fixed bottom navigation with active route highlighting

---

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository directly at [vercel.com/new](https://vercel.com/new).

---

## Author

**Yusuf Firmansyah** — Frontend Engineer

- LinkedIn: [linkedin.com/in/yusuf-firmansyah](https://www.linkedin.com/in/yusuf-firmansyah/)
- Email: yusuffirmansyamh@gmail.com
- Location: Bandung, Indonesia
