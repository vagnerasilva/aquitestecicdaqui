module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello cicd " 
        };
    }
    else {
        context.res = {
            status: 200,
            body: "Hello cicd integration teste v 1.0 " 
        };
    }
    context.done();
};