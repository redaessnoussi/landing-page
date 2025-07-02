import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, Link as LinkIcon, Image as ImageIcon, BarChart } from 'lucide-react';

const features = [
  {
    icon: CalendarDays,
    title: 'Scheduling & Calendar',
    description: 'Plan your content months in advance with our intuitive drag-and-drop calendar. Automate your publishing schedule and never miss a deadline again.',
    image: 'https://placehold.co/800x600.png',
    dataAiHint: 'scheduling calendar',
    align: 'right',
  },
  {
    icon: LinkIcon,
    title: 'Smart Linking',
    description: 'Our AI automatically suggests relevant internal and external links to improve your site\'s SEO and user engagement. Build a powerful link structure effortlessly.',
    image: 'https://placehold.co/800x600.png',
    dataAiHint: 'smart linking',
    align: 'left',
  },
  {
    icon: ImageIcon,
    title: 'AI Image Integration',
    description: 'Automatically generate unique, royalty-free featured images for your articles. Match your content\'s tone and style with stunning visuals created on the fly.',
    image: 'https://placehold.co/800x600.png',
    dataAiHint: 'image generation',
    align: 'right',
  },
  {
    icon: BarChart,
    title: 'Performance Tracking',
    description: 'Monitor your content\'s traffic, keyword rankings, and engagement directly from your WordPress dashboard. Make data-driven decisions to grow your audience.',
    image: 'https://placehold.co/800x600.png',
    dataAiHint: 'analytics dashboard',
    align: 'left',
  },
];

export default function ExtendedFeatures() {
  return (
    <section id="features-extended" className="w-full py-12 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            A Full Content Marketing Suite
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Go beyond generation. ContentCraft AI provides the tools you need to manage and optimize your entire content lifecycle.
          </p>
        </div>
        <div className="mt-12 space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid gap-8 md:gap-12 lg:grid-cols-2 items-center ${
                feature.align === 'left' ? 'lg:grid-flow-row-dense' : ''
              }`}
            >
              <div className={`space-y-4 ${
                feature.align === 'left' ? 'lg:col-start-2' : ''
              }`}>
                <div className="inline-block rounded-lg bg-primary p-3 text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <div className="w-full">
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={800}
                      height={600}
                      className="rounded-lg object-cover"
                      data-ai-hint={feature.dataAiHint}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
