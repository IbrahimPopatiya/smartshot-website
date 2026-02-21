import { useState, useEffect } from 'react';
import { Monitor, Copy, Type, X, MousePointer2 } from 'lucide-react';

export default function DemoVideo() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearTimeout(timer);
  }, [step, isPlaying]);

  const steps = [
    { title: "Download & Install", desc: "Download SmartShot.exe and run the installer" },
    { title: "Set Your Hotkey", desc: "Choose your preferred hotkey (default: Ctrl+Q)" },
    { title: "Activate Screenshot", desc: "Press your hotkey to activate screenshot mode" },
    { title: "Drag to Capture", desc: "Drag to select the area you want to capture" },
    { title: "Floating Screenshot", desc: "Screenshot floats on top of all windows" },
    { title: "Use Actions", desc: "Copy, extract text, or close the screenshot" }
  ];

  return (
    <section id="demo" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            See SmartShot in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how easy it is to capture, float, and work with screenshots
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-gray-300 text-sm font-medium">SmartShot Demo</span>
          </div>

          <div className="relative bg-gradient-to-br from-blue-50 to-slate-100 p-8 lg:p-16" style={{ minHeight: '500px' }}>
            {step === 0 && (
              <div className="flex items-center justify-center h-full animate-fade-in">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl animate-bounce">
                    <Monitor className="w-16 h-16 text-white" />
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">SmartShot.exe</h3>
                    <p className="text-gray-600">Click to install</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-32">
                    <MousePointer2 className="w-8 h-8 text-blue-600 animate-pulse" />
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="flex items-center justify-center h-full animate-fade-in">
                <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg border-2 border-blue-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Set Your Hotkey</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <label className="text-gray-700 font-medium w-32">Hotkey:</label>
                      <div className="flex-1 bg-gray-100 rounded-lg px-4 py-3 border-2 border-blue-500 font-mono text-lg">
                        Ctrl + Q
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Save Settings
                    </button>
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                    ← Choose your preferred hotkey
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-600"></div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex items-center justify-center h-full animate-fade-in">
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl text-2xl font-mono font-bold shadow-2xl mb-8 border-4 border-blue-500 animate-pulse">
                    <span>Ctrl</span>
                    <span className="text-blue-400">+</span>
                    <span>Q</span>
                  </div>
                  <div className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold inline-block shadow-lg">
                    Press hotkey to activate
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="relative h-full animate-fade-in">
                <div className="absolute inset-0 bg-black/20 border-4 border-dashed border-blue-500 rounded-lg animate-pulse"></div>
                <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2">
                  <MousePointer2 className="w-4 h-4" />
                  Drag to select area
                  <div className="absolute -right-2 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-8 border-t-8 border-b-8 border-transparent border-l-yellow-400"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center text-gray-700 font-semibold text-lg bg-white/90 px-6 py-3 rounded-lg shadow-lg">
                    Drag to capture screenshot
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="relative h-full animate-fade-in">
                <div className="absolute top-8 right-8 bg-white rounded-lg shadow-2xl p-4 border-4 border-blue-500 max-w-sm animate-float">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded flex items-center justify-center mb-4">
                    <Monitor className="w-16 h-16 text-blue-600" />
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded flex items-center justify-center gap-2 text-sm font-medium">
                      <Copy className="w-4 h-4" />
                      Copy
                    </button>
                    <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded flex items-center justify-center gap-2 text-sm font-medium">
                      <Type className="w-4 h-4" />
                      Extract
                    </button>
                    <button className="bg-red-600 text-white py-2 px-3 rounded flex items-center justify-center">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-lg">
                  Screenshot is floating!
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                  Stays on top of all windows
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="flex items-center justify-center h-full animate-fade-in">
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-2xl p-4 max-w-md border-2 border-blue-500">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded flex items-center justify-center mb-4">
                      <div className="text-center">
                        <Monitor className="w-16 h-16 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Your Screenshot</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded flex items-center justify-center gap-2 font-medium hover:bg-blue-700 transition-colors">
                        <Copy className="w-4 h-4" />
                        Copy
                      </button>
                      <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded flex items-center justify-center gap-2 font-medium hover:bg-green-700 transition-colors">
                        <Type className="w-4 h-4" />
                        Extract
                      </button>
                      <button className="bg-red-600 text-white py-3 px-4 rounded flex items-center justify-center hover:bg-red-700 transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="absolute -top-16 left-0 bg-blue-600 text-white px-3 py-2 rounded text-xs font-medium shadow-lg max-w-xs">
                    Copy to clipboard
                    <div className="absolute bottom-0 left-8 transform translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-600"></div>
                  </div>

                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-2 rounded text-xs font-medium shadow-lg max-w-xs">
                    Extract all text with OCR
                    <div className="absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600"></div>
                  </div>

                  <div className="absolute -top-16 right-0 bg-red-600 text-white px-3 py-2 rounded text-xs font-medium shadow-lg">
                    Close screenshot
                    <div className="absolute bottom-0 right-4 transform translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-600"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white border-t border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Step {step + 1} of {steps.length}: {steps[step].title}
                </h4>
                <p className="text-gray-600 text-sm">{steps[step].desc}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep((prev) => (prev - 1 + steps.length) % steps.length)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                    if (!isPlaying) {
                      setStep((prev) => (prev + 1) % steps.length);
                    }
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                  onClick={() => setStep((prev) => (prev + 1) % steps.length)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="flex gap-2 mt-6 justify-center">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setStep(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === step ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
