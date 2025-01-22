import { MobileHorizontalDividerStyled } from "./style";

interface MobileHorizontalDividerProps {}

export const MobileHorizontalDivider: React.FC<MobileHorizontalDividerProps> = (
  props
) => {
  return (
    <MobileHorizontalDividerStyled
      orientation="horizontal"
      flexItem
      {...props}
    />
  );
};
