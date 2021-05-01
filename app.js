const lightBox = document.createElement('div');
lightBox.id = 'lightBox';
document.body.append(lightBox)

const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', e => {
        lightBox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while(lightBox.firstChild) {
            lightBox.removeChild(lightBox.firstChild)
        }
        lightBox.append(img)
    })
})

lightBox.addEventListener('click', e => {
    lightBox.classList.remove('active')
})