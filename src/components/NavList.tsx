/* The component to insert into either a generic header or motion.div */

export const NavList = () => {
	return (
		<ul className="flex justify-start items-center gap-8 text-white max-tablet:text-black">
			<li className="nav__list-item | relative py-2 ">
				<a
					href="#0"
					className="nav__link | group focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline focus-visible:outline-white"
				>
					<span
						className="absolute left-[50%] right-[50%] bottom-0 h-[0.1rem] bg-white transition-[inset-inline] duration-150 ease-in group-hover:left-0 group-hover:right-0 "
						area-hidden="true"
					></span>
					Home
				</a>
			</li>

			<li className="nav__list-item | relative py-2">
				<a
					href="# 0"
					className="nav__link | group focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline focus-visible:outline-white"
				>
					<span
						className="absolute left-[50%] right-[50%] bottom-0 h-[0.1rem] bg-white transition-[inset-inline] duration-150 ease-in group-hover:left-0 group-hover:right-0 "
						area-hidden="true"
					></span>
					Shop
				</a>
			</li>

			<li className="nav__list-item | relative py-2 ">
				<a
					href="#0"
					className="nav__link | group focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline focus-visible:outline-white"
				>
					<span
						className="absolute left-[50%] right-[50%] bottom-0 h-[0.1rem] bg-white transition-[inset-inline] duration-150 ease-in group-hover:left-0 group-hover:right-0 "
						area-hidden="true"
					></span>
					About
				</a>
			</li>

			<li className="nav__list-item | relative py-2 ">
				<a
					href="#0"
					className="nav__link | group group focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline focus-visible:outline-white"
				>
					<span
						className="absolute left-[50%] right-[50%] bottom-0 h-[0.1rem] bg-white transition-[inset-inline] duration-150 ease-in group-hover:left-0 group-hover:right-0 "
						area-hidden="true"
					></span>
					Contact
				</a>
			</li>
		</ul>
	)
}
