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

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>

                <Route index element={<HomePage/>}/>

                <Route path="shop" element={<ShopPage/>}/>
                <Route path="latest" element={<LatestItemsPage/>}/>

                <Route path="car/:id" element={<ItemCardPage/>}/>

                <Route path="registration" element={<SignUpPage/>}/>
                <Route path="login" element={<SignInPage/>}/>
                <Route path="contact" element={<ContactPage/>}/>

                <Route path="basket" element={<BasketPage/>}/>
                <Route path="compare" element={<ComparePage/>}/>
                <Route path="account" element={<AccountPage/>}/>
                <Route path="order" element={<OrderPage/>}/>
                <Route path="admin" element={< AdminPage/>}/>

                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
