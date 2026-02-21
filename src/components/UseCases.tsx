import { Code, Palette, BookOpen, LineChart, MessageSquare, FileText } from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      icon: Code,
      title: "Developers",
      description: "Compare code snippets, reference documentation, and debug with side-by-side screenshots.",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: Palette,
      title: "Designers",
      description: "Compare design mockups, reference inspiration, and maintain visual consistency across projects.",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      icon: BookOpen,
      title: "Researchers",
      description: "Keep reference materials visible while writing, extract text from research papers instantly.",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      icon: LineChart,
      title: "Data Analysts",
      description: "Compare charts and graphs side-by-side, extract data tables with OCR for analysis.",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      icon: MessageSquare,
      title: "Customer Support",
      description: "Quickly capture and share screenshots with customers, extract error messages from images.",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      icon: FileText,
      title: "Content Creators",
      description: "Capture inspiration, reference materials while creating, and extract text from images for content.",
      image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who Uses SmartShot?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by professionals across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl"
              >
                <div
                  className="h-32 flex items-center justify-center relative overflow-hidden"
                  style={{ background: useCase.image }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <Icon className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
