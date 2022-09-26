let el = document.querySelector('.target')

let isDragging = false
let firstCoordinates = {
	mouse: { x: 0, y: 0 },
  element: { x: 0, y: 0 }
}

el.onmousedown = mouseDown

document.onmouseup = () => {
	isDragging = false
  el.classList.remove('selected')
}

window.onmousemove = e => {
	if (isDragging) {
  let fixedX = firstCoordinates.element.x + e.clientX - firstCoordinates.mouse.x
  let fixedY = firstCoordinates.element.y + e.clientY - firstCoordinates.mouse.y
  
	el.style.top = `${Math.max(0, Math.min(window.innerHeight - 200, fixedY))}px`
  el.style.left = `${Math.max(0, Math.min(window.innerWidth - 200, fixedX))}px`
  }
}

function getComputed (el, prop) {
	return window.getComputedStyle(el).getPropertyValue(prop)
}

function mouseDown ({target, clientX: x, clientY: y}) {
  el.classList.add('selected')

  let currX = parseInt(getComputed(el, 'left'))
  let currY = parseInt(getComputed(el, 'top'))

	isDragging = true
  firstCoordinates.mouse = { x, y }
  firstCoordinates.element = { x: currX, y: currY }
}
