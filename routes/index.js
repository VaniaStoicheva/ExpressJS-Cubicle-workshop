const {Router}=require('express')
const { getAllCubes,getCube}=require('../controllers/cube')
const Cube =require('../models/cube')


const router= new Router()

router.get('/',async (req,res)=>{
    const cubes=await getAllCubes()
        res.render('index',{
            title:'Cube workshop',
            cubes
    
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

router.post('/create',(req,res)=>{
    
    const {
        name,
        description,
        imageUrl,
        difficulty
    }=req.body

    const cube = new Cube({
        name, description, imageUrl,  difficulty
    })
    console.log(cube)
    cube.save((err)=>{
        
        if(err){
            console.error(err)
        }else{
            res.redirect('/')
        }
        
    })

})

router.get('/details/:id',async(req,res)=>{

    const cube=await getCube(req.params.id)
    
        res.render('details',{
            title:'Details  Cube |Cube workshop ',
            ...cube
        })
 
    
})

router.get('*',(req,res)=>{
    res.render('404',{
        title:'Error'
    })
})
module.exports=router
    
  
   
