import styled from 'styled-components';

export const SettingsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SettingsEl = styled.li`
  display: inline-block;
  margin: 30px;
`;

export const SettingsButton = styled.button`
  padding: 10px 20px;
  background-color: ${props =>
    props.option === 'good'
      ? '#28a745'
      : props.option === 'neutral'
      ? '#ffc107'
      : '#dc3545'};
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${props =>
      props.option === 'good'
        ? '#218838'
        : props.option === 'neutral'
        ? '#e0a800'
        : '#c82333'};
  }
`;
