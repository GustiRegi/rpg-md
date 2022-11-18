import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let handler = async (m, { conn, command, text }) => {
  let name = await conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
await conn.sendButton(m.chat, `Halo juga kak ${name} Ada Yang ${await conn.getName(conn.user.jid)} Bisa Bantu?\n`,wm + '\n\n' + botdate, giflogo2, [['MENU','.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: 'https://tiktok.com/@raraharsita2',
                        mediaType: 2,
                        description: 'anu',
                        title: '*✧───────···────────✧*',
                        body: 'Yuki Adistyラ',          previewType: 0,
                        thumbnail: await (await fetch(pp)).buffer(),
                        sourceUrl: 'https://github.com/login'
                      }}
})
}
handler.customPrefix = /^(Hallo|halo|Halo|hallo|hi|helo|hai|hi|Hai|Helo|Hello)$/i
handler.command = new RegExp

export default handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari 🎑"
    if (time >= 4) {
        res = "Selamat Pagi 🌅"
    }
    if (time > 10) {
        res = "Selamat Siang 🏞️"
    }
    if (time >= 15) {
        res = "Selamat Sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat Malam 🌃" 
    }
    return res
}
