import placeholderImage from "./images/desktop-image-hero.jpg"

export const Slider = () => {
    return (
        <div className="slider-wrapper">
            <ul className="slider">
                <li className="slide">
                    <img src={placeholderImage} alt="" className="slide__image" />
                </li>
            </ul>
        </div>
    )
}