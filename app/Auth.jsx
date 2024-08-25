"use client";

import { useState } from "react";

import useForm from "@hooks/useFormValidation";

import Icon from "@components/ui/Icon";
import Button from "@components/ui/Button";

import Textfield from "@components/inputs/Textfield";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger
} from "@components/inputs/Select";

import Box from "@components/layouts/Box";

const Sales = function Sales() {
  const initialValues = {
    username: "mahim-farhad",
    email: "",
    phone: "",
    quantity: "0",
    country: "AS",
    gender: "M",
    password: "",
    confirmPassword: ""
  };

  const [successes, setSuccess] = useState();

  const validate = (inputValues) => {
    let errors = {};
    let formSuccesses = {};

    if (!inputValues.username) {
      errors.username = 'Username is required';
    } else if (!/[A-Za-z0-9]/.test(inputValues.username)) {
      errors.username = 'Username is invalid';
    } else {
      formSuccesses.username = "Username is valid"

      errors.username = "";
    }

    if (!inputValues.email) {
      errors.email = 'Email is required';
    } else if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(inputValues.email)) {
      errors.email = 'Email is invalid';
    } else {
      formSuccesses.username = "Email is valid"

      errors.email = "";
    }

    if (!inputValues.phone) {
      errors.phone = 'Phone is required';
    } else if (!/\+?(\d{1,4})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(inputValues.phone)) {
      errors.phone = 'Phone is invalid';
    } else {
      errors.phone = "";
    }

    if (!inputValues.quantity) {
      errors.quantity = 'Quantity is required';
    } else if (!/^(0|[1-9]\d{0,5}|1000000)$/.test(inputValues.quantity)) {
      errors.quantity = 'Quantity is invalid';
    } else {
      errors.quantity = "";
    }

    if (!inputValues.country) {
      errors.country = 'Country is required';
    } else {
      errors.country = "";
    }

    if (!inputValues.password) {
      errors.password = 'Password is required';
    } else if (inputValues.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    } else if (!/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}/.test(inputValues.password)) {
      errors.password = 'Password is invalid';
    } else {
      errors.password = "";
    }

    const isValid =
      !errors.username && !errors.email && !errors.phone &&
      !errors.quantity && !errors.country && !errors.password;

    if (isValid) return null;

    setSuccess(formSuccesses)

    return errors;
  };

  const {
    inputValues,
    errors,
    handleFocus,
    handleBlur,
    handleChange,
    handleSelectChange,
    handleSubmit
  } = useForm(initialValues, validate);

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
      className="space-y-8"
    >
      <Textfield
        type="text"
        label="username"
        name="username"
        id="User"
        icon="User"
        placeholder="Username"
        value={inputValues?.username}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        isRequired={true}
        // success={successes?.username}
        error={errors?.username}
      />

      <Textfield
        type="email"
        label="email"
        name="email"
        id="Email"
        icon="Mail"
        placeholder="Email"
        value={inputValues?.email}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        isRequired={true}
        // success={successes?.email}
        error={errors?.email}
      />

      <Box>
        <Select
          name="gender"
          value={inputValues.gender}
          onValueChange={handleSelectChange}
          required={true}
          error={errors?.gender}
        >
          <SelectTrigger
            label="Gender"
            placeholder="Pick Your Gender"
          />

          <SelectContent className="p-1">
            <SelectGroup>
              <SelectItem value="M" textValue="Male" />
              <SelectItem value="F" textValue="Female" />
              <SelectItem value="O" textValue="Other" />
            </SelectGroup>
          </SelectContent>
        </Select>
      </Box>

      <Button type="submit">
        Payment
        <Icon name="ArrowRight" />
      </Button>
    </form>
  );
};

export default Sales;
