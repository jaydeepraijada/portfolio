export const DATA = {
  name: "Jaydeep Raijada",
  url: "https://jaydeepraijada.com",
  location: "Bangalore, India",
  avatarUrl: "/profile.jpg",
  description:
    "I train small language models and study how far they can be pushed with reinforcement learning and post-training.",
  summary:
    "I design reward functions, build training environments, and check whether techniques that work on large models still work when you shrink them ~70×. By day I'm an Analyst at Lowe's. On the side I'm running a small-scale research program on on-policy distillation and continual learning: how to schedule multiple specialist teachers, when distribution-level supervision beats sampled tokens, and whether self-distillation survives weak in-context learning. Recently placed in the top 100 at the [HuggingFace × Meta OpenEnv Hackathon](https://huggingface.co/spaces/Mayank022/shade-gym) in Bangalore.",

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
        "Multi-Teacher On-Policy Distillation: Scheduling, Forgetting, and the Sampled-vs-Logit Dispute",
      status: "Rescoped design v2 · pre-implementation, awaiting sign-off",
      dates: "June 2026 – Present",
      description:
        "Frontier labs distill one student from many specialist teachers at once (Nemotron 3 Ultra routes more than ten), yet nobody has published a controlled comparison of how to schedule them: routed-joint vs sequential vs sequential-with-replay, at matched token budgets, with forgetting and backward transfer measured. There is also a second open dispute, where three 2026 papers report three different winners between sampled-token and logit-distribution supervision. This study runs the clean 2×2 plus replay control at small scale, across two deliberately different domains (math and tool-calling), behind strict validity gates: pinned revisions, loss-correctness checks, and evaluator audits before anything expensive runs.",
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
        "ICL-based self-distillation has never been tested below 1.7B parameters, where the in-context learning it relies on for its teacher signal is much weaker. DynSDPB was built for small models but has never been compared head-to-head against the ICL-based approach. This study runs that comparison in a sequential-learning setup (arithmetic → code → factual QA), measures forgetting across 360M–1.5B, and correlates few-shot ICL quality with the strength of the self-distillation teacher signal.",
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
      title: "DPO Squeezing Falsification on Small LMs",
      href: "https://github.com/jaydeepraijada/dpo-verifiable-rewards-slm",
      dates: "June 2026",
      description:
        "A falsification experiment: does the DPO \"squeezing\" failure mode, where chosen and rejected log-probabilities collapse together instead of just the rejected one falling, hit sub-1B models earlier or harder than the 7B+ models it's documented in? **Not supported.** Three rounds of iterative DPO with verifiable rewards (DPO-VP) on Qwen2.5-0.5B-Instruct + GSM8K show the textbook *healthy* signature instead: chosen logprob stays flat, rejected falls faster, preference gap grows round over round. A matched GRPO baseline is equally stable. Pushing further to SmolLM2-135M hit a capacity floor (3% pass@1) before the squeezing question could even be tested at that scale.",
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
      title: "The Open Post-Training Project (OPTP)",
      href: "https://github.com/jaydeepraijada/open-post-training-project",
      dates: "June 2026 – Present",
      description:
        "An open-source, graduate-level textbook and engineering handbook documenting the complete evolution of LLM post-training (2017–2026), from early instruction tuning through modern reasoning-focused RL systems. Aiming to be the resource a researcher could use to reproduce the post-training pipeline of any frontier lab: paper encyclopedia, reconstructed per-lab recipes, algorithm deep-dives with derivations, and runnable implementations. **Early scaffolding stage** — structure is in place, content is being written.",
      technologies: ["Post-Training", "RLHF", "Technical Writing", "Open Source"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/jaydeepraijada/open-post-training-project",
        },
      ],
    },
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
        "The full post-training stack run end-to-end on a single sub-1B model, SmolLM-135M, with each stage measured. **CPT:** continued pre-training on 138 arXiv ML papers via QLoRA (rank 32, Unsloth). On held-out papers: **−20.1% perplexity** (22.97 to 18.36), **+25.4% ROUGE-L**, **+37.5% BLEU**; rank saturates at r≥16, so the data (not the rank) is the bottleneck. **SFT:** instruction-tuned on a 300K-pair dataset generated from arXiv papers (7 stochastic task types, structured decoding via Outlines), using ChatML and response-only loss masking. **DPO:** preference-aligned on 151K LLM-judged pairs (β=0.1), which lifted held-out reward accuracy from **0.50 to 0.72** while *preserving* generation diversity, an alignment gain with no mode collapse. All checkpoints published to HuggingFace.",
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
      title: "CPT × LoRA: A Controlled Ablation Study",
      href: "",
      dates: "February 2026",
      description:
        "Which LoRA tricks actually matter for continued pre-training? A reproducible study stress-testing the recommendations in Unsloth's CPT guide. Llama-2-7B is continually pretrained on a code corpus (Magicoder-Evol-Instruct-110K); starting from a paper baseline, each experiment adds **exactly one ingredient** (extra LoRA target modules, rank-stabilized LoRA, a decoupled embedding learning rate) and measures the effect on held-out validation perplexity. One training script, six config files, one varied knob each. That identity is what makes it a controlled experiment rather than six scripts that drift apart.",
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
