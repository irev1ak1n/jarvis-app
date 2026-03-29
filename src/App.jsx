import { useState } from "react";

export default function App() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    function sendMessage() {
        if (!input.trim()) return;

        const user = { role: "user", text: input };
        const bot = { role: "assistant", text: "Working on it..." };

        setMessages((prev) => [...prev, user, bot]);
        setInput("");
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Jarvis</h1>

            <div>
                {messages.map((m, i) => (
                    <p key={i}>
                        <b>{m.role}:</b> {m.text}
                    </p>
                ))}
            </div>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}