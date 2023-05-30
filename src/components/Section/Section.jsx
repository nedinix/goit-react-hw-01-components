import { StyledSection, StyledSectionHeader } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <StyledSection>
      {title && <StyledSectionHeader>{title}</StyledSectionHeader>}
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
