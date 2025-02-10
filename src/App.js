import "./App.css";
import Header from "./components/header-component/Header";
import LanguageSwitchProvider from "../src/contexts/LanguageSwitch";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import AppointmentList from "./components/appointment-list-component/AppointmentList";
import AddedAppointments from "./components/appointment-list-component/AddedAppointments";

function App() {
  return (
    <LanguageSwitchProvider>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
          <Route path="appointments" element={<AppointmentList />}>
            <Route path=":status" element={<AddedAppointments />} />
          </Route>
      </Routes>
    </LanguageSwitchProvider>
  );
}

export default App;
