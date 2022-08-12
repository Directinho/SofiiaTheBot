import discord

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

@client.event
async def on_message(message):

        print(f"{message.channel}: {message.author}: {message.author.name}: {message.content}")
  if message.author == client.user:
    return
        if message.content.startswith('prefix'):
        response = SofiiaBot.request(message.content[4:])
        await message.channel.send(response)
