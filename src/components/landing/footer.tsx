import Logo from '@/components/logo';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
                <Logo className="h-8 w-8 text-primary" />
                <span className="font-headline text-lg font-bold">ContentCraft AI</span>
            </div>
          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row md:gap-6">
            <p>&copy; {currentYear} Flux Logic. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="mailto:contact@fluxlogic.us" className="hover:text-primary hover:underline">
                Contact
              </Link>
              <Link href="mailto:support@fluxlogic.us" className="hover:text-primary hover:underline">
                Support
              </Link>
              <Link href="mailto:reports@fluxlogic.us" className="hover:text-primary hover:underline">
                Bug Reports
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
