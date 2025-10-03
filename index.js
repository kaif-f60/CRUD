const express = require ("express")
const app = express()
const mongoose = require ("mongoose")
const Contact = require("./models/contacts.models")



// databse connection
mongoose.connect('mongodb://127.0.0.1:27017/contact-crud')


//Middleware

app.set('view engine', 'ejs')
app.use (express.urlencoded({extended:false}))
app.use(express.static('public'))


// app.get('/',(req, res)=>{

//     const childs =[{name:"kailash", age:21},{name:"Kher", age:25},{name:"F60", age:25},]
//    res.json(
//     childs
//    );
// })

app.get('/',async (req,res) => { 
   
    const contacts = await Contact.find()
    res.render('home',{contacts})
    })
app.get('/show-contact/:id',async (req,res)=>{ 
    const contact = await Contact.findOne({_id:req.params.id })
    // res.json(contact)    
    
    res.render('show-contact',{contact})

})
app.get('/add-contact', (req,res) =>{ res.render('add-contact')})
app.post('/add-contact',(req,res)=>{})
app.get('/update-contact/:id',(req,res)=>{ res.render('update-contact')})
app.post('/update-contact/:id',(req,res)=>{ })
app.get('/delete-contact/:id',(req,res)=>{ })


app.listen(3000, ()=>{console.log("SERVER IS WORKING NOW")})
