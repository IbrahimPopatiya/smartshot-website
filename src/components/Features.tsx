import { Eye, Copy, Type, Zap, Monitor, Shield, Clock, Layers } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Eye,
      title: "Always On Top",
      description: "Screenshots float above all windows, perfect for comparison and reference while you work.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Copy,
      title: "Quick Copy",
      description: "One-click copy to clipboard. Paste your screenshot anywhere instantly.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Type,
      title: "Text Extraction",
      description: "Extract text from any screenshot using advanced OCR technology. Perfect for copying text from images.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Capture screenshots in milliseconds with customizable hotkeys for instant access.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Monitor,
      title: "Multi-Monitor Support",
      description: "Works seamlessly across multiple monitors. Capture from any screen effortlessly.",
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description: "All processing happens locally on your device. Your screenshots never leave your computer.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Clock,
      title: "No Subscription",
      description: "One-time payment for lifetime access. No recurring fees, no hidden costs.",
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: Layers,
      title: "Multiple Screenshots",
      description: "Keep multiple floating screenshots on screen simultaneously for easy comparison.",
      gradient: "from-fuchsia-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for productive screenshot management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
