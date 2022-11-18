import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('November 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/Donasiku.mp3`
  conn.sendButton(m.chat, `
┏━ꕥ〔 *• Donasi •* 〕ꕥ━⬣
┃
┃✾ *Gausah Donasi Cuy* 🗿
┃
┗━━━━ꕥ

┏━━ꕥ〔 *• NOTE •* 〕ꕥ━⬣
┃ 
┃✾ *Jangan Spam Bot. !!*
┃
┗━━━━ꕥ
`.trim(), wm, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `Yuki Adistyラ`, body: `⚘ by ᴹᴿ᭄ King Of Bear ×፝֟͜×`, sourceUrl: 'https://github.com/login', thumbnail: await (await fetch('https://i.ibb.co/jfZVKmC/babi2.jpg')).buffer(),}} 
     }) 
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
