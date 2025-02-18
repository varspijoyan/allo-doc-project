import "./App.css";
import Header from "./components/header-component/Header";
import MainPage from "./pages/MainPage";
import { Navigate, Route, Routes } from "react-router-dom";
import AppointmentList from "./components/appointment-list-component/AppointmentList";
import Footer from "./components/footer-component/Footer";
import DoctorProfilePage from "./pages/DoctorProfilePage";
import "./i18n";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/upcoming" replace />} />
        <Route path="/" element={<MainPage />}>
          <Route path=":status" element={<AppointmentList />} />
        </Route>
        <Route path="/doctor-profile/:docId" element={<DoctorProfilePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
