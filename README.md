# AI Logistic Pipeline

**English** · [עברית](README.he.md) · [Русский](README.ru.md)

A sci-fi "logistics terminal" that sorts a cargo list with JavaScript array methods and can ask Google Gemini to invent the cargo list and to inspect the largest item.

**Live demo:** https://dubnovalexey.github.io/AI_Logistic_Pipeline/

## Features

- **Manual mode** works without any key: a test cargo list with empty and padded entries goes through the pipeline.
- **AI dispatcher:** you enter a topic and your own Gemini API key; the model returns a JSON array of cargo names, which is validated (an array of strings, at most 50 items of up to 100 characters) before processing.
- **AI customs:** one click asks the model for a short report on the largest cargo item.
- A terminal-style log with timestamps and colour-coded messages. Everything, including the model's answers, is printed as plain text, so HTML in the data is never executed.
- **Wipe Data** clears the log and removes the key from the input field.

## The pipeline

`every` (all items are strings) → `some` (oversized items) → `forEach` (empty slots) → `map(trim)` → `filter` (drop empty) → `sort` by length with an arrow comparator → `find` (first item longer than 5) → `reduce` (the longest item).

## Tech stack

HTML5 · JavaScript (ES2020) · Tailwind CSS (CDN) · Fetch API · Google Gemini API · GitHub Pages

## What I practised

- Array methods and method chaining, a custom comparator, `reduce` with an initial value.
- Calling an LLM over REST and treating its answer as untrusted data: strict JSON, validation, safe output.
- Building DOM nodes instead of inserting HTML strings.

## Your API key

The page has no built-in key. A key you type is sent only to Google in the `x-goog-api-key` header and is not saved anywhere. Without a key, use the manual mode.

## Run locally

Open `index.html` in a browser, or serve the folder (`npx serve .`) and open the address it prints.

## Roadmap

- A styled build of Tailwind instead of the CDN script.
- A JSON response schema for the model (structured output) instead of cleaning the text.
- The terminal look from the UNIVERSE portfolio.

AI network requests time out after30seconds. A missing or stalled response returns control to the terminal; the manual pipeline remains independent of the API.
