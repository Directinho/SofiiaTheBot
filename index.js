const bot = require("lavaplayer") 
const { REST } = require('@discordjs/rest');
const { Client, Intents } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('Ready!', () => {
	console.log('Ready!');
});

const emojiCharacters = require('./emojiCharacters.js');

console.log(emojiCharacters.a); // 🇦
console.log(emojiCharacters[10]); // 🔟
console.log(emojiCharacters['!']); // ❗

client.login(process.env.token);

client.login(token);

