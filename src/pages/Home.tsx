import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
  const heroPills = [
    "Managed hosting",
    "Brokerage & agent sites",
    "Hands-on IT support",
  ];

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50 via-white to-sky-50 px-6 py-10 shadow-xl sm:px-10">
        <div className="pointer-events-none absolute -left-16 -top-24 h-60 w-60 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-8 -bottom-16 h-56 w-56 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
              IT, hosting & web for real estate
            </span>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              IT, Hosting & Websites Built for Real Estate
            </h1>

            <p className="text-sm sm:text-base text-slate-700 sm:max-w-xl">
              One platform for brokerages and agents. We design, host, and
              support the systems your people rely on every day – so you never
              lose a deal to bad tech.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="solutions-broker-badge">For Brokerages</span>
              <span className="solutions-agent-badge">
                For Agents &amp; Teams
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 text-white hover:bg-emerald-700"
              >
                <Link to="/solutions">View Solutions</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-200 bg-white/80 text-emerald-700 hover:bg-emerald-50"
              >
                <Link to="/contact">Talk to Us About Your Setup</Link>
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              No generic “small business” packages. Everything is tuned for the
              real estate industry.
            </p>

            <div className="flex flex-wrap gap-2 text-xs text-emerald-800">
              {heroPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full bg-emerald-100 px-3 py-1 font-medium ring-1 ring-emerald-200"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur">
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Status
                </p>
                <p className="text-sm font-semibold text-emerald-700">
                  All systems operational
                </p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-center text-sm font-semibold text-emerald-700 shadow-inner shadow-emerald-200">
                99.9%
              </span>
            </div>
            {/*
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Brokerage Sites
                </p>
                <p className="text-2xl font-semibold text-slate-900">12 live</p>
                <p className="mt-1 text-xs text-slate-600">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 mr-1">
                    99.9% uptime
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                    Managed SSL
                  </span>
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Agent Profiles
                </p>
                <p className="text-2xl font-semibold text-slate-900">
                  148 active
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 mr-1">
                    On-brand
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                    Lead forms
                  </span>
                </p>
              </div>
            </div>
            */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 text-emerald-900 ring-1 ring-emerald-200">
                <p className="text-sm font-semibold">Trust &amp; Data</p>
                <p className="mt-1 text-sm">
                  Backups, patches, and uptime monitored. One accountable
                  partner.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Agent Onboarding
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Email, domain, and profile setup handled for new agents, so
                  your staff doesn&apos;t have to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
