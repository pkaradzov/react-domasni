import { FilmList } from "./components/FilmList.jsx";

export function App(){
  let movies = [
    {name: "The Island", date: 2005, genre: "Sci-Fi Conspiracy Thriller", plot: "Lincoln Six Echo is just like everyone else - he's waiting to go to the Island, the only place left in the world to actually live a life. Thousands of people stay at a facility waiting to go to the Island. It all sounds like paradise, but Lincoln Six Echo soon discovers that there's actually a sinister purpose going on at that facility and that he must escape - but not before stopping the sinister plan.", imdbLink: "https://www.imdb.com/title/tt0399201/", imgUrl: "https://m.media-amazon.com/images/I/71kqy6m-OFL._SY606_.jpg"},
    {name: "The Sheep Detectives", date: 2026, genre: "Animal Adventure", plot: "When their beloved farmer is found dead under mysterious circumstances, a flock of the sheep conclude they will have to solve the murder themselves, even if it means leaving their meadow for the first time and facing the fact that the human world isn't as simple as it appears in books.", imdbLink: "https://www.imdb.com/title/tt32565993/", imgUrl: "https://spotlightreport.net/wp-content/uploads/2025/12/sheep-detectives-696x512.jpg"},
    {name: "Duplex", date: 2003, genre: "Dark Comedy", plot: "A young couple has a chance to move into a gorgeous duplex in the perfect New York neighborhood. All they have to do is bump off the current tenant, a cute little old lady.", imdbLink: "https://www.imdb.com/title/tt0266489/", imgUrl: "https://www.miramax.com/assets/Duplex1.png"},
    {name: "Obsession", date: 2025, genre: "Psychological Horror", plot: "After breaking the mysterious 'One Wish Willow' to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.", imdbLink: "https://www.imdb.com/title/tt37287335/", imgUrl: "https://www.moviesunlimited.com/cdn/shop/files/4511696.jpg"},
    {name: "Him", date: 2025, genre: "Psychological Thriller", plot: "A young athlete descends into a world of terror when he's invited to train with a legendary champion whose charisma curdles into something darker.", imdbLink: "https://www.imdb.com/title/tt20990442/", imgUrl: "https://images.contentstack.io/v3/assets/blt13adb7e2033fcee5/blt54fe3a5f6849f382/69210f6bfe773b73eb07ccf4/HIM_keyart_desktop_2000x3000.jpg"}
    
  ];
  
  return (
    <div>
      <FilmList movies = {movies}/>
    </div>

  )
}