const result = document.getElementById('randomWord')
const inputEl = document.getElementById('user-word')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')
const userName = document.getElementById('user-name')
const game = document.querySelector('.game')

// Input focus
inputEl.focus()

let randomWord
let userScore = 0
let userTime = 10

const changeWord = () => {
    let wordsResult = Math.floor(Math.random() * words.length)
    randomWord = words[wordsResult];
    result.textContent = randomWord
}
changeWord()



inputEl.addEventListener("input" , () => {
    const userWord = inputEl.value
    if(userWord == randomWord){
        changeWord()
        userScore++
        userTime += 3
        scoreEl.textContent = userScore
        inputEl.value = ''
    }
})

const gameOver = document.querySelector('.game-over-modal')
const point = document.getElementById('point')
const timeInterval = setInterval(() => {
    if(userTime > 0){
        userTime--
        timeEl.textContent = userTime
    }else{
        clearInterval(timeInterval)
        gameOver.style.transform = 'translateY(0)'
        point.textContent = userScore
    }
}, 1000)
