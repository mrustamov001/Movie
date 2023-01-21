let heroImg = document.querySelector('.hero__img');
let heroTitle = document.querySelector('.hero__title');
let heroDesc = document.querySelector('.hero__description');
// let btn = document.querySelectorAll('.btn');
let heroWrap = document.querySelector('.hero__wrapper');
let heroBox = document.querySelector('.hero__box');
let hero = document.querySelector('.hero');
// btn.forEach(item => {
//     item.addEventListener('click', function(){
//         get(item.dataset.item);
//     })
// })

// get(item.dataset.item).then(item => {
//     console.log(item);
// })

let arrMove = []
async function get(dataItem){
    let data = await fetch(
        `https://api.themoviedb.org/3/movie/${dataItem}?api_key=c2847ee5ae5ffca9842280e6f3078881&language=en-US&page=1`
    )
    let parseData = await data.json()
    arrMove.push(parseData)
    // console.log(parseData);
    render(parseData.results)
}

get('now_playing')

let count = 0


console.log(arrMove);
let moviesId = document.querySelector('#movies-id')
function render(arr){
    heroWrap.innerHTML = null
    hero.innerHTML = `
        <img class="hero__back" src=http://image.tmdb.org/t/p/w500/${arrMove[0].results[count * 1].backdrop_path}>
        `
        hero__back.setAttribute('style', 'width: 100%; height: 100vh;')
    arr.filter(item => {
        // hero.setAttribute('style' , `background: url('http://image.tmdb.org/t/p/w500/${arrMove[0].results[count * 1].backdrop_path}') no-repeat; background-size: 1920px`)
        heroWrap.innerHTML += `
            <div style="transform: translate(${count * -1250}px)" class="hero__box">
                <div class="hero__img">
                    <img id="movies-id" style="margin-right: 25px; border-radius: 20px;" src="http://image.tmdb.org/t/p/w500/${item.poster_path}" width="400" height="600" alt="">
                </div>
                <div class="hero__inner">
                    <div class="hero__title">
                        <h1 class="hero__text">${item.title}</h1>
                    </div>
                    <div class="hero__description">
                        <p class="hero__texts">${item.overview}</p>
                        <p class="hero__item-lang">Language: ${item.original_language}</p>
                        <p class="hero__item-year">Year: ${item.release_date}</p>
                        <p class="hero__item-population">Population: ${item.popularity}</p>
                    </div>
                </div>
            </div>
                    
        `
        // heroBtn.innerHTML = `<a href=${item.searchMovies} class="hero__btn-link">Play</a>`
    })
}
function carousel(){
    setInterval(() => {
        console.log(moviesId);
        get('now_playing')
        if(count == 19){
            count = -1
        }
        ++count
    }, 5000);
}
carousel()
// heroBox.setAttribute('style' , 'transform: translate(-1250px)')