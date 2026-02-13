import database from "../../../../infra/database"

 async function status(req, res) {
  const result = await database.query("select 1+1;")
  console.log(database)

  res.status(200).json({
    
  })
}
 export default status