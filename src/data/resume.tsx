export const DATA = {
  name: "Jaydeep Raijada",
  url: "https://jaydeepraijada.com",
  location: "Bangalore, India",
  avatarUrl: "/profile.jpg",
  description:
    "I build LLM systems from scratch, for both training and inference, and I post-train small language models to see how far they can be pushed.",
  summary:
    "I'm an AI researcher at Comprint, where I work on LLM systems: distributed training and inference, post-training, and voice AI.\n\nI learn systems by building them from scratch. [tinyserve](https://github.com/jaydeepraijada/tinyserve) is a vLLM-style inference engine in one Python file that runs 13× faster than Hugging Face generate on real prompts. [torch-feather](https://github.com/jaydeepraijada/torch-feather) is a distributed training framework modelled on torchtitan, and pipeline parallelism is what I'm adding to it now. I write up what I learn, starting with a [series on 5D parallelism](https://labs.ainextstudio.com/learn/5d-parallelism).\n\nOn the research side, I take techniques that work on large models and test whether they still hold on small ones. I've run the full post-training stack (CPT → SFT → DPO → RL) on a 135M model, tested whether DPO's known failure mode hits sub-1B models harder (it didn't), and reproduced CLM-8B, a System One decision model, for about $82 of compute. I report what didn't work alongside what did.\n\nBefore Comprint, I was an analyst at Lowe's, building LLM pipelines for customer feedback in production. I placed in the top 100 at the [HuggingFace × Meta OpenEnv Hackathon](https://huggingface.co/spaces/Mayank022/shade-gym) in Bangalore.",

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
      title: "torch-feather",
      href: "https://github.com/jaydeepraijada/torch-feather",
      dates: "October 2026 – Present",
      description:
        "A distributed training framework built from scratch, modelled on PyTorch's torchtitan, to learn how large-scale LLM training is put together: model definition, data loading, config-driven training, and the parallelism layers that split a model across GPUs. DeepSeek-V3 is the first model it targets. So far it has the model (Multi-Head Latent Attention with weight absorption, YaRN RoPE scaling), a FineWeb streaming dataset with a stateful, resumable dataloader, and a trainer. **Work in progress:** pipeline parallelism is underway, and the other parallelism dimensions come next.",
      technologies: [
        "Distributed Training",
        "Pipeline Parallelism",
        "DeepSeek-V3",
        "MLA",
        "YaRN",
        "PyTorch",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/jaydeepraijada/torch-feather",
        },
      ],
    },
    {
      title: "Reproducing CLM-8B: a System One model",
      href: "https://github.com/jaydeepraijada/clm-experiments",
      dates: "November 2026",
      description:
        "A reproduction of CLM-8B (Contrastive Language Models, Kwok et al., Stanford and NVIDIA Research). The model scores options instead of generating text: frozen Qwen3-8B hidden states feed two small trained heads (about 18.9M parameters), and cosine similarity ranks each option. The full pre-training → mid-training → post-training pipeline ran on Modal for about **$82**.\n\n- **Tricky Q&A:** **69.0%** after post-training, against 68.5% published (raw Qwen3-8B with no heads: 14.4%).\n- **DeepSWE verifier:** **30.8/38** averaged over 5 seeds, a tie with the authors' released head (31.0).\n- **T-Rex game agent:** latency matches (17.1 ms), but planner agreement is far behind (2.7% vs 65.3%). The gap traces to the post-training data recipe, which isn't public, and closing it is the next experiment.",
      technologies: [
        "Contrastive Learning",
        "InfoNCE",
        "Hard Negatives",
        "Qwen3-8B",
        "Agents",
        "Modal",
        "Reproduction",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/jaydeepraijada/clm-experiments",
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
      title: "Post-Training Pipeline (CPT → SFT → DPO → RL)",
      href: "https://github.com/jaydeepraijada/post-training-experiments",
      dates: "May – November 2026",
      description:
        "The full post-training stack, run end to end on SmolLM-135M with each stage measured. All checkpoints are on HuggingFace.\n\n- **CPT:** QLoRA on 138 arXiv ML papers. On held-out papers: **−20.1% perplexity** (22.97 to 18.36), **+25.4% ROUGE-L**, **+37.5% BLEU**. Rank saturates at r≥16, so the data is the bottleneck, not the rank.\n- **SFT:** instruction tuning on 300K pairs generated from arXiv papers (7 task types, structured decoding via Outlines), with ChatML and response-only loss masking.\n- **DPO:** preference alignment on 151K LLM-judged pairs (β=0.1). Held-out reward accuracy rose from **0.50 to 0.72** while generation diversity held, so no mode collapse.\n- **RL:** GRPO for 24 hours on an H100. Correct output format went from **95.7%** (DPO) to **99.2%**, but answer quality stayed about flat: format made up most of the reward, and a blind LLM judge's preference for the late checkpoint (54.3% ± 6.1) wasn't significant. Next is penalising claims the source passage doesn't support.",
      technologies: [
        "CPT",
        "SFT",
        "DPO",
        "GRPO",
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
          type: "RL Model",
          href: "https://huggingface.co/JaydeepR/SmolLM-135M-neuraltxt-grpo-v1",
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
