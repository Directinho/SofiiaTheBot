const bot = require("lavaplayer") 
const { REST } = require('@discordjs/rest');
const { Client, Intents } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json')
const { EmbedBuilder, WebhookClient } = require('discord.js');
const { webhookId, webhookToken } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('Ready!', () => {
	console.log('Ready!');
});

const emojiCharacters = require('./emojiCharacters.js');

console.log(emojiCharacters.a); // 🇦
console.log(emojiCharacters[10]); // 🔟
console.log(emojiCharacters['!']); // ❗

channel.createWebhook({
	name: 'SofiiaBot Webhook',
	avatar: 'https://i.imgur.com/T7fheCS.png',
})
	.then(webhook => console.log(`Webhook Criado com Sucesso, o ${webhook}`))
	.catch(console.error);

	

client.login(process.env.token);

client.login(token);


