//creating class movie to display movie details
class Movie{
     constructor(title,production,rating='PG'){
        this.title=title;
        this.production=production;
        this.rating=rating;
     }
}
const gorilla = new Movie('gorilla','AM studios')
const casinoRoyale=new Movie('Casino Royale','Eon Productions','PG')
const auto = new Movie('data','Epic Movies','R')
const movies = [gorilla,casinoRoyale,auto]
const pgMovies=[]
function getPG(m){
    for (let i=0;i<m.length;i++){
        if((m[i].rating)=='PG'){
            pgMovies.push(m[i].title)
        }
    }

}getPG(movies)
console.log(pgMovies)