let bilder = document.getElementsByClassName('image_swap')
let ha = document.getElementsByClassName('produktBeschreibung')
let preis = document.getElementsByClassName('prices')
let produktTxt = document.getElementsByClassName('produktText')


fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(shop => { 
    let o = 0

    for(let i = 0; i < bilder.length; i++){
        if(o == shop.length){
            o = 0
            i--
        }else{
            bilder[i].src = shop[o].image
            ha[i].innerHTML = `${shop[o].title}`
            preis[i].innerHTML = `${shop[o].price} €`
            produktTxt[i].innerHTML = `${shop[o].description}`
            o++
        }
    }
})


