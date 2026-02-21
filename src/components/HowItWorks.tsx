import { Download, Keyboard, Monitor, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "Download & Install",
      description: "Download SmartShot.exe and install it in seconds. No complicated setup required.",
      color: "bg-blue-500"
    },
    {
      icon: Keyboard,
      title: "Set Your Hotkey",
      description: "Configure your preferred hotkey (default is Ctrl+Q) for quick access anytime.",
      color: "bg-green-500"
    },
    {
      icon: Monitor,
      title: "Capture & Float",
      description: "Press your hotkey, drag to capture, and watch your screenshot float on top for easy comparison.",
      color: "bg-purple-500"
    },
    {
      icon: Sparkles,
      title: "Copy or Extract",
      description: "Use the floating toolbar to copy, extract text with OCR, or close when done.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with SmartShot in less than a minute
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -translate-x-4"></div>
                )}

                <div className="relative bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl group">
                  <div className={`${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
