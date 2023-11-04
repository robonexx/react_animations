import { useState } from 'react';
import './App.css';
import HeroSthlm from './components/hero-sthlm/HeroSthlm';
import Theme from './components/theme/Theme';
import RobSvg from './components/robsvg/RobSvg';
import HeroLoader from './components/hero-loader/HeroLoader';

function App() {
  const [lights, setLights] = useState(false);
  return (
    <main>
     {/*  <Theme lights={lights} setLights={setLights} />
      <HeroSthlm lights={lights} />
      <RobSvg /> */}
      <HeroLoader />
    </main>
  );
}

export default App;
