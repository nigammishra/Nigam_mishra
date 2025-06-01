import React, { useState, useRef, useEffect } from "react";
import '../Components/chatbot.css'

const responses = {
  personal: [
    { q: /your name|who are you|tell me about yourself/i, a: "I'm Nigam Mishra, a passionate React.js developer currently pursuing MCA at SOA ITER." },
    { q: /where are you from/i, a: "I'm from Bhubaneswar, Odisha." },
    { q: /how old are you/i, a: "I'm in my early twenties and actively growing in the tech industry." },
  ],
  education: [
    { q: /educational background|where did you study|which university/i, a: "I completed my BCA from Utkal University and am currently pursuing MCA at SOA ITER." },
    { q: /degree/i, a: "I hold a BCA degree and I'm pursuing MCA." }
  ],
  experience: [
    { q: /interned|internships|work experience/i, a: "Yes, I completed internships at Wayindia Software Solution and Whizzo Infotech as a React.js developer." },
    { q: /project.*internship/i, a: "I worked on Mangtum(Ornamental Website), Read_india_Celebration, and animated React apps during my internships. And also make this Wayindia Software Solution official website" }
  ],
  skills: [
    { q: /skills|technologies|languages/i, a: "I'm skilled in React.js,Spring Boot, REST APIs, JavaScript, Redux, Tailwind CSS, Bootstrap, HTML, CSS, MongoDB, and Git." },
    { q: /react|redux/i, a: "Yes, I'm proficient in React.js and Redux Toolkit." },
    { q: /backend|api/i, a: "I’ve worked with APIs and backend in .NET and Spring Boot." },
    { q: /database/i, a: "I’ve used MongoDB and PostgreSQL in my projects." },
    { q: /library|framework/i, a: "I've used GSAP, Framer Motion, and Tailwind CSS in projects." }
  ],
  projects: [
    { q: /project|portfolio/i, a: "Check out my portfolio projects including Tourism Management System, animated admin panels, and 3D carousels on my GitHub." },
    { q: /best project/i, a: "One of my best projects is the 'Eonverse Time Capsule' — a 3D sci-fi interactive React app with Three.js and GSAP." },
    { q: /github/i, a: "Here’s my GitHub: https://github.com/nigammishra" },
    { q: /show.*work|can I see.*project/i, a: "Yes! My projects are showcased in my portfolio: https://nigammishra.github.io/Nigam_mishra/" }
  ],
  resume: [
    { q: /resume|cv|download.*resume/i, a: "You can download my resume from the portfolio's Resume section or http://localhost:3000/Nigam_mishra/static/media/nigammishra.463b3b1d3e527d79580a.pdf" }
  ],
  softskills: [
    { q: /strength|team player|hardworking/i, a: "I'm hardworking, a team player, and I enjoy solving complex problems with clean code." },
    { q: /independent|deadline/i, a: "Yes, I'm capable of working independently and managing tight deadlines." }
  ],
  hobbies: [
    { q: /hobbies|free time|passion|games/i, a: "I love playing badminton and online games in my free time." }
  ],
  freelance: [
    { q: /available|job|freelancer|hire/i, a: "Yes, I'm open to full-time roles and freelance opportunities. Let’s connect!" }
  ],
  contact: [
    { q: /contact|email|linkedin/i, a: "You can reach me at nigammishra826@gmail.com or connect via LinkedIn: https://www.linkedin.com/in/nigam-mishra-2379642ab/" }
  ],
  tech: [
    { q: /how.*build.*site|animation|tailwind/i, a: "This site is built with React.js, Tailwind CSS, GSAP, and includes a custom chatbot!" },
    { q: /chatbot/i, a: "This is a static chatbot with predefined logic. No AI key needed!" }
  ],
  smalltalk: [
  { q: /^hello$|^hi$|^hey$/i, a: "Hello! 👋 How can I help you today?" },
  { q: /who are you/i, a: "I'm a portfolio chatbot built to answer questions about Nigam Mishra." },
  { q: /what can you do/i, a: "I can tell you about Nigam's skills, projects, education, and work experience." },
  { q: /tell me a joke/i, a: "Why did the developer go broke? Because he used up all his cache! 😂" },
  { q: /do you like coding/i, a: "Absolutely! Especially when it's React or JavaScript! 💻" },
  { q: /how are you/i, a: "I'm just code, but always running smoothly! 😉" },
  { q: /^goodbye$|^bye$/i, a: "Goodbye! Have a great day! 🌟" },
  { q: /^ok$|^okay$/i, a: "Great! Let me know if you need anything else. 👍" },
  { q: /^thanks$|^thank you$/i, a: "You're welcome! 😊" },
  { q: /are you real/i, a: "I'm as real as JavaScript in your browser! 🧠" },
  { q: /what's up/i, a: "Just hanging around in the DOM! 😄 What can I help you with?" },
  { q: /who made you/i, a: "I was crafted with care to showcase Nigam Mishra's work. 🛠️" },
  { q: /you are (awesome|great|cool)/i, a: "Thank you! You're pretty awesome too! 😎" },
  { q: /can you help me/i, a: "Absolutely! Ask me anything about Nigam's portfolio." },
  { q: /nice to meet you/i, a: "Nice to meet you too! 😊" },
  { q: /^yes$/i, a: "Awesome! Let's keep going. 🚀" },
  { q: /^no$/i, a: "No worries! Let me know if you change your mind. 🙃" }
  ],
};

// Levenshtein distance function for fuzzy matching
function levenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function getBotReply(input) {
  input = input.toLowerCase();

  // Try regex matching first
  for (const category in responses) {
    for (const item of responses[category]) {
      if (item.q.test(input)) {
        return item.a;
      }
    }
  }

  // Fuzzy matching
  let closest = null;
  let closestDistance = Infinity;

  for (const category in responses) {
    for (const item of responses[category]) {
      let pattern = item.q.toString();
      pattern = pattern.replace(/^\/|\/[gimsuy]*$/g, '');
      pattern = pattern.replace(/\^|\$|\\/g, '');

      const distance = levenshtein(input, pattern.toLowerCase());
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = item.a;
      }
    }
  }

  if (closestDistance <= 5) {
    return closest;
  }

  return "Sorry, I didn’t understand that. You can ask about my skills, projects, resume, or education!";
}

const suggestedQuestions = [
  "What is your name?",
  "Where are you from?",
  "What skills do you have?",
  "Tell me about your projects"
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);  // <-- chatbot visibility
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const addMessage = (text, sender) => {
    setMessages(prev => [...prev, { text, sender }]);
  };

  const handleSend = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    addMessage(trimmedInput, "user");
    const reply = getBotReply(trimmedInput);
    addMessage(reply, "bot");
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestedClick = (question) => {
    addMessage(question, "user");
    const reply = getBotReply(question);
    addMessage(reply, "bot");
  };

  return (
    <>
  {/* Floating Chat Button */}
  <button
    className="chatToggleButton"
    onClick={() => {
      if (isOpen) {
        setInput("");         // Reset input field
        setMessages([]);      // Clear messages
      }
      setIsOpen(!isOpen);     // Toggle chatbox visibility
    }}
    aria-label={isOpen ? "Close chat" : "Open chat"}
  >
    {isOpen ? "✕" : "💬"}
  </button>

  {/* Chatbox UI - toggle visibility */}
  {isOpen && (
    <div className="chatbox">
      <div className="chatMessages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.sender === "user" ? "userMessage" : "botMessage"}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="suggestedQuestions">
        {suggestedQuestions.map((q, idx) => (
          <button
            key={idx}
            className="suggestedButton"
            onClick={() => handleSuggestedClick(q)}
          >
            {q}
          </button>
        ))}
      </div>

      <div className="chatInputArea">
        <textarea
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="chatTextarea"
        />
        <button onClick={handleSend} className="sendButton">
          Send
        </button>
      </div>
    </div>
  )}
</>

  );
};

export default Chatbot;
