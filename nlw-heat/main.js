const LinksSocialMedia = {
  github: 'caiovcpdev',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'mgcaio',
  twitter: '_Caiolindinho'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userIcon.src = data.avatar_url
      userGitHub.href = data.html_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
