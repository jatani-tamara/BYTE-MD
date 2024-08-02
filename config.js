
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID || ""





  


//___________________________________________________________________________________________________


  
  "Your session ID" /Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU5wOWFYNHJ1bEpCY282NisyaG80Y2F2R1VGcVY1Sjg3TVJMM0pwRkFVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVh1ODNnWi9qYWRzOStvT0xZa3F4U0dNeDRpZmVQc2VSbHRMVERGc2pGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TzB2NmdTZG9SdzNLdkNrVjhZWm9uOC9DMXFPQXVYbjVuYVRJS0lqSDBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUkQxY3ZUMytiVXV4Rm9qdURhbUNicWdSbmM4OXlQbkZSME1CbVhCQldrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGUmJvZnpsNW9ndVlUYXFWd25GcFQ3REVFaDRtNVpUNkdBL2RtTFY5R2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndvVC92RHJWeWFMbEtiY0VGRlV6a1lTT2FqdHowN2VxU1V1ZUtsZlVzbWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFNbEhhR2o3RldaTmg4dnRpYzg3TEhaSmlWWWFrd0tNQlcvZ1E3aFRGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1kvN0ZzaVdYYXgwSWd5R0cwMStzekFZMk5EZDRwdXplTzg3NmRSaWlIdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNwK2ZzMXdMS0VUcHZta2Q4djlsd21PRFRhTlQ5L2M5WjJNK3MrS0lZY21aTWZDUmx2VXhNVXJ4Y1hZb2ZhcC9NWnJ6bW5GbTJ6a3kxdmhQU1lObkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiJzeTFsNmxUd1I4R0puQU1FMGpMaW84bUUvSU5HaXMyUzNoYkVXQ0ZSTzlrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFcXZYMVVZd1JNS1U1ZkdILUNrOVRBIiwicGhvbmVJZCI6IjU2M2MzMGQyLTQ0YjYtNGE1Mi1iZTA2LTllZDVkYjA1NDU3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtVDZ6OGY1OEFBMDJ2Yk9WY3pyQ1RCYWNYQTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1d1d2N2L2RMVUlhTmp5VTlQQTEzREVyRU1rPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRaQ0dXUjNaIiwibWUiOnsiaWQiOiIyNTQxMTEzNDI1OTk6MzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLi4gUi5UIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLNjBqRHdRMHUreHRRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyRzlMaHUzakhWaXpidjVWaHZHT2gzUWVpRFFsMWVwdTJIRGZtMHh6cmwwPSIsImFjY291bnRTaWduYXR1cmUiOiJ3YWZwV0RNUUJXUUxBSk1ubk0vWVVqOUIyaW1mRnQzQTVZK2xuVi9RNncwd01Dbnk0UVZmWE1YS1NyK01TN25yTXlrQkxRT1J3NlhYWkRTS3NXYzJEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUDhxTTd0L2dxamE1cXFCRE5OV25JSGNidUFHeWxBMWVxRlRFR01lZG5LNUF2b3BTcTEwWkNETEFEK2M1QThCbGJhSzRsaG93VE9uYzVLYzMzems5Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMTEzNDI1OTk6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGh2UzRidDR4MVlzMjcrVllieGpvZDBIb2cwSmRYcWJ0aHczNXRNYzY1ZCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjU3ODkxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNS0gifQ==/Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
