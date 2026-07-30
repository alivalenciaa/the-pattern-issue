export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div className="site-footer__logo">
          <img
            src="/images/logo-wordmark-transparent.png"
            alt="The Pattern Issue"
            width={160}
            height={140}
          />
        </div>
        <div className="site-footer__meta">
          <span>Issue No. 001 / The Sequin Corset Dress</span>
          <span>© {new Date().getFullYear()} The Pattern Issue</span>
        </div>
      </div>
    </footer>
  );
}
