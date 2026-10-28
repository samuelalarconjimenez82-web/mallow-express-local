import Link from 'next/link';

const orderItems = [
  { name: 'Margherita Pizza', qty: 1, price: '€14.90' },
  { name: 'Cappuccino', qty: 1, price: '€4.50' },
  { name: 'Delivery fee', qty: 1, price: '€2.50' },
];

export default function CheckoutPage() {
  const subtotal = 21.90;
  const total = 24.40;

  return (
    <main className="checkout-shell">
      <header className="restaurant-header">
        <div className="container restaurant-topbar">
          <Link href="/" className="brand-wrap">
            <div className="brand-mark">M</div>
            <div>
              <p className="brand-name">Mallow Express</p>
            </div>
          </Link>
        </div>
      </header>

      <section className="checkout-section section">
        <div className="container checkout-wrap">
          <div className="checkout-card left-card">
            <p className="eyebrow">Secure checkout</p>
            <h2>Delivery details</h2>

            <form className="checkout-form">
              <div className="form-grid two-col">
                <label>
                  First name
                  <input type="text" placeholder="John" />
                </label>
                <label>
                  Last name
                  <input type="text" placeholder="Smith" />
                </label>
              </div>

              <label>
                Address
                <input type="text" placeholder="Shortcastle Street, Mallow" />
              </label>

              <div className="form-grid two-col">
                <label>
                  Phone
                  <input type="tel" placeholder="087 123 4567" />
                </label>
                <label>
                  Delivery time
                  <input type="text" placeholder="ASAP" />
                </label>
              </div>

              <label>
                Payment method
                <select defaultValue="card">
                  <option value="card">Credit / Debit Card</option>
                  <option value="apple">Apple Pay</option>
                  <option value="google">Google Pay</option>
                </select>
              </label>

              <label>
                Card number
                <input type="text" placeholder="4242 4242 4242 4242" />
              </label>

              <div className="form-grid two-col">
                <label>
                  Expiry
                  <input type="text" placeholder="12/30" />
                </label>
                <label>
                  CVC
                  <input type="text" placeholder="123" />
                </label>
              </div>
            </form>
          </div>

          <div className="checkout-card right-card">
            <h3>Order summary</h3>
            <div className="summary-list">
              {orderItems.map((item) => (
                <div key={item.name} className="summary-line">
                  <span>
                    {item.name} x{item.qty}
                  </span>
                  <strong>{item.price}</strong>
                </div>
              ))}
            </div>

            <div className="summary-total">
              <span>Subtotal</span>
              <strong>€{subtotal.toFixed(2)}</strong>
            </div>
            <div className="summary-total">
              <span>Estimated total</span>
              <strong>€{total.toFixed(2)}</strong>
            </div>

            <div className="secure-note">
              <span>🔒</span>
              <p>Secure payment via Stripe. Your data is protected.</p>
            </div>

            <button className="primary-btn full-width">Pay securely</button>
          </div>
        </div>
      </section>
    </main>
  );
}
