const express = require('express');
const { route } = require('.');
const router = express.Router()

router.get ('/',(req,res,next)=>{
    const data = req.context
    res.render('home',data);
})


router.get ('/blog',(req,res,next)=>{
    const data = req.context
    res.render('blog',data)
})


router.get ('/blog-single',(req,res,next)=>{
    const data = req.context
    res.render('blog-single',data)
})

router.get ('/menu',(req,res,next)=>{
    const data = req.context
    res.render('menu',data)
})

router.get ('/reservation',(req,res,next)=>{
    const data = req.context
    res.render('reservation',data)
})

router.get ('/about',(req,res,next)=>{
    const data = req.context
    res.render('about',data)
})


module.exports = router;