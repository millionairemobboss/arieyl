# ADA — Advanced Design Assistant + Three-Brain Stack

## Three-Brain Setup (Claude + Codex + Gemini)

This repo runs a three-brain routing system. Claude drives. Codex reviews and rescues. Gemini handles multimodal + long-context.

| Brain | Role | CLI |
|---|---|---|
| Claude (you) | Build, edit, plan | — |
| Codex (GPT-5.5) | Review, adversarial review, rescue | `codex` |
| Gemini 2.5 Pro | Video, audio, PDF, whole-repo scan | `gemini` |

**Key plugins (install once in Claude Code):**
```
/plugin marketplace add openai/codex-plugin-cc
/plugin install codex@openai-codex
/plugin marketplace add thepushkarp/cc-gemini-plugin
/plugin install cc-gemini-plugin@cc-gemini-plugin
/reload-plugins
```

**Key CLIs (install once on your machine):**
```bash
npm install -g @openai/codex
npm install -g @google/gemini-cli
codex login
gemini auth
```

The `/three-brain` skill auto-routes — you don't invoke it manually. It fires on review requests, risky file edits, media files, and rescue situations. See `.claude/skills/three-brain/SKILL.md` for the full routing rules.

**MCP:** Firecrawl is wired via `.mcp.json` — set `FIRECRAWL_API_KEY` in your env.

---

# ADA — Advanced Design Assistant

ADA is a real-time voice AI assistant built on Google Gemini + ElevenLabs. It supports both a local mode (Ollama LLM + system TTS) and an online mode (Gemini Live API + ElevenLabs WebSocket streaming).

## Project layout

```
arieyl/
├── CLAUDE.md                  ← this file
├── main_local.py              ← entry point for local mode
├── main_online.py             ← entry point for online + ElevenLabs mode
├── main_online_noelevenlabs.py← entry point for online, system TTS
├── multimodal_live_api.py     ← live audio/video demo
├── ADA/
│   ├── ADA_Local.py           ← ADA class for local mode
│   ├── ADA_Online.py          ← ADA class for online mode (primary)
│   ├── ADA_Online_NoElevenlabs.py
│   └── WIDGETS/
│       ├── camera.py          ← opens camera feed
│       ├── system.py          ← returns hardware info
│       ├── project.py         ← creates project folders
│       ├── timer.py           ← countdown timer
│       └── to_do_list.py      ← to-do list (not yet integrated)
└── test/
    ├── basic_tts.py
    ├── tts_latency_test.py
    └── function_call_accuracy_test.py
```

## Commands

- Run (online, recommended): `python main_online.py`
- Run (online, no ElevenLabs): `python main_online_noelevenlabs.py`
- Run (local): `python main_local.py`
- Run (multimodal demo): `python multimodal_live_api.py --mode camera`

## Stack

- **LLM (online):** Google Gemini `gemini-2.0-flash-live-001` via `google-genai` SDK
- **LLM (local):** Ollama `gemma3:4b-it-q4_K_M`
- **STT:** `RealtimeSTT` with Whisper `large-v3`
- **TTS (online):** ElevenLabs WebSocket streaming, `eleven_flash_v2_5`, PCM 24 kHz
- **TTS (local):** `RealtimeTTS` with `SystemEngine`
- **Tools/function calling:** `google.genai.types.FunctionDeclaration` + `Tool`
- **Environment:** `python-dotenv`, keys in `.env` (`GOOGLE_API_KEY`, `ELEVENLABS_API_KEY`, `MAPS_API_KEY`)

## Architecture

ADA runs four concurrent `asyncio` tasks:
1. `stt()` — mic → `input_queue`
2. `send_prompt()` — `input_queue` → Gemini (handles tool calls in-loop) → `response_queue`
3. `tts()` — `response_queue` → ElevenLabs WebSocket → `audio_queue`
4. `play_audio()` — `audio_queue` → PyAudio speaker output

Tool calls are handled synchronously inside `send_prompt()`: ADA calls the function, sends back `FunctionResponse`, and continues the `async for response in session.receive()` loop.

## Adding a new widget / tool

1. Create `ADA/WIDGETS/my_tool.py` with the logic (sync or async).
2. Add a `FunctionDeclaration` to `ADA_Online.py` (or `ADA_Local.py`).
3. Register it in `self.available_functions`.
4. Add the declaration to `self.config` tools list.

Use `/add-widget` to scaffold this automatically.

## Rules

- Always use `python-dotenv` for secrets; never hardcode keys.
- Widget functions return plain dicts (not strings) so Gemini can parse the result.
- Async tool functions use `asyncio.to_thread()` to wrap blocking calls.
- Keep the four-task architecture; don't add threads or extra queues without reason.
- `pyaudio` streams must be opened and closed in `asyncio.to_thread()`.
- Voice ID `pFZP5JQG7iQjIQuC4Bku` is ADA's ElevenLabs voice — don't change it without a note.

## Key constants (ADA_Online.py)

| Constant | Value | Purpose |
|---|---|---|
| `VOICE_ID` | `pFZP5JQG7iQjIQuC4Bku` | ElevenLabs voice |
| `RECEIVE_SAMPLE_RATE` | `24000` | PCM output rate from ElevenLabs |
| `FORMAT` | `pyaudio.paInt16` | Audio format |
| `CHUNK_SIZE` | `1024` | PyAudio chunk size |
| `model` | `gemini-2.0-flash-live-001` | Gemini Live model |

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
