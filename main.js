let articles = document.querySelectorAll('article')

let sum = () => {
    let sum = 0;
    document.querySelectorAll('.money').forEach(x => sum += parseInt(x.innerHTML))
    document.querySelector('#price').innerHTML = sum
}

sum()

for(let i = 0; i < articles.length; i++){
    articles[i].children[2].addEventListener('change', ()=>{
        let qnt = parseInt(articles[i].children[2].value)
        articles[i].children[3].children[0].innerHTML = qnt * 100
        sum()
    })

    articles[i].children[4].addEventListener('click', e =>{
        e.target.parentElement.remove()
        sum()
    })
}