import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Search, Globe } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Undetectable AI Content',
    description: 'Generates sophisticated, human-like content that consistently bypasses common AI detectors.',
  },
  {
    icon: Search,
    title: 'Built-In SEO Optimization',
    description: 'Automatically optimizes keywords, meta tags, and header structures for top search engine rankings.',
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Reach a global audience with support for English, French, Spanish, German, and many more languages.',
  },
];

export default function KeyFeatures() {
  return (
    <section id="key-features" className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
