// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {

  console.log(event.body || event.queryStringParameters.body)

  try {
    const subject = event.queryStringParameters.body || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}!` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
