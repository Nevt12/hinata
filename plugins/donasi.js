let ft = require('node-fetch')

let handler = async ( m, { conn }) => {
let dan = 'Donasi'
let caption = `
╭─「 Donasi • Pulsa 」
│ • Telkomsel [ nothing ]
│ • OVO [ 0881037923331 ]
│   • Dana [ 0881037923331 ]
│   • Paypal [ 62881037923331 ]
╰────

DONASI SEIKLASNYA SAJA YA!
`.trim()
conn.sendButtonLoc( m.chat, await ( await ft(fla + dan)).buffer(), caption,
`©Rlp27`, `Pemilik bot`, `.creator`, m) 
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
