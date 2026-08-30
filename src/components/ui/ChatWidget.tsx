"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([
    {
      sender: "bot",
      text: `Hello! 👋 I'm Fazle Karim's AI Assistant. How can I help you? You can ask about my Data Analytics / BI experience, publications in Healthcare AI/NLP, or leave a message!`,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!message.trim()) return;

    const userText = message;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = `Thanks for reaching out! You can email Fazle directly at ${portfolioData.personal.email} or call him at ${portfolioData.personal.phone}. He responds promptly!`;
      const lower = userText.toLowerCase();

      if (lower.includes("hire") || lower.includes("job") || lower.includes("role") || lower.includes("opportunity")) {
        reply = "Fazle Karim is currently AVAILABLE for Business Intelligence Analyst, Data Analyst, and Analytics roles in the US (OPT/CPT). Please check out the Contact section to get in touch!";
      } else if (lower.includes("bi") || lower.includes("power bi") || lower.includes("tableau") || lower.includes("sql")) {
        reply = "Fazle specializes in Power BI, SQL, Tableau, Python, and advanced Excel for executive KPI dashboards and data architecture.";
      } else if (lower.includes("research") || lower.includes("publication") || lower.includes("paper") || lower.includes("ai")) {
        reply = "Fazle has authored 3 peer-reviewed research publications covering Alzheimer's neuroimaging ML, Medicare fraud detection AI, and Aspect-based sentiment analysis NLP.";
      } else if (lower.includes("education") || lower.includes("degree") || lower.includes("mba")) {
        reply = "Fazle holds an MBA in Business Analytics from International American University and a BSc in Computer Science & Engineering from Daffodil International University.";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 850);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Popup Drawer */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] bg-[#0d1424] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slideUp">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-700 to-indigo-700 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                FK
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Fazle Karim</h3>
                <p className="text-[11px] text-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online • Instant Reply
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 max-h-[300px] overflow-y-auto space-y-3 bg-[#0a0f1c]/90 text-xs">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] p-3 rounded-2xl leading-relaxed ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-slate-800/80 text-gray-200 border border-white/10 rounded-bl-none"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="p-2.5 rounded-2xl bg-slate-800/80 border border-white/10 text-gray-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-[#0d1424] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about my analytics experience..."
              className="flex-1 px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl btn-primary-gradient text-white shadow-md disabled:opacity-50 cursor-pointer"
              disabled={!message.trim()}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full btn-primary-gradient text-white flex items-center justify-center shadow-xl shadow-blue-600/40 hover:scale-105 transition-transform cursor-pointer"
        aria-label="Toggle live chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
