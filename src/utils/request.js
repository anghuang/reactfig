import 'whatwg-fetch'
import qs from 'qs'
export default function request(url,type,data){
    return fetch(url,{
        method:'POST',
        body:qs.stringify(data)
    }).then((res)=>{
        return res.json();
    }).catch((res)=>{
        console.log(res)
    })
}