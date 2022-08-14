client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

if (commandName === 'help') {

const webhookClient = new WebhookClient({ id: webhookId, token: webhookToken });

const embed = new EmbedBuilder()

     await interaction.reply.webhook.send({
        "username": "SofiiaBot",
        "avatar_url": "https://i.imgur.com/tu8yMGs.png",
        "content": "",
        "embeds": [
          {
            "title": "Meus Comandos Principais: 3",
            "color": 16711888,
            "description": "**S!help**: Pedir Ajuda com a Sofiia [Você acabou de usar o comando por que está procurando se sabe🤔]\n**S!p**: Falar com SofiiaBot em PT-BR [Bata um bom papo com a Sofiia :3]\n**S!ping**: Teste para ver se sofiia está acordada [Provavelmente estou acordada por ter respondido hihi]\n**S!server**: Veja as Informações do servidor [Seu servidor provavelmente tem um nome '-']\n**Em Breve Mais comandos...**",
            "timestamp": "",
            "author": {
              "name": "Ajudinha da Sofiia :3",
              "icon_url": "https://i.imgur.com/8u2iiEM.png"
            },
            "image": {},
            "thumbnail": {},
            "footer": {},
            "fields": []
          }
        ],
        "components": []
    });
}

});

client.login(token);