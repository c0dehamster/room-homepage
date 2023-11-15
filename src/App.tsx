import "./App.css"

import { Header } from "./components/Header"
import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Slider } from "./components/Slider"
import { ControlButtons } from "./components/ControlButtons"

import imageAboutDark from "./images/image-about-dark.jpg"
import imageAboutLight from "./images/image-about-light.jpg"

const App = () => {
	return (
		<div>
			<Header></Header>
			<Slider></Slider>
			<ControlButtons></ControlButtons>
			<Hero></Hero>
			<img src={imageAboutDark} alt="" />
			<About></About>
			<img src={imageAboutLight} alt="" />
		</div>
	)
}

export default App
