import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const { Schema } = mongoose;

const  watchSchema = new Schema({
  title: String, 
  price: Number,
  image:String
});

const Watches = mongoose.model('Watches', watchSchema);


app.get('/', async(req, res) => {
 try {
    const watch=await Watches.find({})
    res.json(watch)
 } catch (error) {
    res.status(500).json(error)
 }
})
app.post('/', async(req, res) => {
    try {
       const watch=new Watches({...req.body})
       await watch.save()
       res.json("created")
    } catch (error) {
       res.status(500).json(error)
    }
   })
   app.get('/:id', async(req, res) => {
    try {
        const {id}=req.params
       const watch=await Watches.findById(id)
       res.json(watch)
    } catch (error) {
       res.status(500).json(error)
    }
   })
   app.delete('/:id', async(req, res) => {
    try {
        const {id}=req.params
       const watch=await Watches.findByIdAndDelete(id)
       res.status(200).json("deleted")
    } catch (error) {
       res.status(500).json(error)
    }
   })


mongoose.connect("mongodb+srv://nuranaisazade:nurana2004@cluster0.bnrclo9.mongodb.net/")
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})