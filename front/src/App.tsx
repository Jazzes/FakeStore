import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/homePage";
import NotFoundPage from "./pages/notFoundPage";
import LatestItemsPage from "./pages/latestItemsPage";
import ShopPage from "./pages/shop/shopPage";
import SignUpPage from "./pages/account/signUpPage";
import SignInPage from "./pages/account/signInPage";
import BasketPage from "./pages/shop/basketPage";
import ComparePage from "./pages/shop/comparePage";
import AccountPage from "./pages/account/accountPage";
import ContactPage from "./pages/contactPage";
import ItemCardPage from "./pages/shop/itemCardPage";
import OrderPage from "./pages/buy/orderPage";
import AdminPage from "./pages/adminPage";
import Layout from "./components/Layout";

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
