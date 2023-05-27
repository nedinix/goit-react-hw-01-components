import { StyledSection, StyledSectionHeader } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <StyledSection>
      {title && <StyledSectionHeader>{title}</StyledSectionHeader>}
      {children}
    </StyledSection>
  );
}
