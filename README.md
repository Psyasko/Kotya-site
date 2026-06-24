# Kotya-site dragon luxe

Односторінковий сайт-візитівка для масажиста, який працює в клініці.

## Запуск локально

```bash
npm install
npm run dev
```

## Деплой на Vercel

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Де змінювати дані

Основні заглушки лежать у `src/App.jsx` в обʼєкті `specialist`:

```js
const specialist = {
  name: 'Імʼя спеціаліста',
  city: '[Місто — заглушка]',
  clinicAddress: '[Адреса клініки — заглушка]',
  schedule: '[Графік уточнюється]',
  telegramUrl: '#',
  viberUrl: '#'
};
```

Фото спеціаліста: `public/images/profile.jpg`.
