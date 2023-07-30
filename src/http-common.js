import axios from "axios"; 

console.log("Hi I am in http-common");

export default axios.create({

    baseURL:"https://public-privacy-8e02de565286.herokuapp.com/",

    headers:{
      "Content-type":"application/json"
    },
    withCredentials:true
    
})


