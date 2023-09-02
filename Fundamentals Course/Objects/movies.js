function movies(data) {
    let movies = [];
    data.forEach(element => {
        if (element.includes("addMovie")) {
            let name = element.split("addMovie ")[1];
            movies.push({ name })

        }
        else if (element.includes("directedBy")) {
            let [name, director] = element.split(" directedBy ")

            let movie = movies.find(m => m.name === name);


            if (movie) {
                movie.director = director
            }


        }

        else if (element.includes("onDate")) {
            let [name, date] = element.split(" onDate ")

            let movie = movies.find(m => m.name === name);

            if (movie) {
                movie.date = date;
            }


        }
    });

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }

    });
}


movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)