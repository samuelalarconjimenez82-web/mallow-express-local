import Link from 'next/link';
import { notFound } from 'next/navigation';
import { restaurants } from '../../data';

const menu = [
  { name: 'Margherita Pizza', price: '€14.90', badge: 'Popular' },
  { name: 'Spicy Chicken Burger', price: '€16.50', badge: 'Chef pick' },
  { name: 'Classic Sushi Box', price: '€18.20', badge: 'Fresh' },
  { name: 'Signature Rice Bowl', price: '€15.00', badge: 'Healthy' },
  { name: 'Cappuccino + Croissant', price: '€6.50', badge: 'Morning' },
  { name: 'Local Parcel Drop', price: '€7.50', badge: 'Fast' },
];

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const restaurant = restaurants.find((item) => item.id === Number(params.id));

  if (!restaurant) {
    notFound();
  }

  return (
    <main className="restaurant-page-shell">
      <header className="restaurant-header">
        <div className="container restaurant-topbar">
          <Link href="/" className="brand-wrap">
            <div className="brand-mark">M</div>
            <div>
              <p className="brand-name">Mallow Express</p>
            </div>
          </Link>
          <Link href="/checkout" className="primary-btn small">
            Go to checkout
          </Link>
        </div>
      </header>

      <section className="restaurant-hero">
        <div className="container restaurant-hero-wrap">
          <img src={restaurant.image} alt={restaurant.name} className="restaurant-hero-image" />
          <div className="restaurant-hero-copy">
            <p className="eyebrow">{restaurant.category}</p>
            <h1>{restaurant.name}</h1>
            <p className="restaurant-address">{restaurant.address}</p>
            <div className="restaurant-meta-inline">
              <span>⭐ {restaurant.rating}</span>
              <span>{restaurant.time}</span>
              <span>{restaurant.price}</span>
            </div>
            <p className="restaurant-description-block">{restaurant.description}</p>
            <div className="restaurant-actions">
              <button className="primary-btn">Add to cart</button>
              <Link href="/checkout" className="secondary-btn">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section restaurant-menu-section">
        <div className="container">
          <div className="section-head">
            <h2>Popular items</h2>
            <span>Fresh and ready</span>
          </div>

          <div className="menu-grid">
            {menu.map((item) => (
              <div key={item.name} className="menu-item-card">
                <div className="menu-item-top">
                  <span className="menu-badge">{item.badge}</span>
                  <strong>{item.price}</strong>
                </div>
                <h3>{item.name}</h3>
                <button className="primary-btn small">Add</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
