import './bio.scss';
import TextReveal from '../reveal/TextReveal';

const Bio = () => {
  return (
    <div className='bio'>
      <TextReveal>
        <h1>Tony Gogo</h1>
      </TextReveal>
      <TextReveal>
        <h2>A true pioneer</h2>
      </TextReveal>
      <TextReveal>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque velit
          necessitatibus blanditiis rem, mollitia reiciendis quaerat nostrum eum
          cupiditate suscipit qui saepe id soluta tenetur repudiandae maiores.
          Non, ab? Vitae nostrum consequatur, facere voluptas aliquid incidunt
          molestias, voluptatibus in nisi alias assumenda rerum dolore minus
          tempore vero quam obcaecati atque!
        </p>
      </TextReveal>
    </div>
  );
};

export default Bio;
