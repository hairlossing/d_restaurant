const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  try {
    return await db.collection('Lodge').where({
      _openid: 'ot8X15dx - dOIceUsxIPM_YPdAM78'
    })
      .update({
        data: {
          anum:1,
          anumber:1
        },
      })
  } catch (e) {
    console.error(e)
  }
}