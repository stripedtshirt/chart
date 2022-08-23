function getPrices(){
    fetch('data.json')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
      amount.textContent = data[i].amount
    })
}

function Dropdown(element, div ) {
    this.element = element;
    this.div = div

    div.style.visibility = "hidden";

    element.addEventListener("click", function() {

        if(div.style.visibility == "hidden") {
            div.style.visibility = "visible"
        }else{
            div.style.visibility = "hidden"
        }
    });
}

function Hover(element) {
    this.element = element;
    
    element.addEventListener("mouseover", function(){
        element.style.backgroundColor = "rgb(255, 155, 135)"
            
    })
    element.addEventListener("mouseout", function(){
        element.style.backgroundColor = "rgb(236, 117, 93)"
            
    })
}

function HoverBar3(element) {
    this.element = element;
    
    element.addEventListener("mouseover", function(){
        element.style.backgroundColor = "rgb(180, 223, 229)"
            
    })
    element.addEventListener("mouseout", function(){
        element.style.backgroundColor = "rgb(118, 181, 188)"
    })
}

for(let i = 1; i < 8; i++){
    let barContainer = document.querySelector(`.bar-container${i}`)
    let amount = document.querySelector(`.a${i}`)
    let bar = document.querySelector(`.b${i}`)
    let bar3 = document.querySelector(`.b3`)

    Dropdown(barContainer, amount)
    Hover(bar)
    HoverBar3(bar3)

    fetch('data.json')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
      amount.textContent = "$" + data[i - 1].amount
    })
    
}


