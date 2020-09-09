import { useState } from "react";

export const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);

  const onChangeInput = (event) => {
    const newValue = event.target.value;
    const fielName = event.target.name;

    setForm({ ...form, [fielName]: newValue });
  };

  return {form, onChangeInput};
};

