## Tech Stack

| Layer     | Technology                    |
| --------- | ----------------------------- |
| Framework | React 18 (Vite)               |
| Styling   | Tailwind CSS v3               |
| Language  | JavaScript ES6+ (JSX)         |
| Fonts     | Google Fonts — Syne + DM Sans |

## Project Structure

eventify/
├── src/
│   ├── components/
│   │   ├── layout/        → Navbar, Footer
│   │   ├── ui/            → Button, Badge (reusable,components)
│   │   └── events/        → EventCard, EventGrid, SearchBar
│   ├── data/
│   │   └── events.js      → Dummy JSON data
│   ├── hooks/
│   │   └── useEvents.js   → Custom hook (fetch simulation + search)
│   └── pages/
│       └── Home.jsx       → HeroSection, EventsSection, Contact sections,Home
├── tailwind.config.js
└── README.md

## How to Run

git clone https://github.com/fakhar0011/Eventify.git
cd eventify
npm install
npm run dev

- Fixed responsive navbar with mobile hamburger menu
- Hero section — _"Discover Events Near You"_
- 5 event cards — each with name, date & time, location, description, and Register button
- Fully responsive layout (mobile / tablet / desktop)
