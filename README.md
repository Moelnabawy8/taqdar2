# Taqdar — Learning Platform

**An Arabic learning platform with a React interface and a CodeIgniter API.**

## Overview

Taqdar (تقدر) combines an Arabic, right-to-left front end with an LMS backend. This repository contains both source code and a deployment snapshot: the root `index.html` and `_app/` directory are built front-end output, while application source is under `api/`.

## Technology

| Layer | Stack |
| --- | --- |
| Front end | React 18 · TypeScript · Vite 5 |
| Interface | Tailwind CSS · shadcn/ui · Radix UI |
| Backend | PHP · CodeIgniter 3 |
| API | Module-based endpoints and JWT authentication |
| Front-end checks | ESLint · Vitest scripts declared in `api/front/package.json` |

## Source and build layout

| Path | Purpose |
| --- | --- |
| [`api/front/`](api/front/) | Front-end source, dependencies and build commands |
| [`api/application/`](api/application/) | Backend controllers, models, views and configuration |
| [`api/system/`](api/system/) | CodeIgniter framework files |
| [`api/API_DOCUMENTATION.md`](api/API_DOCUMENTATION.md) | Backend endpoint documentation |
| [`_app/`](_app/) | Built front-end assets |
| [`index.html`](index.html) | Deployed SPA entry point |
| [`seo-router.php`](seo-router.php) | Server-rendered SEO request routing |
| [`img.php`](img.php) | Image proxy used by public metadata |

## Front-end development

Run commands from the source directory:

```bash
git clone https://github.com/Moelnabawy8/taqdar2.git
cd taqdar2/api/front
npm install
npm run dev
```

Configure the Vite API proxy for your own local backend before testing authenticated or course-related pages.

Available checks and builds:

```bash
npm run lint
npm run test
npm run build
```

The build command includes a CSS post-processing step. It writes deployable output into `api/front/dist/`.

## Backend setup

Use an Apache/PHP development environment configured for the CodeIgniter application under `api/`. Supply a sanitised development database and local configuration, then configure the front-end API base/proxy consistently with that backend.

PHP runtime compatibility must be checked against `api/composer.lock` and the application code; the old minimum in the framework manifest is not a complete runtime specification.

## Deployment workflow

Make application changes in `api/front/src/` or `api/application/`. Rebuild the front end before updating the root deployment output. Hashed files in `_app/` should not be edited as source.

Deployment archives and database exports are installation artefacts. Obtain a sanitised development dataset rather than using production data. Front-end builds and automated scripts are documented here without implying that a production release has been performed.

## Verification

The front-end manifest declares linting and Vitest commands. Backend test material is under `api/tests/` with configuration in `api/phpunit.xml`. Run the relevant checks in a configured local environment and review the endpoint documentation when changing API behaviour.
