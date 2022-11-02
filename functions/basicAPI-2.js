const items = require('../assets/data');

exports.handler = async (event,context) => {
    const { id } = event.queryStringParameters;
    if(id){
        let result;
        for (let i= 0 ; i< items.length ; i++){
            if(items[i].id === id){
                result = items[i];
            }
        }    
        return {
            headers:{
                'Access-Control-Allow-Origin' :'*'
            },
            statusCode : 200,
            body: JSON.stringify(result)
        }
    }
    return {
        headers:{
            'Access-Control-Allow-Origin' :'*'
        },
        statusCode : 200,
        body: JSON.stringify(items)
    }
}