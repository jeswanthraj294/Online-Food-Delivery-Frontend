Online Food Delivery Frontend
A modern, responsive frontend application for online food ordering and delivery services. This project provides an intuitive user interface for customers to browse restaurants, view menus, place orders, and track deliveries.


🚀 Features

User Authentication: Secure login and registration system
Restaurant Browsing: Browse through various restaurants and cuisines
Menu Display: Detailed menu with food items, descriptions, and prices
Shopping Cart: Add/remove items with quantity management
Order Placement: Seamless checkout process
Order Tracking: Real-time order status updates
User Profile: Manage personal information and order history
Search & Filter: Find restaurants and dishes quickly
Responsive Design: Optimized for desktop, tablet, and mobile devices
Payment Integration: Secure payment processing
Reviews & Ratings: Customer feedback system

🛠️ Tech Stack

Frontend Framework: React.js / Vue.js / Angular (specify your framework)
Styling: CSS3 / Tailwind CSS / Bootstrap / Styled Components
State Management: Redux / Context API / Vuex
HTTP Client: Axios / Fetch API
Routing: React Router / Vue Router / Angular Router
Build Tool: Webpack / Vite / Create React App
Package Manager: npm / yarn

📋 Prerequisites
Before running this application, make sure you have the following installed:

Node.js (v14 or higher)
npm or yarn
Git

🏗️ Installation

Clone the repository
bashgit clone https://github.com/jeswanthraj294/Online-Food-Delivery-Frontend.git
cd Online-Food-Delivery-Frontend

Install dependencies
bashnpm install
# or
yarn install

Set up environment variables
bashcp .env.example .env
Update the .env file with your configuration:
REACT_APP_API_URL=your_backend_api_url
REACT_APP_PAYMENT_KEY=your_payment_gateway_key
REACT_APP_MAPS_API_KEY=your_maps_api_key

Start the development server
bashnpm start
# or
yarn start


The application will be available at http://localhost:3000
📱 Usage
For Customers

Register/Login: Create an account or login with existing credentials
Browse Restaurants: Explore available restaurants in your area
View Menus: Browse through restaurant menus and food items
Add to Cart: Select items and add them to your shopping cart
Checkout: Proceed to checkout and make payment
Track Order: Monitor your order status in real-time
Rate & Review: Provide feedback after order completion

For Restaurant Owners

Restaurant Registration: Register your restaurant on the platform
Menu Management: Add, update, or remove menu items
Order Management: View and manage incoming orders
Analytics: Track sales and customer feedback

🏗️ Project Structure
Online-Food-Delivery-Frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── auth/
│   │   ├── restaurant/
│   │   ├── menu/
│   │   ├── cart/
│   │   └── order/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Register/
│   │   ├── Restaurant/
│   │   ├── Cart/
│   │   └── Profile/
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── payment.js
│   ├── utils/
│   │   ├── helpers.js
│   │   └── constants.js
│   ├── styles/
│   │   ├── global.css
│   │   └── components/
│   ├── App.js
│   └── index.js
├── .env.example
├── package.json
└── README.md
🌐 API Integration
This frontend application integrates with the following APIs:

Authentication API: User registration, login, and session management
Restaurant API: Restaurant listings, menu items, and details
Order API: Order placement, tracking, and history
Payment API: Payment processing and transaction management
Location API: Address management and delivery tracking

🎨 UI/UX Features

Clean Design: Modern and intuitive user interface
Responsive Layout: Seamless experience across all devices
Dark/Light Mode: Toggle between different themes
Loading States: Smooth loading animations and skeletons
Error Handling: User-friendly error messages and fallbacks
Accessibility: WCAG compliant design for all users
