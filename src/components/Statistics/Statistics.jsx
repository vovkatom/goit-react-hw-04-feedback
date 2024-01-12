import { Option, Text } from './Statistics.styled';

export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  percentage,
}) => {
  return (
    <ul>
      <Option>
        <Text type="good">Good: {good}</Text>
      </Option>
      <Option>
        <Text type="neutral">Neutral: {neutral}</Text>
      </Option>
      <Option>
        <Text type="bad">Bad: {bad}</Text>
      </Option>
      <Option>
        <Text>Total: {total}</Text>
      </Option>
      <Option>
        <Text>Positive feedback: {percentage || 0}%</Text>
      </Option>
    </ul>
  );
};
