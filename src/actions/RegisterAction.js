import {fetchs} from '../access/fetchs'

export const RegisterAction=async (user)=>{
    const resp=await fetchs('register', user, 'POST')
    if(resp.ok){
        return true;
    }
    return false
}
