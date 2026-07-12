export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-slate-500 mb-8">Last Updated: July 2026</p>
          
          <p className="text-slate-700 mb-6">
            RowWhisper ("we", "us", or "our") operates the website <code className="bg-slate-100 px-2 py-1 rounded">https://rowwhisper.com</code> (the "Service").
          </p>
          
          <p className="text-slate-700 mb-8">
            This Privacy Policy explains how we collect, use, store, and protect user information when you use our platform, including our AI development tools and private spreadsheet chat features.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
          <p className="text-slate-700 mb-4">We may collect the following information:</p>
          <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
            <li>Account registration information such as your email address</li>
            <li>Service usage logs and interaction records</li>
            <li>Device and browser basic access information</li>
          </ul>
          <p className="text-slate-700 mb-8">
            We do NOT collect real-name identity information, payment information, or sensitive personal data. All payment processes are handled independently by Stripe.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">2. How We Use Information</h2>
          <p className="text-slate-700 mb-4">We use collected data to:</p>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>Provide, maintain, and improve our SaaS services</li>
            <li>Optimize AI tool functions and user experience</li>
            <li>Ensure platform security and prevent abuse</li>
            <li>Respond to user service requests</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Data Storage & Overseas Compliance</h2>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>All user data is stored on overseas cloud servers.</li>
            <li>We do not store any user data within mainland China.</li>
            <li>The platform fully complies with GDPR and international data privacy standards.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Data Sharing</h2>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>We will never sell, rent, or trade your personal data to third parties.</li>
            <li>We only share necessary data with authorized service providers (such as Stripe for payment processing) to complete basic service functions.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">5. User Rights</h2>
          <p className="text-slate-700 mb-4">You have the right to:</p>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>Access your account data</li>
            <li>Request data deletion</li>
            <li>Cancel your service subscription at any time</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Website Access Control</h2>
          <p className="text-slate-700 mb-8">
            Our website restricts access from Mainland China IP addresses for global compliance and security reasons. This is a technical security measure and does not affect service availability for global overseas users.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Cookies</h2>
          <p className="text-slate-700 mb-8">
            We use basic browser cookies to stabilize website access and user session status.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Contact</h2>
          <p className="text-slate-700">
            If you have any privacy-related questions, please contact us via official email: <a href="mailto:wangalam1990@outlook.com" className="text-emerald-600 hover:underline">wangalam1990@outlook.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}