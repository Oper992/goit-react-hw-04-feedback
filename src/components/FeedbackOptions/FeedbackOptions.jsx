import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
