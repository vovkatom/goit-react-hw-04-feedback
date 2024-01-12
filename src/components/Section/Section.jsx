import { Text, Sections } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <Sections>
      <Text>{title}</Text>
      {children}
    </Sections>
  );
};
