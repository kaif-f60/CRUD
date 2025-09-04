const express = require ("express")
const app = express()



//Middleware

app.set('view engine', 'ejs')
app.use (express.urlencoded({extended:false}))
app.use(express.static('public'))


app.get('/',(req, res)=>{

    const childs =[{name:"kailash", age:21},{name:"Kher", age:25},{name:"F60", age:25},]
   res.json(
    childs
   );
})


app.get('/show-contact',(req,res)=>{ res.render('show-contact')})
app.get('/add-contact', (req,res) =>{ res.render('add-contact')})
app.post('/add-contact',(req,res)=>{})
app.get('/update-contact',(req,res)=>{ res.render('update-contact')})
app.post('/update-contact',(req,res)=>{ })
app.get('/delete-contact',(req,res)=>{ })


app.listen(3000, ()=>{console.log("SERVER IS WORKING NOW")})
