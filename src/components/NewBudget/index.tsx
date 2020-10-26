import React, { useCallback, useRef, useState } from "react";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import api from "../../services/api";
import getValidationErrors from "../../utils/GetValidationErrors";
import Input from "../Input";

import { useBudgets } from "../../hooks/budgets";

import { Container, Modal, CancelButton, CreateButton } from "./styles";
import Loading from "react-loading";

interface NewBudgetProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CreateBudget {
  name: string;
  dev_quantity: string;
  designer_quantity: string;
  sm_quantity: string;
  po_quantity: string;
  min_days: string;
}

const NewBudget: React.FC<NewBudgetProps> = ({ isVisible, setIsVisible }) => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const { handleAddNewBudget } = useBudgets();

  const handleSubmit = useCallback(
    async (data: CreateBudget) => {
      setLoading(true);
      formRef.current?.setErrors({
        name: "",
        dev_quantity: "",
        designer_quantity: "",
        sm_quantit: "",
        po_quantity: "",
        min_days: "",
      });
      try {
        let error = false;
        const sheema = Yup.object().shape({
          name: Yup.string().required("Budget name is required").trim(),
          dev_quantity: Yup.string()
            .required("Dev quantity is required")
            .trim(),
          designer_quantity: Yup.string()
            .required("Designer quantity is required")
            .trim(),
          sm_quantity: Yup.string()
            .required("Scrum master quantity is required")
            .trim(),
          po_quantity: Yup.string()
            .required("Product owner quantity is required")
            .trim(),
          min_days: Yup.string()
            .required("Days quantity is quantity required")
            .trim(),
        });

        await sheema.validate(data, {
          abortEarly: false,
        });

        const {
          designer_quantity,
          dev_quantity,
          name,
          po_quantity,
          sm_quantity,
          min_days,
        } = data;

        if (Number(data.min_days) < 10) {
          formRef.current?.setFieldError(
            "min_days",
            "Days must be more than 10"
          );
        }

        if (!Number(dev_quantity)) {
          formRef.current?.setFieldError(
            "dev_quantity",
            "Dev quantity must be a number"
          );

          error = true;
        }

        if (!Number(po_quantity)) {
          formRef.current?.setFieldError(
            "po_quantity",
            "Product owner quantity must be a number"
          );

          error = true;
        }

        if (!Number(designer_quantity)) {
          formRef.current?.setFieldError(
            "designer_quantity",
            "Designer quantity must be a number"
          );

          error = true;
        }

        if (!Number(sm_quantity)) {
          formRef.current?.setFieldError(
            "sm_quantity",
            "Scrum master quantity must be a number"
          );

          error = true;
        }

        if (!Number(min_days)) {
          formRef.current?.setFieldError(
            "min_days",
            "Days quantity must be a number"
          );

          error = true;
        }

        if (error) return;

        const response = await api.post("budgets", {
          name,
          dev_quantity: Number(dev_quantity),
          designer_quantity: Number(designer_quantity),
          sm_quantity: Number(sm_quantity),
          po_quantity: Number(po_quantity),
          min_days: Number(min_days),
        });

        handleAddNewBudget(response.data);

        setIsVisible(false);
        formRef.current?.reset();
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
    [setIsVisible, handleAddNewBudget]
  );

  return (
    <Container isVisible={isVisible}>
      <Modal>
        <h3>New Budget</h3>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Budget name" />
          <Input name="dev_quantity" placeholder="Dev quantity" />
          <Input name="designer_quantity" placeholder="Designer quantity" />
          <Input name="sm_quantity" placeholder="Scrum master quantity" />
          <Input name="po_quantity" placeholder="Product owner quantity" />
          <Input name="min_days" placeholder="Days quantity" />

          <footer>
            <CancelButton type="button" onClick={() => setIsVisible(false)}>
              Cancel
            </CancelButton>
            <CreateButton type="submit">
              {loading ? (
                <Loading color="#fff" type="bubbles" width={20} height={20} />
              ) : (
                "Create"
              )}
            </CreateButton>
          </footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default NewBudget;
