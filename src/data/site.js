import { Activity, Droplets, Dumbbell, Flower2, Footprints, Hand } from 'lucide-react';

// Усі тексти й контакти сайту редагуються тут.

export const specialist = {
  name: 'Катерина',
  // \u00a0 — нерозривний пробіл, щоб «у» не залишалося в кінці рядка.
  role: 'майстриня масажу у\u00a0DeMassage',
  city: 'Львів',
  studio: 'DeMassage',
  address: 'вул.\u00a0Стрийська, 108',
  schedule: '9:00–20:00',
  // Портрет у голові дракона. Поки null — показується монограма.
  // Приклад: { src: '/images/portrait.webp', alt: 'Катерина, майстриня масажу' }
  photo: null,
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=DeMassage%2C%20%D0%B2%D1%83%D0%BB.%20%D0%A1%D1%82%D1%80%D0%B8%D0%B9%D1%81%D1%8C%D0%BA%D0%B0%20108%2C%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2'
};

export const bookingContacts = {
  telegramUrl: 'https://t.me/de_massage_stryiska',
  telegramLabel: '@de_massage_stryiska',
  instagramUrl: 'https://www.instagram.com/de_massage_spa?igsh=dHI4M2E3Z3lidWhp&igsi=dHI4M2E3Z3lidWhp',
  instagramLabel: '@de_massage_spa'
};

export const navLinks = [
  { id: 'about', label: 'Про Катерину' },
  { id: 'services', label: 'Напрямки' },
  { id: 'studio', label: 'Студія' },
  { id: 'booking', label: 'Запис' },
  { id: 'certificates', label: 'Сертифікати' }
];

export const aboutCards = [
  {
    title: 'Медична основа',
    shape: 'leaf',
    text: 'В основі практики — професійна медична освіта та розуміння анатомії, фізіології й біомеханіки. Перед кожним сеансом Катерина уточнює стан і самопочуття клієнта та підбирає техніки відповідно до актуальних потреб тіла.'
  },
  {
    title: 'Індивідуальна робота',
    shape: 'drop',
    text: 'Катерина володіє техніками різної інтенсивності — від делікатного релакс-масажу до глибшого опрацювання м’язів, тригерних точок і затисків. У студії особлива увага приділяється комфорту: затишній атмосфері, приємній музиці, гіпоалергенним оліям і комфортній температурі.'
  }
];

export const services = [
  { title: 'Авторський масаж студії DeMassage', icon: Hand, shape: 'leaf' },
  { title: 'Масаж спини', icon: Activity, shape: 'pebble' },
  { title: 'Спортивний масаж', icon: Dumbbell, shape: 'drop' },
  { title: 'Антицелюлітний масаж', icon: Droplets, shape: 'wave' },
  { title: 'Тайський масаж', icon: Footprints, shape: 'pebble' },
  { title: 'SPA-послуги', icon: Flower2, shape: 'leaf' }
];

export const certificates = [
  {
    title: 'Тайський масаж з елементами йоги',
    details: 'Майстер-клас · 19 червня 2026',
    image: '/images/certificates/thai-massage-yoga.jpg',
    thumb: '/images/certificates/thai-massage-yoga-thumb.webp',
    alt: 'Сертифікат Катерини Свідрак про проходження майстер-класу з тайського масажу з елементами йоги'
  },
  {
    title: 'Базовий курс масажу та Body Blade',
    details: 'Курс і майстер-клас · 10 квітня 2026',
    image: '/images/certificates/massage-body-blade.jpg',
    thumb: '/images/certificates/massage-body-blade-thumb.webp',
    alt: 'Сертифікат Катерини Свідрак про завершення базового курсу масажу та майстер-класу Body Blade'
  },
  {
    title: 'Фаховий молодший бакалавр',
    details: 'Спеціальність «Медсестринство»\u00a0·\u00a02025',
    image: '/images/certificates/nursing-diploma.jpg',
    thumb: '/images/certificates/nursing-diploma-thumb.webp',
    alt: 'Диплом Катерини Свідрак за спеціальністю Медсестринство'
  }
];
