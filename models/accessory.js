const mongoose=require('mongoose')
const { ObjectID, ObjectId } = require('mongodb')


    
      const AccessoryShema=new mongoose.Schema({
          name:{
              type:String,
              required:true
          },
          description:{
                type:String,
                required:true,
                maxlength:200
          },
          imageUrl:{
              type:String,
              required:true
          },
          
          cubes:[{
              type:ObjectId,
              ref:'Cube'
          }]
      })

      AccessoryShema.path('imageUrl').validate(function(url){
        return url.startsWith('http://') || url.startsWith('https://')
    }, 'Image URL is not valid')

module.exports=mongoose.model('Accessory',AccessoryShema)