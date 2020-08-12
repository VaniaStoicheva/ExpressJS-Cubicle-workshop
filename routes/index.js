const {Router}=require('express')


const router= new Router()

router.get('/',(req,res)=>{
    res.render('index',{
        title:'Cube workshop'
    })
})

router.get('/about',(req,res)=>{
    res.render('about',{
        title:'About |Cube workshop '
    })
})

router.get('/create',(req,res)=>{
    res.render('create',{
        title:'Create Cube | Cube workshop'
    })
})

router.get('/details',(req,res)=>{
    res.render('details',{
        title:'Details  Cube |Cube workshop '
    })
})

router.get('*',(req,res)=>{
    res.render('404',{
        title:'Error'
    })
})
module.exports=router
    
  
   
