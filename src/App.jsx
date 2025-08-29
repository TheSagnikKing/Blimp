import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Layout = lazy(() => import("./Layout/Layout"));
const Hero = lazy(() => import("./pages/Hero/Hero"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const HowItWorks = lazy(() => import("./pages/Works/Works"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Discover = lazy(() => import("./pages/Discover/Discover"));
const NewsDetail = lazy(() => import("./pages/NewsDetail/NewsDetail"));
const FeatureDetail = lazy(() => import("./pages/FeatureDetail/FeatureDetail"));
const CheckOutPage = lazy(() => import("./pages/CheckOutPage/CheckOutPage"));
const NewsBlogPage = lazy(() => import("./pages/NewsBlogPage/NewsBlogPage"));
const LoginSignup = lazy(() => import("./pages/LoginSignup/LoginSignup"));

const Account = lazy(() => import("./pages/Account/Account"));
const Profile = lazy(() => import("./pages/Account/Profile/Profile"));
const ActiveCampaigns = lazy(() => import("./pages/Account/ActiveCampaigns/ActiveCampaigns"));
const DraftCampaigns = lazy(() => import("./pages/Account/DraftCampaigns/DraftCampaigns"))
const DonationHistory = lazy(() => import("./pages/Account/DonationHistory/DonationHistory"))
const BankAccount = lazy(() => import("./pages/Account/BankAccount/BankAccount"))
const KYC = lazy(() => import("./pages/Account/KYC/KYC"))
const ChangePassword = lazy(() => import("./pages/Account/ChangePassword/ChangePassword"))

const App = () => {
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      p, h1, h2, h3, h4, h5, i, a, input, textarea, input::placeholder, textarea::placeholder, select, label {
        color: var(--text-primary);
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Hero />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/works" element={<HowItWorks />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/news-detail" element={<NewsDetail />} />
            <Route path="/feature-detail" element={<FeatureDetail />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/news-blog" element={<NewsBlogPage />} />
            <Route path="/login-signup" element={<LoginSignup />} />

            {/* Account Page with Nested Routes */}
            <Route path="/account" element={<Account />}>
              <Route index element={<Profile />} />
              <Route path="active-campaigns" element={<ActiveCampaigns />} />
              <Route path="draft-campaigns" element={<DraftCampaigns/>}/>
              <Route path="donation-history" element={<DonationHistory/>}/>
              <Route path="bank-account" element={<BankAccount/>}/>
              <Route path="kyc-document" element={<KYC/>}/>
              <Route path="change-password" element={<ChangePassword/>}/>
            </Route>

          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
