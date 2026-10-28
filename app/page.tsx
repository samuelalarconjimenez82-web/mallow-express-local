import Link from 'next/link';

const categories = [
  { name: 'Pizza', emoji: '🍕' },
  { name: 'Burgers', emoji: '🍔' },
  { name: 'Kebab', emoji: '🌯' },
  { name: 'Sushi', emoji: '🍣' },
  { name: 'Healthy', emoji: '🥗' },
  { name: 'Coffee', emoji: '☕' },
  { name: 'Essentials', emoji: '🛒' },
  { name: 'Parcel', emoji: '📦' },
];

const restaurants = [
  {
    id: 1,
    name: 'Mallow Pizza Hub',
    category: 'Pizza',
    time: '20-30 min',
    rating: 4.8,
    price: '€€',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    address: 'Shortcastle Street, Mallow',
    description: 'Fresh pizza, classic toppings and quick delivery around the centre.',
  },
  {
    id: 2,
    name: 'Shortcastle Grill',
    category: 'Burgers',
    time: '25-35 min',
    rating: 4.7,
    price: '€€',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    address: 'Town Centre, Mallow',
    description: 'Premium burgers, loaded fries, and local favourites.',
  },
  {
    id: 3,
    name: 'Sushi Mallow',
    category: 'Sushi',
    time: '30-40 min',
    rating: 4.9,
    price: '€€€',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80',
    address: 'Mallow Town Centre',
    description: 'Fresh sushi, rice bowls and healthy choices delivered fast.',
  },
  {
    id: 4,
    name: 'Coffee Corner',
    category: 'Coffee',
    time: '15-20 min',
    rating: 4.6,
    price: '€',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    address: 'Main Street, Mallow',
    description: 'Coffee, breakfast and light bites for the whole day.',
  },
  {
    id: 5,
    name: 'Green Bowl',
    category: 'Healthy',
    time: '20-30 min',
    rating: 4.8,
    price: '€€',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    address: 'Mallow West',
    description: 'Salads, wraps and fresh plates for a lighter approach to food.',
  },
  {
    id: 6,
    name: 'Parcel Mallow',
    category: 'Parcel',
    time: '30-60 min',
    rating: 4.7,
    price: '€€',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    address: 'Delivery zones across Mallow',
    description: 'Fast local parcel, document and essential delivery support.',
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="container nav">
          <Link href="/" className="brand-wrap" aria-label="Mallow Express home">
            <div className="brand-mark">M</div>
            <div>
              <p className="brand-name">Mallow Express</p>
            </div>
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            <Link href="#discover">Discover</Link>
            <Link href="#restaurants">Restaurants</Link>
            <Link href="#how-it-works">How it works</Link>
            <Link href="/drivers">Drivers</Link>
            <Link href="/partners">Partners</Link>
          </nav>

          <div className="nav-actions">
            <Link href="/drivers" className="secondary-btn">Become driver</Link>
            <Link href="/partners" className="primary-btn">Partner</Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Fast local delivery in Mallow</p>
            <h1>Food, essentials and parcel delivery made local.</h1>
            <p className="subhead">
              Mallow Express brings the best local restaurants, essentials and delivery support to
              Shortcastle Street and the wider Mallow area.
            </p>

            <div className="search-box">
              <input type="text" placeholder="Enter your delivery address" />
              <button>Find food</button>
            </div>

            <div className="hero-badges">
              <span>🚚 20 min avg delivery</span>
              <span>⭐ 4.8 customer rating</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="mini-card card-one">
              <div className="mini-card-top">
                <span className="pill">Live</span>
                <span>Shortcastle St</span>
              </div>
              <div className="mini-list">
                <div>
                  <strong>Pizza</strong>
                  <span>20 min</span>
                </div>
                <div>
                  <strong>Grill</strong>
                  <span>25 min</span>
                </div>
                <div>
                  <strong>Sushi</strong>
                  <span>30 min</span>
                </div>
              </div>
            </div>

            <div className="mini-card card-two">
              <div className="delivery-dot" />
              <div>
                <p>Driver nearby</p>
                <strong>2 mins away</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {[
            { value: '4.8', label: 'Average local rating' },
            { value: '20 min', label: 'Average delivery time' },
            { value: '12K+', label: 'Local deliveries' },
          ].map((item) => (
            <div className="stat-box" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="discover">
        <div className="container">
          <div className="section-head">
            <h2>Popular categories</h2>
            <Link href="#">View all</Link>
          </div>

          <div className="categories-grid">
            {categories.map((category) => (
              <div className="category-card" key={category.name}>
                <span>{category.emoji}</span>
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section" id="restaurants">
        <div className="container">
          <div className="section-head">
            <h2>Restaurants near you</h2>
            <Link href="#">Explore</Link>
          </div>

          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <article className="restaurant-card" key={restaurant.id}>
                <img src={restaurant.image} alt={restaurant.name} />
                <div className="restaurant-body">
                  <div className="restaurant-row">
                    <h3>{restaurant.name}</h3>
                    <span className="rating">⭐ {restaurant.rating}</span>
                  </div>

                  <div className="tag-row">
                    <span>{restaurant.category}</span>
                    <span>{restaurant.price}</span>
                  </div>

                  <p className="restaurant-description">{restaurant.description}</p>

                  <div className="restaurant-meta">
                    <p>{restaurant.address}</p>
                    <p>{restaurant.time}</p>
                  </div>

                  <Link href={`/restaurant/${restaurant.id}`} className="primary-btn small order-btn">
                    Order
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-head center">
            <h2>How it works</h2>
          </div>

          <div className="steps-grid">
            {[
              'Enter your location or postcode',
              'Browse nearby restaurants and essentials',
              'Track your delivery in real time',
            ].map((step, index) => (
              <div className="step-card" key={step}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-wrap">
          <div>
            <p className="brand-name">Mallow Express</p>
            <p>Fast local delivery for Mallow.</p>
          </div>
          <div className="footer-links">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
