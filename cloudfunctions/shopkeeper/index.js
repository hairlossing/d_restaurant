const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  const openid = event.openid
  const formid = event.formid
  try {
    const result = await cloud.openapi.templateMessage.send({
      touser: openid,
      //page: 'index',
      data: {
        keyword1: {
          value: event.name
        },
        keyword2: {
          value: event.number
        },
        keyword3: {
          value: event.minute
        },
        keyword4: {
          value: event.num
        },
        keyword5: {
          value: event.tips
        }
      },
      templateId: 'in76sbPrtRSw8SvTR3ShtKv0YG_U4Kj7ponVmgipqfM',
      formId: formid,
      // emphasisKeyword: 'keyword1.DATA'
    })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}