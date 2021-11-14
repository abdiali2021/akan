const form = document.querySelector('.form')

const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
]
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const akanName = document.querySelector('.akanName')

    const birthdate = document.querySelector('.dateOfBirth').value
    const day = new Date(birthdate).getDay()

    if (day) {
        if (document.getElementById('male')) {
            akanName.textContent = `Your Akan name is ${maleNames[day]}`
        }
        if (document.getElementById('female')) {
            akanName.textContent = `Your Akan name is ${femaleNames[day]}`
        }
    }
})