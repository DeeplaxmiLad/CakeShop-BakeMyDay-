import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 Tell me your event name or number of people!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;

    const userMessage = { sender: "user", text: input };
    const botReply = generateReply(input.toLowerCase());

    setMessages(prev => [...prev, userMessage, { sender: "bot", text: botReply }]);
    setInput("");
  };

  const generateReply = (text) => {
    if (text.includes("birthday")) {
      return "🎉 Best Cakes: Chocolate Truffle, Photo Cake, Cartoon Theme Cake.\nMessage: Happy Birthday! 🎂✨";
    }

    if (text.includes("anniversary")) {
      return "❤️ Best Cakes: Red Velvet, Heart Shape Cake.\nMessage: Happy Anniversary 💕";
    }

    if (text.includes("wedding")) {
      return "💍 Best Cakes: 3-Tier Designer Cake, White Forest.\nMessage: Congratulations 🎊";
    }

    const number = parseInt(text);
    if (!isNaN(number)) {
      const kg = Math.ceil(number / 10);
      return `For ${number} people, buy approximately ${kg} KG cake 🎂`;
    }

    if (text.includes("budget")) {
      return "💰 Under ₹2000: Pineapple Cake.\nUnder ₹3000: Red Velvet, Photo Cake.";
    }

    if (text.includes("kids")) {
      return "👶 Kids Love: Chocolate, Rainbow Cake 🎂";
    }

    if (text.includes("mom")) {
      return "💖 Message: Happy Birthday Mom! You are my world 🎂✨";
    }

    return "Try typing: Birthday, Anniversary, 30 people, Kids party, Budget.";
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <div className="chat-icon" onClick={() => setIsOpen(true)}>
          💬
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chat-header">
            Cake Assistant 🤖
            <span className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </span>
          </div>

          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
