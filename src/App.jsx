import { useState } from 'react';
import './App.css';
import HeroSthlm from './components/hero-sthlm/HeroSthlm';
import Theme from './components/theme/Theme';

function App() {
  const [lights, setLights] = useState(false);
  return (
    <main>
      <Theme lights={lights} setLights={setLights} />
      <HeroSthlm lights={lights} />
    </main>
  );
}

export default App;
