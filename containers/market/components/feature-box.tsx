import { FeatureBoxContainer, FeatureBoxTitle, StyledImage } from "./styles";

interface FeatureBoxProps {
  title: string;
  icon: string;
}
export const FeatureBox = ({ title, icon, ...props }: FeatureBoxProps) => {
  return (
    <FeatureBoxContainer {...props}>
      <StyledImage src={icon} alt={title} />
      <FeatureBoxTitle>{title}</FeatureBoxTitle>
    </FeatureBoxContainer>
  );
};
