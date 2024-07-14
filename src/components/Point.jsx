import PropTypes from 'prop-types';

// Function to parse text with **bold** syntax
const parseBoldText = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/);
  return parts.map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <span key={index} className="font-bold">
        {part.slice(2, -2)}
      </span>
    ) : (
      part
    ),
  );
};

// Custom component to render a point
const Point = ({ text }) => {
  return <span>{parseBoldText(text)}</span>;
};

Point.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Point;
