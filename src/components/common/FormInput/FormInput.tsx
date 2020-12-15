import React, { useState } from 'react';
import styles from './FormInput.module.scss';

type FormInputProps = {
  name: string;
  type?: 'text' | 'number' | 'email' | 'password';
  value?: string;
  onChange?: (event: any) => void;
};

function FormInput({ name, value, type = 'text', onChange }: FormInputProps) {
  const [inputValue, setInputValue] = useState('');

  function handleChangeEvent(event: any): void {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (typeof onChange === 'function') onChange(newValue);
  }

  return (
    <input
      name={name}
      type={type}
      value={value || inputValue}
      onChange={handleChangeEvent}
      className={styles.Input}
    />
  );
}

export default FormInput;
