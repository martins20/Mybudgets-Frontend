import React, { useRef, useCallback, useState } from "react";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import getValidationErrors from "../../utils/GetValidationErrors";
import { useAuth } from "../../hooks/auth";

import Input from "../../components/Input";
import Buttom from "../../components/Buttom";

import { Container, Main, LeftSide, Form, RightSide } from "./styles";
interface Login {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: Login) => {
      setLoading(true);
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
          formRef.current?.setFieldValue("password", "");

          return setLoading(false);
        }

        formRef.current?.setFieldValue("password", "");
        formRef.current?.setFieldError("email", err.response?.data.message);
        setLoading(false);
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Main>
        <LeftSide>
          <h3>Login</h3>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              placeholder="E-mail"
              onChange={() => formRef.current?.setFieldError("email", "")}
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              onChange={() => formRef.current?.setFieldError("password", "")}
            />

            <footer>
              <b onClick={() => history.push("/signup")}>Sign up</b>

              <Buttom name="Login" loading={loading} />
            </footer>
          </Form>
        </LeftSide>

        <RightSide />
      </Main>
    </Container>
  );
};

export default SignIn;
