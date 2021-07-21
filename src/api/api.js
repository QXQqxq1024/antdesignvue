import { get,post} from './http'


/* export function curriculum(obj) {
    return get("api/get/news", obj)
} */ 

//新的写法
export const curriculum=(obj)=>get("/api/get/news",obj);

export const apiAddress = obj => post('/api/add', obj);

/* export function add(obj) {
    return post("/api/addgoods",obj);
} */

