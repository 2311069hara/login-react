import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
 const navigate = useNavigate();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 // 仮の正解ユーザー
 const CORRECT_EMAIL = "a@a.com";
 const CORRECT_PASSWORD = "pasword1234";
 const handleLogin = () => {
 if (email === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
 setError("");
 navigate("/success");
 } else {
 setError("メールアドレスまたはパスワードが違います");
 }
 };
 return (
 <div style={{ padding: "20px" }}>
 <h2>ログイン</h2>
 <input
 placeholder="メールアドレス"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 />
 <br /><br />
 <input
 type="password"
 placeholder="パスワード"
 value={password}
システム開発
 onChange={(e) => setPassword(e.target.value)}
 />
 <br /><br />
 <button onClick={handleLogin}>
 ログイン
 </button>
 {error && (
 <p style={{ color: "red", marginTop: "10px" }}>
 {error}
 </p>
 )}
 </div>
);
}
export default Login;