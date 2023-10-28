import { useState } from 'react';
import './App.css';
import Theme from './components/theme/Theme';

function App() {
  const [lights, setLights] = useState(false);

  return (
    <main>
      <Theme lights={lights} setLights={setLights} />
    </main>
  );
}

export default App;
