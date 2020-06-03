const endPoint = "http://localhost:3000/users"
// fetch("http://localhost:3000/user/create")
//     .then(function(response){
//         return response.json
//     })
//     .then(function(json){
//         console.log(json)      
//     });

let btn = document.getElementById('newAccount')
btn.addEventListener('click', function(){
    let form = document.getElementById('newUser')
    
    if (form.style.display === "none" || form.style.display === ""){
        form.style.display = "block"
    }
    else if (form.style.display === "block"){
        form.style.display = "none"
    }
})