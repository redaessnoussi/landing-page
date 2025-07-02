
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Newsletter() {
  return (
    <section id="newsletter" className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start Your Free Trial Today
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Sign up now to get 30 days of free access to Content Craft AI. No credit card required.
            </p>
        </div>
        <div className="mt-10 mx-auto w-full max-w-xl">
          <Card>
            <CardHeader className="text-left p-6">
              <CardTitle className="font-headline text-2xl">Unlock Human-Like SEO Articles Instantly!</CardTitle>
              <CardDescription className="pt-2">
                Join 10,000+ marketers using Content Craft AI to generate undetectable, search-optimized content in seconds.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <form 
                id="sib-form" 
                method="POST" 
                action="https://914a2849.sibforms.com/serve/MUIFANWSmZjhyaIXCKzNNzGBK2BLy_i001eU9vm_Y1BX2KHAm5bMlqlhtlUXiygmTaOGjKXjwXIsh2U1N3w6RRyIgc-cbhKDMOAwyFYrD7nb54deFGk-kY2NaUgUyZAzbpCt9zFw8H3TJ9C5y6nHjDDvCLuoiutiq5GrtASRMh2tQmGeMFnEBE1uFTMGtrEA-o4concBa97qeS9i"
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="EMAIL" className="font-bold">Your Best Email Address</Label>
                  <Input 
                    type="email" 
                    id="EMAIL" 
                    name="EMAIL" 
                    autoComplete="off" 
                    placeholder="your@email.com"
                    required 
                  />
                </div>
                <Button type="submit" className="w-full bg-foreground hover:bg-foreground/90 text-background font-bold">
                  Start My Free Trial
                </Button>
                <input type="text" name="email_address_check" value="" className="hidden" readOnly />
                <input type="hidden" name="locale" value="en" />
                <input type="hidden" name="html_type" value="simple" />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
