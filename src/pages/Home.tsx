import { Shield, FileText, Lock, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import RequiredLabels from "../components/RequiredLabels";

export default function Home() {
  const features = [
    {
      icon: FileText,
      title: "Document Camouflage Mode",
      description: "The entire interface simulates standard office documents and spreadsheets, fully hiding private chat behavior in workplace scenarios.",
    },
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "Military-grade encryption protects all communications. No visible chat entrance, no pop-up notifications, zero exposure risk.",
    },
    {
      icon: Lock,
      title: "Hidden Private Chat",
      description: "Supports one-on-one and group conversations. All chat content is hidden by default with no local traces.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <RequiredLabels />
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              RowWhisper
              <br />
              <span className="text-emerald-400">Discreet Private Chat</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Looks like a regular document, chats in total privacy. Zero office exposure risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all border border-white/20"
              >
                Contact Sales
              </Link>
            </div>
            
            <div className="mt-8 bg-amber-50/10 border border-amber-500/20 rounded-xl p-4 max-w-xl mx-auto">
              <p className="text-sm text-amber-300">
                Full private chat functions are currently in staged rollout. All paid subscription features will be fully activated within 15 business days after successful payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why RowWhisper?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Built specifically for office users who need completely private communication
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <feature.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Chat Privately?
          </h2>
          <p className="text-slate-300 mb-8">
            Join global office users who trust RowWhisper for completely discreet communication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              View Pricing
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all border border-white/20"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What Our Users Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <CheckCircle key={star} className="w-5 h-5 text-emerald-500" />
              ))}
            </div>
            <p className="text-slate-600 mb-4">
              "RowWhisper has transformed how our team communicates in the office. 
              The document camouflage keeps our private conversations completely hidden."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">J</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">John Smith</p>
                <p className="text-sm text-slate-500">CTO, TechStartup HK</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <CheckCircle key={star} className="w-5 h-5 text-emerald-500" />
              ))}
            </div>
            <p className="text-slate-600 mb-4">
              "Finally, a chat tool that respects privacy. 
              The encryption and document interface give us peace of mind for sensitive discussions."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">M</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Mary Chen</p>
                <p className="text-sm text-slate-500">Operations Director, GlobalCo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}