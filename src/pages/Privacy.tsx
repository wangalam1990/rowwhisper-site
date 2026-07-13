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
            We collect information only to provide secure, private chat services.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
          <p className="text-slate-700 mb-4">We collect only the following minimal information:</p>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>Account registration email address</li>
            <li>Basic website access and connection logs</li>
            <li>Chat interaction data generated during platform usage</li>
          </ul>
          <p className="text-slate-700 mb-8">
            We do NOT collect real-name identity information, payment information, or sensitive personal data. All payment processes are handled independently by Stripe.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">2. How We Use Information</h2>
          <p className="text-slate-700 mb-4">We use collected data to:</p>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>Provide and maintain private chat service and document camouflage functions</li>
            <li>Ensure platform security and prevent unauthorized access</li>
            <li>Verify user account identity</li>
            <li>Respond to user service requests</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Data Storage & Overseas Compliance</h2>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>All user data is stored exclusively on overseas cloud servers.</li>
            <li>No user data is stored or processed within Mainland China.</li>
            <li>The platform complies with GDPR and international data privacy standards.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Data Sharing</h2>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>We will never sell, rent, or trade user personal data.</li>
            <li>We only share necessary data with authorized service providers, including Stripe for payment processing, to complete platform basic services.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">5. User Rights</h2>
          <p className="text-slate-700 mb-4">You have the right to:</p>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>Access your account data</li>
            <li>Request data deletion</li>
            <li>Cancel your subscription at any time</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Website Access Control</h2>
          <p className="text-slate-700 mb-8">
            Our website restricts access from Mainland China IP addresses for global compliance and security reasons. This technical restriction does not affect service availability for global overseas users.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Cookies</h2>
          <p className="text-slate-700 mb-8">
            We use necessary browser cookies to stabilize website access and user session status.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Legal Basis for Processing Personal Data</h2>
          <p className="text-slate-700 mb-4">We process your personal data under the following GDPR legal bases:</p>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>Performance of contract to provide private chat SaaS services</li>
            <li>Legitimate business interest for platform security and maintenance</li>
            <li>Voluntary user consent where applicable</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">9. Data Retention Policy</h2>
          <p className="text-slate-700 mb-8">
            Active account data is retained during the service period. After account cancellation, basic compliance records are retained for 6 years for tax and anti-fraud requirements. All non-essential personal data will be permanently deleted within 30 days upon user deletion request.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">10. Data Security Protection</h2>
          <p className="text-slate-700 mb-4">We adopt industry-standard security measures including:</p>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>Full TLS 1.3 HTTPS encryption</li>
            <li>Encrypted overseas cloud storage</li>
            <li>WAF protection against unauthorized access and attacks</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">11. Cookie Types & Your Choices</h2>
          <p className="text-slate-700 mb-8">
            We only use necessary functional cookies for website session maintenance. No advertising cookies or tracking cookies are used.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">12. Data Breach Notification</h2>
          <p className="text-slate-700 mb-8">
            If a personal data security breach occurs, we will notify affected users and relevant regulatory authorities within 72 hours in accordance with global privacy compliance requirements.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">13. Contact For Privacy Inquiries</h2>
          <p className="text-slate-700">
            Email: <a href="mailto:wangalam1990@outlook.com" className="text-emerald-600 hover:underline">wangalam1990@outlook.com</a>
          </p>
          <p className="text-slate-700 mt-2">
            We will respond to all privacy-related inquiries within 7 working days.
          </p>
        </div>
      </div>
    </div>
  );
}