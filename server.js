
const app =require('./app')
require('dotenv').config()
const init=()=>{
    return 'ok'
}
app.listen(process.env.PORT , async () => {
    //    console.log(WEBHOOK_URL)
      //  console.log(TELEGRAM_API+"/"+"setWebhook?url"+"="+WEBHOOK_URL);
        //{TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}
        console.log('🚀 app running on port', process.env.PORT)
        await init()
    })