const APIURL = 'https://api.github.com/users/'
const main = document.getElementById('main')
const search = document.getElementById('search')
const form = document.getElementById('form')

async function getUser(username) {
    try {
        const {data} = await axios(APIURL + username)
        createUserCard(data);
        getRepos(username)
    }
    catch(error) {
        if(error.response.status == 404) {
            createErrorCard('No profile with this user name')
        }
    }
}


async function getRepos(username) {
    try {
        const {data} = await axios(APIURL + username + '/repos?sort=created')
        addReposToCard(data);
    }
    catch(error) {
        createErrorCard('Problem fetching repos')
    }
}

function createUserCard(user) {
    const cardHtml = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>

    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repo</strong></li>
        </ul>
        <div id="repos">
        </div>
    </div>
</div> `
main.innerHTML = cardHtml
}

function createErrorCard(msg) {
    const cardHtml = `
    <div class = "card">
        <h1>${msg}</h1>
    </div>
    `
    main.innerHTML = cardHtml
}

function addReposToCard(repos) {
    const reposE1 = document.getElementById('repos')
    repos
         .slice(0,5)
         .forEach(repo => {
            const repoE1 = document.createElement('a')
            repoE1.classList.add('repo')
            repoE1.href = repo.html_url
            repoE1.target = '_blank'
            repoE1.innerText = repo.name

            reposE1.appendChild(repoE1)
         });
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const user = search.value 

    if(user) {
        getUser(user)
        search.value = ''
    }
})