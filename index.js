const api_url=  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0e390991a9cde474bc4ea22525c9280a&page=1'

const img_path= "https://image.tmdb.org/t/p/w1280"
const search_url= 'https://api.themoviedb.org/3/search/movie?api_key=0e390991a9cde474bc4ea22525c9280a&query="'
const form = document.getElementById("form")
const search = document.getElementById("search")
const main= document.getElementById("main")

getMovies(api_url)

async function  getMovies(url){
    const res =await fetch(url)
    const data =await res.json()
    showMovies(data.results)
}
function showMovies(movies){
    main.innerHTML = ""
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview}=movie

      const movieEl = document.createElement("div")
      movieEl.classList.add("movie")
      movieEl.innerHTML= 
      
      
      `
         <img src= "${img_path + poster_path}" alt="${title}">
         <div class="movie__info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
         <div class="over-view">
            <h3>${overview}</h3>
             

        </div>

     `
     main.appendChild(movieEl)
        
    });;
}
function getClassByRate(vote){
    if(vote>=8){
        return "green"
    }
    else if (vote>=5){
        return "orange"
    }
    
        else{
            return "red"
        }
    }

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const searchTerm= search.value
    if(searchTerm&&searchTerm!==""){
        getMovies(search_url+searchTerm)
        search.value=""
    }
    else{
        window.location.reload
    }
})



