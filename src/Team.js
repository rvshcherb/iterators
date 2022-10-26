export default class {
  constructor() {
    this.bowman = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };
    this.magician = {
      name: 'Маг',
      type: 'Magician',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };
    this.knight = {
      name: 'Рыцарь',
      type: 'Knight',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };
  }

  [Symbol.iterator]() {
    const values = Object.values(this);
    let index = -1;
    return {
      next() {
        index += 1;

        return {
          value: values[index],
          done: index >= values.length,
        };
      },
    };
  }
}
