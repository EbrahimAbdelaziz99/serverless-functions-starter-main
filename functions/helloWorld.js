exports.handler = async (event,context) => {
    return {
        headers:{
            'Access-Control-Allow-Origin' :'*'
        },
        statusCode : 200,
        body: 'Our First Netlify Function Example'
    }
}