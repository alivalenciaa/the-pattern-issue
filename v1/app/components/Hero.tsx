export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__lede">
            <h1 className="hero__title">
              <span>The</span>
              <span>Sequin</span>
              <span>Corset</span>
              <span>Dress</span>
            </h1>

            <p className="hero__desc">
              A made-to-measure crochet pattern with written instructions and
              step-by-step video tutorials.
            </p>

            <a className="hero__cta" href="#waitlist">
              Join the waitlist
              <span aria-hidden="true">↘</span>
            </a>
          </div>

          <figure className="hero__figure">
            <img
              src="/images/hero-sunset.jpg"
              alt="The Sequin Corset Dress in bronze, photographed on the beach at sunset."
            />
            <figcaption>
              <span>Look 001</span>
              <span>Sunset study</span>
            </figcaption>
          </figure>

          <aside className="hero__details">
            <div className="hero__issue" aria-hidden="true">
              001
            </div>

            <div className="hero__release">
              <p className="eyebrow">Release</p>
              <strong>Available to purchase soon.</strong>
              <p>Join the waitlist for release details and first access.</p>
            </div>

            <div className="hero__features">
              <p className="eyebrow">Pattern features</p>
              <ul>
                <li>Written pattern</li>
                <li>Step-by-step video tutorials</li>
                <li>Made-to-measure guidance</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
