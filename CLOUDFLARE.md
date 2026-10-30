# Deployment — Cloudflare Workers

This site runs on **Cloudflare Workers** static assets. It was migrated from
Vercel on 2026-10-30. The Vercel account is suspended (`HTTP 402`,
`DEPLOYMENT_DISABLED`), so **Vercel is not a fallback**.

## Live

https://carolina.servicesorsubscriptions-natural894.workers.dev

## Deploy

No build step: the site is plain HTML/CSS/JS served from the repo root.
From the repo root:

```bash
npx wrangler deploy
```

`wrangler deploy` reads `wrangler.jsonc` (assets directory `.`). `.assetsignore`
keeps `.git`, `.gitignore`, `README.md` and `wrangler.jsonc` from being served.

## Account

- Cloudflare account: `363c056f9bacbdaa70d9138facfe3c25`
- Workers subdomain: `servicesorsubscriptions-natural894`

## Status

Nothing is pending for this app.
