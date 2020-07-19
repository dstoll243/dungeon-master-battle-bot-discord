# Dungeon Master Battle Bot

## Invite to your server

[https://discord.com/api/oauth2/authorize?client_id=733789329104699454&permissions=67584&scope=bot](https://discord.com/api/oauth2/authorize?client_id=733789329104699454&permissions=67584&scope=bot)

## Clone and deploy locally
* Create `.env` file, add to `.gitignore`.
* Create a new application and retrieve bot token from discord at [https://discord.com/login?redirect_to=%2Fdevelopers](https://discord.com/login?redirect_to=%2Fdevelopers). Add to `.env` as `TOKEN` value.
* Generate MongoDB URI connection string either with locally running instance or using [Mongo Atlas](https://www.mongodb.com/cloud/atlas). Add to `.env` as `MONGO_URI` value.
* Invite your bot to your development server using link in oAuth permissions section of your application on Discord.
* `node index.js`

## Commands

### `/create-enemy <enemy-name> [, <enemy-name>]`
* Creates one or more new enemies, set with 0 damage and a unique name. 

### `/list`
* Lists all created enemies for the current channels.

### `/attack <enemy-name> <damage-amount>`
* Increase an enemies total damage.

### `/kill <enemy-name>`
* Remove an enemy permanently from the game.



