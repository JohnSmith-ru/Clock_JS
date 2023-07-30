function clock() {
    const hoursArrow = document.querySelector('.hours')
    const minutesArrow = document.querySelector('.minutes')
    const secondsArrow = document.querySelector('.seconds')
    const degries = 6

    setInterval(() => {
        const day = new Date()

        const hours = day.getHours() * 30
        const minutes = day.getMinutes() * degries
        const seconds = day.getSeconds() * degries

        hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
        minutesArrow.style.transform = `rotateZ(${minutes}deg)`
        secondsArrow.style.transform = `rotateZ(${seconds}deg)`
    }, 0)
}

clock()
