const Cube=require('../models/cube')

const newCube=new Cube('Default','This i a default cube','https:google.com',1)

newCube.save()
console.log(newCube)