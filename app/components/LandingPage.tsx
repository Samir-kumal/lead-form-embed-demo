'use client'

import { LeadForm } from './LeadForm'

// That's it — LeadForm is pre-configured. Just drop it in.
export default function LandingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* ── Nav ─────────────────────────────────────────────────────── */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="font-bold text-gray-900 text-lg">HealthFirst</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Plans</a>
            <a href="#" className="hover:text-blue-600 transition-colors">How it works</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About</a>
          </div>
          <a href="tel:1-800-555-0100" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            📞 1-800-555-0100
          </a>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 grid lg:grid-cols-2 gap-12 items-start">

        {/* Left: copy */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Plans from $0/mo with subsidies
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Find the right<br />
            <span className="text-blue-600">health insurance</span><br />
            plan for you
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed max-w-md">
            Compare ACA-compliant plans from top carriers in your area.
            Takes less than 2 minutes — no spam, no obligation.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { icon: '✅', label: '100% Free to Compare' },
              { icon: '🔒', label: 'Your data is safe' },
              { icon: '⚡', label: 'Instant results' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-600">
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Carrier logos placeholder */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide font-medium">Trusted carriers</p>
            <div className="flex items-center gap-4">
              {['BlueCross', 'Aetna', 'Cigna', 'UnitedHealth'].map(name => (
                <span key={name} className="text-xs font-semibold text-gray-400 bg-gray-100 rounded px-2 py-1">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form embed */}
        <div className="lg:sticky lg:top-24">
          <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/50 border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
              <p className="text-white font-semibold text-sm">Get Your Free Quote</p>
              <p className="text-blue-100 text-xs mt-0.5">No commitment • Takes 2 min</p>
            </div>
            <LeadForm className="p-2" />
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '🏥',
              title: 'Compare 200+ plans',
              desc: 'Side-by-side comparison of premiums, deductibles, and coverage networks.',
            },
            {
              icon: '💰',
              title: 'Maximize subsidies',
              desc: 'See exactly how much you qualify for under the ACA subsidy program.',
            },
            {
              icon: '📞',
              title: 'Expert guidance',
              desc: 'Licensed agents available 7 days a week to answer your questions.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
