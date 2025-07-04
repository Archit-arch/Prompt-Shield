# Prompt-Shield
# 🔐 Prompt-Shield

Prompt-Shield is a browser extension that automatically detects and redacts sensitive information—like names, emails, company names, and other private data—from prompts before they are sent to Large Language Models (LLMs) such as ChatGPT or Gemini. It ensures privacy and compliance by preventing unintentional data leakage.


## 🚀 Features

- ✅ Real-time redaction of:
  - Names (e.g., "John Doe" → `{{NAME}}`)
  - Emails (e.g., "john@example.com" → `{{EMAIL}}`)
  - Company names and custom keywords
- 🔒 Local-only processing: nothing leaves your machine
- ⚙️ Easy toggle options to enable/disable redaction types
- 🧠 Uses basic NLP, regex, and in-browser scripts
- 🧩 Works on popular LLM interfaces like ChatGPT



## 📦 Installation (Manual / Dev Mode)

Clone this repository:
1. ```bash
   git clone https://github.com/Archit-arch/Prompt-Shield.git

2. Go to:
  Chrome: chrome://extensions

  Firefox: about:debugging#/runtime/this-firefox

3. Enable Developer Mode

4. Click Load Unpacked Extension

5. Select the Prompt-Shield/ folder

## Use Cases
1. Enterprise: Prevent leaking client/internal data to public LLMs

2. Education: Mask student names and grades

3. Individual: Privacy-focused users who use LLMs daily

## How It Works
User types a prompt on an LLM page

Extension detects sensitive entities

Replaces them with safe custom placeholders like {{NAME}}, {{EMAIL}}

Sends the redacted prompt


