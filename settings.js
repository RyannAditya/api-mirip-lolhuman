const fs = require('fs')

global.creator = 'RyanAditya' 
global.apikey = ["StnC6671pl8", "YvmOga8sf", "MgBlk6wmsk"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
