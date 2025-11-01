# Mobile Development Setup — Expo (React Native)

This README guides you step-by-step to set up Expo and test React Native apps on a physical device. It is tailored for a developer who already has **Flutter and Android** set up (so Android SDK, adb, and emulators are likely installed).

---

## ✅ Goal
Install Expo tools, run a sample React Native app on your physical device using **Expo Go**, and document the process and any issues you faced.

---

## Prerequisites (you already have Flutter + Android)
- **Node.js (LTS)** — if not installed, install from [https://nodejs.org/](https://nodejs.org/).
- **VS Code** — recommended editor.
- **Android SDK / adb** — already present since you have Flutter/Android installed.
- **Physical device with Expo Go installed** (Android or iOS). Follow app store links below.
- **Wi-Fi network** that both your computer and phone can access (for LAN connection) or use Tunnel mode.

---

## Step 0 — Quick checks (run in terminal)
```bash
node -v       # should be an LTS version (e.g. 18.x, 20.x)
npm -v
adb devices   # lists connected Android devices (optional)
