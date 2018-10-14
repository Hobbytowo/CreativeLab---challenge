// dynamic changing main article on list item click
const listOfArticles = document.querySelector('.list--articles')
const listItems = document.querySelectorAll('.main__listItem')
const articles = document.querySelectorAll('.main__article')
const imgWrapper = document.querySelector('.main__imgWrapper')

// fn addImage depend on window width
const addImage = (name, right = 0, top = 0) => {
  if (name === 'templates') {
    right = 60
    top = 80
  }

  if (window.innerWidth > 1300) {
    imgWrapper.style.background =
      `url("static/${ name }XL.png") no-repeat ${ right }px ${ top }px`
  } else if (window.innerWidth > 1070) {
    imgWrapper.style.background =
      `url("static/${ name }L.png") no-repeat ${ right }px ${ top }px`
  } else if (window.innerWidth > 515) {
    imgWrapper.style.background =
      `url("static/${ name }M.png") no-repeat ${ right }px ${ top }px`
  } else {
    imgWrapper.style.background =
      `url("static/${ name }S.png") no-repeat ${ right }px ${ top }px`
  }
}

// click event listener
listOfArticles.addEventListener('click', e => {
  const listElement = e.target

  if (listElement.className.includes('listItem--active')) {
    return // if click on active element
  }

  const articleName = listElement.href.split('#')[1]
  const articleToShow = document.querySelector(`.article--${ articleName }`)

  // remove articles active class
  articles.forEach(article => {
    article.classList.remove('article--active')
  })

  // add article active class
  articleToShow.classList.add('article--active')

  // remove list items active class
  listItems.forEach(listItem => {
    listItem.classList.remove('listItem--active')
  })

  // add list items active class
  listElement.classList.add('listItem--active')

  // change article imaage background
  addImage(articleName)
})

// resize event listener
window.addEventListener('resize', () => {
  const activeArticleName = document.querySelector('.listItem--active').href.split('#')[1]

  addImage(activeArticleName)
})
