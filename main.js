import './style.css'

/* document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
` */

const ratingStars = [...document.getElementsByClassName('rating__star')]
const ratingValue = document.querySelector('#rating-value')

function executeRating(stars) {
  const starClassActive = 'rating__star fas fa-star'
  const starClassInactive = 'rating__star far fa-star'
  const starsLength = stars.length
  let i
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star)
      ratingValue.innerHTML = i+1
      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive
      }
    }
  })
}
executeRating(ratingStars)

const btn = document.querySelector('button')
const post = document.querySelector('.post')
const widget = document.querySelector('.star-widget')
const addReview = document.querySelector('.add-review')
const editBtn = document.querySelector('.edit')
btn.onclick = () => {
  widget.style.display = 'none'
  addReview.style.display = 'block'
  post.style.display = 'block'
  editBtn.onclick = () => {
    widget.style.display = 'block'
    post.style.display = 'none'
  }
  return false
}
