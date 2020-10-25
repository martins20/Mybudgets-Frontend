import React, { useRef, useCallback, useState } from "react";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import getValidationErrors from "../../utils/GetValidationErrors";
import { useAuth } from "../../hooks/auth";

import Input from "../../components/Input";
import Buttom from "../../components/Buttom";

import { Container, Main, Grid, Form, Section } from "./styles";
import api from "../../services/api";
import InputMask from "../../components/InputMask";

interface Register {
  first_name: string;
  second_name: string;
  cpf: string;
  email: string;
  password: string;
  confirm_password: string;
  phone: string;
  company_name: string;
  cnpj: string;
  cep: string;
  address: string;
  number: string;
  state: string;
  city: string;
  complement: string;
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: Register) => {
      setLoading(true);
      try {
        const sheema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail is required")
            .email("Invalid E-mail")
            .trim(),
          password: Yup.string().required("Password is required").trim(),
          first_name: Yup.string().required("Name is required").trim(),
          second_name: Yup.string().required("Last name is required").trim(),
          cpf: Yup.string().required("CPF is required").trim(),
          confirm_password: Yup.string()
            .required("Confirm password is required")
            .trim()
            .oneOf([Yup.ref("password")], "Invalid password confirmation"),
          phone: Yup.string().required("Phone is required").trim(),
          company_name: Yup.string()
            .required("Company name is required")
            .trim(),
          cnpj: Yup.string().required("CNPJ is required").trim(),
          cep: Yup.string().required("CEP is required").trim(),
          address: Yup.string().required("Address is required").trim(),
          number: Yup.string().required("Number is required").trim(),
          state: Yup.string().required("State is required").trim(),
          city: Yup.string().required("City is required").trim(),
          complement: Yup.string().trim(),
        });

        await sheema.validate(data, {
          abortEarly: false,
        });

        const { number, cep, cpf, phone, cnpj } = data;

        await api.post("users", {
          ...data,
          number: Number(number),
          cep: cep.replaceAll("-", ""),
          cpf: cpf.replaceAll(".", "").replaceAll("-", ""),
          phone: phone.replace("(", "").replace(")", "").replace(" ", ""),
          cnpj: cnpj.replaceAll(".", "").replace("-", "").replace("-", ""),
        });

        history.push("/");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          formRef.current?.setFieldValue("password", "");
          formRef.current?.setFieldValue("confirm_password", "");

          return setLoading(false);
        }

        if (err.response.data.message === "Email address already used") {
          formRef.current?.setFieldError("email", err.response.data.message);
        }

        setLoading(false);
      }
    },
    [history]
  );

  return (
    <Container>
      <Main>
        <h3>Register</h3>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Section>
            <b>Personal Data</b>

            <Grid>
              <Input
                name="first_name"
                placeholder="Name"
                onChange={() => formRef.current?.setFieldError("name", "")}
              />
              <Input
                name="second_name"
                placeholder="Last name"
                onChange={() =>
                  formRef.current?.setFieldError("second_name", "")
                }
              />
              <InputMask
                mask="999.999.999-99"
                name="cpf"
                placeholder="CPF"
                onChange={() => formRef.current?.setFieldError("cpf", "")}
              />
              <Input
                name="email"
                placeholder="E-mail"
                onChange={() => formRef.current?.setFieldError("email", "")}
              />
              <InputMask
                mask="(99) 99999-9999"
                name="phone"
                placeholder="Phone"
                onChange={() =>
                  formRef.current?.setFieldError("second_name", "")
                }
              />
              <Input
                name="company_name"
                placeholder="Company name"
                onChange={() =>
                  formRef.current?.setFieldError("second_name", "")
                }
              />
              <InputMask
                mask="99.999.999/9999-99"
                name="cnpj"
                placeholder="CNPJ"
                onChange={() => formRef.current?.setFieldError("cnpj", "")}
              />
            </Grid>
          </Section>

          <Section>
            <b>Address Data</b>

            <Grid>
              <InputMask
                mask="99999-999"
                name="cep"
                placeholder="CEP"
                onChange={() => formRef.current?.setFieldError("cep", "")}
              />
              <Input
                name="address"
                placeholder="Address"
                onChange={() => formRef.current?.setFieldError("address", "")}
              />
              <Input
                name="number"
                placeholder="Number"
                onChange={() => formRef.current?.setFieldError("number", "")}
              />
              <Input
                name="complement"
                placeholder="Complement"
                onChange={() =>
                  formRef.current?.setFieldError("complement", "")
                }
              />
              <Input
                name="state"
                placeholder="State"
                onChange={() => formRef.current?.setFieldError("state", "")}
              />
              <Input
                name="city"
                placeholder="City"
                onChange={() => formRef.current?.setFieldError("city", "")}
              />
            </Grid>
          </Section>

          <Section>
            <b>Password</b>

            <Grid>
              <Input
                name="password"
                placeholder="Password"
                type="password"
                onChange={() => formRef.current?.setFieldError("password", "")}
              />
              <Input
                name="confirm_password"
                placeholder="Confirm password"
                type="password"
                onChange={() =>
                  formRef.current?.setFieldError("confirm_password", "")
                }
              />
            </Grid>
          </Section>

          <footer>
            <b onClick={() => history.push("/")}>Already have an account</b>

            <Buttom name="Sign up" loading={loading} />
          </footer>
        </Form>
      </Main>
    </Container>
  );
};

export default SignIn;
