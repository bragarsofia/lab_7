
// --- ФУНКЦІЇ ДЛЯ МОДУЛЬНОГО ТЕСТУВАННЯ ---

// 1. Перевірка віку (чи можна продавати товар)
function checkAge(age) {
    return age >= 18;
}

// 2. Розрахунок ціни з податком (20%)
function calculatePriceWithTax(price) {
    return price * 1.2;
}

// 3. Форматування привітання клієнта
function greetUser(name) {
    return `Вітаємо, ${name}!`;
}

// --- ФУНКЦІЯ ДЛЯ ІНТЕГРАЦІЙНОГО ТЕСТУВАННЯ ---

// Ця функція поєднує логіку: перевіряє вік, рахує ціну і формує чек
function createOrder(userAge, userName, productPrice) {
    if (!checkAge(userAge)) {
        return "Помилка: вік замалий для покупки";
    }
    
    const finalPrice = calculatePriceWithTax(productPrice);
    const greeting = greetUser(userName);
    
    return `${greeting} Ваше замовлення на суму ${finalPrice.toFixed(2)} оформлено.`;
}

module.exports = { checkAge, calculatePriceWithTax, greetUser, createOrder };