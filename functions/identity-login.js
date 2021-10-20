exports.handler = function (event, context, callback) {
  const responseBody = {
    app_metadata: {
      roles: ["admin"],
    },
  };
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  });
};
