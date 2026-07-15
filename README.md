# Langyue Technology Website MVP

Static bilingual corporate website for **朗玥科技（上海）有限公司 / Langyue Technology Co., Ltd.**

## Preview locally

Open `index.html` directly, or run:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Current scope

- English default, Chinese language toggle
- Responsive desktop/mobile design
- Magnetic products, industry applications and electronic components sourcing
- About, manufacturing network and privacy pages
- RFQ form that opens the visitor's email client and addresses the inquiry to `sales@lyglobaltech.com`
- Original text-based SVG logo placeholder

## Before production launch

1. Replace the placeholder logo after the final brand identity is approved.
2. Add approved product photography and confirm image usage rights.
3. Connect the RFQ form to a secure backend or form provider for file uploads and database storage.
4. Add company registration/contact details that should be publicly disclosed.
5. Review the privacy policy and terms with qualified counsel for target markets.
6. Configure DNS for `lyglobaltech.com`, HTTPS, analytics and email authentication (SPF/DKIM/DMARC).

## Deployment

This static site can be deployed to Cloudflare Pages, Vercel, Netlify, GitHub Pages, Alibaba Cloud OSS or any standard web server. Upload the full folder and point the domain to the selected host.
