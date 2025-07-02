import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Bot, ListChecks } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Title Generator",
    description:
      "Generate dozens of catchy, SEO-friendly titles from your keywords in seconds. Pick the best one to start your article, just like in a real WordPress environment.",
    image: "https://i.imgur.com/KcIFbp6.png",
    dataAiHint: "writing keywords",
    align: "right",
  },
  {
    icon: Bot,
    title: "Article Generator",
    description:
      "Turn your chosen title into a complete, human-like article. Our AI handles the structure, content, and flow, ready for you to publish.",
    image: "https://i.imgur.com/6zvLXA2.png",
    dataAiHint: "ai writing",
    align: "left",
  },
  {
    icon: ListChecks,
    title: "Article Status & Management",
    description:
      "Track your generated articles, check their status, and manage your content pipeline all in one place. See which articles are ready, in progress, or scheduled.",
    image: "https://i.imgur.com/3TWRePE.png",
    dataAiHint: "task list",
    align: "right",
  },
];

export default function ExtendedFeatures() {
  return (
    <section
      id="features-extended"
      className="w-full py-12 md:py-24 bg-secondary/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            A Full Content Marketing Suite
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Go beyond generation. Content Craft AI provides the tools you need
            to manage and optimize your entire content lifecycle.
          </p>
        </div>
        <div className="mt-12 space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid gap-8 md:gap-12 lg:grid-cols-2 items-center ${
                feature.align === "left" ? "lg:grid-flow-row-dense" : ""
              }`}
            >
              <div
                className={`space-y-4 ${
                  feature.align === "left" ? "lg:col-start-2" : ""
                }`}
              >
                <div className="inline-block rounded-lg bg-primary p-3 text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-2xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
