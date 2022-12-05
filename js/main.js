'use strict'

var gQuests
var gCurrQuestIdx = 0
var elMsg = document.querySelector('.msg')
var elRestartBtn = document.querySelector('.restart-btn')


function onInit() {
    gQuests = createQuests()
    gCurrQuestIdx = 0
    elRestartBtn.classList.add('hide')
    renderQuest()
}


function createQuests(){
    return gQuests = [
        {id: 1, opts:['Neon Pothos', 'Golden Pothos'], correctOptIndex:1 },
        {id: 2, opts:['Trebi Pothos', 'Marble Queen Pothos'], correctOptIndex:1 },
        {id: 3, opts:['NJoy Pothos', 'Manjula Pothos',], correctOptIndex:0 },
    ]
}


function renderQuest() {
    var currQuest = gQuests[gCurrQuestIdx]
    var strHTML = ''
    var elImg = document.querySelector('.game img')

    elImg.src = `img/${currQuest.id}.JPG`
    elMsg.innerText = ''

    var elOptions = document.querySelector('.game .options')
    
    for (var i = 0; i < currQuest.opts.length; i++) {
        strHTML += `<button class="options" onclick="checkAnswer(${i})">${currQuest.opts[i]}</button>\n`
    }
    
    elOptions.innerHTML = strHTML
}


function checkAnswer(optIdx) {
    var correctAnswer = gQuests[gCurrQuestIdx].correctOptIndex

    if (optIdx === correctAnswer){

        if (gCurrQuestIdx === gQuests.length - 1){

            const WIN_SOUND = new Audio('sound/win.wav')
            WIN_SOUND.play()
            elMsg.innerText = 'WINNER'
            elRestartBtn.classList.remove('hide')

        } else {
            gCurrQuestIdx++
            renderQuest()
        }
    }
}