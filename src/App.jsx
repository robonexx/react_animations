import { useState } from 'react';
import './App.css';
import HeroSthlm from './components/hero-sthlm/HeroSthlm';
import Theme from './components/theme/Theme';
import RobSvg from './components/robsvg/RobSvg';
import HeroLoader from './components/hero-loader/HeroLoader';
import ImageReveal from './components/image-reveal/ImageReveal';
import IMG from './assets/images/tony.png';

const data = [
  {
    title: 'Master Locker Tony Gogo',
    sub: 'Legendary',
    img: IMG,
  },
];

function App() {
  const [lights, setLights] = useState(false);
  return (
    <main>
      {/*  <Theme lights={lights} setLights={setLights} />
      <HeroSthlm lights={lights} />
      <RobSvg /> 
      <HeroLoader />
      */}
      {data.map((item, index) => (
        <ImageReveal
          key={index}
          title={item.title}
          sub={item.sub}
          img={item.img}
        />
      ))}
    </main>
  );
}

export default App;
