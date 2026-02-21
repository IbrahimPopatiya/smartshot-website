import Hero from './components/Hero';
import DemoVideo from './components/DemoVideo';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <DemoVideo />
      <HowItWorks />
      <Features />
      <UseCases />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
