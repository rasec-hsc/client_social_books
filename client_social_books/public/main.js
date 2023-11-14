const gitHubId = document.querySelector('input[type=text]')
const btnBuscar = document.querySelector('input[type=button]')


btnBuscar.onclick = function(){

    fetch('https://api.github.com/users/' + gitHubId.value)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else {
            throw new Error('Erro na requisição')
        }
    })
    .then(data => {
        document.querySelector('#name').textContent = data.name
        document.querySelector('#bio').textContent = data.bio
        document.querySelector('#followers').textContent = data.followers
        document.querySelector('#location').textContent = data.location
        document.querySelector('#avatar').src = data.avatar_url

    })
    .catch(error => {
        console.log('Erro: '+ error)
    })
}