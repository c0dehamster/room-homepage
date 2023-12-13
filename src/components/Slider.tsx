import { motion } from "framer-motion"

import data from "../assets/data.json"

export const Slider = () => {
	const slides = data.map((item) => {
		return (
			<li className="slide | w-1/3" key={item.id}>
				<picture>
					<source media="(min-width: 30rem)" srcSet={item.imageDesktop} />
					<source media="(max-width: 29.9rem)" srcSet={item.imageMobile} />
					<img src={item.imageDesktop} alt="" className="slide__image | w-full desktop:h-full object-cover" />
				</picture>
			</li>
		)
	})
	return (
		<div className="slider-wrapper | col-start-1 col-end-2 row-start-1 row-end-2 tablet:col-end-3 overflow-hidden">
			<motion.ul
				className="slider | w-[300%] h-full overflow-hidden flex"
				animate={{ x: -100 }}
				transition={{ ease: "easeOut", duration: 0.5 }}
			>
				{slides}
			</motion.ul>
		</div>
	)
}
