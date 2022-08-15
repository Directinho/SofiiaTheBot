const { REST } = require('@discordjs/rest');
const { Client, Intents } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json')

client.user.setBanner('https://ibb.co/wgRssvL')
  .then(user => console.log(`New Banner set!`))
  .catch(console.error)
  
