# Gemini Clone

A modern AI chat application inspired by Google Gemini built using React, Tailwind CSS, and Google Gemini API integration.
This project replicates the core chat experience of Google Gemini, allowing users to interact with an AI assistant through a clean and responsive interface. The application supports conversation management, chat history, and AI-generated formatted responses powered by Google's Gemini model.

## Features

- AI-powered responses using Google Gemini API
- Markdown rendering for AI responses
- Chat history management
- Recent chats sidebar
- Create new conversations
- Load previous conversations
- Delete conversations
- Automatic chat updates
- Local Storage persistence
- Responsive sidebar UI
- Auto-resizing text area
- Multi-line prompt input
- Enter to send, Shift + Enter for a new line

## Tech Stack

- React
- Tailwind CSS
- Vite
- Google Gemini API


## Installation

### Clone the repository

```bash
git clone https://github.com/the-vivek-codes/react-ui-projects
cd gemini-clone
```

### Install dependencies

```bash
npm install
```

### Create Environment File

Create a `.env` file in the project root.

```env
VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE
```

Get your API key from Google AI Studio.

### Run the project

```bash
npm run dev
```