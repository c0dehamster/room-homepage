import iconAngleLeft from "../assets/images/icon-angle-left.svg"
import iconAngleRight from "../assets/images/icon-angle-right.svg"

export const ControlButtons = () => {
	return (
		<div className="control-buttons | row-start-2 row-end-3 col-start-2 col-end-3 desktop:row-start-2 desktop:col-start-3 desktop:col-end-4 grid grid-cols-2">
			<button className="h-14 w-14 grid place-items-center bg-black hover:bg-very-dark-grey">
				<img src={iconAngleLeft} alt="previous slide" />
			</button>

			<button className="h-14 w-14 grid place-items-center bg-black hover:bg-very-dark-grey">
				<img src={iconAngleRight} alt="next slide" />
			</button>
		</div>
	)
}
