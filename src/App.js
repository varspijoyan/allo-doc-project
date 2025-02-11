import "./App.css";
import Header from "./components/header-component/Header";
import LanguageSwitchProvider from "../src/contexts/LanguageSwitch";
import MainPage from "./pages/MainPage";
import {Route, Routes } from "react-router-dom";
import AppointmentList from "./components/appointment-list-component/AppointmentList";
import Footer from "./components/footer-component/Footer";
import DoctorProfilePage from "./pages/DoctorProfilePage";

function App() {
  return (
    <LanguageSwitchProvider>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path=":status" element={<AppointmentList />}/>
        </Route>
        <Route path="/doctor-profile/:docId" element={<DoctorProfilePage />} />
      </Routes>
      <Footer />
    </LanguageSwitchProvider>
  );
}

export default App;
