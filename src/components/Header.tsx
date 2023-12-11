import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"

import { NavList } from "./NavList"

import logo from "../assets/images/logo.svg"
import iconHamburger from "../assets/images/icon-hamburger.svg"
import iconClose from "../assets/images/icon-close.svg"

export const Header = () => {
	const [expanded, setExpanded] = useState<boolean>(false)

	const handleOpen = () => setExpanded(true)
	const handleClose = () => setExpanded(false)

	return (
		// The component is much more complex on mobile hence desktop-first

		<header className="header | absolute left-0 top-0 p-16 grid grid-flow-col max-tablet:grid-cols-2 grid-rows-1 justify-start items-center gap-14 max-tablet:inset-x-0 max-tablet:px-6 max-tablet:py-0 max-tablet:h-28">
			<button className="tablet:hidden w-fit row-start-1 row-end-1 col-start-1 col-end-2" onClick={handleOpen}>
				<img src={iconHamburger} alt="open menu" />
			</button>

			<img
				src={logo}
				alt=""
				className="row-start-1 row-end-1 max-tablet:col-start-1 max-tablet:col-end-3 max-tablet:justify-self-center"
			/>

			<nav className="hidden tablet:flex items-center justify-between">
				<button className="tablet:hidden" onClick={handleClose}>
					<img src={iconClose} alt="close menu" />
				</button>

				<NavList></NavList>
			</nav>

			<AnimatePresence>
				{expanded && (
					<motion.nav
						animate={{ clipPath: "circle(130% at 2.15rem 50%)" }}
						transition={{ duration: 0.3, easing: "easeOut" }}
						initial={{ clipPath: "circle(0rem at 2.15rem 50%)" }}
						exit={{ clipPath: "circle(0rem at 2.15rem 50%)" }}
						className="flex tablet:hidden items-center justify-between fixed h-28 px-6 inset-x-0 top-0 bg-white"
					>
						<button>
							<img src={iconClose} alt="close menu" onClick={handleClose} />
						</button>

						<NavList></NavList>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	)
}
