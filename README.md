# DBDC Studio

Сайт студии разработки приложений и игр — https://dbdcstudio.pl

React 19 + Vite 7 + TypeScript, без бэкенда. Языки: EN / PL / RU.

## Команды

```bash
npm install
npm run dev      # локальная разработка
npm run build    # сборка в dist/ (+ копии index.html для /privacy/ и 404.html)
npm run preview  # просмотр сборки на :4173
```

Вспомогательные скрипты (нужен установленный Google Chrome):

```bash
npm run shots              # переснять скриншоты продуктов с живых сайтов
npm run og                 # пересобрать public/og.png (при запущенном preview)
node scripts/qc.mjs qc     # визуальная проверка: десктоп / планшет / телефон
```

## Деплой

GitHub Actions (`.github/workflows/deploy.yml`) собирает и публикует сайт на GitHub Pages при каждом пуше в `main`.

Разовая настройка:

1. Settings → Pages → Source: **GitHub Actions**.
2. Settings → Pages → Custom domain: `dbdcstudio.pl` (файл `public/CNAME` уже в репозитории).
3. DNS домена: четыре записи `A` на `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` и `CNAME` для `www` на `damian-barabash.github.io`.

## Где что лежит

- `src/i18n/` — все тексты сайта на трёх языках.
- `src/data/products.ts` — продукты в портфолио, `src/assets/products/` — их скриншоты и логотипы.
- `src/data/privacy.ts` — текст политики конфиденциальности.
- `src/data/company.ts` — почта и реквизиты.
- `src/styles/main.css` — весь дизайн; акцентный цвет — переменная `--accent`.
