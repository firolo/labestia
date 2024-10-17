export default function Image(props) {
    return (
        <img className={props.class}
             src={"../img/"+props.urlImg }
             alt="img"       />
    );
}