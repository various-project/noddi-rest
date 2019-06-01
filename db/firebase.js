import { db } from './firebaseConfig';
import firebase from 'firebase';

export const firebaseDB =  {
  getFoodById(res, id) {
    const barCode = "0".repeat(14 - id.length) + id;
    const refs = db.ref('foods/' + barCode);
    refs.on("value", function(snapshot) {
      res.json(snapshot.val())
    }, function (errorObject) {
      res.json("Nothing found!")
    });
  }
}
