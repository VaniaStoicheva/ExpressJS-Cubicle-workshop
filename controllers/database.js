const fs=require('fs')
const path=require('path')
const databaseFile=path.join(__dirname,'..','config/database.json')

const saveCube=(cube)=>{

    getCubes((cubes)=>{
        cubes.push(cube)

        fs.writeFile(databaseFile,JSON.stringify(cubes),error=>{
            if(error){
             throw error
            }
            console.log("New cube successfuly stored") 
         }) 
    })
    
}


const getCubes=(callback)=>{
    fs.readFile(databaseFile,(error,dbData)=>{
        if(error){
            throw error
        }
        const cubes=JSON.parse(dbData)
        callback(cubes)
    })
}

const getCube=(id, callback)=>{
getCubes(cubes=>{
    const cube=cubes.filter(c=>c.id===id)[0]
    callback(cube)
})
}

module.exports={
    getCube,
    getCubes,
    saveCube
}

