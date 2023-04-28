import axios from "axios";
async function getData(id){
    const {data:users} = await axios(`https://jsonplaceholder.typicode.com/users/${id}` );
    const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const userInfo = [...users,...post];
    return userInfo;
};


// const getUsers = (userId) => {
//     return new Promise (async (resolve, reject) =>
//     {const {data} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
//     resolve(data)})
// };
// const getPosts = (userId) => {
//     return new Promise (async(resolve, reject) =>
//     {const {data} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
//     resolve(data)})
// };

// async function getData(number){
//     try { 
//         const users = await getUsers();
//         const posts = await getPosts();
    
//         const Array = [users, posts];
//         return Array;
//     } catch (error) {
//         console.log(error);
//     }
// };

export default getData;

// [https://jsonplaceholder.typicode.com/users/1]
// (https://jsonplaceholder.typicode.com/users/1)

// [https://jsonplaceholder.typicode.com/posts?userId=1]
// (https://jsonplaceholder.typicode.com/posts?userId=1)

// ```
// 	{
// 		id: 1,
// 		name: "Leanne Graham",
// 		username: "Bret",
// 		email: "Sincere@april.biz",
// 		address: {
// 			street: "Kulas Light",
// 			suite: "Apt. 556",
// 			city: "Gwenborough",
// 			zipcode: "92998-3874",
// 			geo: {
// 				lat: "-37.3159",
// 				lng: "81.1496"
// 			}
// 		},
// 		phone: "1-770-736-8031 x56442",
// 		website: "hildegard.org",
// 		company: {
// 			name: "Romaguera-Crona",
// 			catchPhrase: "Multi-layered client-server neural-net",
// 			bs: "harness real-time e-markets"
// 		},
// 		posts: [{
// 			userId: 1,
// 			id: 1,
// 			title: "sunt aut facere repellat",
// 			body: "quia et suscipit suscipit recusandae"
// 		}]
// 	}
// 	```