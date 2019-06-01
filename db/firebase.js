import db from './firebaseConfig';



export const firebaseDB =  {
  getFoodById(res, id) {
    return(
      res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
      })
    )
  }
}
