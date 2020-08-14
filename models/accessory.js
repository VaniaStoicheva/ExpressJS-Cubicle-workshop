const mongoose=require('mongoose')
const { ObjectID, ObjectId } = require('mongodb')


    
      const AccessoryShema=new mongoose.Schema({
          name:{
              type:String,
              required:true
          },
          description:{
                type:String,
                required:TextTrackCue,
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

module.exports=mongoose.model('Accessory',AccessoryShema)