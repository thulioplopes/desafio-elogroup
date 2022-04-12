import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Register";
import LeadHome from "./pages/Leads/Home";
import LeadRegisterForm from "./pages/Leads/NewLead";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/leads" element={<LeadHome />} />
        <Route path="/leads/register" element={<LeadRegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}