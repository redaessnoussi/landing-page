import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="hidden font-headline text-xl font-bold sm:inline-block">
            ContentCraft AI
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="https://wordpress.org/plugins/content-craft-ai" target="_blank" rel="noopener noreferrer">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
