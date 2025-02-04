import './App.css';
import Header from './components/header-component/Header';
import LanguageSwitchProvider from "../src/contexts/LanguageSwitch";
import MainPage from './pages/MainPage';

function App() {
  return (
    <LanguageSwitchProvider>
      <Header />
      <MainPage />
    </LanguageSwitchProvider>
  );
}

export default App;
