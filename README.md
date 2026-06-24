# CloudPro IT Website

A responsive static website for a Cloud IT services business.

## Files

- `index.html` — main website content
- `styles.css` — responsive design and styling
- `script.js` — mobile menu, current year, and contact form demo behavior
- `assets/cloud-coast-hero.jpg` — hero image from your uploaded photo

## Customize

Edit these placeholders in `index.html`:

- Business name: `CloudPro IT`
- Email: `info@cloudproit.com`
- Phone: `+1 (212) 555-0100`
- Location: `New York, NY`
- Service descriptions and package names

## Contact form

The contact form is front-end only. To receive real submissions, connect it to one of these:

- AWS Lambda + API Gateway + SES
- Formspree
- Netlify Forms
- HubSpot form
- A custom backend API

## AWS static hosting option

1. Create an S3 bucket for your domain, for example `www.yourdomain.com`.
2. Upload `index.html`, `styles.css`, `script.js`, and the full `assets/` folder.
3. Enable static website hosting or place CloudFront in front of the bucket.
4. Add an SSL certificate in AWS Certificate Manager.
5. Point your domain DNS to CloudFront using a CNAME or Route 53 alias.

For a production site, CloudFront + S3 + ACM SSL is recommended.
