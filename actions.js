/** Example fetchData
 * @id
 * */
export const fetchData = id => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(id)
        },300)
    })
}