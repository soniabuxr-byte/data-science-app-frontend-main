import AutoScroll from "embla-carousel-auto-scroll";
import {
  BarChart3,
  Database,
  Pencil,
  PlusCircle,
  type LucideIcon,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./carousel";
import { cn } from "./utils";

export interface DataWorkflowStep {
  id: string;
  step: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  badgeClass: string;
  iconClass: string;
}

const defaultWorkflowSteps: DataWorkflowStep[] = [
  {
    id: "explore",
    step: 1,
    title: "Explore Data",
    description:
      "View and browse your data in a clean, interactive table format with search and pagination",
    Icon: Database,
    badgeClass: "bg-blue-500 text-white",
    iconClass: "text-blue-600",
  },
  {
    id: "manipulate",
    step: 2,
    title: "Manipulate Data",
    description:
      "Filter rows, sort columns, and transform your dataset with powerful tools",
    Icon: Pencil,
    badgeClass: "bg-violet-500 text-white",
    iconClass: "text-violet-600",
  },
  {
    id: "augment",
    step: 3,
    title: "Augment Data",
    description:
      "Create calculated columns, concatenate fields, and derive new insights",
    Icon: PlusCircle,
    badgeClass: "bg-emerald-500 text-white",
    iconClass: "text-emerald-600",
  },
  {
    id: "visualize",
    step: 4,
    title: "Visualize Data",
    description:
      "Generate beautiful charts and graphs to understand your data patterns",
    Icon: BarChart3,
    badgeClass: "bg-orange-500 text-white",
    iconClass: "text-orange-600",
  },
];

function loopSteps(steps: DataWorkflowStep[]): DataWorkflowStep[] {
  return [...steps, ...steps, ...steps];
}

export interface Logos3Props {
  heading?: string;
  steps?: DataWorkflowStep[];
  className?: string;
}

export function Logos3({
  heading = "Your data workflow",
  steps = defaultWorkflowSteps,
  className,
}: Logos3Props) {
  const slides = loopSteps(steps);

  return (
    <section className={cn("py-8 md:py-10", className)}>
      <div className="mx-auto max-w-6xl px-2 sm:px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-bold tracking-tight text-pretty text-slate-900 md:text-2xl lg:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600 text-sm md:text-base">
            Four powerful ways to work with your data
          </p>
        </div>

        <div className="relative mx-auto mt-8 md:mt-10">
          <Carousel
            opts={{ align: "start", loop: true, dragFree: true }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                speed: 0.8,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {slides.map((item, index) => {
                const Icon = item.Icon;
                return (
                  <CarouselItem
                    key={`${item.id}-${index}`}
                    className="basis-[85%] pl-2 sm:basis-[70%] md:basis-[45%] md:pl-4 lg:basis-[32%]"
                  >
                    <div className="mx-1 flex h-full min-h-[200px] flex-col rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-shadow hover:shadow-md md:min-h-[220px] md:p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-sm",
                            item.badgeClass,
                          )}
                          aria-hidden
                        >
                          {item.step}
                        </div>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                          <Icon className={cn("h-6 w-6", item.iconClass)} />
                        </div>
                      </div>
                      <h3 className="mt-4 font-semibold text-lg leading-tight text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent md:w-12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent md:w-12"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}

export { defaultWorkflowSteps };
