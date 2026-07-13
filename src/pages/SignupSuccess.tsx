import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignupSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center py-16">
      <div className="max-w-md w-full px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Registration Request Received
          </h1>

          <p className="text-slate-600 mb-6 leading-relaxed">
            Thank you for your registration. We will manually verify your email and send your account activation link within 24 business hours.
          </p>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Full private chat features will be available within 15 business days after account activation.
          </p>

          <div className="bg-slate-50 rounded-xl p-4 mb-8">
            <h3 className="text-sm font-semibold text-slate-700 mb-2">What happens next?</h3>
            <ul className="text-sm text-slate-600 space-y-2 text-left">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">1.</span>
                <span>Our team reviews your registration request</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">2.</span>
                <span>Account activation link sent to your email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">3.</span>
                <span>Click the link to set your password and access RowWhisper</span>
              </li>
            </ul>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Back to Home
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="mt-6 text-sm text-slate-500">
            Need help? <Link to="/contact" className="text-emerald-600 hover:text-emerald-700">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  );
}