# Kotya-site

Професійна односторінкова візитівка Катерини — майстрині масажу у студії DeMassage у Львові.
Стиль: Asian Botanical Luxury — темний смарагдовий сад, золоті каліграфічні лінії, органічні форми.

## Стек

- React 19, Vite 8
- CSS без анімаційних бібліотек (scroll-driven анімації з fallback)
- SVG-декор як React-компоненти
- pnpm (версія зафіксована в `package.json` → `packageManager`), Node 20.19+

## Запуск

```bash
corepack enable
pnpm install
pnpm run dev
```

## Збірка

```bash
pnpm run build
```

Готові файли зʼявляться у папці `dist`.

## Деплой на Vercel

1. Імпортувати репозиторій у Vercel.
2. Framework preset: `Vite` (Vercel сам визначить pnpm за `pnpm-lock.yaml`).
3. Build command: `pnpm run build`.
4. Output directory: `dist`.

## Структура

```
src/
  data/site.js          — усі тексти, контакти, послуги, сертифікати
  sections/             — секції сторінки: Header, Hero, About, Services, Studio, Booking, Certificates, Footer
  components/
    Decor.jsx           — дракон у hero, драконячий маршрут, хмари жуї, листя, вусоподібні завитки
    OrganicCard.jsx     — органічна панель (окремий шар форми + safe-area для тексту)
    SectionHeading.jsx  — підпис, заголовок і лід розділу
    CertificateLightbox.jsx — перегляд документів (<dialog>, Esc, стрілки, свайп, зум)
  hooks/useReveal.js    — поява при прокручуванні та активний пункт меню
  styles/
    tokens.css          — палітра, поверхні, шкали типографіки й відступів, органічні форми, тривалості
    base.css, layout.css, components.css, decor.css, motion.css, responsive.css
```

## Де змінювати дані

Усі тексти й контакти — у `src/data/site.js`. Нерозривний пробіл ` ` використовується там,
де однолітерний прийменник або число не повинні відриватися від сусіднього слова.

## Зображення

- `public/images/certificates/*.jpg` — оригінали документів (відкриваються в перегляді).
- `public/images/certificates/*-thumb.webp` — прев'ю для карток (~720 px). Для нового документа
  потрібно додати обидва файли й прописати `image` та `thumb` у `src/data/site.js`.
- `public/images/profile-*.webp` — портрет; зараз на сайті не використовується (фото прибрано
  на прохання власниці).
- `public/images/og-kateryna.jpg` — зображення для соцмереж.
