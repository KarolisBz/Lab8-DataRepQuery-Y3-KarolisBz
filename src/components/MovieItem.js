// Component imports
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'; // navigate to a new route without refreshing the page

// MovieItem gets "props" data which contains 1 movie data 
// from parent Movies
const MovieItem = (props) => {
    // hooks event, logs props to the console whenever the component mounts or updates
    useEffect(() => {
        console.log("Movies:", props.myMovies);
    }, [props.myMovies]); // added dependacy arary as myMobies so it only runs if myMovies changes

    return (
        <div>
            <Card>
                {/*Creating Movie Image Card with bootstrap*/}
                <Card.Header>{props.mymovie.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.mymovie.poster} alt={props.mymovie.title} />
                        <footer>{props.mymovie.year}</footer>
                    </blockquote>
                </Card.Body>
                {/* Links user to page for movie via their passed movie ID and path*/}
                <Link to={"/edit/" + props.mymovie._id} className="btn btn-primary">Edit</Link>
            </Card>
        </div>
    );
}

// exporting module to be used in app.js
export default MovieItem;
