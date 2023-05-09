function newImage(link, leftSize, bottomSize) {
let object = document.createElement('img')
object.src = link
object.style.position = 'fixed'
object.style.left = leftSize + 'px'
object.style.bottom = bottomSize + 'px'
document.body.append(object)
return object
}

function newItem(link, leftSize, bottomSize){
    let object = newImage(link, leftSize, bottomSize)

object.addEventListener('dblclick', function(){
    object.remove()
})
}

function tile(link, leftSize, bottomSize, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(link, leftSize + w*100, bottomSize+h*100)
        }
    }
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)


