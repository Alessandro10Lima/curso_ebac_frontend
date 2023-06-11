document.addEventListener('DOMContentLoaded', function(){
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const picture = document.querySelector('#picture');
    const repository = document.querySelector('#repository');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');
    
    fetch('https://api.github.com/users/Alessandro10Lima')
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            name.innerText = json.name;
            username.innerText = json.login;
            picture.src = json.avatar_url;
            repository.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
    })
})