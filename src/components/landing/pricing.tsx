import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    priceDescription: 'forever',
    description: 'Get started with our core features for free.',
    cta: 'Get Started Free',
    link: 'https://wordpress.org/plugins/content-craft-ai',
    features: [
      { text: '5 Articles/Month', included: true },
      { text: '500 Words/Article', included: true },
      { text: 'gpt-4o-mini model access', included: true },
      { text: 'Basic SEO Features', included: true },
      { text: 'AI Image Generation', included: true },
    ],
    highlight: false,
  },
  {
    name: 'Basic',
    price: '$29',
    priceDescription: '/ month',
    description: 'Perfect for content creators and bloggers.',
    cta: 'Choose Basic',
    link: 'https://wordpress.org/plugins/content-craft-ai',
    features: [
      { text: '50 Articles/Month', included: true },
      { text: '1000 Words/Article', included: true },
      { text: 'gpt-4o-mini model access', included: true },
      { text: 'Advanced SEO Features', included: true },
      { text: 'AI Image Generation', included: true },
    ],
    highlight: true,
  },
  {
    name: 'Pro',
    price: '$79',
    priceDescription: '/ month',
    description: 'For power users and agencies scaling content.',
    cta: 'Choose Pro',
    link: 'https://wordpress.org/plugins/content-craft-ai',
    features: [
      { text: '150 Articles/Month', included: true },
      { text: '2000 Words/Article', included: true },
      { text: 'All models (incl. gpt-4.1 series)', included: true },
      { text: 'Advanced SEO Features', included: true },
      { text: 'AI Image Generation', included: true },
    ],
    highlight: false,
  },
];

const FeatureItem = ({ included, children }: { included: boolean; children: React.ReactNode }) => (
  <li className="flex items-center">
    {included ? (
      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
    ) : (
      <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
    )}
    <span>{children}</span>
  </li>
);


export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Choose the Plan That's Right for You
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Simple, transparent pricing. No hidden fees.
            </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col h-full ${plan.highlight ? 'border-primary shadow-2xl scale-105' : ''}`}>
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center flex-grow">
                    <div className="text-center my-4">
                        <span className="text-5xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.priceDescription}</span>
                    </div>
                    <ul className="space-y-3 w-full my-6 text-left">
                        {plan.features.map(feature => (
                           <FeatureItem key={feature.text} included={feature.included}>{feature.text}</FeatureItem>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button asChild size="lg" className="w-full text-lg" variant={plan.highlight ? 'default' : 'outline'}>
                        <Link href={plan.link} target="_blank" rel="noopener noreferrer">{plan.cta}</Link>
                    </Button>
                </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
