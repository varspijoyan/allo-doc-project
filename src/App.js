import { useContext } from "react";
import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppointmentList from "./components/appointment-list-component/AppointmentList";
import Footer from "./components/footer-component/Footer";
import Header from "./components/header-component/Header";
import AuthContext, {
  AuthContextProvider,
} from "./context/authorizationContext";
import "./i18n";
import DoctorProfilePage from "./pages/DoctorProfilePage";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import store from "./store";

function EntireAppContent() {
  const { isAuthorized } = useContext(AuthContext);
  if (!isAuthorized) {
    return <SignInPage />;
  }

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

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <EntireAppContent />
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
