import "./App.css"

import { Header } from "./components/Header"
import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Slider } from "./components/Slider"
import { ControlButtons } from "./components/ControlButtons"

/* Note: I did not found a decent layout for tablet */

const App = () => {
	return (
		<div className="font-league-spartan grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-layout-desktop">
			<Header></Header>
			<Slider></Slider>
			<ControlButtons></ControlButtons>
			<Hero></Hero>

			<img
				src="./images/image-about-dark.jpg"
				alt=""
				className="max-w-full"
			/>

			<About></About>

			<img
				src="./images/image-about-light.jpg"
				alt=""
				className="max-w-full tablet:max-desktop:col-start-2 tablet:max-desktop:row-start-4"
			/>
		</div>
	)
}

export default App
