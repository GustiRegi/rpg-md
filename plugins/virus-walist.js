let handler = async (m, { conn }) => {
let info = `
*${htki} MENU WA ${htka}*
 
         
          ᴹᴿ᭄ King Of Bear ×፝֟͜×
          
                  
––––– *MENU WA*  –––––

`
const sections = [
   {
    title: `༶ WHATSAPP IMUNE ༶`,
	rows: [
	    {title: "༆WhatsApp Imune 1࿐", rowId: '.waimune1', description: 'By ᴹᴿ᭄ King Of Bear ×፝֟͜×' },
	    {title: "༆WhatsApp Imune 2࿐", rowId: '.waimune2', description: 'By ᴹᴿ᭄ King Of Bear ×፝֟͜×' },
	]
	    }, {
    title: `༶ WHATSAPP GB ༶`,
 rows: [
	{title: "༆WhatsApp Gb Kebal 1࿐", rowId: '.wagb1', description: 'By ᴹᴿ᭄ King Of Bear ×፝֟͜×' },
	{title: "༆WhatsApp Gb Kebal 2࿐", rowId: '.wagb2', description: 'By ᴹᴿ᭄ King Of Bear ×፝֟͜×' },
	]
    }, {
    title: `༶ OWNER BOT ༶`,
	rows: [
	    {title: "༆ᴹᴿ᭄ King Of Bear ×፝֟͜×࿐", rowId: '.owner', description: 'Pembuat Bot' },
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
handler.help = ['waantivirus']
handler.tags = ['virus']
handler.command = /^waantivirus$/i
handler.premium = false

export default handler
