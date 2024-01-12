import { useState } from 'react';
import { Container } from './App.styled.js';
import { FeedbackOptions } from '../FeedbackSet/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';

function App() {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = options;

  function handleFeedback (option) {
    setOptions(prevOptions => {
      return {
        ...prevOptions,
        [option]: prevOptions[option] + 1,
      };
    });
  }

  function countTotalFeedback () {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage () {
    return Math.round((good * 100) / countTotalFeedback());
  }

  return (
    <Container>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={Object.keys(options)}
          handleFeedback={handleFeedback}
        />
      </Section>

      <Section title='Statistics'>
        {countTotalFeedback() <= 0 ? (
          <Notification message='There is no feedback' />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
}
export { App };
