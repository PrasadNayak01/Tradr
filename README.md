# Tradr

A full-stack stock trading dashboard built with the MERN stack. Explore market data, view stock details, manage a watchlist, and practise trading in a simulated environment.

> **Status:** In development

---

## Overview

Tradr lets users explore Indian stock market information and practise portfolio management without real money. It pulls live market data from public APIs and stores watchlist entries and orders in MongoDB.

**Target users:** People who want to explore stock market data and practise portfolio management in a simulated trading environment.

---

## Features

### Landing Page

- Brand-focused homepage with navigation
- About, Products, Pricing, Signup, and Support sections
- Reusable React components
- Indigo-based branding

### Trading Dashboard

- Sidebar navigation for main trading sections
- Top navigation bar with user options
- Market summary and stock information
- Holdings overview and recent orders

### Markets

- NIFTY 50 and SENSEX overview with price and percentage change
- Top gainers and losers
- Popular stocks table
- Click-through to individual stock pages

### Stock Details

- Dynamic routes such as `/stocks/TCS`
- Current price, percentage change, and previous close
- Open, day high, day low, 52-week high and low
- Trading volume
- Intraday price data prepared for chart visualisation

### Watchlist

- Add and remove stocks
- View prices and day ranges
- Data persisted in MongoDB

### Orders

- Buy and Sell order types
- Quantity, price, and category (Holdings or Positions)
- Order creation through a backend API
- Order status tracking (simulated outcomes, not real exchange execution)

### Holdings and Positions

- Separate sections for holdings and positions
- Quantity, price, investment value, and profit/loss where implemented

---

## Tech Stack

| Technology              | Usage                                 |
| ----------------------- | ------------------------------------- |
| MongoDB                 | Stores watchlist entries and orders   |
| Express.js              | Backend REST APIs                     |
| React.js                | Frontend user interface               |
| Node.js                 | Backend server runtime                |
| Vite                    | Frontend dev server and build tooling |
| Tailwind CSS            | Styling and responsive layouts        |
| React Router            | Navigation and dynamic stock routes   |
| Axios                   | HTTP requests                         |
| Mongoose                | Schemas and MongoDB interaction       |
| Yahoo Finance Chart API | Stock price and intraday chart data   |
| NSE API                 | NIFTY 50 market data                  |
| BSE API                 | SENSEX market data                    |

---

## Architecture

The backend follows an Express MVC-style pattern:

- **Routes:** define API endpoints and connect them to controllers
- **Controllers:** handle requests, call external APIs, transform data, and send responses
- **Models:** define MongoDB document structures with Mongoose

**Request flow:**

```
React Frontend
      ↓
Axios HTTP Request
      ↓
Express Route
      ↓
Controller
      ↓
MongoDB / External Market API
      ↓
JSON Response
      ↓
React UI Update
```

---

## Market Data Integration

Stock data is fetched from Yahoo Finance's chart endpoint:

```
https://query1.finance.yahoo.com/v8/finance/chart/{SYMBOL}.NS
```

Intraday data is requested at 5-minute intervals. The controller extracts:

- Current market price and previous close
- Percentage change
- Day high and day low
- 52-week high and low
- Trading volume
- Intraday timestamps and closing prices

Timestamps and prices are converted into chart-friendly objects:

```json
[
  { "time": "09:15", "price": 2123.6 },
  { "time": "09:20", "price": 2131.4 },
  { "time": "09:25", "price": 2131.7 }
]
```

---

## API Endpoints

| Method   | Endpoint                 | Description                        |
| -------- | ------------------------ | ---------------------------------- |
| `GET`    | `/api/stock/:symbol`     | Fetch stock details and chart data |
| `GET`    | `/api/markets/indices`   | Fetch market indices               |
| `GET`    | `/api/markets/gainers`   | Fetch top gainers                  |
| `GET`    | `/api/watchlist`         | Retrieve watchlist entries         |
| `POST`   | `/api/watchlist/new`     | Add a stock to the watchlist       |
| `DELETE` | `/api/watchlist/:symbol` | Remove a stock from the watchlist  |
| `POST`   | `/api/orders/new`        | Create a new order                 |

---

## Data Formatting

Reusable utilities keep values consistent across tables, cards, and detail pages:

- Indian Rupee currency formatting
- Signed currency changes
- Percentage changes
- Indian numbering convention
- Colours for positive, negative, and neutral price changes

---

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (local instance or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd tradr
   ```

2. **Set up the backend**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend folder:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

   Start the server:

   ```bash
   npm start
   ```

3. **Set up the frontend**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Open the app** at `http://localhost:5173`

> Never commit real database credentials or secrets to GitHub. Keep `.env` in your `.gitignore`.

---

## Development Status

| Module                          | Status                                           |
| ------------------------------- | ------------------------------------------------ |
| Landing page UI                 | Implemented                                      |
| Dashboard layout                | In development                                   |
| Stock details API               | Implemented, being extended                      |
| Intraday chart data preparation | Implemented                                      |
| Markets and indices             | Integrated (subject to external API reliability) |
| Watchlist API                   | Implemented                                      |
| Watchlist UI integration        | In progress                                      |
| Orders                          | In development                                   |
| Holdings and positions          | In development                                   |
| Funds and settings              | Planned                                          |

---

## Future Enhancements

- Interactive stock charts on the frontend
- Better caching and error handling for the stock API
- Authentication and user-specific portfolios
- Improved order history and status handling
- Link executed orders to holdings and positions
- Portfolio performance visualisations
- Improved responsive design and loading states
- Frontend and backend deployment

---

## Disclaimer

Tradr is an educational portfolio project, not a real brokerage platform. Market data availability and freshness depend on external providers. Simulated orders do not execute trades on actual stock exchanges.

---

## Author

**Prasad Nayak**
