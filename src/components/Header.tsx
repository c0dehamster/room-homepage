import logo from "../assets/images/logo.svg"

export const Header = () => {
	return (
		<header className="header">
			<img src={logo} alt="" className="header__logo" />

			<nav className="nav">
				<ul className="nav__list">
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
