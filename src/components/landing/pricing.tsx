import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const features = [
    "Unlimited Articles",
    "Undetectable AI Engine",
    "Full SEO Toolkit",
    "All Future Updates",
    "Priority Support"
]

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-md">
            <Card className="shadow-2xl">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-3xl">Simple, All-Inclusive Pricing</CardTitle>
                    <CardDescription>Get every feature, on unlimited sites, with a single purchase.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <div className="text-center my-4">
                        <span className="text-5xl font-bold">$99</span>
                        <span className="text-muted-foreground">/ one-time fee</span>
                    </div>
                    <ul className="space-y-3 w-full my-6">
                        {features.map(feature => (
                            <li key={feature} className="flex items-center">
                                <Check className="h-5 w-5 text-green-500 mr-2"/>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button asChild size="lg" className="w-full text-lg">
                        <Link href="#">Buy Now</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </section>
  );
}
