import './App.css';
import Header from './components/header-component/Header';
import LanguageSwitchProvider from "../src/contexts/LanguageSwitch";

function App() {
  return (
    <LanguageSwitchProvider>
      <Header />
    </LanguageSwitchProvider>
  );
}

export default App;
