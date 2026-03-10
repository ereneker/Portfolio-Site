import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import CVPage from "@/pages/CVPage";
import ContactsPage from "@/pages/ContactsPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
