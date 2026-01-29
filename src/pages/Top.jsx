import { useNavigate } from "react-router-dom";
function Top() {
 const navigate = useNavigate();
 return (
    <div style={{ padding: "20px", textAlign: "center" }}>
    <h1>ようこそ</h1>
    <button
        onClick={() => navigate("/login")}
        style={{ margin: "10px" }}
    >
    会員の方はこちら
    </button>
    <br />
    <button
        onClick={() => navigate("/signup")}
        style={{ margin: "10px" }}
    >
    新規会員登録はこちらから
    </button>
    </div>
 );
}
export default Top;