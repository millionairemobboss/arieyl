"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";

type Status = "idle" | "listening" | "thinking" | "speaking";

interface Message {
  id: number;
  role: "user" | "ada";
  text: string;
  timestamp: Date;
}

const STATUS_CONFIG: Record<Status, { label: string; color: string; glow: string }> = {
  idle:      { label: "Idle",       color: "#4f46e5", glow: "rgba(79,70,229,0.4)"  },
  listening: { label: "Listening",  color: "#06b6d4", glow: "rgba(6,182,212,0.5)"  },
  thinking:  { label: "Thinking",   color: "#f59e0b", glow: "rgba(245,158,11,0.5)" },
  speaking:  { label: "Speaking",   color: "#10b981", glow: "rgba(16,185,129,0.5)" },
};

const DEMO_RESPONSES: string[] = [
  "Hello! I'm ADA, your Advanced Design Assistant. How can I help you today?",
  "That's a fascinating STEM question. Let me break it down for you...",
  "Based on current data, here's what I found using Google Search...",
  "I can help you with engineering, mathematics, and scientific queries.",
  "Would you like me to set a timer or create a project folder for this?",
];

function OrbCore({ status }: { status: Status }) {
  const { color, glow } = STATUS_CONFIG[status];
  const t = useMotionValue(0);
  const scale = useTransform(t, [0, 0.5, 1], [1, 1.08, 1]);

  useAnimationFrame((time) => {
    t.set((Math.sin(time / 800) + 1) / 2);
  });

  const isActive = status !== "idle";

  return (
    <div className="relative flex items-center justify-center w-48 h-48">
      {/* Outer pulse rings */}
      {isActive && [0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{ borderColor: color, opacity: 0.15 }}
          initial={{ width: 80, height: 80, opacity: 0.4 }}
          animate={{ width: 192, height: 192, opacity: 0 }}
          transition={{
            duration: 2.5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Waveform bars (speaking state) */}
      <AnimatePresence>
        {status === "speaking" && (
          <motion.div
            className="absolute flex items-center gap-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-[3px] rounded-full"
                style={{ background: color }}
                animate={{ height: [6, 20 + Math.random() * 24, 6] }}
                transition={{
                  duration: 0.5 + Math.random() * 0.3,
                  delay: i * 0.06,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Core orb */}
      <motion.div
        className="relative z-10 rounded-full flex items-center justify-center"
        style={{
          width: 80,
          height: 80,
          background: `radial-gradient(circle at 35% 35%, ${color}cc, ${color}44)`,
          boxShadow: `0 0 40px ${glow}, 0 0 80px ${glow}55`,
          scale,
        }}
      >
        {/* Thinking spinner */}
        <AnimatePresence>
          {status === "thinking" && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent"
              style={{ borderTopColor: color }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>

        <span className="text-2xl font-bold text-white tracking-tight">A</span>
      </motion.div>
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const { label, color } = STATUS_CONFIG[status];
  return (
    <motion.div
      layout
      className="flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium"
      style={{ borderColor: `${color}44`, background: `${color}11`, color }}
      animate={{ opacity: 1 }}
      key={status}
    >
      <motion.div
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: color }}
        animate={status !== "idle" ? { scale: [1, 1.5, 1] } : { scale: 1 }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      {label}
    </motion.div>
  );
}

function ChatMessage({ msg, index }: { msg: Message; index: number }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 16, x: isUser ? 16 : -16 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`max-w-xs px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-indigo-600/80 text-white rounded-br-sm"
            : "bg-white/5 text-slate-200 border border-white/10 rounded-bl-sm"
        }`}
      >
        {msg.text}
      </div>
    </motion.div>
  );
}

export default function ADAInterface() {
  const [status, setStatus] = useState<Status>("idle");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const demoIdx = useRef(0);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function addMessage(role: "user" | "ada", text: string) {
    setMessages((prev) => [
      ...prev,
      { id: nextId, role, text, timestamp: new Date() },
    ]);
    setNextId((n) => n + 1);
  }

  async function handleSend(text: string) {
    if (!text.trim() || status !== "idle") return;
    addMessage("user", text.trim());
    setInput("");

    setStatus("thinking");
    await new Promise((r) => setTimeout(r, 1200));

    setStatus("speaking");
    const response = DEMO_RESPONSES[demoIdx.current % DEMO_RESPONSES.length];
    demoIdx.current += 1;
    addMessage("ada", response);

    await new Promise((r) => setTimeout(r, 2000));
    setStatus("idle");
  }

  function handleMic() {
    if (status === "listening") {
      setStatus("idle");
    } else if (status === "idle") {
      setStatus("listening");
      // Simulate voice capture after 2s
      setTimeout(() => {
        setStatus("thinking");
        const voiceInput = "Can you explain quantum entanglement?";
        addMessage("user", voiceInput);
        setTimeout(() => {
          setStatus("speaking");
          const response = DEMO_RESPONSES[demoIdx.current % DEMO_RESPONSES.length];
          demoIdx.current += 1;
          addMessage("ada", response);
          setTimeout(() => setStatus("idle"), 2000);
        }, 1200);
      }, 2000);
    }
  }

  const { color } = STATUS_CONFIG[status];

  return (
    <div
      className="h-full flex flex-col items-center justify-between p-6 relative overflow-hidden"
      style={{ background: "#07070f" }}
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: status === "idle" ? 0.3 : 0.5 }}
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${color}22, transparent)`,
        }}
      />

      {/* Header */}
      <motion.header
        className="w-full max-w-md flex items-center justify-between z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <h1 className="text-xl font-bold text-white tracking-wide">ADA</h1>
          <p className="text-xs text-slate-500">Advanced Design Assistant</p>
        </div>
        <StatusBadge status={status} />
      </motion.header>

      {/* Orb */}
      <motion.div
        className="z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <OrbCore status={status} />
        <motion.p
          className="text-sm text-slate-400 text-center"
          key={status}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {status === "idle"      && "Type a message or press the mic"}
          {status === "listening" && "Listening... speak now"}
          {status === "thinking"  && "Processing your request..."}
          {status === "speaking"  && "ADA is responding"}
        </motion.p>
      </motion.div>

      {/* Chat area */}
      <motion.div
        className="w-full max-w-md z-10 flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Messages */}
        <div className="h-36 overflow-y-auto scrollbar-hide flex flex-col gap-2 px-1">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <ChatMessage key={msg.id} msg={msg} index={i} />
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input row */}
        <div className="flex gap-2">
          <motion.input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
            placeholder="Ask ADA something..."
            disabled={status !== "idle"}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-indigo-500/60 transition-colors disabled:opacity-40"
            whileFocus={{ scale: 1.01 }}
          />

          {/* Send button */}
          <motion.button
            onClick={() => handleSend(input)}
            disabled={!input.trim() || status !== "idle"}
            className="w-12 h-12 rounded-xl flex items-center justify-center disabled:opacity-30"
            style={{ background: `${color}22`, border: `1px solid ${color}44` }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </motion.button>

          {/* Mic button */}
          <motion.button
            onClick={handleMic}
            className="w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: status === "listening" ? `${color}33` : `${color}11`,
              border: `1px solid ${color}44`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={status === "listening" ? { boxShadow: [`0 0 0 0 ${color}44`, `0 0 0 8px transparent`] } : {}}
            transition={status === "listening" ? { duration: 1, repeat: Infinity } : {}}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          </motion.button>
        </div>

        {/* Quick prompts */}
        <motion.div
          className="flex gap-2 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {["What's the weather?", "Set a timer", "System info"].map((prompt) => (
            <motion.button
              key={prompt}
              onClick={() => handleSend(prompt)}
              disabled={status !== "idle"}
              className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors disabled:opacity-30"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {prompt}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
