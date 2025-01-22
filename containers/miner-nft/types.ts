export interface ResponsivePosition {
  right?: string;
  bottom?: string;
  width: number;
  height: number;
}

export interface CrystalPosition {
  right: string;
  bottom: string;
  responsive: {
    lg: ResponsivePosition;
    md: ResponsivePosition;
    sm: ResponsivePosition;
    xs: ResponsivePosition;
  };
}
