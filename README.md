# IITM SDD Workshop 2026 — Calculator Assignment

This project was built as part of the **IIT Madras Software Design & Development Workshop 2026**.

The assignment asked us to build the same app **twice** — once as a "vibecoded" project (focus on design and feel) and once using the **OpenSpec v1.2** specification-driven method (focus on structure and reliability).

The app we built is a simple **web-based calculator** using HTML, CSS, and JavaScript.

---

## 📁 Branches

| Branch | Description |
|---|---|
| `vibe_coded_submission` | The Vibecoded version — premium UI, built for visual impact |
| `sdd_coded_submission` | The OpenSpec/SDD version — structured, documented, and enterprise-ready |

---

## 🎨 Version 1: Vibecoded Calculator

**Branch:** `vibe_coded_submission`

This version was built with a "design-first" mindset. The goal was to create something that looks and feels amazing before thinking about anything else.

### What makes it "Vibecoded"?
- **Glassmorphism design** — The calculator has a frosted-glass look with a dark background and glowing light effects behind it.
- **Neon accent colors** — The operator and equals buttons glow with a neon cyan/blue highlight.
- **Micro-animations** — Buttons subtly shrink when clicked, giving a satisfying tactile feel.
- **Premium typography** — Uses Google's *Outfit* font for a modern, clean look.
- **No pre-written spec** — The design was guided by feel and visual intuition, not a formal document.

### How it was built
The code was written in a single pass, starting with the visual design (CSS), then the layout (HTML), and finally the logic (JavaScript). The architecture is clean and class-based, but the decisions were driven by aesthetics.

---

## 🏗️ Version 2: Specification-Driven (OpenSpec) Calculator

**Branch:** `sdd_coded_submission`

This version was built using the **OpenSpec v1.2** framework. This means we wrote a formal specification document *before writing a single line of code*, and every feature in the app comes directly from that spec.

### What makes it "Spec-Driven"?
- **Spec-first development** — The file `openspec/specs/calculator.md` defines what the app must do. The code follows the spec, not the other way around.
- **Audit Log** — Every calculation is recorded in a live log at the bottom of the page with a timestamp. This is a standard requirement in enterprise software.
- **Explicit error handling** — Dividing by zero doesn't break the app or show `Infinity`. It shows `ERR: DIV/0` and logs the failed attempt.
- **Keyboard accessibility** — You can use the app entirely from your keyboard (numbers, `Enter` for equals, `Backspace` to delete, `Escape` to clear).
- **JSDoc comments** — The JavaScript is annotated with formal documentation comments, simulating a regulated codebase.
- **OpenSpec `.agent/` folder** — The project includes the full OpenSpec agent integration for AI-assisted specification management.

### How it was built
The process followed a strict order:
1. Initialize the OpenSpec project structure (`npx openspec init`)
2. Write the specification (`openspec/specs/calculator.md`)
3. Build the code to match the spec exactly

---

## 🔍 Key Differences at a Glance

| Feature | Vibecoded | OpenSpec/SDD |
|---|---|---|
| **Starting point** | Visual design | Written specification |
| **Design style** | Glassmorphism, dark, neon | High-contrast, clean, minimal |
| **Error handling** | Standard JS behavior | Explicit `ERR: DIV/0` with log |
| **Audit trail** | ❌ None | ✅ Timestamped history log |
| **Keyboard support** | ❌ None | ✅ Full keyboard controls |
| **Documentation** | Minimal | Spec file + JSDoc comments |
| **Goal** | Wow the user | Reliable, testable, maintainable |

---

## 🛠️ How to Run

No installation needed. Both versions are plain HTML/CSS/JS.

1. Download or clone the branch you want.
2. Open `index.html` in any browser.
3. That's it!

---

## 📚 About OpenSpec

OpenSpec is a lightweight specification framework for AI-assisted development. It helps developers write clear requirements before coding and keeps AI tools aligned with the project's goals.

Learn more: [github.com/Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)
