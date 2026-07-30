export default function Header() {
  return (
    <header className="masthead">
      <div className="wrap">
        <div className="masthead__bar">
          <span className="eyebrow masthead__eyebrow--left">
            Crochet Pattern Editorial
          </span>
          <a className="masthead__logo" href="#" aria-label="The Pattern Issue home">
            <img
              src="/images/logo-wordmark-transparent.png"
              alt="The Pattern Issue"
              width={220}
              height={200}
            />
          </a>
          <span className="eyebrow masthead__eyebrow--right">Issue No. 001</span>
        </div>
      </div>
    </header>
  );
}
