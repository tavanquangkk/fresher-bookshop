import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./assets/styles/app.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/contact";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BookPage from "./pages/book/book";
import Home from "./components/home/home";
import RegisterPage from "./pages/register/register";
import LoginPage from "./pages/login/login";
import { fetchAccount } from "./services/auth-api";
import { doGetAccountAcction } from "./redux/account/accountSlice";
import Loading from "./components/loading/loading";
import NotFound from "./components/notfound/NotFound";
import AdminPage from "./pages/admin/admin";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import AdminLayout from "./components/layout/AdminLayout";
import UserLayout from "./components/layout/UserLayout";

export default function App() {
    const dispath = useDispatch();
    const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
    const getAccount = async () => {
        if (window.location.pathname === "/login" || window.location.pathname === "/register") {
            return;
        }
        const res = await fetchAccount();
        if (res && res.data) {
            dispath(doGetAccountAcction(res.data));
        }
        console.log(">>>Check res get account", res.data);
        return res;
    };
    useEffect(() => {
        getAccount();
    }, []);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <UserLayout />,
            errorElement: <NotFound />,
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
            path: "/admin",
            element: <AdminLayout />,
            errorElement: <NotFound />,
            children: [
                {
                    index: true,
                    element: (
                        <ProtectedRoute>
                            <AdminPage />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "user",
                    element: <Contact />,
                },
                {
                    path: "book",
                    element: <BookPage />,
                },
            ],
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/register",
            element: <RegisterPage />,
        },
    ]);
    return (
        <>
            {isAuthenticated === true || window.location.pathname === "/login" ? (
                <RouterProvider router={router} />
            ) : (
                <Loading />
            )}
        </>
    );
}
