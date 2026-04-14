// =======================
// Portfolio AI Assistant
// =======================

export function getOverview(): string {
  return [
    "👋 Welcome! I'm Aditya Verma’s Portfolio AI Assistant.",
    "",
    "I can help you explore:",
    "• 💼 Backend & Full Stack Experience",
    "• 💻 Core Technologies (Node, Direct AWS, MongoDB)",
    "• 🚀 Production Projects & Traffic Metrics",
    "• 📊 GitHub & Coding Activity",
    "• 🧠 Systems Architecture Concepts",
    "",
    "Try asking:",
    '• "What are Aditya’s backend skills?"',
    '• "Tell me about his AWS deployments"',
    '• "Show me his real-time projects"',
    '• "How does DevSync handle Auth?"',
    "",
    "Feel free to ask anything about Aditya’s systems engineering journey!",
  ].join("\n");
}

// ---- Skills ----

export function getSkillsOverview(): string {
  return [
    "🛠️ Aditya’s Technical Skillset:",
    "",
    "**Languages:**",
    "JavaScript (ES6+), TypeScript, Java",
    "",
    "**Backend Frameworks & Realtime:**",
    "Node.js, Express.js, Socket.io (WebSockets)",
    "",
    "**Databases & Storage:**",
    "PostgreSQL, MongoDB (Aggregation Pipelines), Redis, Supabase",
    "",
    "**Infrastructure & DevOps:**",
    "AWS EC2, Nginx, PM2, Docker, GitHub Actions, Cloudflare",
    "",
    "**Authentication & Security:**",
    "JWT, OTP, OAuth (Google/GitHub), Token Rotation",
    "",
    "**Frontend (Supporting):**",
    "React, Next.js, Tailwind CSS, Capacitor",
  ].join("\n");
}

// ---- Experience ----

export function getExperienceOverview(): string {
  return [
    "💼 Professional Overview:",
    "",
    "Aditya is a **Backend-Focused Full Stack Engineer** who builds real systems, not just tutorial clones. He focuses on:",
    "• Engineering robust REST APIs and WebSocket servers",
    "• Handling direct cloud infrastructure (AWS EC2, Nginx reverse proxy)",
    "• Designing scalable MongoDB aggregation pipelines",
    "• Shipping to production with CI/CD and process managers (PM2)",
    "• Integrating live auth flows and payment systems (Razorpay)",
    "",
    "He is actively seeking **backend, infrastructure, or full-stack roles**.",
  ].join("\n");
}

// ---- Projects ----

export function getProjectsOverview(): string {
  return [
    "🚀 Featured Projects:",
    "",
    "1. **DevSync – Real-Time Collaboration**",
    "   Production WebSocket server with live presence and read receipts.",
    "   Tech: Node.js, Express, Socket.io, AWS EC2, Razorpay",
    "",
    "2. **Aura Music – Cross-Platform Streaming**",
    "   Single backend serving both web and Android APK with offline capabilities.",
    "   Tech: Node.js, MongoDB, Supabase, Capacitor",
    "",
    "3. **VideoTube – Social Media Backend**",
    "   Comprehensive API capable of YouTube+Twitter functionality with 50+ endpoints.",
    "   Tech: Node.js, Aggregation Pipelines, Cloudinary, JWT",
    "",
    "These contain live verified metrics (like 17K traffic from Cloudflare).",
  ].join("\n");
}

// ---- DevSync Details ----

export function getDevSyncDetails(): string {
  return [
    "📊 **DevSync – Real-Time Collaboration Engine**",
    "",
    "**Overview:**",
    "A highly scalable WebSocket driven platform that supports live messaging, presence tracking, and typing indicators.",
    "",
    "**Key Infrastructure:**",
    "• 🔐 JWT Access + Refresh token rotation & new-device login alerts",
    "• ⚡ Deployed raw on AWS EC2, bypassing PaaS limits",
    "• 🛡️ Nginx acts as a reverse proxy, load-balancing requests",
    "• ⚙️ PM2 ensures zero-downtime restarts and background running",
    "• 💳 Integrated Razorpay Webhooks for premium subscriptions",
    "",
    "**Impact:**",
    "Handles live traffic verifying 280+ views/month and 178ms page load times under Cloudflare analytics.",
  ].join("\n");
}

// ---- Contact ----

export function getContactInfo(): string {
  return [
    "📬 Contact Aditya Verma:",
    "",
    "• 💼 LinkedIn: linkedin.com/in/adityaverma-dev/",
    "• 🐙 GitHub: github.com/adityavermaa-dev",
    "• 🌐 Portfolio: adityaverma-dev.vercel.app",
    "• 📄 Resume: Downloadable from hero section",
    "",
    "You can also reach out using the contact form on the website.",
  ].join("\n");
}

// ---- GitHub Stats ----

export function getGitHubStats(): string {
  return [
    "📊 Coding Activity & Metrics:",
    "",
    "Aditya proves his consistency through real data:",
    "• 608+ GitHub contributions in the last year",
    "• 230+ LeetCode problems solved (focusing heavily on DSA via Java)",
    "• Production traffic: 17.1K+ requests reaching his AWS servers weekly",
    "",
    "He doesn't rely on hype—he relies on verifiable cloud statistics.",
  ].join("\n");
}

// ---- Architecture & UI Concepts ----

export function getArchitectureOverview(): string {
  return [
    "🧠 System Architecture Concepts:",
    "",
    "Aditya's backend principles include:",
    "• API-First Design (Postman verified)",
    "• Event-Driven Architecture (Socket.io)",
    "• Raw Deployments (AWS EC2 + Nginx)",
    "• Process Stability (PM2)",
    "• Security-First Auth (JWT + OTP + Rate Limiting)",
    "",
    "His portfolio visibly maps these architectural flows via diagrams showing client-to-DB relationships.",
  ].join("\n");
}

// ---- Education ----

export function getEducationOverview(): string {
  return [
    "🎓 Education:",
    "",
    "• B.Tech in Electrical Engineering (Computer Science)",
    "  Ajay Kumar Garg Engineering College, Ghaziabad",
    "  CGPA: 8.01 | 2023 – 2027",
    "",
    "• CBSE Board (Class XII) | 92%",
    "",
    "Currently operating efficiently merging heavy DSA logic with production server deployments.",
  ].join("\n");
}
