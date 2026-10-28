import Link from 'next/link';

const benefits = [
  'Flexible hours around your route',
  'Earn by delivering food, essentials and parcels',
  'Local delivery zones in and around Mallow',
  'Simple registration and support',
];

const vehicleTypes = [
  { name: 'Bicycle', icon: '🚲', text: 'Best for town centre and Shortcastle Street routes.' },
  { name: 'Scooter', icon: '🏍️', text: 'Perfect for fast food and local urgent drops.' },
  { name: 'Car', icon: '🚗', text: 'Best for larger orders and parcel delivery.' },
];

export default function DriversPage() {
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
            <Link href="/">Home</Link>
            <Link href="/#restaurants">Restaurants</Link>
            <Link href="/partners">Partners</Link>
          </nav>
          <div className="nav-actions">
            <Link href="/checkout" className="secondary-btn">Order</Link>
            <Link href="/drivers" className="primary-btn">Apply</Link>
          </div>
        </div>
      </header>

      <section className="driver-hero section">
        <div className="container driver-hero-grid">
          <div>
            <p className="eyebrow">Join the local network</p>
            <h1>Become a Mallow Express courier.</h1>
            <p className="subhead">
              Flexible work, local routes, simple onboarding, and reliable support for riders and drivers across Mallow.
            </p>
            <div className="driver-actions">
              <Link href="#apply" className="primary-btn">Start application</Link>
              <Link href="/" className="secondary-btn">Back home</Link>
            </div>
          </div>

          <div className="driver-info-box">
            <div className="driver-promo-card">
              <span>💸</span>
              <div>
                <strong>Flexible earnings</strong>
                <p>Deliver food, essentials and parcels with local routes.</p>
              </div>
            </div>
            <div className="driver-promo-card">
              <span>📍</span>
              <div>
                <strong>Local coverage</strong>
                <p>Shortcastle Street, town centre and nearby areas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-head center">
            <h2>Why deliver with us</h2>
          </div>

          <div className="benefits-grid">
            {benefits.map((item) => (
              <div className="benefit-card" key={item}>
                <span>✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <h2>Choose your vehicle</h2>
          </div>

          <div className="vehicle-grid">
            {vehicleTypes.map((vehicle) => (
              <div className="vehicle-card" key={vehicle.name}>
                <div className="vehicle-icon">{vehicle.icon}</div>
                <h3>{vehicle.name}</h3>
                <p>{vehicle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section" id="apply">
        <div className="container apply-box">
          <div>
            <p className="eyebrow">Application</p>
            <h2>Sign up as a courier</h2>
          </div>

          <form className="driver-form">
            <div className="form-grid two-col">
              <label>
                Full name
                <input type="text" placeholder="Your full name" />
              </label>
              <label>
                Phone number
                <input type="tel" placeholder="087 000 0000" />
              </label>
            </div>

            <div className="form-grid two-col">
              <label>
                Vehicle type
                <select defaultValue="bike">
                  <option value="bike">Bicycle</option>
                  <option value="scooter">Scooter</option>
                  <option value="car">Car</option>
                </select>
              </label>
              <label>
                Area
                <input type="text" placeholder="Mallow town centre" />
              </label>
            </div>

            <label>
              Email address
              <input type="email" placeholder="you@example.com" />
            </label>

            <label>
              Why do you want to join?
              <textarea rows={4} placeholder="Tell us a bit about you" />
            </label>

            <button className="primary-btn">Submit application</button>
          </form>
        </div>
      </section>
    </main>
  );
}
