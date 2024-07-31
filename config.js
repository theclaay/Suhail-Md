const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Ayaz:<password>@cluster0.bz71pnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ mrX-Ayaz" 


global.devs = "923017852227" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923017852227";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_40_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDgyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYzLFxuICAgICAgICA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MixcbiAgICAgICAgMTM2LFxuICAgICAgICA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyLFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM0LFxuICAgICAgICA4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgMTgyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0LFxuICAgICAgICA3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDkwLFxuICAgICAgICA3MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMTIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNobEZ3YUVpaE1RcE9FdnI5N1IwUmRXY1QybWhLRUIzck40ODQyZ2N4aVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDE3ODUyMjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQ0VEODY1NEFFQkVFODFBMDRCOTZBQjE5NkRGRTg5MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0MDA4MjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMTc4NTIyMjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZERDgwOTUwQzg2NDJFMkEwMkQ2RDRENTBFODBGQzcxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQwMDgyN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxNzg1MjIyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjUyNjA3ODgxNEM3Q0VBMzFFQjQ0NzU3NzM0N0IzMDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNDAwODMwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDE3ODUyMjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QzQ5QkNDMDY5RTUyMjg5NkQ5OTM4MjgzN0UwNjA2MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0MDA4MzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSC1CQm92ZTdTTDYtT0VNNVpJOUNQQVwiLFxuICBcInBob25lSWRcIjogXCI1Yjk4NDA3NS0xYTZmLTQ0M2ItYTc1My00NDVmNTI5YzFiNzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMTg5LFxuICAgICAgMjI3LFxuICAgICAgMTQ3LFxuICAgICAgMTM4LFxuICAgICAgMjQ4LFxuICAgICAgMTMwLFxuICAgICAgMTAxLFxuICAgICAgMjQyLFxuICAgICAgNzYsXG4gICAgICAxMTgsXG4gICAgICAyMzgsXG4gICAgICAxODgsXG4gICAgICAxOTAsXG4gICAgICAyNDEsXG4gICAgICA3NixcbiAgICAgIDEzMSxcbiAgICAgIDE0OSxcbiAgICAgIDEyNSxcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDEzMCxcbiAgICAgIDYwLFxuICAgICAgMTU3LFxuICAgICAgMTgsXG4gICAgICAyNDEsXG4gICAgICAyOCxcbiAgICAgIDEyMSxcbiAgICAgIDIxMCxcbiAgICAgIDIwMCxcbiAgICAgIDMsXG4gICAgICAyOSxcbiAgICAgIDIwMixcbiAgICAgIDE5MCxcbiAgICAgIDI0NSxcbiAgICAgIDE2OSxcbiAgICAgIDg2LFxuICAgICAgNjMsXG4gICAgICAxOTUsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0tMVzhTR0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAxNzg1MjIyNzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibXJ6b29tYmlleFwiLFxuICAgIFwibGlkXCI6IFwiMTg1NDc4NjY2MDIyOTg0OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlQ1cm80RUVLZUFwN1VHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0RitSazBuTUFkK1hQRjdYaS9QRjNjcnRjZjNBaXc1bG93T1AvWm9TRkU0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpOQzJyODZlUmEzeWNyelVSQ0Zjc0JsOVpTQ0ZFSFFDUTBqUHZta000Tk1OZGVQa1A0VW5qYmVWS2R5cjVFVHpscUNyaXBIOFNCYzR3MkRKN002bEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktVNHV4K2hHaUlRdmVkc2VjZG1WT2s1eFZwTDFLWDR0UE0rcjVJOENuZVB1Wk5ZZllUYW5oTUtubjJKb3RxRjloa3ZTMEwybjBoeGNUK3N0N2RUNGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAxNzg1MjIyNzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDAwODI1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTk1iXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOTWIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3MmdjNUx5R040S1pSMjhEYUp6RVUvWEtXOTBqbDd5M2pqckFlYjFNeitZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMDM4NzExMjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MrX-Ayaz",
  ownername:process.env.OWNER_NAME|| "Ayaz",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
