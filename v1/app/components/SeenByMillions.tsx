const TILES = [
  { src: "/images/tiktok-1.jpg", alt: "The original pink sequin crochet dress shown in a viral TikTok post." },
  { src: "/images/tiktok-2.jpg", alt: "The lace-up back of the pink sequin crochet dress." },
  { src: "/images/tiktok-3.jpg", alt: "Close view of the original pink sequin crochet dress." },
  { src: "/images/tiktok-4.jpg", alt: "Full-length mirror view of the pink sequin crochet dress." },
];

export default function SeenByMillions() {
  return (
    <section className="seen">
      <div className="wrap">
        <div className="seen__head">
          <p className="seen__index">01 / THE ORIGINAL</p>
          <h2 className="seen__title">SEEN BY MILLIONS</h2>
          <p className="seen__copy">
            The original pink version reached 9M+ views and 1.8M likes on
            TikTok.
          </p>
        </div>

        <div className="seen__grid">
          {TILES.map((tile, index) => (
            <figure className={`seen__tile seen__tile--${index + 1}`} key={tile.src}>
              <img src={tile.src} alt={tile.alt} loading="lazy" />
            </figure>
          ))}
        </div>

        <div className="seen__metrics" aria-label="TikTok reach">
          <span>9M+ VIEWS</span>
          <span>1.8M LIKES</span>
          <span>THE ORIGINAL PINK DRESS</span>
        </div>
      </div>
    </section>
  );
}
