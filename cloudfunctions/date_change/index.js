// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  try {
    return await db.collection('user_book').where({
      date:2
    })
      .update({
        data: {
          date:1
        },
      })
  } catch (e) {
    console.error(e)
  }
}