const scrollPourcentage = () => {
    const sectionInfo = document.querySelector('.info__profil');
    if (scrollY >= sectionInfo.offsetTop) {
        const sectionHeight = sectionInfo.offsetHeight
        const calcHeight = scrollY - sectionInfo.offsetTop
        const percentage = calcHeight * 100 / sectionHeight
        const borderService = document.querySelector('.service__one')

        borderService.style.width = `${percentage + 5}%`

        const service = document.querySelector('.service')
        service.style.transform = `rotate(${percentage * 5}deg)`
        // borderService.style.background = `conic-gradient(blue ${percentage}%, green ${percentage}%)`
    }
}




window.addEventListener('scroll', () => scrollPourcentage())