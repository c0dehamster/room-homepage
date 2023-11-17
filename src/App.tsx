import "./App.css"

import { Header } from "./components/Header"
import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Slider } from "./components/Slider"
import { ControlButtons } from "./components/ControlButtons"

const App = () => {
	return (
		<div className="grid grid-cols-layout-mobile desktop:grid-cols-layout-desktop">
			<Header></Header>
			<Slider></Slider>
			<ControlButtons></ControlButtons>
			<Hero></Hero>

			<img
				src="./images/image-about-dark.jpg"
				alt=""
				className="max-desktop:col-span-2"
			/>
			<About></About>
			<img
				src="./images/image-about-light.jpg"
				alt=""
				className="max-desktop:col-span-2"
			/>
		</div>
	)
}

export default App
