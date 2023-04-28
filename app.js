import axios from "axios";
async function getData(id){
    const {data:users} = await axios(`https://jsonplaceholder.typicode.com/users/${id}` );
    const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const userInfo = {...users,...post};
    return userInfo;
};

export default getData;
