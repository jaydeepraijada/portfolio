export const DATA = {
  name: "Jaydeep Raijada",
  url: "https://jaydeepraijada.com",
  location: "Bangalore, India",
  avatarUrl: "/profile.jpg",
  description:
    "I work on LLM systems, and I train small language models to see how far reinforcement learning and post-training can push them.",
  summary:
    "I work on LLM systems at Comprint. On my own time, I train small language models and test whether techniques that work on large models still hold up when you shrink them ~70×.\n\nThat means designing reward functions, building training environments, and running a small research program on on-policy distillation and continual learning: how to schedule multiple specialist teachers, when distribution-level supervision beats sampled tokens, and whether self-distillation survives weak in-context learning.\n\nI placed in the top 100 at the [HuggingFace × Meta OpenEnv Hackathon](https://huggingface.co/spaces/Mayank022/shade-gym) in Bangalore.",

  contact: {
    email: "j.raijada25@gmail.com",
    social: {
      GitHub: { url: "https://github.com/jaydeepraijada" },
      HuggingFace: { url: "https://huggingface.co/JaydeepR" },
      LinkedIn: { url: "https://www.linkedin.com/in/jaydeep-raijada-b8a735119/" },
      X: { url: "https://x.com/Jaydeep_25" },
      Substack: { url: "https://jaydeepraijada.substack.com" },
    },
  },

  work: [
    {
      company: "Comprint",
      href: "https://labs.ainextstudio.com",
      location: "Mumbai, India",
      title: "Artificial Intelligence Researcher",
      start: "September 2026",
      end: "Present",
      description:
        "Working on LLM systems at Comprint's AI Next Studio: distributed training and inference systems, post-training, voice AI, and AI research.",
    },
    {
      company: "Lowe's",
      href: "https://www.lowes.com",
      location: "Bangalore, India",
      title: "Analyst",
      start: "December 2024",
      end: "August 2026",
      description:
        "- Designed an LLM pipeline for sentiment analysis and topic modelling on Voice of Customer data, used to monitor customer feedback in production.\n- Built a clustering-based framework for finding the best survey introduction scripts, which lifted take rate from 9% to 14%, a **55% relative improvement**.\n- Built a multi-stage HistGradientBoosting prediction system across hierarchical classification buckets, plus Power BI dashboards that made the insights usable day to day.",
    },
  ],

  research: [
    {
      title:
        "Multi-Teacher On-Policy Distillation: Scheduling, Forgetting, and the Sampled-vs-Logit Dispute",
      status: "Validity gates G0 and G1 passed",
      dates: "June 2026 – Present",
      description:
        "Frontier labs distill one student from many specialist teachers at once (Nemotron 3 Ultra routes more than ten), but nobody has published a controlled comparison of how to schedule them. Separately, three 2026 papers report three different winners between sampled-token and logit-distribution supervision. This study tests both at small scale: routed-joint, sequential, and sequential-with-replay schedules at matched token budgets, measuring forgetting and backward transfer across two deliberately different domains (math and tool-calling).",
      hypothesis:
        "Routed joint distillation gives the best multi-domain tradeoff at matched budgets, and the sampled-vs-logit winner per domain is predicted by how far student rollouts stray off the teacher's support.",
      model: "Qwen2.5-0.5B student · two 7B specialist teachers",
      target: "",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/jaydeepraijada/micro-mopd",
        },
        {
          type: "Revisiting OPD (2603.25562)",
          href: "https://arxiv.org/abs/2603.25562",
        },
        {
          type: "Rethinking OPD (2604.13016)",
          href: "https://arxiv.org/abs/2604.13016",
        },
      ],
    },
    {
      title:
        "Self-Distillation at Sub-1B Scale: Does SDFT Break When ICL Is Weak?",
      status: "Gap verified · infra built",
      dates: "May 2026 – Present",
      description:
        "ICL-based self-distillation has never been tested below 1.7B parameters, where the in-context learning behind its teacher signal is much weaker. DynSDPB was built for small models but has never been compared head-to-head with it. This study runs that comparison on a sequential-learning task (arithmetic → code → factual QA), measures forgetting across 360M–1.5B, and correlates few-shot ICL quality with the strength of the teacher signal.",
      hypothesis:
        "Self-distillation gains track in-context learning quality. Below some scale threshold the ICL teacher signal degrades into noise, and mini-batch logit distillation (DynSDPB) becomes the more reliable choice.",
      model: "SmolLM2-360M · Qwen2.5-0.5B / 1.5B",
      target: "EMNLP / CoLLAs 2027",
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
      title: "tinyserve",
      href: "https://github.com/jaydeepraijada/tinyserve",
      dates: "October 2026",
      description:
        "A vLLM-style inference engine in one Python file, written to understand how serving engines work from the inside. It has a paged KV cache with prefix caching, continuous batching, chunked prefill, preemption, and an OpenAI-compatible server. On 100 real prompts (Qwen3-0.6B on a DGX Spark), wall time fell from **99.3s** with Hugging Face generate to **5.7s**: about **13×** from continuous batching, and another **1.35×** from prefix caching.",
      technologies: [
        "LLM Inference",
        "Paged Attention",
        "Continuous Batching",
        "Prefix Caching",
        "FlashAttention",
        "CUDA Graphs",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/jaydeepraijada/tinyserve",
        },
      ],
    },
    {
      title: "SHADE-GYM",
      href: "https://github.com/jaydeepraijada/SHADE-GYM",
      dates: "April 2026",
      description:
        "**Top 100 at the HuggingFace × Meta OpenEnv Hackathon, Bangalore.** An RL environment where a small monitor model learns to catch a frontier attacker (DeepSeek-R1) attempting hidden harmful behaviors across 9 enterprise scenarios. Every reward is a plain Python check, with no LLM judge in the loop, and after 10 reward design iterations a simple linear reward beat the more elaborate composed one. The Qwen-2.5-1.5B LoRA monitor went from random (**AUROC 0.500**) to **0.893** (Recall 0.88, FPR 0.12), closing about 40% of the gap to Gemini-2.5-Pro at under 0.1% of its per-call cost.",
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
        "The full post-training stack, run end to end on SmolLM-135M with each stage measured. All checkpoints are on HuggingFace.\n\n- **CPT:** QLoRA on 138 arXiv ML papers. On held-out papers: **−20.1% perplexity** (22.97 to 18.36), **+25.4% ROUGE-L**, **+37.5% BLEU**. Rank saturates at r≥16, so the data is the bottleneck, not the rank.\n- **SFT:** instruction tuning on 300K pairs generated from arXiv papers (7 task types, structured decoding via Outlines), with ChatML and response-only loss masking.\n- **DPO:** preference alignment on 151K LLM-judged pairs (β=0.1). Held-out reward accuracy rose from **0.50 to 0.72** while generation diversity held, so no mode collapse.",
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
      title: "DPO Squeezing Falsification on Small LMs",
      href: "https://github.com/jaydeepraijada/dpo-verifiable-rewards-slm",
      dates: "June 2026",
      description:
        "Does DPO \"squeezing\", where chosen and rejected log-probabilities collapse together, hit sub-1B models earlier or harder than the 7B+ models it's documented in? **Not supported.** Three rounds of iterative DPO with verifiable rewards on Qwen2.5-0.5B-Instruct and GSM8K show the *healthy* signature instead: chosen logprob stays flat, rejected falls faster, and the preference gap grows each round. A matched GRPO baseline is equally stable. SmolLM2-135M hit a capacity floor (3% pass@1) before the question could be tested at that scale.",
      technologies: [
        "DPO",
        "RLVR",
        "GRPO",
        "Qwen2.5-0.5B",
        "GSM8K",
        "Falsification",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/jaydeepraijada/dpo-verifiable-rewards-slm",
        },
      ],
    },
    {
      title: "Diffusion Language Models",
      href: "https://github.com/jaydeepraijada/Diffusion",
      dates: "April 2026",
      description:
        "Two diffusion language models, both built from scratch. All checkpoints are on HuggingFace.\n\n- **ModernBERT (~150M):** pretrained as a masked diffusion LM on Project Gutenberg (6.4M chunks, 20 hours on an RTX 4090), then SFT'd on Open-Orca (~4.2M Q&A pairs, instruction-token-only loss).\n- **TinyStories (45M):** full architecture written from scratch and trained for 60K steps, with confidence-based iterative denoising at generation time (128 diffusion steps).",
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
      title: "CPT × LoRA: A Controlled Ablation Study",
      href: "",
      dates: "February 2026",
      description:
        "Which LoRA tricks actually matter for continued pre-training? This study tests the recommendations in Unsloth's CPT guide by continually pretraining Llama-2-7B on a code corpus (Magicoder-Evol-Instruct-110K). Starting from a paper baseline, each experiment adds **exactly one ingredient** (extra LoRA target modules, rank-stabilized LoRA, a decoupled embedding learning rate) and measures held-out perplexity. One training script and six config files keep it a controlled comparison.",
      technologies: [
        "CPT",
        "LoRA",
        "rsLoRA",
        "Unsloth",
        "Llama-2-7B",
        "Ablation Design",
      ],
      links: [],
    },
    {
      title: "TenderIQ",
      href: "https://huggingface.co/spaces/JaydeepR/TenderIQ",
      dates: "May 2026",
      description:
        "An end-to-end system for evaluating government tenders. It pulls criteria from the document with a DeepSeek LLM, retrieves matching evidence with sentence-transformers, and writes an explainable verdict that cites source clauses. OCR falls back from PyMuPDF to Tesseract to DeepSeek Vision when confidence drops below 65%, and borderline verdicts (confidence 0.55 to 0.80) go to a human review queue with a full audit trail.",
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
    {
      title: "The Open Post-Training Project (OPTP)",
      href: "https://github.com/jaydeepraijada/open-post-training-project",
      dates: "June 2026 – Present",
      description:
        "An open-source textbook and engineering handbook on the evolution of LLM post-training from 2017 to 2026: a paper encyclopedia, reconstructed per-lab recipes, algorithm derivations, and runnable implementations. **Early stage:** the structure is in place and the content is being written.",
      technologies: ["Post-Training", "RLHF", "Technical Writing", "Open Source"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/jaydeepraijada/open-post-training-project",
        },
      ],
    },
  ],

  writing: [
    {
      title: "5D Parallelism: how LLM training is split across GPUs",
      href: "https://labs.ainextstudio.com/learn/5d-parallelism",
      publishedAt: "2026-10-16",
      source: "AI Next Labs",
    },
  ],
} as const;
