// import React from 'react';
// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from './feedback.styled';

export default function FeedbackOptions({
    onLeaveGoodFeedback,
    onLeaveBadFeedback,
    onLeaveNeutralFeedback,
}) {
    return (
        <div>
            <Button
                type="button"
                onClick={onLeaveGoodFeedback}
            >
                GOOD
            </Button>
            <Button
                type="button"
                onClick={onLeaveBadFeedback}
            >
                BAD
            </Button>
            <Button
                type="button"
                onClick={onLeaveNeutralFeedback}
            >
                neutral
            </Button>
        </div>
    );
}
FeedbackOptions.propTypes = {
    // options: PropTypes.array.isRequired,
    onLeaveGoodFeedback: PropTypes.func.isRequired,
};

/* 
                <Button type="button" onClick={onLeaveFeedback}>
                {good}
            </Button>
            <Button type="button" onClick={onLeaveFeedback}>
                {neutral}
            </Button>
            <Button type="button" onClick={onLeaveFeedback}>
                {bad}
            </Button>
*/
/*           
{
                options.map(option => (
                    <Button
                        key={option}
                        type="button"
                        onClick={() =>
                            onLeaveFeedback(option)
                        }
                    >
                        {option}
                    </Button>
                ));
            }
*/
