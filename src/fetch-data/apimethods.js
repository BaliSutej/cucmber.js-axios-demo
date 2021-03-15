const axios = require('axios');


exports.getMethod = async function(id){
    try{
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }catch(error){
        throw error;
    }
} 


exports.postMethod = async function(body){
    try{
       return axios.post('https://jsonplaceholder.typicode.com/posts',{
           method : 'POST',
           body : JSON.stringify(body),
           headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
       })
    }catch(error){
        throw error;
    }
}

exports.putMethod =async function(body){
    try{
        return axios.put(`https://jsonplaceholder.typicode.com/posts/1`,{
            method : 'PUT',
            body : JSON.stringify(body),
            headers: {
                'Content-type':'application/json; charset=UTF-8',
            },
        })
    }catch(error){
        throw error;
    }
}


exports.deleteMethod = async function(postId){
    try{
        return axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }catch(error){
        throw error;
    }
}

