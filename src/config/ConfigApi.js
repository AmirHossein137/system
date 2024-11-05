
const ApiClient = async (address , method , data) => {
  await fetch(`http://45.149.79.242:8046/${address}` , {
    method : method,
    body : JSON.stringify(data),
    headers : {

    }
  })
}

export default ApiClient;
