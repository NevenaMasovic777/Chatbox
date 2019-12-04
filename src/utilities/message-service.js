
function get_all_messages(){
    return fetch(`https://coetus.herokuapp.com/api/message`)
    .then((response => response.json()),
        error => console.log(error));
}

function get_user_messages(username){
    let res = fetch(`https://coetus.herokuapp.com/api/message`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            username: username
        })
    })
        .then(response => response.json()
            , (error) => {
                console.log(error);
            })
    return res;
}

function add_user_message(username,message) {
    let res = fetch(`https://coetus.herokuapp.com/api/message`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
            username: username,
            message: message
        })
    })
        .then(response => response.json()
            , (error) => {
                console.log(error);
            })
    return res;
} //definisala addToDo funkciju

export{
    get_all_messages,
    get_user_messages,
    add_user_message
}