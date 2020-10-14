import axios from 'axios';

class api {

    getuserdata() {
        return axios.get('https://jsonplaceholder.typicode.com/users');
    }

    getpostdata() {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    }

    getcommentdata(id) {
        return axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id);
    }

    getdeletepost(id) {
        return axios.delete('https://jsonplaceholder.typicode.com/posts/' + id);
    }

    addcommentpost(clickpost) {
        console.log("clickpost===>", clickpost);
        return axios.post('https://jsonplaceholder.typicode.com/comments?postId=' + clickpost.userId, clickpost);
    }

    submitpost(submitpostdata) {
        console.log("clickpost===>", submitpostdata);
        return axios.post('https://jsonplaceholder.typicode.com/posts', submitpostdata);
    }
}
export default new api();