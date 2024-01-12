import styled from 'styled-components';

export const Option = styled.li`
  margin: 10px 0;
  list-style: none;
  width: 320px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: white;
  border-radius: 5px;
  padding: 5px;

  background-color: ${props =>
    props.type === 'good'
      ? '#28a745'
      : props.type === 'neutral'
      ? '#ffc107'
      : props.type === 'bad'
      ? '#dc3545'
      : 'black'};
`;
