import logo from "../assets/images/logo.svg"
import iconHamburger from "../assets/images/icon-hamburger.svg"
import iconClose from "../assets/images/icon-close.svg"

export const Header = () => {
	return (
		// The component is much more complex on mobile hence desktop-first

		<header className="header | absolute left-0 top-0 p-16 grid grid-flow-col max-tablet:grid-cols-2 grid-rows-1 justify-start items-center gap-14 max-tablet:inset-x-0 max-tablet:px-6 max-tablet:py-0 max-tablet:h-28">
			<button className="tablet:hidden row-start-1 row-end-1 col-start-1 col-end-2">
				<img src={iconHamburger} alt="open menu" />
			</button>

			<img
				src={logo}
				alt=""
				className="row-start-1 row-end-1 max-tablet:col-start-1 max-tablet:col-end-3 max-tablet:justify-self-center"
			/>

			<nav className="flex max-tablet:hidden items-center justify-between max-tablet:fixed max-tablet:h-28 max-tablet:px-6 max-tablet:inset-x-0 max-tablet:top-0 max-tablet:bg-white">
				<button className="tablet:hidden">
					<img src={iconClose} alt="close menu" />
				</button>

				<ul className="flex justify-start items-center gap-8">
					<li className="nav__list-item">
						<a href="#0" className="nav__link">
							Home
						</a>
					</li>

					<li className="nav__list-item">
						<a href="#0" className="nav__link">
							Shop
						</a>
					</li>

					<li className="nav__list-item">
						<a href="#0" className="nav__link">
							About
						</a>
					</li>

					<li className="nav__list-item">
						<a href="#0" className="nav__link">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
