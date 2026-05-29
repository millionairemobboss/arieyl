# Project Memory

Shared context for Claude, Codex, and Gemini. Read this at the start of every session.

## What This Is

A three-brain OS — Claude, Codex, and Gemini working on the same platform with shared memory, tools, and design systems.

## Stack

| Layer | Tool | Status |
|---|---|---|
| Three-brain routing | `.claude/skills/three-brain/SKILL.md` | Live |
| Web scraping | Firecrawl MCP via `.mcp.json` | Live |
| Codebase graph | Graphify — `graphify-out/` | Live (192 nodes) |
| Design systems | `design-systems/` | Live (71 brands) |
| Model routing | Claude Router — `.claude-code-router/config.json` | Live |
| Codex CLI | `codex` 0.135.0 | Installed |
| Gemini CLI | `gemini` 0.44.1 | Installed |

## Current Focus

Setting up the three-brain OS platform. All infrastructure is in place.
Next: define what we're actually building on top of this foundation.

## Key Decisions

- Claude is driver, Codex is reviewer, Gemini handles media/long-context
- All three read from this `memory/` directory for shared state
- Design system to use: pick from `design-systems/<brand>/DESIGN.md`
- Model routing: Sonnet default, Gemini Flash for background, DeepSeek R1 for reasoning, Gemini Pro for long-context

## Open Questions

- What is the product we're building on this OS?
- Which design system(s) to use as primary aesthetic?

## Findings

*Codex findings → `memory/codex-findings.md`*
*Gemini findings → `memory/gemini-findings.md`*
