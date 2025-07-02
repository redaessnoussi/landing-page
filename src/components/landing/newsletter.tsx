export default function Newsletter() {
  return (
    <section id="newsletter" className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Mailing List
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Stay up to date with the latest features, tips, and special offers.
            </p>
        </div>
        <div className="mt-10 mx-auto w-full max-w-[540px]">
          <iframe 
            src="https://914a2849.sibforms.com/serve/MUIFAIEK9q0wSP2n7ZIFK43Z3-C4tK4ELgUOr9eXnHxpauNZcNux9sV-hOFD53avJMzbqw7oXrfEZpIqKjPaTAcmiqkMXWoXuo0nH3SM1v5S1DgTWQ5eMNlROsWel711QGIarBexAVe5mz1AIG65qv6F6n5CmxRLiatTwgYGGniImp6RAnmnQvWAOSWXdhuMnqUVQ2DKFcC9m-QQ" 
            frameBorder="0" 
            scrolling="auto" 
            className="w-full h-[305px]"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </section>
  );
}
