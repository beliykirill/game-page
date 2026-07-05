import { IOffer } from './types';

export const initialValues = {
  category: 'all',
  search: '',
  is_instant_delivery: false,
  is_online: false,
  delivery_status: 'instant',
};

const baseOffers: IOffer[] = [
  {
    id: 1,
    text: '🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер',
    count: 322,
    price: 0.64,
    category: 'vip',
    is_pinned: true,
    is_instant_delivery: true,
    delivery_status: 'instant',
    user: {
      id: 1,
      is_online: true,
      rate: 5.0,
      name: 'VipServerRent',
      reviews: 2.0,
      created_at: 1719360000,
      avatar:
        'https://cdn.starvell.com/avatars/16ff8f65-d828-439e-b1cf-59739175e8f1-medium.jpg',
    },
  },
  {
    id: 2,
    text: '⚡ Робуксы моментально | Без комиссии | Любое количество ⚡',
    count: null,
    price: 0.48,
    category: 'bells',
    is_pinned: true,
    is_instant_delivery: true,
    delivery_status: 'instant',
    user: {
      id: 2,
      is_online: true,
      rate: 4.9,
      reviews: 1240,
      name: 'InstantRBX',
      created_at: 1704067200,
      avatar:
        'https://cdn.starvell.com/avatars/e341321f-00d9-4c75-9dd0-1f6f937bd2d0-medium.jpg',
    },
  },
  {
    id: 3,
    text: '🎁 Подарочная карта Roblox 400 Robux (Global) 🎁',
    count: 87,
    price: 3.99,
    category: 'items',
    is_pinned: false,
    is_instant_delivery: true,
    delivery_status: 'instant',
    user: {
      id: 3,
      is_online: false,
      rate: 4.3,
      name: 'GiftCardPro',
      reviews: 356,
      created_at: 1711929600,
      avatar:
        'https://cdn.starvell.com/avatars/2d647ea6-059b-4937-8c75-3216b87bf98b-medium.jpg',
    },
  },
  {
    id: 4,
    text: 'Blox Fruits | Permanent Dragon | Быстрая передача',
    count: 12,
    price: 8.5,
    category: 'items',
    is_pinned: false,
    is_instant_delivery: false,
    delivery_status: 'manual',
    user: {
      id: 4,
      is_online: true,
      name: 'BloxMaster',
      rate: 4.0,
      reviews: 98,
      created_at: 1717200000,
      avatar:
        'https://cdn.starvell.com/avatars/0c4bc101-73c3-49df-af33-a7075a4262ba-medium.jpg',
    },
  },
  {
    id: 5,
    text: '🔥 Grow a Garden | Набор редких питомцев | Дёшево 🔥',
    count: 240,
    price: 1.25,
    category: 'items',
    is_pinned: false,
    is_instant_delivery: true,
    delivery_status: 'instant',
    user: {
      id: 5,
      is_online: true,
      name: 'GardenGuru',
      rate: 3.8,
      reviews: 512,
      created_at: 1709251200,
      avatar:
        'https://cdn.starvell.com/avatars/e01ab50c-f337-46c6-85a3-e6e245d4beff-medium.jpg',
    },
  },
  {
    id: 6,
    text: 'Аккаунт Roblox | 2019 год | Много лимиток | Warranty',
    count: 5,
    price: 24.9,
    category: 'accounts',
    is_pinned: false,
    is_instant_delivery: false,
    delivery_status: 'day',
    user: {
      id: 6,
      name: 'VintageAccs',
      is_online: false,
      rate: 3.2,
      reviews: 44,
      created_at: 1690848000,
      avatar:
        'https://cdn.starvell.com/avatars/170ebb6b-4fbf-4964-8474-861646e06d1c-medium.jpg',
    },
  },
  {
    id: 7,
    text: '⭐ Roblox Premium 1000 | 30 дней | Активация на ваш аккаунт ⭐',
    count: 63,
    price: 5.75,
    category: 'services',
    is_pinned: false,
    is_instant_delivery: true,
    delivery_status: 'instant',
    user: {
      id: 7,
      is_online: true,
      rate: 3.0,
      reviews: 289,
      name: 'PremiumPlug',
      created_at: 1706745600,
      avatar:
        'https://cdn.starvell.com/avatars/0ba47b10-e1c7-406e-9f54-7719695c0e10-medium.jpg',
    },
  },
  {
    id: 8,
    text: 'Adopt Me | Mega Neon Frost Dragon | Проверенный продавец',
    count: 3,
    price: 15.0,
    category: 'items',
    is_pinned: false,
    is_instant_delivery: false,
    delivery_status: 'hour',
    user: {
      id: 8,
      is_online: false,
      rate: 2.9,
      reviews: 176,
      name: 'AdoptMeTrader',
      created_at: 1698796800,
      avatar:
        'https://cdn.starvell.com/avatars/d2491c54-848b-4903-bf67-9d745238b816-medium.jpg',
    },
  },
  {
    id: 9,
    text: '💎 MM2 | Godly набор ножей | Моментальная выдача 💎',
    count: 44,
    price: 2.3,
    category: 'items',
    is_pinned: false,
    is_instant_delivery: true,
    delivery_status: 'instant',
    user: {
      id: 9,
      is_online: true,
      rate: 2.1,
      reviews: 831,
      name: 'GodlyBlades',
      created_at: 1701388800,
      avatar:
        'https://cdn.starvell.com/avatars/0ba47b10-e1c7-406e-9f54-7719695c0e10-medium.jpg',
    },
  },
  {
    id: 10,
    text: 'Steal a Brainrot | Секретные брейнроты | Быстро и надёжно',
    count: 190,
    price: 0.99,
    category: 'items',
    is_pinned: false,
    is_instant_delivery: true,
    delivery_status: 'instant',
    user: {
      id: 10,
      is_online: true,
      rate: 1.8,
      reviews: 402,
      created_at: 1714521600,
      name: 'BrainrotHub',
      avatar:
        'https://cdn.starvell.com/avatars/e341321f-00d9-4c75-9dd0-1f6f937bd2d0-medium.jpg',
    },
  },
  {
    id: 11,
    text: '🎮 Прокачка аккаунта Roblox под заказ | Любые игры 🎮',
    count: 8,
    price: 12.4,
    category: 'services',
    is_pinned: false,
    is_instant_delivery: false,
    delivery_status: 'day',
    user: {
      id: 11,
      is_online: false,
      rate: 0.7,
      reviews: 61,
      name: 'BoostWizard',
      created_at: 1685577600,
      avatar:
        'https://cdn.starvell.com/avatars/d2491c54-848b-4903-bf67-9d745238b816-medium.jpg',
    },
  },
];

export const PAGE_SIZE = 15;
export const TOTAL_PAGES = 3;

export const data: IOffer[] = Array.from(
  { length: PAGE_SIZE * TOTAL_PAGES },
  (_, i) => {
    const base = baseOffers[i % baseOffers.length];

    return { ...base, id: i + 1, user: { ...base.user, id: i + 1 } };
  },
);
