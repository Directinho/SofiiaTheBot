import discord
from neuralintents import GenericAssistant

client = discord.client()

def _prefix_callable(bot, msg):
    user_id = bot.user.id
    base = ['<@!{}> '.format(user_id), '<@{}> '.format(user_id)]
    if msg.guild is None:
        base.append('!')
        base.append('?')
    else:
        base.extend(bot.prefixes.get(msg.guild.id, ['?', '!']))
    return base

chatbot = GenericAssistant('intents.json')
chatbot.train_model()
chatbot.save_model()

client = discord.Client()

@client.event
async def on_ready():
    print(f"Pronto {client.user}, Prontinha :3")


@client.event
async def on_message(message):
    print(f"{message.channel}: {message.author}: {message.author.name}: {message.content}")
    if message.author == client.user:
        return
    if message.content.startswith('s!'):
        response = chatbot.request(message.content[4:])
        await message.channel.send(response)

    if message.content.startswith('s!'):
        response = chatbot.request(message.content[4:])
        await message.channel.send(response)

client.run('token')
