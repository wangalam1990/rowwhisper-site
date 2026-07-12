export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-slate-600 mb-8">
            Last updated: July 12, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 mb-4">
              RowWhisper ("we", "us", "our") is committed to protecting the privacy and security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our 
              private office chat service ("Service").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-medium text-slate-800 mb-2">2.1 Personal Information</h3>
            <ul className="text-slate-600 list-disc list-inside mb-4 space-y-1">
              <li>Email address for account registration and communication</li>
              <li>First and last name for profile identification</li>
              <li>Billing information for subscription payments (processed by Stripe)</li>
            </ul>
            <h3 className="text-lg font-medium text-slate-800 mb-2">2.2 Usage Information</h3>
            <ul className="text-slate-600 list-disc list-inside mb-4 space-y-1">
              <li>Chat room activity and message history</li>
              <li>Device information and IP addresses for security purposes</li>
              <li>Usage patterns and feature interactions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <ul className="text-slate-600 list-disc list-inside mb-4 space-y-1">
              <li>Provide and maintain the Service</li>
              <li>Process subscription payments</li>
              <li>Communicate with you about your account and Service updates</li>
              <li>Ensure the security and integrity of the Service</li>
              <li>Improve and optimize the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Data Security</h2>
            <p className="text-slate-600 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="text-slate-600 list-disc list-inside mb-4 space-y-1">
              <li>End-to-end encryption for all chat messages</li>
              <li>Secure HTTPS connections for all data transmission</li>
              <li>Password hashing using bcrypt</li>
              <li>Regular security audits and updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Third-Party Services</h2>
            <p className="text-slate-600 mb-4">
              We use the following third-party services:
            </p>
            <ul className="text-slate-600 list-disc list-inside mb-4 space-y-1">
              <li><strong>Stripe:</strong> Payment processing. Your billing information is handled directly by Stripe.</li>
              <li><strong>Google Cloud:</strong> Infrastructure hosting. Your data is stored in secure data centers.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Your Rights</h2>
            <ul className="text-slate-600 list-disc list-inside mb-4 space-y-1">
              <li>Access and review your personal information</li>
              <li>Update or correct your information</li>
              <li>Request deletion of your account and data</li>
              <li>Export your chat data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Changes to This Policy</h2>
            <p className="text-slate-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Contact Us</h2>
            <p className="text-slate-600">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="text-slate-800 mt-2">contact@rowwhisper.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
