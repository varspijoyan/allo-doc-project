import "./App.css";
import Header from "./components/header-component/Header";
import LanguageSwitchProvider from "../src/contexts/LanguageSwitch";
import MainPage from "./pages/MainPage";
import { Navigate, Route, Routes } from "react-router-dom";
import AppointmentList from "./components/appointment-list-component/AppointmentList";

function App() {
  return (
    <LanguageSwitchProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="appointments/upcoming" />}/>
        <Route path="/appointments" element={<MainPage />}>
          <Route path=":status" element={<AppointmentList />}/>
        </Route>
      </Routes>
    </LanguageSwitchProvider>
  );
}

export default App;
