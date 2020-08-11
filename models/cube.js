const { v4 }=require('uuid');
const fs=require('fs')
const path=require('path')
const databaseFile=path.join(__dirname,'..','config/database.json')

class Cube{
    constructor(name, description, imgUrl,difficulty){
        this.id=v4()
        this.name=description
        this.description=description
        this.imgUrl=imgUrl
        this.difficulty=difficulty
    }

    save(){
        const newCube={
            id:this.id,
            name:this.name,
            description:this.description,
            imgUrl:this.imgUrl,
            difficulty:this.difficulty

        }

        fs.readFile(databaseFile,(error,dbData)=>{
            if(error){
                throw error
            }
            const cubes=JSON.parse(dbData)
            console.log(cubes)
            cubes.push(newCube)

            fs.writeFile(databaseFile,JSON.stringify(cubes),error=>{
                if(error){
                 throw error
                }
                console.log("New cube successfuly stored") 
             }) 
        })
       
    }
}
module.exports=Cube