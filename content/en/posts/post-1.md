---
title: "Building a Modern Hugo Blog with Tailwind CSS"
description: "Learn how to combine Hugo and Tailwind CSS to create a fast, beautiful, and responsive personal blog."
date: 2025-10-23
tags: ["hugo", "tailwind", "web development", "tutorial"]
authors: ["Carlos Escorcia"]
draft: false
---

## Introduction

Static site generators like **Hugo** make it easy to create blazing-fast websites, and when you add **Tailwind CSS**, the design possibilities become endless.  
In this guide, we’ll walk through setting up a modern blog page using Hugo and Tailwind, with best practices for performance and maintainability.

---

## Why Hugo?

Hugo is written in Go and focuses on **speed** and **simplicity**.  
Some key benefits include:

- ⚡ Ultra-fast builds
- 🧩 Markdown-based content
- 🌍 Multilingual support
- 🧱 Flexible templating with partials

Hugo is perfect for developers who prefer static over dynamic content management.

---

## Setting Up Tailwind CSS

To integrate Tailwind CSS, install it via npm and configure Hugo to compile styles automatically.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

In your `tailwind.config.js`, set up the content paths:

```js
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Creating the Blog Layout

Create a new layout file at `layouts/_default/list.html` for your blog listing:

```html
{{ define "main" }}
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold my-8">{{ .Title }}</h1>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {{ range .Pages }}
        <article class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-2xl font-semibold mb-2">
            <a href="{{ .RelPermalink }}" class="text-blue-600 hover:underline">{{ .Title }}</a>
          </h2>
          <p class="text-gray-700 mb-4">{{ .Summary }}</p>
          <time datetime="{{ .Date.Format "2006-01-02" }}" class="text-sm text-gray-500">
            {{ .Date.Format "Jan 2, 2006" }}
          </time>
        </article>
      {{ end }}
    </div>
  </div>
{{ end }}
```

#### Styling the Blog Post Page

For individual blog posts, create `layouts/_default/single.html`:

```html
{{ define "main" }}
  <article class="prose lg:prose-xl mx-auto my-12 px-4">
    <h1 class="text-4xl font-bold mb-4">{{ .Title }}</h1>
    <time datetime="{{ .Date.Format "2006-01-02" }}" class="text-sm text-gray-500 mb-8 block">
      {{ .Date.Format "Jan 2, 2006" }}
    </time>
    {{ .Content }}
  </article>
{{ end }}
```
