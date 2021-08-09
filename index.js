let container = document.querySelector('.forClick')
let stamps1 = document.querySelector('.stamp1')
let stamps2 = document.querySelector('.stamp2')
let stamps3 = document.querySelector('.stamp3')
let winStamp = document.querySelector('.kitchen__win')
let failStamp = document.querySelector('.kitchen__fail')
let kitchen = document.querySelector('.kitchen')
let restart = document.querySelector('.final-screen__restart-button')
let finalScreen = document.querySelector('.final-screen')

function containerListener(e) {
	e.stopPropagation()
	let target = e.target
	let number = Math.floor(Math.random() * 3 + 1)
	let targetNumber = target.className.slice(-1)
	let stampsNum = document.querySelector(`.stamp${targetNumber}`)

	if (target.className === 'maindish1') {
		checkForMaindishAnimation(target, stamps1)
		checkNumber()
	} else if (target.className === 'maindish2') {
		checkForMaindishAnimation(target, stamps2)
		checkNumber()
	} else if (target.className === 'maindish3') {
		checkForMaindishAnimation(target, stamps3)
		checkNumber()
	}

	function checkNumber() {
		if (number === 1 || number === 2) {
			winStamp.style.display = 'block'
			winStamp.children[0].classList.add('showElement')
			setTimeout(() => {
				stampsNum.children[number - 1].style.visibility = 'hidden'
				target.classList.remove(`kitchen__maindish_${targetNumber}_animation`)
				winStamp.style.display = 'none'

				kitchen.style.display = 'none'
				finalScreen.style.display = 'block'
			}, 2000)
		} else if (number === 3) {
			failStamp.style.display = 'block'
			failStamp.children[0].classList.add('showElement')
			setTimeout(() => {
				stampsNum.children[number - 1].style.visibility = 'hidden'
				target.classList.remove(`kitchen__maindish_${targetNumber}_animation`)
				failStamp.style.display = 'none'

				kitchen.style.display = 'none'
				finalScreen.style.display = 'block'
			}, 2000)
		}
	}

	function checkForMaindishAnimation(target, stumps) {
		target.classList.add(`kitchen__maindish_${targetNumber}_animation`)
		stumps.children[number - 1].style.visibility = 'visible'
	}
}

container.addEventListener('click', (e) => {
	containerListener(e)
})

restart.addEventListener('click', (e) => {
	finalScreen.style.display = 'none'
	kitchen.style.display = 'block'
})
