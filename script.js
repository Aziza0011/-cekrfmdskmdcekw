let btn = document.querySelector('button')
let list = document.querySelector('ol')

btn.addEventListener('click', ()=>{
    let inp =document.querySelector('input').value
    if(inp === ''){
        alert('write something')
    }else{
        let newli= document.createElement('li')
        list.appendChild(newli)
        newli.textContent=inp


        let newspan = document.createElement('span')
        newspan.innerHTML ="\u00d7";
        newli.appendChild(newspan)
    }
    
    
})

let ul = document.querySelector('ol')

ul.addEventListener('click', (e)=> {
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }else if(e.target.tagName === 'LI'){
        newli.style.color = 'red'
       }
})


    

