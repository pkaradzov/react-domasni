import React from "react";

export const FilmList = ({movies}) => {
    
    return (
        <table border = {1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Genre</th>
                    <th>Plot</th>
                    <th>IMDB Link</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie) => {
                    return (
                        <tr key = {movie.name}>
                            <td>{movie.name}</td>
                            <td>{movie.date}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.plot}</td>
                            <td>{movie.imdbLink}</td>
                            <td><img src = {movie.imgUrl} alt = {movie.imgUrl} width="150px" /></td>
                        </tr>   
                    )
                })}
            </tbody>
        </table>
    )
}