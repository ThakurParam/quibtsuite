import logo from "./logo.svg";
import "./App.css";
import { Footer } from "./Pages/Footer";
import { Footertop } from "./Pages/Footertop";
import { BuiltTech } from "./Pages/BuiltTech";
import { BoxFashion } from "./Pages/BoxFashion";
import { LaravelBackend } from "./Pages/LaravelBackend";
import { Hrm } from "./Pages/Hrm";
import { AccountingBilling } from "./Pages/AccountingBilling";
import { Support } from "./Pages/Support";
import { TopBar } from "./Pages/TopBar";
import { Accordian } from "./Components/Accordian";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      <TopBar />
      <Support />
      <AccountingBilling />
      <Hrm />
      <LaravelBackend />
      <BoxFashion />
      <BuiltTech />
      <Footertop />
      <Footer />
    </>
  );
}

export default App;
