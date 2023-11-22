import { useState } from "react"

import logo from "../assets/images/logo.svg"
import iconHamburger from "../assets/images/icon-hamburger.svg"
import iconClose from "../assets/images/icon-close.svg"

export const Header = () => {
	const [expanded, setExpanded] = useState<boolean>(false)

	const handleOpen = () => setExpanded(true)
	const handleClose = () => setExpanded(false)
	const displayClass = expanded ? "flex" : "hidden"

	return (
		// The component is much more complex on mobile hence desktop-first

		<header className="header | absolute left-0 top-0 p-16 grid grid-flow-col max-tablet:grid-cols-2 grid-rows-1 justify-start items-center gap-14 max-tablet:inset-x-0 max-tablet:px-6 max-tablet:py-0 max-tablet:h-28">
			<button
				className="tablet:hidden w-fit row-start-1 row-end-1 col-start-1 col-end-2"
				onClick={handleOpen}>
				<img src={iconHamburger} alt="open menu" />
			</button>

			<img
				src={logo}
				alt=""
				className="row-start-1 row-end-1 max-tablet:col-start-1 max-tablet:col-end-3 max-tablet:justify-self-center"
			/>

			<nav
				className={`${displayClass} tablet:flex items-center justify-between max-tablet:fixed max-tablet:h-28 max-tablet:px-6 max-tablet:inset-x-0 max-tablet:top-0 max-tablet:bg-white`}>
				<button className="tablet:hidden" onClick={handleClose}>
					<img src={iconClose} alt="close menu" />
				</button>

				<ul className="flex justify-start items-center gap-8 text-white max-tablet:text-black">
					<li className="nav__list-item | relative py-2 ">
						<a
							href="#0"
							className="nav__link | group group focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline focus-visible:outline-white">
							<span
								className="absolute left-[50%] right-[50%] bottom-0 h-[0.1rem] bg-white transition-[inset-inline] duration-150 ease-in group-hover:left-0 group-hover:right-0 "
								area-hidden="true"></span>
							Home
						</a>
					</li>

					<li className="nav__list-item | relative py-2">
						<a
							href="# 0"
							className="nav__link | group focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline focus-visible:outline-white">
							<span
								className="absolute left-[50%] right-[50%] bottom-0 h-[0.1rem] bg-white transition-[inset-inline] duration-150 ease-in group-hover:left-0 group-hover:right-0 "
								area-hidden="true"></span>
							Shop
						</a>
					</li>

					<li className="nav__list-item | relative py-2 ">
						<a
							href="#0"
							className="nav__link | group focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline focus-visible:outline-white">
							<span
								className="absolute left-[50%] right-[50%] bottom-0 h-[0.1rem] bg-white transition-[inset-inline] duration-150 ease-in group-hover:left-0 group-hover:right-0 "
								area-hidden="true"></span>
							About
						</a>
					</li>

					<li className="nav__list-item | relative py-2 ">
						<a
							href="#0"
							className="nav__link | group group focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline focus-visible:outline-white">
							<span
								className="absolute left-[50%] right-[50%] bottom-0 h-[0.1rem] bg-white transition-[inset-inline] duration-150 ease-in group-hover:left-0 group-hover:right-0 "
								area-hidden="true"></span>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
