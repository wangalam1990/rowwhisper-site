import { useState } from "react";
import { Check, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPlan = {
    name: "Monthly",
    monthlyPrice: 19,
    yearlyPrice: 15,
    description: "Flexible monthly subscription",
    features: [
      "Unlimited private rooms",
      "End-to-end encryption",
      "Team member management",
      "Real-time messaging",
      "24/7 customer support",
      "Secure file sharing",
    ],
    buttonText: "Start Monthly",
    popular: false,
  };

  const yearlyPlan = {
    name: "Yearly",
    monthlyPrice: 19,
    yearlyPrice: 15,
    description: "Best value for long-term use",
    features: [
      "Everything in Monthly",
      "20% discount",
      "Priority support",
      "Custom room branding",
      "Advanced analytics",
      "API access",
    ],
    buttonText: "Start Yearly",
    popular: true,
  };

  const currentYearlyPrice = isYearly ? yearlyPlan.yearlyPrice : yearlyPlan.monthlyPrice;
  const currentMonthlyPrice = isYearly ? monthlyPlan.yearlyPrice : monthlyPlan.monthlyPrice;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your team. No hidden fees, no surprises.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`font-medium ${!isYearly ? "text-slate-900" : "text-slate-500"}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? "bg-emerald-500" : "bg-slate-300"
              }`}
            >
              <span
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform shadow ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`font-medium ${isYearly ? "text-slate-900" : "text-slate-500"}`}>
              Yearly Billing
              {isYearly && (
                <span className="ml-2 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs">
                  Save 20%
                </span>
              )}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className={`bg-white rounded-2xl p-8 shadow-lg ${monthlyPlan.popular ? "ring-2 ring-emerald-500" : ""}`}>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-slate-600" />
              <h3 className="text-xl font-bold text-slate-900">{monthlyPlan.name}</h3>
            </div>
            <p className="text-slate-500 mb-6">{monthlyPlan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">${currentMonthlyPrice}</span>
              <span className="text-slate-500 ml-2">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {monthlyPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/register"
              className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                monthlyPlan.popular
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-900"
              }`}
            >
              {monthlyPlan.buttonText}
            </Link>
          </div>

          <div className={`bg-white rounded-2xl p-8 shadow-lg ${yearlyPlan.popular ? "ring-2 ring-emerald-500" : ""}`}>
            {yearlyPlan.popular && (
              <div className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Most Popular
              </div>
            )}
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-bold text-slate-900">{yearlyPlan.name}</h3>
            </div>
            <p className="text-slate-500 mb-6">{yearlyPlan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">${currentYearlyPrice}</span>
              <span className="text-slate-500 ml-2">/month</span>
              {isYearly && (
                <span className="text-slate-400 text-sm ml-2">
                  (${yearlyPlan.yearlyPrice * 12} billed annually)
                </span>
              )}
            </div>
            <ul className="space-y-3 mb-8">
              {yearlyPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/register"
              className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                yearlyPlan.popular
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-900"
              }`}
            >
              {yearlyPlan.buttonText}
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">
            All plans include secure Stripe payment processing
          </p>
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow">
            <span className="text-slate-700 font-medium">Secure Payments by</span>
            <span className="text-lg font-bold text-blue-600">Stripe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
