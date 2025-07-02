import { CheckCircle } from 'lucide-react';

const benefits = [
  'Save up to 80% on content costs',
  'Generate articles in minutes',
  'Keep consistent tone & style',
  'Reach global audiences',
  'Mobile-friendly UI',
];

export default function BenefitsBanner() {
  return (
    <section id="benefits" className="w-full bg-primary py-12 md:py-20 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unlock Unprecedented Efficiency
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
            ContentCraft AI is more than a tool—it's your new content strategy partner.
            </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
              <span className="text-base">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
