# Max's Portfolio

A personal portfolio site built with semantic HTML. This is the foundation for a semester-long project: this repo starts with structure and content only, and styling, interactivity, and polish get layered on in later labs.

## About the Project

I'm a computer science student at Michigan State University (cybersecurity concentration, IT minor). This site introduces me, showcases my projects, and gives people a way to reach me. The goal of this first milestone was to get the content and markup right before touching CSS, so the page is readable, accessible, and well-organized on its own.

## Site Structure

| Section | Purpose |
| --- | --- |
| **Header / Nav** | Text logo and anchor links to every section |
| **Home (hero)** | Introduction, headshot, and calls to action |
| **About** | My story, how I think about security, and a toolbox list |
| **Projects** | Three write-ups with what I built and what I learned |
| **Contact** | Email and social links, plus a contact form |
| **Footer** | Copyright and a back-to-top link |

## Semantic HTML and Accessibility

- Landmark elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<address>`, `<footer>`
- One `<h1>` and a logical heading hierarchy (`h1` → `h2` → `h3` → `h4`)
- `aria-label` on the navigation and `aria-labelledby` on every section and article
- A skip link to jump straight to the main content
- Descriptive `alt` text on every image, with explicit `width` and `height`
- Every form control paired with a `<label>`, grouped in a `<fieldset>` with a `<legend>`
- Less common elements in use: `<figure>`/`<figcaption>`, `<blockquote>`, `<dl>`, `<abbr>`, `<time>`, `<small>`
- Meta tags for description, author, keywords, theme color, and Open Graph
- External links use `rel="noopener noreferrer"`

## Validation

The page was checked with the [W3C Markup Validator](https://validator.w3.org/) and has no errors.

## Project Files

```
.
├── index.html
├── README.md
└── images/
    ├── headshot.jpg
    ├── flask-architecture.png
    └── manoo-screenshot.png
```

## Running Locally

No build step is needed. Clone the repo and open the file in a browser:

```bash
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio
open index.html    # macOS; use "start index.html" on Windows or "xdg-open index.html" on Linux
```

## Deployment

The site is deployed on [Netlify](https://www.netlify.com/) and connected to this repository, so every push to `main` triggers a new deploy. The contact form uses Netlify Forms (`data-netlify="true"`), so submissions appear in the Netlify dashboard with no backend code.

## Roadmap

- [ ] Add CSS: layout, typography, color, and responsive design
- [ ] Add a dark mode
- [ ] Add JavaScript for interactivity
- [ ] Expand the project write-ups with screenshots and links to source code
- [ ] Add new projects as the semester goes on

## Contact

- Email: [you@example.com](mailto:you@example.com)
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-profile](https://www.linkedin.com/in/your-profile)