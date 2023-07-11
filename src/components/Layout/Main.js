import drawersImage from '../../assets/images/drawers.jpg';
import avatarImage from '../../assets/images/avatar.jpg';

const Main = () => {
	return (
		<main>
			<div className="container">
				<article className="card">
					<div className="card__image">
						<div className="card__image-inner">
							<img src={drawersImage} alt="" />
						</div>
					</div>
					<div className="card__content">
						<h2 className="card__title">
							Shift the overall look and feel by adding these
							wonderful touches to furniture in your home
						</h2>
						<p className="card__desc">
							Ever been in a room and felt like something was
							missing? Perhaps it felt slightly bare and
							uninviting. I've got some simple tips to help you
							make any room feel complete.
						</p>
						<div className="card__author">
							<div className="card__author-img-box">
								<img
									className="card__author-img"
									width="40"
									height="40"
									src={avatarImage}
									alt="Michelle Appleton"
								/>
							</div>
							<div className="card__author-info">
								<h3 className="card__author-name">
									Michelle Appleton
								</h3>
								<p className="card__author-post-date">
									28 Jun 2020
								</p>
							</div>
						</div>
						<div className="card__share">
							<input
								type="checkbox"
								name="toggle"
								id="share-toggle"
								className="card__share-checkbox"
							/>
							<div className="card__share-box">
								<div className="card__share-action">
									<span className="card__share-action-txt">
										Share
									</span>
									<ul className="card__share-action-buttons">
										<li>
											<a
												href="#/"
												title="Share on facebook">
												<i
													className="icon-facebook"
													aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a
												href="#/"
												title="Share on twitter">
												<i
													className="icon-twitter"
													aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a
												href="#/"
												title="Share on pinterest">
												<i
													className="icon-pinterest"
													aria-hidden="true"></i>
											</a>
										</li>
									</ul>
								</div>
								<label
									htmlFor="share-toggle"
									className="btn btn--icon btn--share-toggle">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="15"
										height="13">
										<path
											fill="currentColor"
											d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"></path>
									</svg>
								</label>
							</div>
						</div>
					</div>
				</article>
			</div>
		</main>
	);
};

export default Main;
