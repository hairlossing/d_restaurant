const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  try {
    return await db.collection('Lodge').where({
      _id: "peoplenum"
    })
      .update({
        data: {
          cnum: event.a,
          cnumber: event.b,
        },
      })
  } catch (e) {
    console.error(e)
  }
}