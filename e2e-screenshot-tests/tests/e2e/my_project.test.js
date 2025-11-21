// ЦЕЙ КОМЕНТАР ДОДАНО ДЛЯ ПЕРЕВІРКИ CI
const { test, expect } = require('@playwright/test');

// Тест 1: Перевірка заголовка H1 на локальній сторінці
test('Перевірка сторінки Про нас', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  await expect(page.locator('h1')).toHaveText('Про нас');
});

// Тест 2: Перевірка поля пошуку на Wikipedia 
test('Wikipedia Search Input Visible', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    // Перевіряємо наявність поля пошуку за ID, який є стабільним
    await expect(page.locator('input#searchInput')).toBeVisible();
});

// Тест 3: Перевірка тексту параграфа на локальній сторінці
test('Перевірка тексту опису сторінки', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  // Перевіряємо, чи параграф <p> містить частину тексту
  await expect(page.locator('p')).toContainText('Це тестова сторінка');
});
