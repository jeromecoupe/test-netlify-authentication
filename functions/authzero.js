exports.handler = async (event) => {
  const action = event.queryStringParameters.action;

  // Log in using Auth0
  if (action === "login") {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `You tried to: ${action}` }),
    };
  } else {
    return {
      statusCode: 302,
      body: JSON.stringify({ message: `ERROR` }),
    };
  }
};
