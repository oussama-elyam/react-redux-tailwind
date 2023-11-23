import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Unauthorized from "../errors/unauthorized";
import NotFound from "../errors/NotFound";
import { Login, ResetPassword } from "@/pages";

const AppRoute: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/resetMotDePasse" element={<ResetPassword />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoute;
