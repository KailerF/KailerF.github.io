# Kailer Fernandez Nadal | Personal Portfolio

**COP 3835 – Designing Web Pages | Final Project**

A mobile-first, responsive personal portfolio built with HTML5, CSS3, and JavaScript. The website introduces my background in information technology, highlights technical skills and relevant experience, presents three projects, and includes an interactive contact-form demonstration.

## Live website and repository

GitHub Repository URL: https://github.com/KailerF/KailerF.github.io
Published Website URL: https://kailerf.github.io/

The public repository is on the `main` branch. GitHub Pages deployment is shown in the repository; the published website must also be checked directly in a browser to confirm the final version and all features.

## Technologies

* **HTML5:** Semantic sections, accessible navigation, structured skills table, and contact form
* **CSS3:** Mobile-first responsive layout, Flexbox, CSS Grid, typography, focus indicators, and light/dark styling
* **JavaScript:** Dynamic project gallery, event listeners, DOM updates, navigation, theme toggle, and form validation
* **Git and GitHub:** Version control, public repository, and GitHub Pages hosting

## Website sections

1. **Home:** Professional introduction, profile photograph, and working links to Projects and Contact
2. **About Me:** Education, banking IT support experience, and professional interests
3. **Skills:** Technical knowledge and experience organized in an accessible HTML table
4. **Projects:** Three project cards generated from a JavaScript array of objects
5. **Contact:** Test validation only” checks entries locally and displays feedback without sending data. “Send message” submits entries to FormSubmit. Email delivery requires recipient activation and has not yet been verified.

## Featured projects

* **Java Team Programming \& Debugging:** Team-based Java programming, troubleshooting, and comparison against assignment requirements
* **Media Conversion Web Application:** HTML and JavaScript interface integrating Node.js, yt-dlp, and FFmpeg for media metadata and conversion options
* **Personal Portfolio Website:** Responsive portfolio with dynamic content, accessible navigation, theme switching, and form feedback

## Interactive features

* Responsive mobile navigation with a collapsible Menu button, `aria-expanded`, and keyboard support, including Escape to close
* Dark and light appearance toggle
* Dynamically generated project cards using an array of objects, a loop, `JSON.stringify()`, and `JSON.parse()`
* Contact form with name, email, message, topic dropdown, radio buttons, and acknowledgment checkbox
* HTML5 constraints and JavaScript validation with visible field-specific errors and success feedback
* Skip-to-content link, meaningful image alternative text, visible keyboard focus, and reduced-motion support

**Contact form notice:** This is a front-end demonstration. It validates entries locally but does not transmit, deliver, or save messages.

## Run the website locally

1. Download or clone the repository.
2. Keep all files and folders in their existing structure.
3. Open `index.html` in a web browser. No installation, build process, or server is required.
4. Test the navigation, project gallery, theme toggle, and contact-form validation.

## Project structure

```text
KailerF.github.io/
├── index.html
├── style.css
├── script.js
├── README.md
├── github\_links.txt
├── images/
│   ├── profile.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   └── project3.jpg
├── wireframes/
│   ├── low\_fidelity.jpg
│   └── high\fidelity.jpg
└── documentation/
    ├── performance\_report.pdf
    └── Usability\Review.pdf
```

All submitted image assets use JPEG format with the `.jpg` extension.

## Design, testing, and optimization

The site was designed for approximately **375px phone**, **768px tablet**, and **1280px desktop** widths. Styles use a mobile-first approach, with larger layouts introduced through `min-width` media queries. The site includes responsive JPG images, lazy-loaded project imagery, and semantic headings.

The documentation folder contains the performance and usability reports, including recorded local checks and implemented improvements. Improvements documented in the project include a narrow-screen skills table, a clearer and keyboard-friendly mobile menu, and improved contact-form instructions. The profile image was optimized as a compressed JPG.

## GitHub Pages configuration

GitHub Pages should use **Deploy from a branch**, branch **`main`**, and folder **`/(root)`**. The `index.html` entry point must remain in the repository root.

## 

