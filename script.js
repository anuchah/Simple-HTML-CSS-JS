const textRGB = document.querySelector("#textColor")
let countDown

const randRGB = () => {

    countDown = setInterval(() => {
        let x = Math.floor(Math.random() * 256)   
        let y = Math.floor(Math.random() * 256)   
        let z = Math.floor(Math.random() * 256)   
        let rgbColor = 'rgb(' + [x,y,z].join(',') + ')'
        console.log(rgbColor)
        document.body.style.backgroundColor = rgbColor
        textRGB.innerHTML = rgbColor
    }, 1000)
}

const stopFunc = () => {
    clearInterval(countDown)
}

