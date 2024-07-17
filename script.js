let btn = document.querySelector('button')
let list = document.querySelector('ol')

btn.addEventListener('click', ()=>{
    let inp =document.querySelector('input').value

    let newli= document.createElement('li')
    list.appendChild(newli)
    newli.textContent=inp
    const btn = () => { alert("Hello, World!"); };
})



