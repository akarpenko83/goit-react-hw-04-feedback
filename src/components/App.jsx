// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import background from '../utils/background';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

const App = () => {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);

    const onLeaveFeedback = option => {
        switch (option) {
            case 'good':
                setGood(prevState => prevState + 1);
                break;
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
            default:
                break;
        }
    };

    const getTotal = () => {
        return good + bad + neutral;
    };

    const getPosPercent = () => {
        return Math.round((good / getTotal()) * 100);
    };

    useEffect(() => {
        window.onload = background;
    }, []);

    return (
        <Section>
            <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={onLeaveFeedback}
            ></FeedbackOptions>
            {getTotal() ? (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={getTotal()}
                    posPercent={getPosPercent()}
                ></Statistics>
            ) : (
                <Notification message="There is no feedback" />
            )}
        </Section>
    );
};
export default App;
