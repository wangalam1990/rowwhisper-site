import { Mail, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">About RowWhisper</h1>
          
          <p className="text-slate-700 leading-relaxed mb-6">
            RowWhisper is a private communication platform for overseas office users and remote teams. We do not provide services to users in Mainland China.
          </p>
          
          <p className="text-slate-700 leading-relaxed mb-8">
            Our only service is private, discreet chat hidden behind a neutral document-like interface.
            All data is stored on overseas servers. Access from Mainland China is restricted for compliance reasons.
          </p>

          <div className="border-t border-slate-200 pt-8 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-700">Contact: <a href="mailto:wangalam1990@outlook.com" className="text-emerald-600 hover:underline">wangalam1990@outlook.com</a></span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-700">Based in Hong Kong.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}