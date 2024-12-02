import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './styles/login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ucredit-api-c1y8.onrender.com/api/token/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.access);
        toast.success("Welcome");
        navigate("/credits");
      } else {
        toast.error("Incorrect password");
      }
    } catch (error) {
      toast.error("Error logging in:", error);
    }
  };

  return (
    <div className="container-fluid text-center bg-success bg-opacity-50 h-100">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col">
          <h1 className="pic animate__animated animate__bounce">Ucredit</h1>
          <h2 className="textoP animate__animated animate__fadeIn">
            Manage your credits easily and safely!
          </h2>
        </div>
        <div className="col-auto shadow bg-light mx-4 rounded w-50 h-80 py-3 animate__animated animate__bounce">
          <h1>Login</h1>

          <Form onSubmit={handleSubmit} className="p-4">
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <div className="col text-center mb-4">
              <Button variant="outline-success" type="submit" className="w-100">
                Get into
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
