export const Hero = () => {
	return (
		<section className="hero | col-span-2 desktop:row-start-1 desktop:row-end-3 desktop:col-start-3 desktop:col-end-5 px-8 py-14 grid gap-3">
			<h1 className="text-l desktop:text-xl font-bold leading-9 desktop:leading-[2.75rem] desktop:tracking-tight">
				Discover innovative ways to decorate
			</h1>

			<p className="hero__description text-md font-medium text-dark-grey">
				We provide unmatched quality, comfort, and style for property
				owners across the country. Our experts combine form and function
				in bringing your vision to life. Create a room in your own style
				with our collection and make your property a reflection of you
				and what you love.
			</p>

			<button className="hero__button | group flex justify-start items-center gap-3">
				<span className="pt-1 uppercase tracking-[0.75rem] group-hover:text-very-dark-grey">
					Shop now
				</span>

				<svg
					className="hero__icon | "
					width="40"
					height="12"
					xmlns="http://www.w3.org/2000/svg">
					<path
						className="group-hover:fill-very-dark-grey"
						d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
						fill="#000"
						fill-rule="nonzero"
					/>
				</svg>
			</button>
		</section>
	)
}
