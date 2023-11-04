import './bio.scss';
import TextReveal from '../reveal/TextReveal';

const Bio = ({ title, subtitle, desc }) => {
  

  if (!title || !subtitle || !desc) {
    // If data is not available yet, return null or a loading indicator
    return null;
  }
  return (
    <div className='bio'>
      <TextReveal>
        <h1>{title}</h1>
      </TextReveal>
      <TextReveal>
        <h2>{subtitle}</h2>
      </TextReveal>
      <TextReveal>
        <p>
          {desc}
        </p>
      </TextReveal>
    </div>
  );
};

export default Bio;
