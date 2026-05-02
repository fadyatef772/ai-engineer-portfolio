# Multilingual Text Preprocessing Engine

## Project Overview

**Multilingual Text Preprocessing Engine** is a full-stack NLP project designed to clean and prepare
raw text data for machine learning and natural language processing tasks. The system supports both
**English** and **Arabic** text preprocessing through a configurable API and a simple user interface.

The project allows users to input raw text, choose the language, select preprocessing options, and
receive cleaned text along with the list of applied processing steps. It is built using **FastAPI**,
modular Python services, and runs inside a single **Docker container**.

---

## Problem Statement

Raw text data is often noisy and inconsistent. It may contain punctuation, numbers, emojis, URLs,
repeated characters, Arabic diacritics, stopwords, and spelling variations. These issues can reduce
the quality of NLP models such as sentiment analysis systems, search engines, chatbots, and
classification models.

This project solves that problem by providing a structured and customizable preprocessing pipeline
for multilingual text.

---

## Key Features

- Supports **English and Arabic** text preprocessing
- Dynamic preprocessing options through JSON configuration
- FastAPI backend with clean API architecture
- Simple GUI served from the same application
- Arabic-specific cleaning:
  - Remove tashkeel
  - Remove tatweel
  - Normalize Alef and Ya
  - Safe Arabic stopword removal
- English preprocessing:
  - Lowercasing
  - Stopword removal
  - Stemming
  - Lemmatization
- Common text cleaning:
  - Remove punctuation
  - Remove numbers
  - Remove URLs
  - Remove emojis
  - Normalize repeated characters
  - Normalize whitespace
- Returns both processed text and applied preprocessing steps
- Dockerized deployment in one image

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | FastAPI |
| Language | Python |
| NLP Libraries | NLTK, PyArabic |
| Validation | Pydantic |
| Frontend | HTML, CSS, JavaScript |
| Deployment | Docker, Hugging Face Spaces / GitHub |
| Architecture | Modular services, router-service-pipeline pattern |

---

## System Architecture

```
User Interface
      ↓
FastAPI Router
      ↓
Dynamic Pipeline Service
      ↓
Language Processor
      ↓
Utility Functions
```

---

## Example API Request

```json
{
  "text": "This product is sooo amazing!!! 😍",
  "language": "en",
  "options": {
    "remove_stopwords": true,
    "normalize": true,
    "remove_punctuation": true,
    "remove_numbers": true,
    "stemming": false,
    "lemmatize": true
  }
}
```

## Example API Response

```json
{
  "original_text": "This product is sooo amazing!!! 😍",
  "processed_text": "product soo amazing",
  "language": "en",
  "applied_steps": [
    "lowercase",
    "normalize_repeated_chars",
    "remove_punctuation",
    "remove_stopwords",
    "lemmatize"
  ]
}
```

---

## My Role

I designed and built the project architecture, created the FastAPI backend, implemented modular
preprocessing services for English and Arabic, added schema validation using Pydantic, built reusable
utility functions, handled custom errors, created a simple GUI, and containerized the application
using Docker.

---

## What I Learned

Through this project, I learned how to build a real NLP preprocessing system — not just isolated
cleaning functions. I practiced backend API design, modular Python architecture, schema validation,
language-specific NLP challenges, Docker deployment, and how preprocessing decisions directly affect
model performance.

A key learning point was that stopword removal must be handled carefully, especially in sentiment
analysis. Removing words like **not**, **لا**, or **ليس** can completely change the meaning of a sentence.

---

## Why This Project Is Important

This project demonstrates practical NLP engineering skills because preprocessing is one of the most
important steps before training or deploying any NLP model. It shows the ability to work with
multilingual data, design scalable backend services, and build tools that can be reused in real
machine learning workflows.

---

## Future Improvements

- Add support for more languages (French, German)
- Add advanced Arabic lemmatization
- Add unit tests for each preprocessing function
- Add authentication for API usage
- Add batch text/file upload support
- Add export options for processed results
- Improve the GUI with better UX and visual feedback

---

## Portfolio Summary

**Multilingual Text Preprocessing Engine** is a Dockerized FastAPI application that provides
configurable preprocessing for English and Arabic text. It includes a dynamic NLP pipeline,
language-specific cleaning services, a simple GUI, and production-ready project structure. The project
demonstrates skills in NLP, backend development, API design, text normalization, Arabic language
processing, and Docker deployment.

---

*Built by Fady Atef Kamal | fadyatef392@gmail.com*
