import { useState } from "react";

export const useForm = (initState) => {
  const [form, setForm] = useState(initState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clear = () => {
    setForm(initState)
  }

  return [form, onChange, clear];
};
