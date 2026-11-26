# Nahar Builders: Multipage Corporate Website

**Student:** Mohammed Sohrab Uddin  
**Student ID:** `ADD YOUR ID HERE`  
**GitHub repository:** https://github.com/sohrab015/nahar-builders-assignment-5  
**Live website:** `ADD LINK`

Responsive multipage corporate website for Nahar Builders (Chattogram). Company facts come from https://www.naharbuilders.com/ (see `RESEARCH.md`).

## Technologies
HTML, CSS, Tailwind CSS (CDN), DaisyUI, SweetAlert2, Vanilla JavaScript, Google Fonts (Archivo, Source Sans 3), Google Icons (Material Symbols)

## Pages
| File | Content |
|---|---|
| `index.html` | Hero with storey skyline, about preview, services preview, featured projects, why choose us, call to action |
| `about.html` | Company profile, mission, vision, chairman message, credentials |
| `services.html` | Six services, material supply, government/private sector, machinery fleet |
| `projects.html` | All 12 projects, filter buttons, details modal |
| `hospital.html` | Nahar Specialized Hospital project page |
| `contact.html` | Contact details, map, validated form with SweetAlert messages |

## Folder structure
```
index.html, about.html, services.html, projects.html, hospital.html, contact.html
tailwind.config.js      Tailwind theme (colours, fonts)
styls/style.css         small custom CSS
js/data.js              all company data (services, projects, credentials)
js/components.js        shared navbar and footer
js/cards.js             project, service and why-choose-us card builders
js/home.js, services.js, projects.js, contact.js   one file per page
assets/                 put locally saved images here
```

## Setup
No build step. Open `index.html` in a browser, or run `python3 -m http.server 8000`.

## Deploy
Push to GitHub, then Settings > Pages > Deploy from branch `main`, root folder.

## Design decisions
Colours come from the construction site (ink, steel, hi-vis amber). The home hero shows the company's towers by height, using the published storey counts; each bar opens that project. No statistics, testimonials or achievements beyond what the source site publishes.

## External resources
Company text and images: https://www.naharbuilders.com/ (used for coursework, hot-linked). Fonts and icons: Google. Alerts: SweetAlert2. UI components: DaisyUI.
