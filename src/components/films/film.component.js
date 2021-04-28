import './film.component.css'

function FilmComponent(props) {
    return <div>
        <h2>{props.name}</h2>
        <p>({props.year})</p>
        <img src={props.img} alt={props.name}/>
        <p><b>Director:</b> {props.director}</p>
        <p><b>Stars:</b> {props.stars}</p>

    </div>
}

export default FilmComponent;