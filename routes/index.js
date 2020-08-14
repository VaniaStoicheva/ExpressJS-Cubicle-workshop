const {Router}=require('express')
const { getAllCubes,getCube,updateCube,getCubeWithAccessories}=require('../controllers/cube')
const { getAccessories}=require('../controllers/accessories')
const Cube =require('../models/cube')
const Accessory=require('../models/accessory')
const { update } = require('../models/cube')


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
    //console.log(cube)
    cube.save((err)=>{
        
        if(err){
            console.error(err)
            res.redirect('/create')
        }else{
            res.redirect('/')
        }
        
    })

})

router.get('/details/:id',async(req,res)=>{

    //const cube=await getCube(req.params.id)
    const cube=await getCubeWithAccessories(req.params.id)
    
        res.render('details',{
            title:'Details  Cube |Cube workshop ',
            ...cube,
            
        })  
})

router.get('/create/accessory',(req,res)=>{
    res.render('createAccessory',{
        title:'Create accessory'
    })
})

router.post('/create/accessory',async(req,res)=>{
    const{
        name,
        description,
        imageUrl
    }=req.body

    const accessory=new Accessory({
            name,
            description,
            imageUrl
        })

    await accessory.save()

    res.redirect('/create/accessory')
})

router.get('/attach/accessory/:id',async (req,res)=>{

    const cube=await getCube(req.params.id)
    const accessories= await getAccessories()

    const notAttachedAccessories=accessories.filter(acc=>{
       return !cube.accessories.includes(acc._id)
    })

    res.render('attachAccessory',{
        title:'Attach accessory',
        ...cube,
        accessories, notAttachedAccessories,
        isFullyAttached:cube.accessories.lenght===accessories.length
    })
})

router.post('/attach/accessory/:id',async (req,res)=>{

    const{
        accessory
    }=req.body

    await updateCube(req.params.id,accessory)
    res.redirect(`/details/${req.params.id}`)
})

router.get('*',(req,res)=>{
    res.render('404',{
        title:'Error'
    })
})
module.exports=router
    
  
   
