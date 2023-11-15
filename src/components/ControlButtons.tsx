import iconAngleLeft from "../assets/images/icon-angle-left.svg"
import iconAngleRight from "../assets/images/icon-angle-right.svg"

export const ControlButtons = () => {
	return (
		<div>
			<button>
				<img src={iconAngleLeft} alt="previous slide" />
			</button>

			<button>
				<img src={iconAngleRight} alt="next slide" />
			</button>
		</div>
	)
}
