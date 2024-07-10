// https://rephttps://github.com/maykbrito/fronteditorv2rizo.axiomthemes.com/shop/page/3/

//capturando o elemento
const container = document.getElementById("container")
const baseURLAPI = "https://reprizo.axiomthemes.com/wp-content/uploads/2019/06/product-{id}-copyright-150x150.png"

//editando o html
for(let index = 1; index < 9; index++){
container.innerHTML +=  
`<div class='post-item'>
   <div class='post-feature'>
   <img src='${baseURLAPI.replace("{id}",index )}'/>
 </div>
</div>`
}

//pegar relogios
const relogios = document.getElementsByClassName("post-item")

for(let index=0; index < relogios.length; index++){
  relogios[index].addEventListener('click', ()=> (alert("você clicou no relógio")))
}

