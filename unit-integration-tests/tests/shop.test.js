const { checkAge, calculatePriceWithTax, greetUser, createOrder } = require('../src/shop');

// ЧАСТИНА 1: МОДУЛЬНІ ТЕСТИ (3 шт.)

// МОДУЛЬНИЙ ТЕСТ №1
test('Unit 1: checkAge повертає true для 18+', () => {
    expect(checkAge(20)).toBe(true);
    expect(checkAge(17)).toBe(false);
});

// МОДУЛЬНИЙ ТЕСТ №2
test('Unit 2: calculatePriceWithTax додає 20% податку', () => {
    // 100 + 20% = 120
    expect(calculatePriceWithTax(100)).toBe(120);
});

// МОДУЛЬНИЙ ТЕСТ №3
test('Unit 3: greetUser повертає коректне привітання', () => {
    expect(greetUser("Олег")).toBe("Вітаємо, Олег!");
});


// ЧАСТИНА 2: ІНТЕГРАЦІЙНІ ТЕСТИ (2 шт.)

// ІНТЕГРАЦІЙНИЙ ТЕСТ №1 (Успішний сценарій)
test('Integration 1: createOrder успішно створює замовлення для дорослого', () => {
    // Вхідні дані: 25 років, ім'я Іван, ціна 100
    const result = createOrder(25, "Іван", 100);
    
    // Очікуємо: привітання + суму з податком (120.00)
    expect(result).toBe("Вітаємо, Іван! Ваше замовлення на суму 120.00 оформлено.");
});

// ІНТЕГРАЦІЙНИЙ ТЕСТ №2 (Сценарій відмови)
test('Integration 2: createOrder забороняє покупку неповнолітнім', () => {
    // Вхідні дані: 15 років (менше 18)
    const result = createOrder(15, "Оля", 50);
    
    // Очікуємо повідомлення про помилку (функція checkAge спрацювала всередині createOrder)
    expect(result).toBe("Помилка: вік замалий для покупки");
});