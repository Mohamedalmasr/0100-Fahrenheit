import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Contact
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Let your people sell. We&apos;ll handle the tech.
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Book a short discovery call and we&apos;ll walk through your current
          setup, what&apos;s working, what&apos;s risky, and what we&apos;d
          change first. No fluff, just a clear picture and next steps.
        </p>
      </header>

      <div className="flex flex-col gap-6 rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50 via-white to-sky-50 p-8 shadow-xl">
        <div className="space-y-2">
          <p className="text-sm font-medium text-emerald-800">
            Preferred
          </p>
          <Button
            asChild
            size="lg"
            className="w-fit bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <a href="mailto:info@049northrealestate.com">
              Email us to book a call
            </a>
          </Button>
        </div>
        <div className="space-y-2 text-sm text-slate-700">
          <p>
            Prefer a form? Wire one into this section later and route it
            straight to the right person.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-slate-600">
            <span className="rounded-full bg-white px-3 py-1 ring-1 ring-emerald-100">
              Discovery call
            </span>
            <span className="rounded-full bg-white px-3 py-1 ring-1 ring-emerald-100">
              Migration review
            </span>
            <span className="rounded-full bg-white px-3 py-1 ring-1 ring-emerald-100">
              Agent onboarding
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Want to explore the work first?
          </h2>
          <p className="text-sm text-slate-600">
            Review solutions and pricing, then jump back here when you&apos;re
            ready.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            variant="outline"
            className="border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50"
          >
            <Link to="/solutions">Solutions</Link>
          </Button>
          <Button
            asChild
            className="bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <Link to="/pricing">Pricing</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
