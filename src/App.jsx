import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles/Counter.module.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import Contact from "./pages/contact/contact";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BookPage from "./pages/book/book";
import Home from "./components/home/home";

const Layout = () => {
    return (
        <div className="layout-app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <div>404 not found </div>,
            children: [
                { index: true, element: <Home /> },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/book",
                    element: <BookPage />,
                },
            ],
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
