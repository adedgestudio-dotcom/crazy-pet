"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { CHATBOT_FLOWS, STORE } from "@/lib/constants";

interface Message {
  from: "bot" | "user";
  text: string;
}

export default function WhatsAppBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);
  const [showPulse, setShowPulse] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Init chat
  useEffect(() => {
    if (open && messages.length === 0) {
      const welcome = CHATBOT_FLOWS["welcome"];
      setMessages([{ from: "bot", text: welcome.message }]);
      setCurrentOptions(welcome.options);
    }
  }, [open, messages.length]);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Hide pulse after 5s
  useEffect(() => {
    const t = setTimeout(() => setShowPulse(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const handleOption = (option: string) => {
    // Add user message
    setMessages((prev) => [...prev, { from: "user", text: option }]);
    setCurrentOptions([]);

    const node = CHATBOT_FLOWS[option as keyof typeof CHATBOT_FLOWS] as {
      message: string;
      options: string[];
      action?: "whatsapp" | "maps" | "call";
    };
    if (!node) return;

    // Handle actions
    if (node.action === "whatsapp") {
      setTimeout(() => {
        window.open(
          `https://wa.me/916382469764?text=Hi! I found your website 🐾`,
          "_blank"
        );
        setMessages((prev) => [...prev, { from: "bot", text: node.message }]);
        setTimeout(
          () => setCurrentOptions(CHATBOT_FLOWS["⬅️ Back to Menu"].options),
          800
        );
      }, 500);
      return;
    }
    if (node.action === "maps") {
      setTimeout(() => {
        window.open(
          "https://maps.google.com/?q=Crazy+Petz+Store+Anna+Nagar+Chennai",
          "_blank"
        );
        setMessages((prev) => [...prev, { from: "bot", text: node.message }]);
        setTimeout(
          () => setCurrentOptions(CHATBOT_FLOWS["⬅️ Back to Menu"].options),
          800
        );
      }, 500);
      return;
    }
    if (node.action === "call") {
      setTimeout(() => {
        window.location.href = `tel:${STORE.phone1.replace(/\s/g, "")}`;
        setMessages((prev) => [...prev, { from: "bot", text: node.message }]);
        setTimeout(
          () => setCurrentOptions(CHATBOT_FLOWS["⬅️ Back to Menu"].options),
          800
        );
      }, 500);
      return;
    }

    // Bot reply with delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: node.message }]);
      if (node.options.length > 0) {
        setTimeout(() => setCurrentOptions(node.options), 400);
      }
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {!open && showPulse && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-xl px-4 py-3 text-sm font-700 text-amber-900 border border-orange-100 max-w-[200px] text-right"
            >
              👋 Hey! Need help? Chat with us!
              <div className="absolute bottom-0 right-6 w-3 h-3 bg-white border-r border-b border-orange-100 transform rotate-45 translate-y-1.5" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setOpen(!open);
            setShowPulse(false);
          }}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-300 transition-colors relative"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={26} className="text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <span className="text-3xl">🐾</span>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Pulse ring */}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
          )}
        </motion.button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-28 right-6 z-50 w-[340px] max-h-[520px] flex flex-col rounded-3xl overflow-hidden chatbot-shadow"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                🐾
              </div>
              <div className="flex-1">
                <div className="font-800 text-white text-sm">
                  Crazy Pet&apos;z Store
                </div>
                <div className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-200 rounded-full inline-block" />
                  Online now
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto bg-[#ECE5DD] px-4 py-4 flex flex-col gap-3"
              style={{ maxHeight: "320px" }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                      msg.from === "bot"
                        ? "bg-white text-amber-900 rounded-tl-sm"
                        : "bg-green-500 text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {currentOptions.length === 0 &&
                messages[messages.length - 1]?.from === "user" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            repeat: Infinity,
                            delay: i * 0.15,
                            duration: 0.6,
                          }}
                          className="w-2 h-2 bg-amber-400 rounded-full"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

              <div ref={bottomRef} />
            </div>

            {/* Options */}
            <div className="bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-2">
              <p className="text-xs text-gray-400 font-600 mb-1">
                Choose an option:
              </p>
              <div className="flex flex-wrap gap-2">
                <AnimatePresence>
                  {currentOptions.map((opt, i) => (
                    <motion.button
                      key={opt}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleOption(opt)}
                      className="text-xs bg-orange-50 hover:bg-orange-100 border border-orange-200 text-orange-700 font-700 px-3 py-1.5 rounded-full transition-all hover:scale-105 flex items-center gap-1"
                    >
                      {opt}
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>

              {/* Bottom bar */}
              <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100">
                <div className="flex-1 text-xs text-gray-400">
                  Powered by Crazy Pet&apos;z 🐾
                </div>
                <Send size={14} className="text-green-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
