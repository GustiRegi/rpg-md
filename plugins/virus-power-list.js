let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
      
          
    ᴹᴿ᭄ King Of Bear ×፝֟͜×
          
                            
–––––– *MENU* ––––––

`
const sections = [
   {
    title: `༶ ⊰⊷MENU POWER⊶⊱ ༶`,
	rows: [
	    {title: "༆Power 1࿐", rowId: '.virtex21', description: 'By ᴹᴿ᭄ King Of Bear ×፝֟͜×' },
	    {title: "༆Power 2࿐", rowId: '.virtex22', description: 'By ᴹᴿ᭄ King Of Bear ×፝֟͜×' },
	{title: "༆Power 3࿐", rowId: '.virtex23', description: 'By ᴹᴿ᭄ King Of Bear ×፝֟͜×' },
	{title: "༆Power 4࿐", rowId: '.virtex24', description: 'By ᴹᴿ᭄ King Of Bear ×፝֟͜×' },
	{title: "༆Power 5࿐", rowId: '.virtex25', description: 'By ᴹᴿ᭄ King Of Bear ×፝֟͜×' },
	]
    }, {
    title: `༶ ⊰⊷DOWNLOAD⊶⊱ ༶`,
	rows: [
	    {title: "༆Download WhatsApp Imune࿐", rowId: '.imune', description: 'Download WhatsApp Kebal' }, {
	   title: `༶ ⊰⊷MENU TROLI⊶⊱ ༶`,
	rows: [
	    {title: "༆Virus Troli࿐", rowId: '.virustroli', description: 'By ᴹᴿ᭄ King Of Bear ×፝֟͜×' },
	    ]
        }, {
    title: `༶ ⊰⊷BUY PREMIUM⊶⊱ ༶`,
	rows: [
	    {title: "༆Up To Premium࿐", rowId: '.sewa', description: 'unclock Semua Fitur Premium' },
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
handler.command = /^powerlist$/i
handler.premium = false

export default handler
