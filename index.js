const sequelize = require('./db');
const Car = require('./models/car');

async function main() {
  try {
    await sequelize.authenticate();
    console.log('✓ Подключение к SQLite установлено');

    await sequelize.sync({ force: true });
    console.log('✓ Таблица cars синхронизирована');

    await Car.bulkCreate([
      {
        brand: 'Toyota',
        model: 'Camry',
        year: 2022,
        price: 2750000,
        isAvailable: true,
      },
      {
        brand: 'BMW',
        model: 'X5',
        year: 2023,
        price: 7900000,
        isAvailable: false,
      },
    ]);
    console.log('✓ Добавлено 2 автомобиля');

    const cars = await Car.findAll();
    console.log('\n=== Список автомобилей ===');
    cars.forEach((car) => {
      console.log(
        `[${car.id}] ${car.brand} ${car.model}, ${car.year} г., ` +
        `${car.price.toLocaleString('ru-RU')} ₽, ` +
        `${car.isAvailable ? 'в наличии' : 'нет в наличии'}`
      );
    });
    console.log(`Всего: ${cars.length}`);
  } catch (error) {
    console.error('✗ Ошибка:', error.message);
  } finally {
    await sequelize.close();
    console.log('\n✓ Соединение закрыто');
  }
}

main();
