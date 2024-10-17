import Image from "./Image"
export default function Carousel(props) {
    return (
        <div>
            {props.listImages.map( e => (<Image class="imgArticle" urlImg={e}/>))}
        </div>
        
    )
}