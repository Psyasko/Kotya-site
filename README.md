# Kotya-site

Професійна односторінкова візитівка Катерини — майстрині масажу у студії DeMassage у Львові.

## Стек

- React 19
- Vite 8
- CSS без важких анімаційних бібліотек
- SVG-декор як React-компоненти

## Запуск

```bash
npm install
npm run dev
```

## Збірка

```bash
npm run build
```

Готові файли зʼявляться у папці `dist`.

## Деплой на Vercel

1. Завантажити проєкт у GitHub.
2. Імпортувати репозиторій у Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.

## Де змінювати дані

Основні дані спеціаліста розташовані у `src/App.jsx` в обʼєкті `specialist`.

## Зображення

- `public/images/profile-480.webp`
- `public/images/profile-720.webp`
- `public/images/profile-960.webp`
- `public/images/og-kateryna.jpg`

Для заміни фото бажано підготувати вертикальне зображення й створити ті самі три WebP-розміри.
