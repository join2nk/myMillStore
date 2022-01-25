const express = require('express');
const quotes = require('../../models/zen')


const router = express.Router();

router.post('/', async (req, res) => {
  const {quote} = req.body
  console.log('quote')
  let newquote = new quotes({
    quote: quote
  })
  newquote.save((err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("quote saved" + result)
    }
  })
  let logs = await quotes.find({})
  console.log(logs)
  res.render('x/zen', {logs})
})

router.post('/del/:id', async (req, res) => {
  const id = req.params.id
  await quotes.deleteOne({_id:{$eq:id}})
  let logs = await quotes.find({})
  console.log(logs)
  res.render('x/zen', {logs})
})





module.exports = router;