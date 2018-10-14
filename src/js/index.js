// dynamic changing main article on list item click

const listOfArticles = document.querySelector('.list--articles')
const listItems = document.querySelectorAll('.main__listItem')
const articles = document.querySelectorAll('.main__article')

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
})
