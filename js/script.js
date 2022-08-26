let btns = document.querySelectorAll('.btn')
let submitBtn = document.querySelector('.submit-btn')
let score = document.querySelector('.score')
let survey
btns.forEach(e => {
    e.addEventListener('click', () => {
    for(let btn of btns ){
        btn.classList.remove('active')
    }
    e.classList.add('active')
    survey = e.textContent;
})
})
submitBtn.addEventListener('click' ,()=> {
    score.textContent = `You selected ${survey} out of 5`  
    document.querySelector('.thankyou-container').style.visibility = 'visible'
    document.querySelector('.container').style.visibility = 'hidden'
}
)