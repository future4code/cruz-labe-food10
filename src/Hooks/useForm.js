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

  const setAll = (state)=>{
    setForm(state)
  }

  return [form, onChange, clear, setAll];
};
