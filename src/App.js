import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateTransaction from "./components/CreateTransaction";
import GetTransaction from "./components/GetTransaction";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Transaction from "./components/Transaction";
import Login from "./components/Login";
import B2cTransactions from "./components/B2cTransactions";
import C2bTransactions from "./components/C2bTransactions";
import C2bTransactionsList from "./components/C2bTransactionsList";
import B2cTransactionsList from "./components/B2cTransactionsList";
import Accounts from "./components/Accounts";
import Account from "./components/Account";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/createTransaction" element={<CreateTransaction />} />
          <Route
            path="/getTransaction/:merchant/:accountNumber"
            element={<GetTransaction />}
          />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/b2cTransactions" element={<B2cTransactions />} />
          <Route
            path="/getb2cTransactions/:accountNumber"
            element={<B2cTransactionsList />}
          />
          <Route path="/c2bTransactions" element={<C2bTransactions />} />
          <Route
            path="/getc2bTransactions/:accountNumber"
            element={<C2bTransactionsList />}
          />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/account/:id" element={<Account />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
