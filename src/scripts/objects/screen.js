const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                            <br>
                                            <p>👥Seguidores: ${user.followers || 'Não possui seguidores 😢'}</p>
                                            <p>👤Seguindo: ${user.following || 'Não segue outras pessoas 😢'}</p>
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
                                                                <div class="repositories-stats">
                                                                <p>🍴 ${repo.forks}</p>
                                                                <p>⭐ ${repo.stargazers_count}</p>
                                                                <p>👀 ${repo.watchers}</p>
                                                                <p>👨‍💻 ${repo.language ?? ''}</p>
                                                                </div>
                                                                </a></li>`)

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>
            </div>`
        }

        let eventsItens = ''
        user.events.forEach(event => {
            
            if(event.type === 'CreateEvent' || event.type === 'PushEvent'){
                if(event.payload.hasOwnProperty('commits')){
                    eventsItens += `<li><span>${event.repo.name}</span>  - ${event.payload.commits[0].message}</li>`
            }}
        })

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events">
                                                <h2>Últimas ações</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }