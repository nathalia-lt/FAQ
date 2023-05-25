// Traversing the DOM method

//variables

//aqui eu estou selecionando todos os botoes, assim tendo um NodeList.
//se eu tentar adicionar um eventListener sozinho nessa variavel nao iria conseguir.
//por isso tenho que interagir through ela, atravez do forEach.
//E assim pegar um botao de cada vez.
const plusIcon = document.querySelector('.plus-icon');
const minusIcon = document.querySelector('.minus-icon');
const questionsText = document.querySelectorAll('.question')


// If you want to add event listener to all the elements, 
//then you will need to loop through them. Eu quero esse evento em todos os botoes

questionsText.forEach((question) => {
    //eu tenho que chegar no botao que esta dentro do meu article
    //after i go through article that has a class question
    //I have to go through the button in that article.
    const btns = question.querySelectorAll('.question-btn')
    btns.forEach(btn => {
        console.log(btn)
        btn.addEventListener('click', (e) =>{
            btn.style.display
            console.log('event', e)
        })
    })

})







// questionsText.forEach((question) => {
//     console.log(question)
//     question.classList.add('showText')
//     btns.addEventListener('click', (btn) => {

//     })
// })






// questionsText.forEach((question) => {
//     const questionItem = question.innerHTML
//     //console.log(questionItem)
//     btns.forEach((btn) => {
//         btn.addEventListener('click', (e) => {
//             console.log('event', e)
//         })
//     })
// })










