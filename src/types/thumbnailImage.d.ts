export interface UploadImageFromProps {
  onChange: (upload: File | any) => void;
  selected?: string | any;
  active?: string | number;
  label?: React.ReactNode | string;
  labelSecondary? : string;
  dimension?: string;
  isSquared?: boolean;
  isLandscaped?: boolean;
  message?: string;
  emptyPreview?: boolean;
  plusIcon?: boolean;
}
