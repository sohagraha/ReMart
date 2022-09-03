import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Header from './components/navbar/Header';
import Profile from './components/profile/Profile';
import ManageAccount from './components/profile/profileElements/ManageAccount';
import ManageAddress from './components/profile/profileElements/ManageAddress';
import ManagePassword from './components/profile/profileElements/ManagePassword';
import MyCancel from './components/profile/profileElements/MyCancel';
import MyReturn from './components/profile/profileElements/MyReturn';
import MyReview from './components/profile/profileElements/MyReview';
import MyVoucher from './components/profile/profileElements/MyVoucher';
import MyWishlist from './components/profile/profileElements/MyWishlist';
import ProfileInfo from './components/profile/profileElements/ProfileInfo';
import Register from './components/register/Register';
import CheckoutPage from './pages/checkout/CheckoutPage';
import HomePage from './pages/homePage/HomePage';
import Product from './pages/product/Product';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="" element={<ManageAccount />} />
          <Route path="info" element={<ProfileInfo />} />
          <Route path="address" element={<ManageAddress />} />
          <Route path="password" element={<ManagePassword />} />
          <Route path="returns" element={<MyReturn />} />
          <Route path="cancel" element={<MyCancel />} />
          <Route path="review" element={<MyReview />} />
          <Route path="voucher" element={<MyVoucher />} />
          <Route path="wishlist" element={<MyWishlist />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
