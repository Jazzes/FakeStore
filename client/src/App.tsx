import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/homePage";
import NotFoundPage from "./pages/notFoundPage";
import LatestItemsPage from "./pages/latestItemsPage";
import ShopPage from "./pages/shopPage";
import SignUpPage from "./pages/signUpPage";
import SignInPage from "./pages/signInPage";
import BasketPage from "./pages/basketPage";
import ComparePage from "./pages/comparePage";
import AccountPage from "./pages/accountPage";
import ContactPage from "./pages/contactPage";
import ItemCardPage from "./pages/itemCardPage";
import OrderPage from "./pages/orderPage";
import AdminPage from "./pages/adminPage";
import Layout from "./components/Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={ <Layout /> }>

                <Route index element={ <HomePage/> } />

                <Route path="latest" element={ <LatestItemsPage/> } />

                <Route path="car/:id" element={ <ItemCardPage/> } />
                <Route path="basket" element={ <BasketPage/> } />
                <Route path="compare" element={ <ComparePage/> } />

                <Route path="registration" element={ <SignUpPage/> } />
                <Route path="login" element={ <SignInPage/> } />
                <Route path="account" element={ <AccountPage/> } />
                <Route path="order" element={ <OrderPage/> } />

                <Route path="admin" element={ < AdminPage/> }/>
                <Route path="contact" element={ <ContactPage/> } />
                <Route path="*" element={ <NotFoundPage/> } />

            </Route>

            <Route path="/shop" element={ <ShopPage/> } />

        </Routes>
    );
}

export default App;
