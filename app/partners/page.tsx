import Link from 'next/link';

const partnerBenefits = [
  'Get your business discovered by local customers',
  'Offer delivery and click-and-collect options',
  'Reach new customers near Shortcastle Street and Mallow',
  'Simple management with a local service model',
];

export default function PartnersPage() {
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
            <Link href="/drivers">Drivers</Link>
          </nav>
          <div className="nav-actions">
            <Link href="/checkout" className="secondary-btn">Order</Link>
            <Link href="/partners" className="primary-btn">Partner</Link>
          </div>
        </div>
      </header>

      <section className="section partner-hero">
        <div className="container split-wrap">
          <div>
            <p className="eyebrow">For local businesses</p>
            <h1>Grow your Mallow business with Mallow Express.</h1>
            <p className="subhead">
              Help local restaurants, cafés, bakeries and essential stores reach more customers with fast delivery and local discovery.
            </p>
            <div className="driver-actions">
              <Link href="#partner-form" className="primary-btn">Become a partner</Link>
              <Link href="/" className="secondary-btn">Learn more</Link>
            </div>
          </div>

          <div className="feature-panel">
            <div className="feature-card">
              <strong>Local reach</strong>
              <p>Deliver to Mallow town centre, Shortcastle Street and nearby areas.</p>
            </div>
            <div className="feature-card">
              <strong>Simple setup</strong>
              <p>We support local businesses with delivery and customer visibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-head center">
            <h2>Why partner with us</h2>
          </div>

          <div className="benefits-grid">
            {partnerBenefits.map((item) => (
              <div className="benefit-card" key={item}>
                <span>✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="partner-form">
        <div className="container apply-box">
          <div>
            <p className="eyebrow">Partner registration</p>
            <h2>Register your business</h2>
          </div>

          <form className="driver-form">
            <div className="form-grid two-col">
              <label>
                Business name
                <input type="text" placeholder="Mallow Pizza Hub" />
              </label>
              <label>
                Contact person
                <input type="text" placeholder="Jane Smith" />
              </label>
            </div>

            <div className="form-grid two-col">
              <label>
                Email
                <input type="email" placeholder="hello@business.ie" />
              </label>
              <label>
                Phone
                <input type="tel" placeholder="087 123 4567" />
              </label>
            </div>

            <label>
              Business type
              <select defaultValue="restaurant">
                <option value="restaurant">Restaurant</option>
                <option value="cafe">Cafe</option>
                <option value="retail">Retail / Essentials</option>
                <option value="parcel">Parcel / Local service</option>
              </select>
            </label>

            <label>
              Delivery needs
              <textarea rows={4} placeholder="Tell us how you want to sell and deliver locally" />
            </label>

            <button className="primary-btn">Submit partner request</button>
          </form>
        </div>
      </section>
    </main>
  );
}
