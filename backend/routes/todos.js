const express= require('express')
const router= express.Router()
const Todo= require('../models/product.model')

router.get('/', async (req, res) => {
    try{
        const todos= await Todo.find({})
        res.json(todos)

    } catch (error){
        console.error('this is the error: ', error)
    }
})


router.post('/', async (req, res) => {
    const todo= new Todo({
        text: req.body.text,
    })
    try{
        const newtodo= await todo.save()
        res.status(200).json(newtodo)
    } catch (error){
        console.log(error)
    }
})


// // get all todos
// router.get('/', async (req, res) => {
//     try{
//         const todos= await Todo.find()
//         res.json(todos);
//     } catch (error){
//         res.status(400).json({message: error.message})

//     }
// })


// // create a new todo
// router.post('/', async (req, res) => {
//     const todo= new Todo({
//         text: req.body.text,
//         completed: false,

//     })

//     try{
//         const newTodo= await todo.save()
//         res.status(200).json(newTodo)
//     } catch (error){
//         res.status(400).json({message: error.message})
//     }
// })




// update a todo
router.put('/:id', async(req,res) => {
    const {text, completed}= req.body;
    try{
        const updateTodo= await Todo.findByIdAndUpdate(
            req.params.id,
            {text, completed},
            {
                new:true
            }
        )
        if (!updateTodo) {
            return res.status(404).json({ message: 'Todo not found' });
          }
          res.json(updateTodo);
    } catch (err){
        res.status(400).json({message: err.message})

    }

})


router.delete('/:id', async (req, res) => {
    try{
        await Todo.findByIdAndDelete(req.params.id)
        res.json({message: 'todo deleted'})
    } catch (error){
        res.status(400).json({message: error.message})
    }
})


// // delete a todo
// router.delete('/:id', async( req, res) => {
//     try{
//         await Todo.findByIdAndDelete(req.params.id)
//         res.json({message: 'todo deleted'})

//     } catch (error){
//         res.status(500).json({message: error.message})
//     }
// })

module.exports= router;