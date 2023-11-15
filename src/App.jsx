import { useState, useEffect } from 'react';
import './App.css';
import HeroSthlm from './components/hero-sthlm/HeroSthlm';
import Theme from './components/theme/Theme';
import RobSvg from './components/robsvg/RobSvg';
import HeroLoader from './components/hero-loader/HeroLoader';
import ImageReveal from './components/image-reveal/ImageReveal';
import IMG from './assets/images/manne.jpg';
import Bio from './components/bio/Bio';
import PageLoader from './components/page-loader/PageLoader';
import Gooey from './components/icons/Gooey';
import BackgroundWaves from './components/background-waves/BackgroundWaves';

const data = [
  {
    title: 'Manne Schutt',
    sub: 'SWE',
    img: IMG,
  },
];

const bioData = [
  {
    title: 'Manne Schutt',
    subtitle: 'Funkademics',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda similique exercitationem possimus laudantium animi sunt, a molestiae veritatis in corporis consequatur cupiditate adipisci beatae earum minus blanditiis, iste deserunt nostrum eaque non nesciunt. Fuga repellat quisquam ut saepe id! Dolores, dolorem eius! Praesentium quae blanditiis esse eaque amet! Cupiditate.',
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [lights, setLights] = useState(false);

  // using to test animations, as a loading screen :D
 /*  useEffect(() => {
    const timeOut = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeOut);
  }, []); */
  return (
    <main>
      {/* <PageLoader setLoading={setLoading} title='Rob - Bot' /> */}
      {/*  <Theme lights={lights} setLights={setLights} />
      <HeroSthlm lights={lights} />
      
      */}
      {/* <HeroLoader /> */}
      <RobSvg /> 
      {/* {!loading && (
        <>
          {data.map((item, index) => (
            <ImageReveal
              key={index}
              title={item.title}
              sub={item.sub}
              img={item.img}
            />
          ))}
          {bioData.map((item, index) => (
            <Bio
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              desc={item.desc}
            />
          ))}
        </>
      )} */}
    </main>
  );
}

export default App;
