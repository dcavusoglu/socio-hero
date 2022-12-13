


const getAllData = async (req, res)=> {
  try {
    const data = await todoSchema.find({});
    res.status(200).json({data})
  } catch (err) {
    res.status(500).json({message: err})
  }
}


module.exports = {
  getAllData
}
