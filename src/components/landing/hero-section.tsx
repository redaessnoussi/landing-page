import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background via-blue-50 to-indigo-100 dark:from-background dark:via-blue-950/20 dark:to-indigo-950/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Generate Human-Like SEO Articles in Seconds
                </h1>
                <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Bypass AI detectors like GPTZero & Originality.ai with advanced GPT-4 power.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="#pricing">
                        Get Started
                        <MoveRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
