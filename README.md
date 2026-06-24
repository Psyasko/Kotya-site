# Kotya Site — luxury massage card

Односторінковий сайт-візитівка масажиста, який працює в клініці. Версія перероблена під темно-зелений / смарагдовий / золотий стиль з ботанічним фоном, декоративними SVG-орнаментами та плавними анімаціями.

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

Ботанічний фон: `public/images/bg-leaves.jpg`.

Декоративні SVG: `public/decor/`.

## Що змінилось

- Перероблена палітра під `#144f07`, `#ffe600`, `#85b084`, `#9fccc7`.
- Доданий темний botanical luxury фон.
- Додані золоті контурні SVG-декори.
- Додані плавні scroll reveal-анімації.
- Перероблені картки, кнопки, контакти, сертифікати та hero-блок.
- Доданий `prefers-reduced-motion`, щоб анімації вимикались у користувачів із відповідним системним налаштуванням.
