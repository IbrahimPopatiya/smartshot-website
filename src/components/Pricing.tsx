import { Check, Crown, Zap } from 'lucide-react';

export default function Pricing() {
  const features = [
    "Unlimited screenshots",
    "Always-on-top floating",
    "One-click copy to clipboard",
    "Advanced OCR text extraction",
    "Multi-monitor support",
    "Customizable hotkeys",
    "Local processing (privacy-first)",
    "Free updates forever",
    "No subscription required"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Try it free for 7 days, then pay once for lifetime access
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Free Trial</h3>
                <p className="text-gray-600">Try before you buy</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                $0
              </div>
              <p className="text-gray-600">For 7 days</p>
            </div>

            <ul className="space-y-3 mb-8">
              {features.slice(0, 5).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
              <li className="flex items-start gap-3 text-gray-400">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+ 4 more features</span>
              </li>
            </ul>

            <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              <a href="https://github.com/IbrahimPopatiya/smartshot-website/releases/tag/v1.0.0/SmartShot.exe">
                Start 7-Day Free Trial
              </a>            
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              No credit card required
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 border-2 border-blue-400 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
              <Crown className="w-4 h-4" />
              BEST VALUE
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Lifetime Access</h3>
                <p className="text-blue-100">Pay once, use forever</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-5xl font-bold text-white mb-2">
                $9.99
              </div>
              <p className="text-blue-100">One-time payment</p>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-blue-700 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              {/* <Link>Get Lifetime Access</Link> */}
              <a href="https://popatiya.gumroad.com/l/smartshot">
                Get Lifetime Access
              </a>
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>No subscription</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Lifetime updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>30-day refund policy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
