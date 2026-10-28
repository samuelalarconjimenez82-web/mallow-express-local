const categories = [
  { name: 'Pizza', emoji: '🍕' },
  { name: 'Burgers', emoji: '🍔' },
  { name: 'Kebab', emoji: '🌯' },
  { name: 'Sushi', emoji: '🍣' },
  { name: 'Healthy', emoji: '🥗' },
  { name: 'Coffee', emoji: '☕' },
];

const restaurants = [
  {
    name: 'Mallow Pizza Hub',
    category: 'Pizza',
    time: '20-30 min',
    rating: 4.8,
    price: '€€',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    address: 'Shortcastle Street, Mallow',
  },
  {
    name: 'Shortcastle Grill',
    category: 'Burgers',
    time: '25-35 min',
    rating: 4.7,
    price: '€€',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    address: 'Town Centre, Mallow',
  },
  {
    name: 'Sushi Mallow',
    category: 'Sushi',
    time: '30-40 min',
    rating: 4.9,
    price: '€€€',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80',
    address: 'Mallow Town Centre',
  },
  {
    name: 'Coffee Corner',
    category: 'Coffee',
    time: '15-20 min',
    rating: 4.6,
    price: '€',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    address: 'Main Street, Mallow',
  },
];

const steps = [
  'Search by location or category',
  'Choose a local restaurant',
  'Track your order in real time',
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="container nav">
          <div className="brand-wrap">
            <div className="brand-mark">M</div>
            <div>
              <p className="brand-name">Mallow Express</p>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#discover">Discover</a>
            <a href="#partners">Partners</a>
            <a href="#how-it-works">How it works</a>
            <a href="#drivers">Drivers</a>
          </nav>

          <div className="nav-actions">
            <button className="secondary-btn">Sign in</button>
            <button className="primary-btn">Order now</button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Fast local delivery in Mallow</p>
            <h1>Food, essentials and parcels delivered in minutes.</h1>
            <p className="subhead">
              From Shortcastle Street to Mallow town centre, discover the best local food and
              delivery experiences for your neighbourhood.
            </p>

            <div className="search-box">
              <input type="text" placeholder="Enter your delivery address" />
              <button>Find food</button>
            </div>

            <div className="hero-badges">
              <span>🚚 20 min avg delivery</span>
              <span>⭐ 4.8 local rating</span>
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

      <section className="section" id="discover">
        <div className="container">
          <div className="section-head">
            <h2>Popular categories</h2>
            <a href="#">View all</a>
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

      <section className="section alt-section">
        <div className="container">
          <div className="section-head">
            <h2>Restaurants near you</h2>
            <a href="#">Explore</a>
          </div>

          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <article className="restaurant-card" key={restaurant.name}>
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

                  <div className="restaurant-meta">
                    <p>{restaurant.address}</p>
                    <p>{restaurant.time}</p>
                  </div>

                  <button className="primary-btn small">Order</button>
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
            {steps.map((step, index) => (
              <div className="step-card" key={step}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section" id="drivers">
        <div className="container split-wrap">
          <div>
            <p className="eyebrow">Local drivers</p>
            <h2>Become a courier for Mallow</h2>
            <p className="subhead compact">
              Join the local delivery network with flexible hours, local routes and reliable pay.
            </p>
            <ul className="bullet-list">
              <li>Earn by delivering food, essentials and parcels</li>
              <li>Flexible work for bikes, scooters and cars</li>
              <li>Local delivery zones around Mallow</li>
            </ul>
            <button className="primary-btn">Apply as driver</button>
          </div>

          <div className="driver-box">
            <div className="driver-card">
              <span className="driver-figure">🚲</span>
              <div>
                <strong>Bicycle courier</strong>
                <p>Perfect for centre and Shortcastle Street routes</p>
              </div>
            </div>
            <div className="driver-card">
              <span className="driver-figure">🏍️</span>
              <div>
                <strong>Fast delivery</strong>
                <p>Great for food and urgent local parcel drops</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="partners">
        <div className="container newsletter-box">
          <div>
            <p className="eyebrow">For local businesses</p>
            <h2>Grow with Mallow Express</h2>
          </div>
          <button className="primary-btn">Partner with us</button>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-wrap">
          <div>
            <p className="brand-name">Mallow Express</p>
            <p>Fast local delivery for Mallow.</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
