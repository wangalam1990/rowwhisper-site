export default function Refund() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Refund and Cancellation Policy</h1>
          <p className="text-slate-500 mb-8">Last Updated: June 2025</p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Subscription Cancellation</h2>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>Users may cancel their monthly or annual subscription at any time through their account settings.</li>
            <li>Cancellation will only disable automatic renewal for the next billing cycle.</li>
            <li>Users retain full access to all paid features until the current billing period expires.</li>
            <li>No early termination fee will be charged.</li>
            <li>Cancellation can be reverted at any time before the current period expires.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Refund Policy</h2>
          <p className="text-slate-700 mb-4">RowWhisper provides digital SaaS services with instant feature access after payment.</p>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>All subscription payments are final and generally non-refundable.</li>
            <li>No refunds are provided for partial periods of subscription.</li>
            <li>Free trial periods are non-refundable.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Exceptional Refund Cases</h2>
          <p className="text-slate-700 mb-4">
            We may provide partial or full refund at our sole discretion in the following special situations:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>System service failure causing complete and prolonged service unavailability</li>
            <li>Double accidental payment within the same billing cycle</li>
            <li>Technical error causing incorrect charge amount</li>
            <li>Service features not working as described within 7 days of subscription</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Refund Request Process</h2>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>All refund requests must be submitted via official email within 30 days of the transaction.</li>
            <li>Refund requests must include your account email and transaction details.</li>
            <li>We will review your request and respond within 7 working days.</li>
            <li>Approved refunds will be processed within 3-5 business days to your original payment method.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Billing Failure</h2>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>If automatic payment fails, the system will send a payment reminder email.</li>
            <li>Payment will be retried up to 3 times within 7 days.</li>
            <li>If all retry attempts fail, the system will stop renewing your subscription.</li>
            <li>Your account will automatically revert to the free plan after expiration. No penalty will be charged.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Annual Plan Special Terms</h2>
          <ul className="list-disc list-inside text-slate-700 mb-8 space-y-2">
            <li>Annual subscription plans are non-refundable after 14 days of purchase.</li>
            <li>Within the first 14 days, a pro-rated refund may be considered for exceptional cases.</li>
            <li>Cancellation of annual plans disables automatic renewal but does not provide refunds for the remaining period.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Free Trial Conversion</h2>
          <p className="text-slate-700 mb-8">
            When converting from a free trial to a paid subscription, no refund will be provided for any charges incurred during the trial period.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Service Scope</h2>
          <p className="text-slate-700 mb-8">
            This policy applies to all paid plans including Monthly and Yearly subscriptions.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">9. Changes to This Policy</h2>
          <p className="text-slate-700 mb-8">
            We reserve the right to modify this refund and cancellation policy at any time. Changes will be effective immediately upon posting on our website.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">10. Contact</h2>
          <p className="text-slate-700">
            For refund or billing inquiries, please contact our official support email: <a href="mailto:wangalam1990@outlook.com" className="text-emerald-600 hover:underline">wangalam1990@outlook.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}