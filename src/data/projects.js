export const projects = [
  {
    id: 1,
    number: '01',
    title: 'ANUMIX',
    subtitle: 'AI SaaS Platform',
    featured: true,
    description:
      'A full AI SaaS platform built from scratch as sole developer. Includes AI video generation with Google Veo, image generation, AI chat, script writing, text-to-speech narration, tiered subscriptions, a 3-level referral system, Google OAuth, JWT auth, and a comprehensive admin panel.',
    stack: ['Flask', 'React', 'PostgreSQL', 'Google Vertex AI', 'Google Veo', 'OpenAI', 'JWT', 'Apache'],
    liveUrl: 'https://app.anumix.com',
    videoUrl: null, // replace with your demo video URL
    badge: 'Live SaaS Product',
  },
  {
    id: 2,
    number: '02',
    title: 'FaceLog',
    subtitle: 'AI Attendance System',
    featured: false,
    description:
      'AI-powered attendance system with 5-angle face registration, real-time face recognition, GPT-4o Vision anti-spoofing, kiosk check-in/out mode, and automated Excel payroll exports. Deployed live on Oracle Cloud.',
    stack: ['Django', 'React', 'DeepFace', 'GPT-4o Vision', 'PostgreSQL', 'Oracle Cloud'],
    liveUrl: 'https://facelog.duckdns.org',
    videoUrl: null,
    badge: null,
  },
  {
    id: 3,
    number: '03',
    title: 'RAG Document Intelligence',
    subtitle: 'AI Document Q&A',
    featured: false,
    description:
      'Upload any document — PDF, image, audio — ask questions in natural language and get accurate answers with source citations. Built with FAISS vector search, Sentence Transformers embeddings, Whisper, Tesseract OCR, and OpenAI. Deployed on Hugging Face via Docker.',
    stack: ['Flask', 'React', 'FAISS', 'Sentence Transformers', 'Whisper', 'Tesseract', 'Docker'],
    liveUrl: 'https://jamehtisham-rag-document-intelligence.hf.space',
    videoUrl: null,
    badge: null,
  },
  {
    id: 4,
    number: '04',
    title: 'AI Social Media Agent',
    subtitle: 'Content Generation',
    featured: false,
    description:
      'An AI agent that researches any topic live on the web and generates platform-perfect posts for LinkedIn, Twitter/X, and Instagram. Uses GPT-4o for content, Serper API for real-time web research, and GPT-4o Vision for image and video analysis.',
    stack: ['Flask', 'React', 'GPT-4o', 'Serper API', 'OpenCV', 'Hugging Face'],
    liveUrl: 'https://jamehtisham-ai-social-media-agent.hf.space',
    videoUrl: null,
    badge: null,
  },
]
