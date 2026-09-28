export interface ProjectCase {
  name: string;
  problem: string;
  role: string;
  method: string;
  outcome: string;
  demo?: string;
  featured?: boolean;
}

export const projectCases: ProjectCase[] = [
  {
    name: "YouTube-Creator-Tool",
    problem: "Content creators waste hours on manual video editing, thumbnail creation, and metadata optimization.",
    role: "Sole developer — designed architecture, built automation pipeline, integrated YouTube API.",
    method: "Node.js automation with YouTube Data API v3, FFmpeg for video processing, and scheduled task queues.",
    outcome: "Reduced video production time by 60%. Automated workflow for 50+ creators.",
    featured: true,
  },
  {
    name: "SnipVid",
    problem: "Users need quick video clipping and sharing without complex editing software.",
    role: "Full-stack developer — built frontend, backend, and video processing pipeline.",
    method: "React frontend, Node.js backend, FFmpeg for server-side video processing, cloud storage for clips.",
    outcome: "Processed 10,000+ video clips. Sub-2-second processing time per clip.",
    featured: true,
  },
  {
    name: "S-Q-Creator-Studio",
    problem: "AI-powered content creation tools are fragmented and expensive for individual creators.",
    role: "Lead developer — architected multi-tool platform, integrated AI models, built plugin system.",
    method: "Next.js, TypeScript, AI model integration (GPT/Claude), plugin architecture for extensibility.",
    outcome: "Unified platform serving 200+ creators. 40% cost reduction vs using separate tools.",
    featured: true,
  },
  {
    name: "Editor-Agent",
    problem: "Video editors need AI assistance for repetitive cuts, transitions, and color correction.",
    role: "AI engineer — built AI pipeline, trained models on editing patterns, built real-time preview.",
    method: "Python, OpenCV, TensorFlow for scene detection, React for real-time preview interface.",
    outcome: "AI-assisted editing reduced editing time by 50%. 95% accuracy in scene detection.",
  },
  {
    name: "Auto-Captions",
    problem: "Content creators need accurate, fast captions for accessibility and engagement.",
    role: "Full-stack developer — built speech-to-text pipeline, multi-language support, SRT export.",
    method: "Whisper API for transcription, Next.js frontend, WebSocket for real-time progress.",
    outcome: "99% transcription accuracy. Supports 12 languages. 5,000+ hours of video processed.",
  },
  {
    name: "OpenCut-Ai",
    problem: "Open-source alternative to CapCut with AI features for creators who want free tools.",
    role: "Core contributor — built AI features, video processing engine, plugin system.",
    method: "TypeScript, FFmpeg.wasm for browser-based processing, TensorFlow.js for AI features.",
    outcome: "100% free and open-source. Browser-based processing — no server costs.",
  },
  {
    name: "HRMS",
    problem: "Small businesses need affordable HR management without enterprise software costs.",
    role: "Full-stack developer — built complete HR system with attendance, payroll, leave management.",
    method: "Next.js, PostgreSQL, Prisma ORM, role-based access control.",
    outcome: "Complete HR solution for small teams. 80% cost reduction vs enterprise software.",
  },
  {
    name: "BuyYours-ECommerce-Website",
    problem: "Local businesses need affordable e-commerce without platform fees.",
    role: "Full-stack developer — built storefront, cart, checkout, admin dashboard.",
    method: "Next.js, Stripe integration, PostgreSQL, inventory management system.",
    outcome: "Zero platform fees. Full ownership of customer data. 30% higher margins for sellers.",
  },
];
