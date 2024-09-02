const text = 'WELCOME.'
const fahrelDiv = document.querySelector('.fahrel')

function animateText(text, container) {
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span')
    span.textContent = text[i]
    container.appendChild(span)
  }

  const spans = container.querySelectorAll('span')
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.classList.add('visible')
    }, 200 * index)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  animateText(text, fahrelDiv)
})

function handleIntersection(
  entries,
  observer,
  animationClass,
  isOutClass = false
) {
  entries.forEach((entry) => {
    const shouldAddClass = isOutClass
      ? !entry.isIntersecting
      : entry.isIntersecting
    if (shouldAddClass) {
      entry.target.classList.add(animationClass)
    } else if (isOutClass) {
      entry.target.classList.remove(animationClass)
    }
  })
}

const observerOptions = {
  rootMargin: '-50px 0px',
  threshold: 0.8,
}

const textICreate = document.querySelector('.text-i-create')
const textObserver = new IntersectionObserver((entries) => {
  handleIntersection(entries, textObserver, 'animate-pop')
}, observerOptions)
textObserver.observe(textICreate)

const elementsA = document.querySelectorAll('.a1, .a2, .a3')
const elementsObserver = new IntersectionObserver((entries) => {
  handleIntersection(entries, elementsObserver, 'show')
}, observerOptions)
elementsA.forEach((element) => elementsObserver.observe(element))

const iSaidCircleDivs = document.querySelectorAll(
  '#i-said .i-said-circle div:nth-child(1), #i-said .i-said-circle div:nth-child(3)'
)
const circleDivsObserver = new IntersectionObserver((entries) => {
  handleIntersection(entries, circleDivsObserver, 'out', true)
}, observerOptions)

iSaidCircleDivs.forEach((div) => circleDivsObserver.observe(div))

const firstSecondP = document.querySelectorAll('.text-para');

const firstPObserver = new IntersectionObserver((entries) => {
  handleIntersection(entries, firstPObserver, 'show');
}, observerOptions);

firstSecondP.forEach((firstSecP) => firstPObserver.observe(firstSecP))

const theStep = document.querySelectorAll('.the-step');
const theStepObserver = new IntersectionObserver((entries) => {
  handleIntersection(entries, theStepObserver, 'show');
}, observerOptions);

theStep.forEach((thestep) => theStepObserver.observe(thestep))


const projectFeatured = document.querySelectorAll('.title-for-, .title-project, .components-project, .button-project, .image');
const projectFObserver = new IntersectionObserver((entries) => {
  handleIntersection(entries, projectFObserver, 'show');
}, observerOptions);

projectFeatured.forEach((projectF) => projectFObserver.observe(projectF))



for (let i = 1; i <= 3; i++) {
  const a = document.querySelector(`.a${i}`)
  const clickExpand = document.querySelector(`.clickExpand${i}`)
  const clickExpandDiv = document.querySelector(
    `.clickExpand${i} div:nth-child(1)`
  )

  clickExpand.addEventListener('click', () => {
    for (let j = 1; j <= 3; j++) {
      if (j !== i) {
        const otherA = document.querySelector(`.a${j}`)
        const otherClickExpandDiv = document.querySelector(
          `.clickExpand${j} div:nth-child(1)`
        )
        otherA.classList.remove('expanded')
        otherClickExpandDiv.classList.remove('expanded')
      }
    }

    a.classList.toggle('expanded')
    clickExpandDiv.classList.toggle('expanded')
  })
}
