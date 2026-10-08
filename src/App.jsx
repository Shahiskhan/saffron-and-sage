import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <div className="max-w-4xl mx-auto p-10 space-y-6">
        <h1 className="font-display text-5xl font-extrabold text-ink-900">
          Grow Your Ecommerce Store Faster
        </h1>
        <p className="text-ink-500 text-lg">
          Track performance, optimize content, and grow traffic effortlessly.
        </p>
        <button className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-lg">
          Start Free Trial
        </button>
        <div className="flex gap-4">
          <span className="text-success font-semibold">+10% Growth</span>
          <span className="text-danger font-semibold">-20% Bounce</span>
        </div>
      </div>
    </div>
  );
}
