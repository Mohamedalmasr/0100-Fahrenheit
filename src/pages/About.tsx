import React from "react";

const pillars = [
  {
    title: "Real Estate Focused",
    body: "Every decision, pattern, and template we use is based on the needs of brokerages and agents, not random industries.",
  },
  {
    title: "One Accountable Partner",
    body: "No more finger pointing between hosting, web, and IT. You get one shop responsible for the full stack we manage.",
  },
  {
    title: "Designed for Growth",
    body: "Start with the basics and layer on more – more agents, more sites, more integrations – without rebuilding from scratch.",
  },
];

const About: React.FC = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Why 049NorthRealEstate
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          We live at the intersection of real estate and IT.
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Generic IT providers don&apos;t understand your regulatory
          environment or how your people actually work. We build and support
          systems around how brokerages and agents really operate day to day.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {pillar.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{pillar.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default About;
