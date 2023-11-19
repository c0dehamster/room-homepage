export const Slider = () => {
	return (
		// Placeholder until the proper carousel is implemented
		<div className="col-start-1 col-end-2 row-start-1 row-end-2 tablet:col-end-3">
			<ul className="slider">
				<li className="slide">
					<picture>
						<source
							media="(min-width: 30rem)"
							srcSet="./images/desktop-image-hero-1.jpg"
						/>
						<source
							media="(max-width: 29.9rem)"
							srcSet="./images/mobile-image-hero-1.jpg"
						/>
						<img
							src="./images/desktop-image-hero-1.jpg"
							alt=""
							className="slide__image | w-full"
						/>
					</picture>
				</li>
			</ul>
		</div>
	)
}
