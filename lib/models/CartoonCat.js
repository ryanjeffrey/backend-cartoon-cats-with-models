const pool = require('../utils/pool');
module.exports = class CartoonCat {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.lives = row.lives;
    this.url = row.url;
    this.year = row.year;
    this.isSidekick = row.is_sidekick;
  }
};
