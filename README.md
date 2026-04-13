# 🎮 Game Night App

An AI-powered party game platform built with React, featuring 10 interactive games for friends or solo play against AI. Built with a sleek SIGINT/military aesthetic using Tailwind CSS and the Anthropic Claude API.

---

## 🕹️ Games

| # | Game | Mode |
|---|------|------|
| 1 | Would You Rather | AI vs Friends |
| 2 | Roast Battle | AI vs Friends |
| 3 | Two Truths One Lie | AI vs Friends |
| 4 | Chaos Story | Friends |
| 5 | Purity Score | Friends |
| 6 | Never Have I Ever | Friends |
| 7 | Personality Roast | Friends |
| 8 | Guess the Person | Friends |
| 9 | Who In Your Friend Group | Friends |
| 10 | Reality Show Generator | Friends |

---

## ✨ Features

- **AI-powered gameplay** — Claude generates questions, roasts, clues, stories, and more in real-time
- **Multiplayer support** — hot-seat style play for 2+ players
- **Solo AI mode** — play against the AI in select games
- **Live leaderboard** — scores tracked and ranked after each game
- **Streaming responses** — AI text streams word-by-word for dramatic effect
- **Custom cursor & animations** — full SIGINT-themed UI with glitch effects

---

## 🛠️ Tech Stack

- **Frontend** — React (via CDN, no build step)
- **Styling** — Tailwind CSS
- **AI** — Anthropic Claude API (`claude-sonnet-4-20250514`)
- **Runtime** — Electron (desktop app via `main.js` + `preload.js`)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- An [Anthropic API key](https://console.anthropic.com/)

### Installation

```bash
git clone https://github.com/KRISH123no/Game-night-app.git
cd Game-night-app
npm install
```

### Running the App

```bash
npm start
```

This launches the Electron desktop app.

### Environment

Set your Anthropic API key before running:

```bash
export ANTHROPIC_API_KEY=your_api_key_here
```

Or add it to a `.env` file in the root directory:

```
ANTHROPIC_API_KEY=your_api_key_here
```

---

## 📁 Project Structure

```
Game-night-app/
├── index.html       # Main React app (all components)
├── main.js          # Electron main process
├── preload.js       # Electron preload script
├── package.json     # Dependencies & scripts
└── README.md
```

---

## 🎨 Design

The UI is built around a **SIGINT / military terminal aesthetic** featuring:
- Monochrome black backgrounds with gold (`#C9A84C`) and red (`#FF003C`) accents
- Michroma font for headings
- Glitch text animations
- Crosshair cursor
- Corner bracket overlays

---

## 📄 License

MIT
