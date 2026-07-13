import { Shield, FileText, Globe, Lock, Mail } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: FileText,
      title: "Document Camouflage",
      description: "The entire platform interface simulates standard office documents and spreadsheets, fully hiding private chat behavior in workplace scenarios.",
    },
    {
      icon: Lock,
      title: "Encrypted Private Chat",
      description: "End-to-end encrypted private conversation system supporting one-on-one chat and small team group chat. All chat content is hidden by default.",
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
              Discreet private chat platform with document camouflage for global office users.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Platform</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              RowWhisper is an independently developed SaaS private communication platform, serving only overseas office users and remote teams. No services are provided to users located in Mainland China.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our platform provides one single core function: discreet private chat hidden under document-style interface camouflage, designed for private workplace communication. We do not provide AI tools, document editing, office assistance, content generation, software development or coding-related services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Functions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Two integrated features designed for private office communication
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
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Compliance & Security</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Operation Location</h3>
                <p className="text-slate-700">Hong Kong</p>
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
                <h3 className="font-semibold text-slate-900 mb-2">User Data Protection</h3>
                <p className="text-slate-700">
                  All user data is stored on encrypted overseas cloud servers in compliance with GDPR international privacy standards. The website adopts full TLS 1.3 encryption and global IP access restrictions to maintain compliance.
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