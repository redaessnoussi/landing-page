export default function DemoVideo() {
  return (
    <section id="demo" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
            See ContentCraft AI in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch how easy it is to generate high-quality, SEO-optimized content in just a few clicks.
          </p>
        </div>
        <div className="mt-10 mx-auto max-w-4xl">
          <div className="aspect-video overflow-hidden rounded-xl border shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
