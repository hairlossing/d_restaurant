const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  try {
    return await db.collection('user_book').where({
      _id: event.id
    })
      .update({
        data: {
          seat_number:event.num + 1,
        },
      })
  } catch (e) {
    console.error(e)
  }
}