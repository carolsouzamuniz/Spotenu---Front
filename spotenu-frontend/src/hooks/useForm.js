import { useState } from "react";

export const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);

  const onChangeInput = (name, value) => {
    const newValue = value
    const fielName = name
    setForm({ ...form, [fielName]: newValue });
  };

  return {form, onChangeInput};
};

