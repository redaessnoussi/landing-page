import Logo from '@/components/logo';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
                <Logo className="h-8 w-8 text-primary" />
                <span className="font-headline text-lg font-bold">Content Craft AI</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground">
              <Link href="#about" className="hover:underline">
                About
              </Link>
              <Link href="mailto:contact@fluxlogic.us" className="hover:underline">
                Contact
              </Link>
              <Link href="#terms" className="hover:underline">
                Terms & Conditions
              </Link>
              <Link href="#refund" className="hover:underline">
                Refund Policy
              </Link>
              <Link href="#privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
            <p className="text-sm text-primary-foreground/60">&copy; {currentYear} Flux Logic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
