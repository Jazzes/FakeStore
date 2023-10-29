import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/homePage/homePage";
import NotFoundPage from "./pages/notFoundPage/notFoundPage";
import LatestItemsPage from "./pages/latestItemPage/latestItemsPage";
import ShopPage from "./pages/shop/shopPage";
import SignUpPage from "./pages/account/signUpPage";
import SignInPage from "./pages/account/signInPage";
import BasketPage from "./pages/shop/basketPage";
import ComparePage from "./pages/shop/comparePage";
import AccountPage from "./pages/account/accountPage";
import ContactPage from "./pages/contactPage/contactPage";
import ItemCardPage from "./pages/shop/itemCardPage";
import OrderPage from "./pages/buy/orderPage";
import AdminPage from "./pages/adminPage/adminPage";
import Layout from "./components/layout/Layout";
import LayoutUserRoutes from "./components/layout/LayoutUserRoutes";
import {UpdateAuth} from "./components/user/auth";
import LayoutSignInUp from "./components/layout/LayoutSignInUp";
import LayoutAdmin from "./components/layout/LayoutAdmin";

function App() {

    UpdateAuth().then()

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>

                <Route index element={<HomePage/>}/>

                <Route path="shop" element={<ShopPage/>}/>
                <Route path="latest" element={<LatestItemsPage/>}/>

                <Route path="car/:id" element={<ItemCardPage/>}/>
                <Route path="contact" element={<ContactPage/>}/>

                <Route element={<LayoutSignInUp/>}>
                    <Route path="register" element={<SignUpPage/>}/>
                    <Route path="login" element={<SignInPage/>}/>
                </Route>

                <Route element={<LayoutUserRoutes/>}>
                    <Route path="basket" element={<BasketPage/>}/>
                    <Route path="compare" element={<ComparePage/>}/>
                    <Route path="account" element={<AccountPage/>}/>
                    <Route path="order" element={<OrderPage/>}/>
                    <Route element={<LayoutAdmin/>}>
                        <Route path="admin" element={< AdminPage/>}/>
                    </Route>

                </Route>


                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
