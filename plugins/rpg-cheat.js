let handler = async (m, { conn }) => {
let info = `
*${htki} CHEAT ${htka}*

maaf cuy fitur cheat sedang tidak work/eror!
`
const sections = [
   {
	title: `FITUR CHEAT SEDANG EROR !`,
	rows: [
	    {title: "༆Cheat Money࿐", rowId: '.cheatuang', description: 'Fitur ini sedang eror' },
	    {title: "༆Cheat Exp࿐", rowId: '.cheatexp', description: 'Fitur ini sedang eror' },
	{title: "༆Cheat Limit࿐", rowId: '.cheatlimit', description: 'Fitur ini sedang eror' },
	{title: "༆Cheat Level࿐", rowId: '.cheatlevel', description: 'Fitur ini sedang eror' },
	{title: "༆Cheat Anti Pmo࿐", rowId: '.antipmo', description: 'Fitur ini sedang eror' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "࿗MENU࿘",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['cheatbot', 'cheat']
handler.tags = ['rpg']
handler.command = /^(cheat(bot)?|cheat)$/i
handler.private = false
handler.owner = true
handler.premium = true

export default handler
