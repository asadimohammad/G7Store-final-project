import axios from "axios";

export let httpRequest = axios.create({
    baseURL: 'https://wins-api-v2.liara.run/api',
    headers: {
        'access-control-allow-origin' : '*'
    }
})

httpRequest.interceptors.request.use((req => {
    let token = localStorage.getItem('tkn_ACCESSUSER')
    try{
        req.headers = {
            'Authorization' : 'Bearer ' + token ,
            
        
        }
        return req
    }catch(err) {
        return err
    }
}))

httpRequest.interceptors.response.use((res => {
   res => res ,
   async err => {
    if(err.response.status === 404) {
        window.location.href = '/'
    }
   }
   return Promise.reject(err)
}))
