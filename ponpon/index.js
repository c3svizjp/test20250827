module.exports = async function (context, req) {
    console.log('hello!!');
    context.res = {
        status: 200,
        body: "こんにちはぽんた!Azure Functionsが元気に動いてるよ"
    };
};