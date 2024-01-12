import {
  SettingsList,
  SettingsButton,
  SettingsEl,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleFeedback }) => {
  return (
    <SettingsList>
      {options.map(option => {
        return (
          <SettingsEl key={option}>
            <SettingsButton
              type="button"
              onClick={() => handleFeedback(option)}
              option={option}
            >
              {option}
            </SettingsButton>
          </SettingsEl>
        );
      })}
    </SettingsList>
  );
};
