import iterator from '../assets/hash-map-iterator.png'
import sql from '../assets/customer-churn-analysis.png'
import chess from '../assets/python-chess-game.png'
import surf from '../assets/surfing-santa-cruz.jpg'
import camp from "../assets/backpacking-sespe.jpg"

function GalleryPage(){
    const images=[iterator, sql, chess, surf, camp]
    return(
        <>
            <h2>Gallery</h2>
            <p>These projects are some example programs from my computer science courses and some of my hobbies.</p>

                <article className="gallery">
                    {
                        images.map((image) =>
                        <figure>
                            <img src={image} alt="" title="" />
                        </figure>
                        )
                    }
                </article>
        </>
    )
}

export default GalleryPage;