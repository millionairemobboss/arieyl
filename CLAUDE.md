# Three-Brain OS

This repo is the shared platform for Claude, Codex, and Gemini to work together.
Each brain has its own instruction file — all three read from the same memory, tools, and design systems.

| Brain | Instruction File | Role |
|---|---|---|
| Claude (you) | `CLAUDE.md` | Driver — builds, edits, plans, orchestrates |
| Codex | `AGENTS.md` | Reviewer — adversarial review, rescue, second opinion |
| Gemini | `GEMINI.md` | Eyes/ears — video, audio, PDF, whole-repo scan |

## Shared Resources

- `memory/` — persistent context all three brains read and write
- `design-systems/<brand>/DESIGN.md` — 71 brand design systems for UI work
- `graphify-out/` — codebase knowledge graph (query before grepping)
- `.claude-code-router/config.json` — model routing rules

## graphify

Knowledge graph at `graphify-out/` with 192 nodes, 204 edges, 19 communities.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists
- Use `graphify path "<A>" "<B>"` for relationships
- Use `graphify explain "<concept>"` for focused concepts
- After modifying code, run `graphify update .` to keep the graph current

## Memory

Always read `memory/project.md` at session start for current project state.
Write decisions and key findings back to `memory/` so all three brains stay in sync.

## Tools

- **Firecrawl MCP** — web scraping, search, crawling (`.mcp.json`)
- **Claude Router** — routes by task type (`.claude-code-router/config.json`)
- **Three-brain skill** — auto-routes to Codex/Gemini when needed (`.claude/skills/three-brain/`)

## Design Systems

When building UI, reference `design-systems/<brand>/DESIGN.md`.
Example: `design-systems/stripe/DESIGN.md` for Stripe-level polish.

## Claude Router Routing

| Task | Model |
|---|---|
| Default | claude-sonnet-4-6 |
| Background | gemini-2.5-flash |
| Heavy reasoning | deepseek-r1 via OpenRouter |
| Long context (>60k tokens) | gemini-2.5-pro |

## Rules

- Never hardcode API keys — use `.env` + `python-dotenv` or env var references
- Read `memory/project.md` before starting any session
- Write findings back to `memory/` after significant work
- Use graphify before grepping the codebase
- Three-brain skill fires automatically — don't invoke it manually
