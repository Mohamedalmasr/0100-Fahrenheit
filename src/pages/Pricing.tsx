import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Brokerage Platform",
    body: "Managed hosting, brokerage site, and IT support starting from a predictable monthly fee.",
    bullets: [
      "Includes core hosting, backups, and support.",
      "Tiered by number of agents and complexity.",
      "Optional add-ons for advanced security and integrations.",
    ],
    accent: "from-emerald-400 to-sky-400",
  },
  {
    title: "Agent & Team Packages",
    body: "Professional agent sites and basic IT help, either through the brokerage or direct with us.",
    bullets: [
      "One-time setup plus low ongoing hosting/support.",
      "Works with or without a brokerage platform agreement.",
      "Clear scope so you know what&apos;s included.",
    ],
    accent: "from-sky-400 to-emerald-400",
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Pricing Snapshot
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Straightforward plans for offices and individuals.
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Final pricing depends on complexity, but the structure is simple: a
          core platform for brokerages, plus optional agent packages.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${plan.accent}`} />
            <h2 className="text-xl font-semibold text-slate-900">
              {plan.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{plan.body}</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {plan.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            Want a fast estimate?
          </h3>
          <p className="text-sm text-slate-600">
            Share your current stack and agent count and we&apos;ll outline a
            starting price the same day.
          </p>
        </div>
        <Button className="bg-emerald-600 text-white hover:bg-emerald-700" asChild>
          <Link to="/contact">Start the conversation</Link>
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
