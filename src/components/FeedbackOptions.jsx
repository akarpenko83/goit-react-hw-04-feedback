import PropTypes from 'prop-types';
import { Button } from './feedback.styled';

export default function FeedbackOptions({
    options,
    onLeaveFeedback,
}) {
    return (
        <div>
            {options.map(option => (
                <Button
                    key={option}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </Button>
            ))}
        </div>
    );
}
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
