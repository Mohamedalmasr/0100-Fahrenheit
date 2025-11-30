import React from "react";
import { CloudCog, MonitorSmartphone, Wrench } from "lucide-react";

const services = [
  {
    title: "Managed Hosting & Infrastructure",
    icon: CloudCog,
    body: "Fast, secure hosting tailored for real estate sites and portals.",
    items: [
      "Monitored uptime and performance tuning.",
      "Daily backups with defined retention.",
      "SSL, patching, and security updates handled for you.",
    ],
  },
  {
    title: "Real Estate Website Design",
    icon: MonitorSmartphone,
    body: "Brokerage sites, agent mini-sites, and campaign pages that actually support business, not just decoration.",
    items: [
      "Conversion-focused layouts with clear calls to action.",
      "Listing and featured property sections.",
      "Lead capture connected to your existing tools where possible.",
    ],
  },
  {
    title: "Ongoing IT Support",
    icon: Wrench,
    body: "When something breaks, your people should know exactly who to call - and get a real answer.",
    items: [
      "Structured ticketing for staff and agents.",
      "Onboarding and offboarding checklists for new agents.",
      "Optional custom integrations and reporting as you grow.",
    ],
  },
];

const Platform: React.FC = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          What We Do
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Core services on top of a managed platform.
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          You shouldn't need five vendors and three favor people to keep your tech running. We provide a single, managed platform covering infrastructure, web, and support.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 shadow-inner shadow-emerald-100">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h2>
              </div>
              <p className="mt-3 text-sm text-slate-600">{service.body}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Platform;
