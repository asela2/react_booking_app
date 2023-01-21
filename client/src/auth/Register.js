import { useState } from "react";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

import "../assets/css/register.scss";
import RegisterForm from "../components/register/RegisterForm";
import { toast } from "react-toastify";
import { register } from "../actions/authActions";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeValues = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await register(state);
      toast.success("Successfully registered. Please login.");
      navigate("/login");
    } catch (err) {
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <Container maxWidth="sm">
      <RegisterForm
        state={state}
        handleChangeValues={handleChangeValues}
        handleSubmitForm={handleSubmitForm}
      />
    </Container>
  );
};

export default Register;
