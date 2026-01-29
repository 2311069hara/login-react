import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function LoginSuccess() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "こんにちは！新潟市の観光プランを提案します。何を知りたいですか？",
    },
  ]);

  const bottomRef = useRef(null);

  // ログインガード
  useEffect(() => {
    const isLogin = localStorage.getItem("login");
    if (!isLogin) navigate("/login");
  }, [navigate]);

  // 自動スクロール
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // ユーザーメッセージ追加
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
    ]);
    setInput("");

    // 仮ボット返信
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "了解です！二泊三日のモデルコースを考えますね。\n" +
            "1日目：古町・萬代橋\n" +
            "2日目：弥彦神社\n" +
            "3日目：マリンピア日本海",
        },
      ]);
    }, 800);
  };

  return (
    <div style={styles.phone}>
      <div style={styles.notch}></div>

      <div style={styles.chatArea}>
        {messages.map((msg, index) =>
          msg.sender === "user" ? (
            <div
              key={index}
              style={{ ...styles.bubble, ...styles.user }}
            >
              {msg.text}
            </div>
          ) : (
            <div key={index} style={styles.botRow}>
              <div style={styles.avatar}></div>
              <div style={{ ...styles.bubble, ...styles.bot }}>
                {msg.text.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          )
        )}
        <div ref={bottomRef}></div>
      </div>

      <div style={styles.inputArea}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="入力してください"
          style={styles.input}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} style={styles.send}>
          送信
        </button>
      </div>

      <div style={styles.nav}>
        <div>ホーム</div>
        <div>プラン</div>
        <div>マップ</div>
        <div>クーポン</div>
        <div>共有</div>
      </div>
    </div>
  );
}

export default LoginSuccess;

/* ================= styles ================= */

const styles = {
  phone: {
    width: "375px",
    height: "700px",
    margin: "0 auto",
    background: "#fff",
    borderRadius: "30px",
    position: "relative",
    overflow: "hidden",
  },
  notch: {
    width: "120px",
    height: "30px",
    background: "#000",
    borderRadius: "20px",
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  chatArea: {
    padding: "70px 16px 140px",
    overflowY: "auto",
    height: "100%",
    boxSizing: "border-box",
  },
  bubble: {
    padding: "12px 14px",
    borderRadius: "14px",
    fontSize: "14px",
    lineHeight: "1.5",
    maxWidth: "80%",
    marginBottom: "12px",
    whiteSpace: "pre-wrap",
  },
  user: {
    background: "#f3e8ff",
    marginLeft: "auto",
  },
  bot: {
    background: "#f3e8ff",
  },
  botRow: {
    display: "flex",
    gap: "8px",
    alignItems: "flex-start",
  },
  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "#ddd",
  },
  inputArea: {
    position: "absolute",
    bottom: "70px",
    left: 0,
    width: "100%",
    padding: "10px",
    display: "flex",
    gap: "8px",
    boxSizing: "border-box",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "12px",
    border: "none",
    background: "#f3e8ff",
  },
  send: {
    padding: "0 14px",
    borderRadius: "12px",
    border: "none",
    background: "#e9d5ff",
  },
  nav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "70px",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderTop: "1px solid #eee",
    fontSize: "12px",
  },
};
