import { useState } from "react"

import "./App.css"

import { Header } from "./components/Header"
import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Slider } from "./components/Slider"
import { ControlButtons } from "./components/ControlButtons"

/* Note: I did not found a decent layout for tablet */

const App = () => {
	const [slideIndex, setSlideIndex] = useState(0)

	const handleNext = () => slideIndex < 2 && setSlideIndex(slideIndex + 1)
	const handlePrevious = () => slideIndex > 0 && setSlideIndex(slideIndex - 1)

	return (
		<div className="font-league-spartan grid grid-cols-1 tablet:grid-cols-layout-tablet desktop:grid-cols-layout-desktop">
			<Header></Header>
			<Slider {...{ slideIndex }}></Slider>
			<ControlButtons {...{ handleNext, handlePrevious }}></ControlButtons>
			<Hero></Hero>

			<div className="grid place-items-center overflow-hidden">
				<img src="./images/image-about-dark.jpg" alt="" className="w-full desktop:h-full object-cover" />
			</div>

			<About></About>

			<div className="grid place-items-center overflow-hidden tablet:max-desktop:col-start-2 tablet:max-desktop:row-start-3">
				<img src="./images/image-about-light.jpg" alt="" className="w-full desktop:h-full object-cover" />
			</div>
		</div>
	)
}

export default App
