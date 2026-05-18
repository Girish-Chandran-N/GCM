# Global Continual Management Solutions - AI Context & Handover

This file serves as the primary context document for any AI assistant (like Antigravity) resuming work on this project. 

## 1. Project Overview
- **Name:** Global Continual Management Solutions Pvt Ltd (GCM)
- **Type:** Professional Consultancy Website (IT Recruitment, Onboarding Gifts, HR Training)
- **Tech Stack:** React (Vite), Vanilla CSS (Modern CSS variables), `react-router-dom` for SPA routing, `lucide-react` for icons.
- **Deployment:** Vercel (Configured with `vercel.json` to fix SPA routing 404s).

## 2. Branding & Design System
- **Primary Color:** Navy (`var(--primary-navy)`)
- **Accent Color:** Cyan (`#00C2FF` or `var(--accent-cyan)`). The project was completely migrated away from an older "Navy & Gold" theme to match the official corporate logo.
- **Logos:** The official logos (`logo-big.png` and `favicon.png`) are located in the `public` folder. Do NOT use inline SVG logos anymore, as the official image assets are now live.
- **Aesthetics:** The UI uses modern glassmorphism, soft-shadow hover-lifting, and gradient micro-animations to achieve a premium, high-fidelity corporate feel.

## 3. Completed Features & Integrations
- **Contact Form (Google Sheets Integration):** The `Contact.jsx` form was successfully migrated *away* from EmailJS. It now performs a silent `fetch` POST request with `mode: 'no-cors'` directly into an invisible Google Form (`entry.XXXXX` IDs are mapped to the custom inputs). This routes all inquiries directly to the client's Google Sheet for free.
- **Socials:** A direct LinkedIn link to the company's official posts page has been integrated into both the `Footer.jsx` and `Contact.jsx` pages using an inline SVG to avoid `lucide-react` version conflicts.
- **Content Cleanup:** Placeholder statistics (e.g., "Company Size 2-10") and overly verbose package descriptions on the "Gift Solutions" page were removed for a cleaner, editorial look. The "Founded" date in `About.jsx` is firmly set to 2026.

## 4. Current State & Next Steps
The project is completely **Production-Ready** and is awaiting final client handover. 

**Potential Future Work:**
1. Connecting a custom domain (e.g., `globalcontinual.com`) via Vercel.
2. Injecting Google Analytics tracking codes for SEO and traffic monitoring.
3. Finalizing any minor copy adjustments requested by the client after their final review.

*Note to AI:* When modifying components, ensure you maintain the `var(--accent-cyan)` branding and avoid using Tailwind (as the project relies heavily on a robust `index.css` global variable system).
