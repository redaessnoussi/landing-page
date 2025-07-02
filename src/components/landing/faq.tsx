import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What AI models are used?',
    answer: 'We leverage a combination of the most advanced models available, including GPT-4o-mini and the full power of GPT-4, to ensure the highest quality and most human-like content generation.',
  },
  {
    question: 'Can AI detectors identify this content?',
    answer: 'Our plugin is specifically engineered with sophisticated prompting and content structuring techniques to generate text that reliably bypasses leading AI detectors like GPTZero and Originality.ai.',
  },
  {
    question: 'Does it support multiple languages?',
    answer: 'Yes, Content Craft AI has robust multilingual capabilities, supporting English, French, Spanish, German, and a growing list of other languages to help you reach a global audience.',
  },
  {
    question: 'How secure is the plugin?',
    answer: 'Security is our top priority. The plugin is built following WordPress best practices, including data sanitization, output escaping, and the use of nonces to protect against common vulnerabilities.',
  },
  {
    question: 'What happens when I uninstall the plugin?',
    answer: 'Upon uninstallation, Content Craft AI provides an option to cleanly remove all of its data from your database, including settings and generated content history, leaving no trace behind.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Find answers to common questions about Content Craft AI.
            </p>
        </div>
        <div className="mt-10 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
