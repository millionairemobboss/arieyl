# Graph Report - arieyl  (2026-05-29)

## Corpus Check
- 21 files · ~12,490 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 192 nodes · 204 edges · 19 communities (12 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `57597c64`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]

## God Nodes (most connected - your core abstractions)
1. `ADA` - 14 edges
2. `ADA` - 13 edges
3. `AudioLoop` - 11 edges
4. `Three-Brain Auto-Router` - 11 edges
5. `ADA` - 10 edges
6. `ADA (Advanced Design Assistant)` - 10 edges
7. `ADA — Advanced Design Assistant` - 9 edges
8. `TTSApp` - 6 edges
9. `main()` - 6 edges
10. `main()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `main()` --calls--> `ADA`  [EXTRACTED]
  main_local.py → ADA/ADA_Local.py
- `main()` --calls--> `ADA`  [EXTRACTED]
  main_online.py → ADA/ADA_Online.py
- `main()` --calls--> `ADA`  [EXTRACTED]
  main_online_noelevenlabs.py → ADA/ADA_Online_NoElevenlabs.py

## Communities (19 total, 7 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (15): ADA, main(), str, Fetches current weather. (Removed SocketIO emit), Synchronous helper for Google Maps API call, Async wrapper to get travel duration. (Removed SocketIO emit), Clears all data from the input, response, and audio queues., Handles user text input (Kept original) (+7 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (13): ADA, main(), str, Fetches current weather., Synchronous helper for Google Maps API call, Async wrapper to get travel duration., Clears input and response queues., Handles user text input (Keep) (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (22): Announcement protocol (REQUIRED for all forced routes), Calling pattern (Bash, since slash commands aren't issuable from inside a skill), code:bash (codex --version 2>&1 | head -1   # expect: codex-cli 0.125+), code:block10 ([2026-04-27 16:24] route=video-build target=alex-clip durati), code:bash (# Codex review), code:block2 ([three-brain] routing to Codex (adversarial-review) — risk p), code:bash (cat <context-bundle> | codex exec --skip-git-repo-check "res), code:bash (# 1. Acquire (if YouTube URL)) (+14 more)

### Community 3 - "Community 3"
Cohesion: 0.09
Nodes (21): ADA (Advanced Design Assistant), API Key Setup (Environment Variables Recommended), code:bash (git clone https://github.com/Nlouis38/ada.git), code:bash (python multimodal_live_api.py --mode screen), code:bash (python multimodal_live_api.py --mode none), code:bash (python -m venv venv), code:bash (pip install ollama websockets pyaudio RealtimeSTT RealtimeTT), code:dotenv (# .env file) (+13 more)

### Community 4 - "Community 4"
Cohesion: 0.13
Nodes (14): ADA — Advanced Design Assistant, ADA — Advanced Design Assistant + Three-Brain Stack, Adding a new widget / tool, Architecture, code:block1 (/plugin marketplace add openai/codex-plugin-cc), code:bash (npm install -g @openai/codex), code:block3 (arieyl/), Commands (+6 more)

### Community 5 - "Community 5"
Cohesion: 0.21
Nodes (3): AudioLoop, ## Setup  To install the dependencies for this script, run:  ```  pip install go, Background task to reads from the websocket and write pcm chunks to the output q

### Community 6 - "Community 6"
Cohesion: 0.21
Nodes (4): ADA, Clears all data from the input, response, and audio queues., main(), Important: **Use headphones**. This script uses the system default audio input a

### Community 7 - "Community 7"
Cohesion: 0.22
Nodes (8): add_task(), create_list(), delete_task(), display_todo_list(), Adds a task to the to-do list.      Args:         todo_list (list): The to-do li, Creates an empty to-do list.      Returns:         list: An empty to-do list., Deletes a task from the to-do list.      Args:         todo_list (list): The to-, Displays the current to-do list.      Args:         todo_list (list): The to-do

### Community 8 - "Community 8"
Cohesion: 0.29
Nodes (7): `ada_local`, `ada_online_noelevenlabs`, `ada_online` (Recommended), code:bash (# Ensure Ollama is running with the required model pulled), code:bash (# Make sure .env file is set up with API keys), code:bash (# Make sure .env file is set up with GOOGLE_API_KEY and MAPS), Running ADA

### Community 10 - "Community 10"
Cohesion: 0.33
Nodes (5): hooks, PreToolUse, permissions, allow, deny

### Community 11 - "Community 11"
Cohesion: 0.40
Nodes (4): firecrawl, FIRECRAWL_API_KEY, npx, firecrawl-mcp

## Knowledge Gaps
- **48 isolated node(s):** `npx`, `firecrawl-mcp`, `FIRECRAWL_API_KEY`, `allow`, `allow` (+43 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ADA (Advanced Design Assistant)` connect `Community 3` to `Community 8`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `Important: **Use headphones**. This script uses the system default audio input a`, `## Setup  To install the dependencies for this script, run:  ```  pip install go`, `Background task to reads from the websocket and write pcm chunks to the output q` to the rest of the system?**
  _80 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10256410256410256 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11594202898550725 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._