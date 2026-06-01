export const DATA = {
  name: "Jaydeep Raijada",
  url: "https://jaydeepraijada.com",
  location: "Bangalore, India",
  avatarUrl: "/profile.jpg",
  description:
    "I train small language models and study how far they can be pushed with reinforcement learning and post-training.",
  summary:
    "I design reward functions, build training environments, and check whether techniques that work on large models still work when you shrink them ~70×. By day I'm an Analyst at Lowe's. On the side I'm running post-training experiments and exploring continual learning and self-distillation for sub-1B models. Recently placed in the top 100 at the [HuggingFace × Meta OpenEnv Hackathon](https://huggingface.co/spaces/Mayank022/shade-gym) in Bangalore.",

  contact: {
    email: "j.raijada25@gmail.com",
    social: {
      GitHub: { url: "https://github.com/jaydeepraijada" },
      LinkedIn: { url: "https://linkedin.com/in/jaydeepraijada" },
      X: { url: "https://x.com/Jaydeep_25" },
      Substack: { url: "https://jaydeepraijada.substack.com" },
    },
  },

  work: [
    {
      company: "Lowe's",
      href: "https://www.lowes.com",
      location: "Bangalore, India",
      title: "Analyst",
      start: "December 2024",
      end: "Present",
      description:
        "Designed an LLM-based sentiment analysis and topic modelling pipeline on Voice of Customer (VOC) data, enabling scalable monitoring of customer feedback in production. Built a clustering-based experimentation framework to find high-performing survey introduction scripts, which lifted take rate from 9% to 14% (a 55% relative improvement). Built a multi-stage prediction system using HistGradientBoosting across hierarchical classification buckets, plus Power BI dashboards to make the insights usable day-to-day.",
    },
  ],

  research: [
    {
      title:
        "Self-Distillation at Sub-1B Scale: Does SDFT Break When ICL Is Weak?",
      status: "Phase 1 (ongoing)",
      dates: "May 2026 – Present",
      description:
        "The two leading self-distillation methods were tested on models 7B parameters and larger. Neither paper looks at what happens below 1B, where in-context learning is much weaker. DynSDPB was built for small models, but no one has compared it head-to-head with the ICL-based approaches.",
      hypothesis:
        "Self-distillation gains depend on how good a model is at in-context learning. Below a certain size, ICL signals get too noisy to use as a teacher, and DynSDPB should outperform there.",
      model: "SmolLM2-360M",
      target: "ACL 2027",
      links: [
        {
          type: "SDFT (2601.19897)",
          href: "https://arxiv.org/abs/2601.19897",
        },
        {
          type: "DynSDPB (2411.16991)",
          href: "https://arxiv.org/abs/2411.16991",
        },
      ],
    },
  ],

  projects: [
    {
      title: "SHADE-GYM",
      href: "https://github.com/jaydeepraijada/SHADE-GYM",
      dates: "April 2026",
      description:
        "**Top 100 at the HuggingFace × Meta OpenEnv Hackathon, Bangalore.** Built an RL environment where a small monitor model learns to catch a frontier attacker (DeepSeek-R1) attempting hidden harmful behaviors across 9 enterprise scenarios. Every reward is a plain Python check, with no LLM-as-judge anywhere in the loop. After 10 reward design iterations, a simple linear reward beat the more elaborate composed one. Trained a Qwen-2.5-1.5B LoRA monitor from random performance (**AUROC 0.500**) to strong detection (**0.893**, Recall 0.88, FPR 0.12), closing about 40% of the gap to Gemini-2.5-Pro at under 0.1% of its per-call cost.",
      technologies: [
        "GRPO",
        "RLVR",
        "OpenEnv",
        "TRL",
        "Qwen-2.5-1.5B",
        "Reward Design",
        "Scalable Oversight",
        "LoRA",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/jaydeepraijada/SHADE-GYM",
        },
        {
          type: "Model",
          href: "https://huggingface.co/JaydeepR/shade-gym-monitor-qwen1.5b-exp04-ck20",
        },
      ],
    },
    {
      title: "Post-Training Pipeline (CPT → SFT → DPO)",
      href: "https://github.com/jaydeepraijada/post-training-experiments",
      dates: "May 2026",
      description:
        "The full post-training stack run end-to-end on a single sub-1B model, SmolLM-135M, with each stage measured. **CPT:** continued pre-training on 138 arXiv ML papers via QLoRA (rank 32, Unsloth) — on held-out papers, **−20.1% perplexity** (22.97 to 18.36), **+25.4% ROUGE-L**, **+37.5% BLEU**; rank saturates at r≥16, so the data (not the rank) is the bottleneck. **SFT:** instruction-tuned on a 300K-pair dataset generated from arXiv papers (7 stochastic task types, structured decoding via Outlines), using ChatML and response-only loss masking. **DPO:** preference-aligned on 151K LLM-judged pairs (β=0.1), which lifted held-out reward accuracy from **0.50 to 0.72** while *preserving* generation diversity — an alignment gain with no mode collapse. All checkpoints published to HuggingFace.",
      technologies: [
        "CPT",
        "SFT",
        "DPO",
        "Preference Optimization",
        "LoRA / QLoRA",
        "Unsloth",
        "TRL",
        "SmolLM-135M",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/jaydeepraijada/post-training-experiments",
        },
        {
          type: "DPO Model",
          href: "https://huggingface.co/JaydeepR/SmolLM-135M-neuraltxt-dpo-v1",
        },
        {
          type: "CPT Model",
          href: "https://huggingface.co/JaydeepR/SmolLM-135M-CPT-LoRA-r32",
        },
      ],
    },
    {
      title: "Diffusion Language Models",
      href: "https://github.com/jaydeepraijada/Diffusion",
      dates: "April 2026",
      description:
        "Two diffusion language models, both built from scratch. **ModernBERT (~150M):** pretrained as a masked diffusion LM on Project Gutenberg (6.4M chunks, 20 hours on an RTX 4090), then SFT'd on Open-Orca (~4.2M Q&A pairs, instruction-token-only loss). **TinyStories (45M):** full architecture written from scratch and trained for 60K steps, with confidence-based iterative denoising at generation time (128 diffusion steps). Loss dropped sharply around step 25K, the point where structure starts to emerge. All checkpoints published to HuggingFace.",
      technologies: [
        "Diffusion LM",
        "ModernBERT",
        "Non-autoregressive",
        "PyTorch",
        "Masked Diffusion",
        "From Scratch",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/jaydeepraijada/Diffusion",
        },
        {
          type: "Model",
          href: "https://huggingface.co/JaydeepR/ldm-modernbert-base-sft",
        },
      ],
    },
    {
      title: "TenderIQ",
      href: "https://huggingface.co/spaces/JaydeepR/TenderIQ",
      dates: "May 2026",
      description:
        "End-to-end system for evaluating government tenders. The pipeline pulls criteria from the document with a DeepSeek LLM, retrieves matching evidence with sentence-transformers, and writes an explainable verdict with cited source clauses. OCR uses a three-tier fallback: PyMuPDF first, Tesseract next, DeepSeek Vision when confidence drops below 65%. Borderline verdicts (confidence 0.55 to 0.80) route to a human review queue with a full audit trail. Covered by a 43-check smoke test suite.",
      technologies: [
        "RAG",
        "DeepSeek",
        "OCR",
        "Streamlit",
        "Human-in-the-loop",
        "Production",
        "Pydantic",
      ],
      links: [
        {
          type: "Demo",
          href: "https://huggingface.co/spaces/JaydeepR/TenderIQ",
        },
        {
          type: "GitHub",
          href: "https://github.com/jaydeepraijada/TenderIQ",
        },
      ],
    },
  ],
} as const;
