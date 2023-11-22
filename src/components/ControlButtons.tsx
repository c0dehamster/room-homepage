import iconAngleLeft from "../assets/images/icon-angle-left.svg"
import iconAngleRight from "../assets/images/icon-angle-right.svg"

export const ControlButtons = () => {
	return (
		<div className="control-buttons | col-start-1 col-end-2 row-start-1 row-end-2 tablet:col-start-2 tablet:col-end-3  desktop:col-start-3 desktop:col-end-4 justify-self-end desktop:justify-self-start self-end grid grid-cols-2">
			<button className="h-14 w-14 desktop:h-20 desktop:w-20 grid place-items-center bg-black hover:bg-very-dark-grey">
				<img src={iconAngleLeft} alt="previous slide" />
			</button>

			<button className="h-14 w-14 desktop:h-20 desktop:w-20 grid place-items-center bg-black hover:bg-very-dark-grey">
				<img src={iconAngleRight} alt="next slide" />
			</button>
		</div>
	)
}
