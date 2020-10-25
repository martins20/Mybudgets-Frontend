import React, { useRef, useCallback } from "react";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import Input from "../../components/Input";
import getValidationErrors from "../../utils/GetValidationErrors";
import { useAuth } from "../../hooks/auth";

import { Container, Main, LeftSide, Form, RightSide } from "./styles";

interface Login {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data: Login) => {
    try {
      const sheema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail is required")
          .email("Invalid E-mail"),
        password: Yup.string().required("Password is required"),
      });

      await sheema.validate(data, {
        abortEarly: false,
      });

      const { email, password } = data;

      await signIn({ email, password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Main>
        <LeftSide>
          <h3>Login</h3>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              placeholder="E-mail"
              type="email"
              onChange={() => formRef.current?.setFieldError("email", "")}
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              onChange={() => formRef.current?.setFieldError("password", "")}
            />

            <footer>
              <b>Sign up</b>

              <button type="submit">Login</button>
            </footer>
          </Form>
        </LeftSide>

        <RightSide />
      </Main>
    </Container>
  );
};

export default SignIn;
