import React from "react";
import { Link } from "react-router-dom";
import { Building2, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions: React.FC = () => {
  const brokerBullets = [
    "Managed hosting for brokerage sites and agent microsites.",
    "Modern brokerage website with listings and lead capture.",
    "IT support for office staff and agents, with a clear ticketing path.",
    "Backups, security, and documentation so nothing lives in one person's head.",
  ];

  const agentBullets = [
    "Agent mini-sites or full sites aligned to your brokerage brand.",
    "Featured listings, campaign pages, and clear contact options.",
    "Help with domains, email, and connecting basic tools.",
    "Ongoing support when something breaks the night before an offer.",
  ];

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Who We Serve
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Brokerages and agents on one platform.
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          049NorthRealEstate is built exclusively for the real estate industry. Whether you run an office or you're building a personal brand, we keep the tech side under control.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {/* For Brokerages */}
        <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-emerald-400 via-emerald-500 to-sky-400" />
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 shadow-inner shadow-emerald-100">
              <Building2 className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-semibold text-slate-900">
              For Brokerages
            </h2>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Make your brokerage the tech backbone, not the bottleneck. Centralise hosting, websites, and support under one accountable partner.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {brokerBullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* For Agents & Teams */}
        <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-400 via-emerald-400 to-sky-500" />
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-700 shadow-inner shadow-sky-100">
              <UserRound className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-semibold text-slate-900">
              For Agents & Teams
            </h2>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Look professional online without becoming your own IT department. We give you a clean, fast presence focused on leads and credibility.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {agentBullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6">
        <div>
          <h3 className="text-xl font-semibold text-emerald-900">
            Ready to see how this fits your office?
          </h3>
          <p className="text-sm text-emerald-800">
            Start with a pricing snapshot or talk through your current setup and agent count.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-700">
            <Link to="/pricing">See pricing</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50"
          >
            <Link to="/contact">Talk to us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
