import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addState = evt => {
    const buttonName = evt.target.name;

    if (buttonName === 'good') {
      setGood(good + 1);
    }
    if (buttonName === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (buttonName === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const PositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    return Math.round((good / total) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={addState} />
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={PositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
