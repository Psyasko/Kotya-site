# Kotya Site — Asian Dragon Luxe

Односторінковий Vite + React сайт-візитівка для спеціаліста з масажу, який працює в клініці.

## Що змінено у цій версії

- Додано помітний `Dragon Route System`: каліграфічний натяк на голову дракона в hero та довге S-подібне тіло/хвіст уздовж сторінки.
- Посилено азійську стилістику: хмарні завитки, dragon whiskers, золоті лінії, фонові контури драконів.
- Збережено ботанічну основу: листя, папороть, темний смарагдовий фон.
- Виправлено надто великий верхній відступ у першому екрані.
- Зменшено hero-заголовок і фото, щоб при лендінгу одразу було видно більше змісту.
- Перероблено органічні плитки: текст тепер живе у безпечній зоні, а хвиляста форма є декоративним шаром.
- Посилено видимість декору, але без товстих рамок і прямого фентезі-перевантаження.
- Додано мобільне спрощення важкого декору.
- Залишено `prefers-reduced-motion` для користувачів, які вимикають анімації.

## Запуск локально

```bash
npm install
npm run dev
```

## Збірка

```bash
npm run build
```

## Деплой на Vercel

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Де міняти дані

Основні заглушки лежать у `src/App.jsx` в обʼєкті `specialist`:

```js
const specialist = {
  name: 'Імʼя спеціаліста',
  role: 'Масажист у клініці',
  city: '[Місто — заглушка]',
  clinicAddress: '[Адреса клініки — заглушка]',
  schedule: '[Графік уточнюється]',
  telegramUrl: '#',
  viberUrl: '#'
};
```

## Mobile layout repair pass

This version adds a responsive stability patch:

- removes horizontal overflow on mobile;
- disables the full-page dragon route on small screens;
- keeps only local portrait curls and subtle background dragon detail on mobile;
- anchors portrait decoration to the portrait container;
- forces organic cards into a protected text safe-area;
- simplifies rounded card shapes on mobile;
- stacks contact buttons and clinic rows safely;
- disables heavy animations/filters on touch devices.
