# Massage Specialist Card

Односторінковий сайт-візитівка масажиста, який працює в клініці. Готово для GitHub і деплою на Vercel.

## Запуск локально

```bash
npm install
npm run dev
```

## Білд

```bash
npm run build
```

## Деплой на Vercel

1. Завантажити проєкт на GitHub.
2. У Vercel натиснути `Add New Project`.
3. Вибрати репозиторій.
4. Framework Preset: `Vite`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.

## Де змінювати дані

Основні заглушки лежать у `src/App.jsx` в обʼєкті `specialist`:

```js
const specialist = {
  name: 'Імʼя спеціаліста',
  role: 'Масажист у клініці',
  city: '[Місто — заглушка]',
  clinicAddress: '[Адреса клініки — заглушка]',
  schedule: '[Графік уточнюється]',
  telegramUrl: '#',
  viberUrl: '#',
  telegramLabel: 'Telegram',
  viberLabel: 'Viber'
};
```

Фото профілю: `public/images/profile.jpg`.
