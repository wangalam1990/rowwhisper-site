import { MessageSquare, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import RequiredLabels from "./RequiredLabels";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <RequiredLabels />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold">RowWhisper</span>
            </Link>
            <p className="text-slate-400 mb-4 max-w-md">
              Private office chat for overseas teams. Secure, encrypted communication without social distractions.
            </p>
            <div className="flex gap-4">
              <a href="mailto:wangalam1990@outlook.com" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">wangalam1990@outlook.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Hong Kong</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; 2026 RowWhisper. All rights reserved.</p>
          <p className="mt-2">RowWhisper Technology Limited, Hong Kong</p>
        </div>
      </div>
    </footer>
  );
}
