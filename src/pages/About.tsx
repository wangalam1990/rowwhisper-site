import { Shield, Code, Globe, Lock, Mail } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Lock,
      title: "Private Office Chat",
      description: "Encrypted private communication platform for overseas teams with table-based disguise features.",
    },
    {
      icon: Code,
      title: "AI Coding IDE",
      description: "Full-stack AI-assisted programming environment with intelligent code completion and analysis.",
    },
  ];

  const complianceItems = [
    { icon: Shield, text: "GDPR compliant data handling" },
    { icon: Globe, text: "Overseas server data storage" },
    { icon: Lock, text: "End-to-end TLS 1.3 encryption" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About RowWhisper</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              A dual-function SaaS platform built for overseas independent developers and small teams seeking privacy and productivity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Product Origin</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              RowWhisper is built upon the TRAE AI open-source IDE prototype. Recognizing the unique needs of overseas independent developers and small teams, we developed a dual-function SaaS platform that combines privacy-focused communication with AI-powered development tools.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our mission is to provide a secure, distraction-free environment where teams can communicate privately and develop software efficiently, all within a single integrated platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Business Functions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Two integrated modules designed for modern overseas teams
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-emerald-600" />
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
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Operations & Compliance</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Operator Information</h3>
                <p className="text-slate-700">
                  RowWhisper is operated as an independent overseas business. The service is exclusively available to users outside mainland China, with active IP blocking for mainland China access.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Compliance Commitments</h3>
                <ul className="space-y-3">
                  {complianceItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Business Objectives</h3>
                <p className="text-slate-700">
                  Our goal is to provide overseas professionals with an integrated solution combining privacy-secure communication and lightweight AI development tools, enabling efficient collaboration and productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-slate-300 mb-6">
            For any inquiries, support requests, or partnership opportunities, please contact us.
          </p>
          <a
            href="mailto:wangalam1990@outlook.com"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}