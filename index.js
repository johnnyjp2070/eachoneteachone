const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index',{
        title:'Humvikas',
        tagline: 'Humvikas India, Together We Can'
    })
})

app.get('/faq', (req, res)=>{
    res.render('faq',{
        title:'FAQ'
    }) 
})

app.get('/product/:id', (req, res)=>{
    console.log(req.params.id)
    var result
    var data = [
        {
            id:1,
            name:'Johnson'
        },
        {
            id:2,
            name:'Raina'
        }
    ]

    data.forEach((product)=>{
        if (product.id == req.params.id){
            result = product
        }
        
    })
    res.json(result)
})
 
app.listen(3000);
console.log('Server Listening')
