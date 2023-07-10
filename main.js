const user = document.getElementById('user-toggle')
const profile = document.getElementById('profile')

user.addEventListener('click', function() {
 profile.classList.toggle('d-none')
})