lient.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('🏓Pong! :3');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	}
});

client.login(token);