import { Provider, useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppointmentList from "./components/appointment-list-component/AppointmentList";
import Footer from "./components/footer-component/Footer";
import Header from "./components/header-component/Header";
import { AuthContextProvider } from "./context/authorizationContext";
import "./i18n";
import DoctorProfilePage from "./pages/DoctorProfilePage";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import store from "./store";
import { signIn } from "./store/actions/authorizationActions";
import { getAuthorizationData } from "./store/selectors/authorizationSelector";
import { useEffect } from "react";
import { api } from "./services/api/api";
import { getMe } from "./services/api/auth";

function EntireAppContent() {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector(getAuthorizationData);
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    if(accessToken) {
        getMe().then(data => {
            dispatch(signIn(data.result));
        })
    }
}, []);
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
