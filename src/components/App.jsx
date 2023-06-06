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
    const [total, setTotal] = useState(0);
    const [posPercent, setPosPercent] = useState(0);

    const onLeaveFeedback = option => {
        switch (option) {
            case 'good':
                setGood(good + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setTotal(good + bad + neutral);
    }, [bad, good, neutral]);

    useEffect(() => {
        setPosPercent(Math.round((good / total) * 100));
    }, [good, total]);

    useEffect(() => {
        window.onload = background;
    }, []);

    return (
        <Section>
            <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={onLeaveFeedback}
            ></FeedbackOptions>
            {total ? (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    posPercent={posPercent}
                ></Statistics>
            ) : (
                <Notification message="There is no feedback" />
            )}
        </Section>
    );
};
export default App;
