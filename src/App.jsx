import { Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginSuccess from "./pages/Login_Success";
function App() {
 return (
 <Routes>
 <Route path="/" element={<Top />} />
 <Route path="/login" element={<Login />} />
 <Route path="/signup" element={<Signup />} />
 <Route path="/success" element={<LoginSuccess />} />
 </Routes>
 );
}
export default App;