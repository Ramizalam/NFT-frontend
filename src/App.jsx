import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RiskMeter from './components/RiskMeter';
import AssetsPanel from './components/AssetsPanel';
import PositionsPanel from './components/PositionsPanel';
import FAQ from './components/FAQ';
import Sidebar from './components/Sidebar';

import catleft from './assets/catleft.svg';
import catright from './assets/catright.svg';
import catmain from './assets/maincat.svg';

function App() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />
      
      
      {/* Main Content Container with Border */}
      <div className="max-w-7xl mx-auto px-6 py-8 relative">
        {/* Cat ears on top of the border */}
        <div className="flex justify-center space-x-100 items-center absolute -top-11 left-1/2 transform -translate-x-1/2 z-[-1px]">
          <img src={catleft} alt="Cat Ears" className="w-9 h-32" />
          <img src={catmain} alt="Cat" className="w-96 h-32" />
          <img src={catright} alt="Cat Ears" className="w-9 h-32" />
        </div>
       
        <div className="border-2 border-yellow-200/30 rounded-3xl p-8 bg-neutral-900/50 backdrop-blur-sm">
          <Hero />
          <RiskMeter />
          
          {/* Main Content Grid */}
          <div className="flex gap-6 justify-center mt-8">
            <AssetsPanel />
            <PositionsPanel />
          </div>
        </div>
      </div>

      {/* FAQ and Sidebar - Outside the border */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex gap-6 justify-center mt-8">
          <FAQ />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
