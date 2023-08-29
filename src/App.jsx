import Homepage from "./components/HomePage/homepage";
import Navbar from "./components/Navbar";
import TransactionDetail from "./components/TransactionDetailPage/TransactionDetail";
import Block from "./components/BlockPage/Block";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/block/:blockno" element={<Block />} />
        <Route path="/tx/:tranno" element={<TransactionDetail />} />
      </Routes>
    </div>
  );
}

export default App;
