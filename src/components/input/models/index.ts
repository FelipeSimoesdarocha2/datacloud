// React
import { HTMLInputTypeAttribute } from 'react';

export interface inputValueProps {
  id: string;
  autocomplete?: string;
  title: string;
  disable?: boolean;
  required?: boolean;
  className?: string;
  placeholder?: string;
  value?: string | number;
  type: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
  onEnterPress?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
