import {fetchs} from '../access/fetchs'

export const LoginAction=async (user)=>{
    const resp=await fetchs('login', user, 'POST')
    const body=await resp.json()
    if(resp.ok){
        return body;
    }
    return null
}
