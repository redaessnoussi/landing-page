
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { ReactNode } from 'react';

export function EmailCaptureDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">
            Unlock Human-Like SEO Articles Instantly!
          </DialogTitle>
          <DialogDescription>
            Join 10,000+ marketers using Content Craft AI to generate
            undetectable, search-optimized content in seconds.
          </DialogDescription>
        </DialogHeader>
        <form
          id="sib-form"
          method="POST"
          action="https://914a2849.sibforms.com/serve/MUIFANWSmZjhyaIXCKzNNzGBK2BLy_i001eU9vm_Y1BX2KHAm5bMlqlhtlUXiygmTaOGjKXjwXIsh2U1N3w6RRyIgc-cbhKDMOAwyFYrD7nb54deFGk-kY2NaUgUyZAzbpCt9zFw8H3TJ9C5y6nHjDDvCLuoiutiq5GrtASRMh2tQmGeMFnEBE1uFTMGtrEA-o4concBa97qeS9i"
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="EMAIL" className="font-bold">
              Your Best Email Address
            </Label>
            <Input
              type="email"
              id="EMAIL"
              name="EMAIL"
              autoComplete="off"
              placeholder="your@email.com"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-foreground hover:bg-foreground/90 text-background font-bold"
          >
            Get Started & Download
          </Button>
          <input
            type="text"
            name="email_address_check"
            value=""
            className="hidden"
            readOnly
          />
          <input type="hidden" name="locale" value="en" />
          <input type="hidden" name="html_type" value="simple" />
        </form>
      </DialogContent>
    </Dialog>
  );
}
