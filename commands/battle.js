const enemies = [];
function Enemy(title, status) {
  this.title = title;
  this.damage = 0;
  this.effects = Array.isArray(status) ? status : [];
  if (status && !Array.isArray(status)) {
    this.effects.push(status);
  }
  enemies.push(this);
}

function createEnemy(title, count = '1', status = '') {
  count = parseInt(count);
  if (isNaN(count)) {
    throw new Error('Count was not supplied as a number');
  }

  let identifier = setIdentifier(title);
  for (let i = 0; i < count; i++) {
    const name = `${title}_${identifier}`;
    new Enemy(name, status);
    identifier++;
  }
  return;
}

function setIdentifier(enemy) {
  let id = 1;
  for (const e of enemies) {
    const [enemyName, num] = e.title.split('_');
    if (enemyName === enemy) {
      id = parseInt(num) + 1;
    }
  }
  return id;
}

createEnemy('goblin', 3);
createEnemy('bugbear', 1, ['wizard', 'sleepy']);
createEnemy('bugbear', 2);

function damageEnemy(enemy, damage) {
  const enemyToDamage = enemies.find(e => e.title === enemy);
  enemyToDamage.damage += parseInt(damage);
}

function addStatus(enemy, status, damage = 0) {
  const enemyToAddStatus = enemies.find(e => e.title === enemy);
  enemyToAddStatus.effects.push(status);
  enemyToAddStatus.damage += parseInt(damage);
}

function removeStatus(enemy, status, damage = 0) {
  const enemyToRemoveStatus = enemies.find(e => e.title === enemy);
  const index = enemyToRemoveStatus.effects.indexOf(status);
  enemyToRemoveStatus.effects.splice(index, 1);
  enemyToRemoveStatus.damage += parseInt(damage);
}

damageEnemy('bugbear_2', 7);
damageEnemy('bugbear_2', 3);
damageEnemy('goblin_2', 3);
addStatus('bugbear_3', 'poisoned', 2);
removeStatus('bugbear_1', 'wizard');

