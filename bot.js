import { Client, IntentsBitField } from 'discord.js';
import * as dotenv from "dotenv";

// ============ ENV ============ //

dotenv.config();

// ============ BOT ============ //

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

client.on('ready', (e) => {
  console.log(`${e.user.tag} esta online!`);
});

// ============ RESPOSTAS A MENSAGENS ============ //

client.on('messageCreate', (message) => {
  if (message.author.bot) return

  if (message.content === "!hello") {
    message.reply("world")
  }
});


// ============ Aréas do CITi ============ //

client.on('messageCreate', (message) => {
  if (message.author.bot) return

  if (message.content === "!areas") {
    message.reply("O CITi possuí as aréas de: Pessoas, Marketing, Inteligencia de Dados e Finanças, Comercial, Design e Desenvolvimento.")
  }
});

// ============ Missão do CITi ============ //

client.on('messageCreate', (message) => {
  if (message.author.bot) return

  if (message.content === "!missao") {
    message.reply("O CITi tem como missão: Impulsionar a excelência através da inovação e pesquisa contínuas. Estamos dedicados a criar soluções  que transformem desafios em oportunidades, promovendo o crescimento sustentável do CITi e impactando positivamente a sociedade. Buscamos constantemente novos horizontes, explorando fronteiras do conhecimento e desenvolvendo soluções que impulsionem a empresa.")
  }
});

// ============ Valores do CITi ============ //

client.on('messageCreate', (message) => {
  if (message.author.bot) return

  if (message.content === "!valores") {
    message.reply("O CITi tem inumeros valores, entre eles: Colaboração, Aprendizado Contínuo, Excelência")
  }
});


// ============ CONEXÃO TOKEN ============ //

client.login(process.env.DISCORD_BOT_TOKEN)
  .catch(erro => {
    console.error('Falha ao fazer login:', erro);
  });