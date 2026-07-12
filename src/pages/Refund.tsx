export default function Refund() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Refund and Cancellation Policy</h1>
          <p className="text-slate-500 mb-8">Last Updated: July 2026</p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Subscription Cancellation</h2>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>Users may cancel their monthly subscription at any time.</li>
            <li>Cancellation will only disable automatic renewal for the next billing cycle.</li>
            <li>Users retain full access to all paid features until the current billing period expires.</li>
            <li>No early termination fee will be charged.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Refund Policy</h2>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>RowWhisper provides digital SaaS services with instant feature access after payment.</li>
            <li>Therefore, all subscription payments are final and generally non-refundable.</li>
          </ul>
          <p className="text-slate-700 mb-8">
            We may provide partial refund at our discretion in the following special situations:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>System service failure causing long-term service unavailability</li>
            <li>Double accidental payment within the same billing cycle</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Billing Failure</h2>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>If automatic payment fails, the system will stop renewing your subscription.</li>
            <li>Your account will automatically revert to the free plan after expiration. No penalty will be charged.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Service Scope</h2>
          <p className="text-slate-700 mb-8">
            This policy applies to all paid plans including Starter and Team Pro subscriptions.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Contact</h2>
          <p className="text-slate-700">
            For refund or billing inquiries, please contact our official support email: <a href="mailto:wangalam1990@outlook.com" className="text-emerald-600 hover:underline">wangalam1990@outlook.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}