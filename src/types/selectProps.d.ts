
export interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  customClass?: string;
}

export interface CustomSelectProps {
  options: option[];
  selectedOption: option;
  onChange: (option: option) => void;
}

export interface option {
  id: number;
  name: string;
  color?: string;
}