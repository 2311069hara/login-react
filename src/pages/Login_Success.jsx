import { useNavigate } from "react-router-dom";
function LoginSuccess() {
 const navigate = useNavigate();
 return (
 <div style={{ padding: "20px" }}>
 <h2>ログイン成功</h2>
 <button onClick={() => navigate("/")}>
 トップへ戻る
 </button>
 </div>
 );
}
export default LoginSuccess;
