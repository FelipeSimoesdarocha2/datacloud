// React
import { useState } from 'react';

// Styles
import * as S from './Input.styles';

// Models
import { inputValueProps } from './models';

const Input = ({
  id,
  type,
  title,
  value,
  disable,
  required,
  className,
  placeholder,
  autocomplete,
  onBlur,
  onChange,
  onEnterPress,
}: inputValueProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [invalidRequired, setInvalidRequired] = useState(false);

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (onEnterPress && event.key === 'Enter') {
      onEnterPress((event.target as HTMLInputElement).value);
    }
  };

  const onChangeValue = (event: { target: { value: string } }) => {
    const value = event.target?.value ?? '';

    if (!value && required) {
      setInvalidRequired(true);
    } else {
      setInvalidRequired(false);
    }

    onChange(value);
  };

  return (
    <S.Component className={`${invalidRequired ? 'required' : ''} ${isFocused ? 'focused' : ''} `}>
      <label
        htmlFor={id}
        className={`${required ? 'required' : ''} `}
        dangerouslySetInnerHTML={{ __html: title as string }}
      />
      <input
        id={id}
        key={id}
        type={type}
        title={title}
        value={value}
        data-testid={id}
        disabled={disable}
        required={required}
        className={className}
        placeholder={placeholder}
        autoComplete={autocomplete}
        onChange={onChangeValue}
        onKeyUp={event => onKeyUp(event)}
        onFocus={() => setIsFocused(true)}
        onBlur={event => {
          onBlur && onBlur(event);
          setIsFocused(false);
        }}
      />
    </S.Component>
  );
};

export default Input;
