# Elliot Choi Portfolio Website

This guide explains how to update the content on your website. No coding knowledge required — just edit the text files following the instructions below.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Editing the Homepage](#editing-the-homepage)
3. [Editing the About Page](#editing-the-about-page)
4. [Editing the Papers Page](#editing-the-papers-page)
5. [Updating Your CV](#updating-your-cv)
6. [Adding a New Blog Post](#adding-a-new-blog-post)
7. [Publishing Your Changes](#publishing-your-changes)

---

## Quick Start

### Preview Changes Locally

Before publishing, always preview your changes:
```
hugo server -D
```

Then open http://localhost:1313 in your browser.

### Publish Changes

When you're happy with your changes:
```
git add .
git commit -m "added assistanship"
git push
```

Wait 1-2 minutes, then check https://elliotchoi.com

---

## Editing the Homepage

**File:** `content/_index.md`

### Structure

The homepage has these sections:

1. **Hero Section** — Your name and tagline
2. **Two-Column Intro** — "Who I Am" and "What I Do"
3. **Feature Cards** — Highlight your work (2 rows of 3 cards)

### How to Edit

Open `content/_index.md` in any text editor (TextEdit, VS Code, etc.)

#### Change Your Tagline

Find this line:
```
Public Capital · Venture Strategy · Applied Research
```

Replace with your new tagline.

#### Edit "Who I Am" Section

Find:
```
- ## Who I Am
  I work at the intersection of public capital...
```

Replace the text after `## Who I Am` with your own description.

#### Edit Feature Cards

Each card looks like this:
```
- {{< card >}}
  ## Card Title
  Card description text here.
  [Link Text →](/link-url/)
  {{< /card >}}
```

To edit a card:
- Change `## Card Title` to your title
- Change the description text
- Change the link text and URL

---

## Editing the About Page

**File:** `content/about/_index.md`

### Structure

The About page has these sections:
- Introduction paragraph
- Current Roles
- Previous Experience
- Research Experience
- Education
- Contact

### How to Edit

Open `content/about/_index.md` in any text editor.

#### Edit Introduction

Find the paragraph at the top (after `# About Me`) and replace it with your own intro.

#### Add a New Job

Copy this template and paste it under the appropriate section:
```markdown
### Job Title | Company Name
*Start Date – End Date*

- First responsibility or achievement
- Second responsibility or achievement
- Third responsibility or achievement
```

**Example:**
```markdown
### Senior Analyst | New Company
*January 2025 – Present*

- Led a team of 5 analysts
- Increased revenue by 20%
- Developed new reporting framework
```

#### Remove a Job

Simply delete the entire job block (from `###` to the last bullet point).

#### Edit Contact Information

Find the `## Contact` section at the bottom and update your email, LinkedIn, or phone.

---

## Editing the Papers Page

**File:** `content/papers/_index.md`

### Structure

Papers are organized by year, with newest first.

### How to Edit

Open `content/papers/_index.md` in any text editor.

#### Add a New Paper

1. Find the correct year section (or create a new one with `## 2026`)
2. Copy this template and fill in your details:
```markdown
### Paper Title Here

**Authors:** Author One, Author Two, Elliot Choi  
**Journal:** *Journal Name*, Volume/Issue  
**Citations:** X (optional)

Brief description of the paper (2-3 sentences).

[Full Text](https://doi.org/xxxxx) · [PDF](link-to-pdf) · [Google Scholar](link-to-scholar)
```

**Example:**
```markdown
### Machine Learning for Climate Policy

**Authors:** Jane Smith, Elliot Choi  
**Journal:** *Nature Climate Change*, Vol. 15  
**Citations:** 5

This paper explores how machine learning can improve climate policy decisions by analyzing large-scale environmental data.

[Full Text](https://doi.org/10.1234/example) · [Google Scholar](https://scholar.google.com/xxxxx)
```

#### Remove a Paper

Delete the entire paper block (from `###` to the last link line).

#### Add a New Year Section

Add this above the previous year:
```markdown
## 2026

### Your New Paper Title
...
```

---

## Updating Your CV

**File Location:** `static/files/Elliot_Choi_Resume.pdf`

### How to Update

1. Create your updated CV as a PDF
2. Name it exactly: `Elliot_Choi_Resume.pdf`
3. Replace the old file in `static/files/` folder
4. Publish your changes (see [Publishing Your Changes](#publishing-your-changes))

**Important:** The filename must stay the same, or the download links will break.

---

## Adding a New Blog Post

**Folder:** `content/blogs/`

### How to Add a New Post

1. Create a new file in `content/blogs/` folder
2. Name it with dashes instead of spaces: `my-new-post.md`
3. Copy this template into the file:
```markdown
---
title: "Your Blog Post Title"
date: 2025-01-29
summary: "A brief summary (2-3 sentences) that appears on the blog card."
---

Your full blog post content goes here.

## Section Heading

You can use headings, paragraphs, lists, and links.

### Subsection

- Bullet point one
- Bullet point two

Here's a [link to something](https://example.com).
```

### Example Blog Post

Create file: `content/blogs/my-thoughts-on-ai.md`
```markdown
---
title: "My Thoughts on AI in Finance"
date: 2025-01-29
summary: "Exploring how artificial intelligence is transforming financial analysis and what it means for the industry."
---

Artificial intelligence is reshaping how we approach financial analysis. In this post, I share my observations from working in the field.

## The Current Landscape

AI tools are becoming increasingly sophisticated...

## What This Means for Analysts

The role of financial analysts is evolving...

## Looking Ahead

I believe the future will bring...
```

### How to Remove a Blog Post

Simply delete the `.md` file from the `content/blogs/` folder.

---

## Publishing Your Changes

After making any changes:

### Step 1: Preview Locally (Recommended)
```
hugo server -D
```

Open http://localhost:1313 and check your changes.

Press `Ctrl+C` to stop the preview.

### Step 2: Save and Publish
```
git add .
git commit -m "Brief description of changes"
git push
```

### Step 3: Verify

Wait 1-2 minutes for the site to rebuild, then check https://elliotchoi.com

---

## File Reference

| What to Edit | File Location |
|--------------|---------------|
| Homepage | `content/_index.md` |
| About page | `content/about/_index.md` |
| Papers page | `content/papers/_index.md` |
| CV (PDF) | `static/files/Elliot_Choi_Resume.pdf` |
| Blog posts | `content/blogs/your-post-name.md` |
| Site title & menu | `hugo.toml` |

---

## Common Issues

### Changes not showing on live site?

- Wait 2-3 minutes after pushing
- Check GitHub Actions tab for build errors
- Make sure you ran `git push`

### Preview not working locally?

- Make sure you're in the project folder
- Run `hugo server -D` (with the `-D` flag)
- Check if another server is using port 1313

### Formatting looks broken?

- Check for missing `---` at the top and bottom of the front matter
- Make sure quotes are straight (`"`) not curly (`"`)
- Ensure proper spacing after `#` in headings

---

## Need Help?

If something isn't working, check:

1. Did you save the file?
2. Is the formatting correct (especially the `---` section at the top)?
3. Did you run `git push`?

For technical issues with the theme or layout, consult the [Hugo Book theme documentation](https://github.com/alex-shpak/hugo-book).
