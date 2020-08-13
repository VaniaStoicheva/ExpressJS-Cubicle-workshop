const {Router}=require('express')
const { getAllCubes}=require('../controllers/cube')
const {getCube}=require('../controllers/database')


const router= new Router()

router.get('/',(req,res)=>{
    
    getAllCubes((cubes)=>{
        console.log(getAllCubes)
        res.render('index',{
            title:'Cube workshop',
            cubes
        })
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

router.get('/details/:id',(req,res)=>{
    getCube(req.params.id,(cube=>{
        res.render('details',{
            title:'Details  Cube |Cube workshop ',
            ...cube
        })
    }))
    
})

router.get('*',(req,res)=>{
    res.render('404',{
        title:'Error'
    })
})
module.exports=router
    
  
   
