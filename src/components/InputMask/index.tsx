import React, { useEffect, useRef, useState, useCallback } from "react";
import ReactInputMask, { Props } from "react-input-mask";

import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";

import { Container } from "./styles";

interface InputProps extends Props {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

interface Ref extends ReactInputMask {
  value: string;
}

const InputMask: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<Ref>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  // Registering fields for unform takes your values
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue("");
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <ReactInputMask
        defaultValue={defaultValue}
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />

      {error && <b>{error}</b>}
    </Container>
  );
};

export default InputMask;
