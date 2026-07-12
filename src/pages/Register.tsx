import { useState } from "react";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (submitting || !email) return;
    
    setSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const turnstileToken = formData.get("cf-turnstile-response");
      
      if (!turnstileToken) {
        setSubmitting(false);
        return;
      }

      const ip = await fetch("https://api.ipify.org?format=json").then(r => r.json()).then(d => d.ip);

      const turnstileResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            secret: "0x4AAAAAAD0VHSQo6y_E_xyka0DjDCc7g1U",
            response: turnstileToken,
            remoteip: ip
          })
        }
      );
      
      const turnstileData = await turnstileResponse.json();
      
      if (!turnstileData.success) {
        setSubmitting(false);
        return;
      }

      await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: "wangalam1990@outlook.com" }] }],
          from: { email: "no-reply@rowwhisper.com", name: "RowWhisper Sign Up" },
          subject: "New User Registration Request",
          content: [{ type: "text/plain", value: `New signup email: ${email}` }]
        })
      });

      navigate("/signup-success");
    } catch (error) {
      console.error("Signup error:", error);
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center py-16">
      <div className="max-w-md w-full px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Create Account</h1>
            <p className="text-slate-600">Join RowWhisper for private team communication</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={submitting}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="cf-turnstile" data-sitekey="0x4AAAAAAD0VHQ2TPA2LzOh1"></div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white px-6 py-3 rounded-lg font-semibold transition-all disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Already have an account?{" "}
              <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-center text-sm text-slate-500">
              By creating an account, you agree to our{" "}
              <Link to="/terms" className="text-emerald-600 hover:text-emerald-700">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-emerald-600 hover:text-emerald-700">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}