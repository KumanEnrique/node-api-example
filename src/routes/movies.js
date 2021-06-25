const express = require('express')
const router = express.Router()

let movies = require('../db.json')

router.get('/',(req,res)=>{
    res.json(movies)
})
router.post('/',(req,res)=>{
    console.log(req.body)
    const id = movies.length + 1
    movies.push({...req.body,id})
    res.json(movies)
})
router.put('/:id',(req,res)=>{
    const id = req.params
    console.log(id,req.body)
    for(let i = 0;i < movies.length;i++){
        if(movies[i].id == req.params.id){
            movies[i] = req.body
            // console.log(movies[i]);
            console.log("yes");
        }
    }
    res.json(movies)
    // res.send("modificado")
})
router.delete('/:id',(req,res)=>{
    const id = req.params
    movies.forEach((movie,i) =>{
        if(movie.id == req.params.id){
            movies.splice(i,1)
        }
    })
    res.json(movies)
    // res.send("eliminado")
})

module.exports = router