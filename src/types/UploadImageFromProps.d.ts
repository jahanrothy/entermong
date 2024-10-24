export interface UploadImageFromProps {
  onChange: (upload: File) => void;
  selected?: string;
  active?: string | number;
  label?: React.ReactNode | string;
  dimension?: string;
  isSquared?: boolean;
  isLandscaped?: boolean;
  message?: string;
  emptyPreview?: boolean;
}

export interface UploadDocFromProps {
  onChange: (upload: File) => void;
  selected?: string;
  active?: string | number;
  label?: React.ReactNode | string;
  message?: string;
  emptyPreview?: boolean;
}
