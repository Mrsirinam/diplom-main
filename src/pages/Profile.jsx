
import { Container, Row, Col } from "react-bootstrap";
import NavbarMenu from "../components/NavbarHeader";
import IMAGE from "../assets/images/IMAGE.png"
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

function Profile() {
	const isMobile = window.innerWidth <= 768; // Проверка на мобильную версию
	return (
		<Container>
			<Row className="justify-content-start border-bottom">
				<NavbarMenu />
			</Row>
			<div className="spacer" style={{ height: "50px" }}></div>

			<Row className="mt-5">
				{isMobile ? (
					<Col xs={12} md={4} className="text-center align-self-center mb-5">
						<img
							src={IMAGE}
							alt="Montenegro"
							className="rounded-circle"
							style={{ width: "300px", height: "300px" }}
						/>
					</Col>
				) : (
					<Col xs={12} md={6} className="text-start">
						<img
							src={IMAGE}
							alt="Montenegro"
							className="rounded-circle"
							style={{ width: "300px", height: "300px" }}
						/>
					</Col>
				)}
				<Col
					xs={12}
					md={6}
					className={`d-flex align-items-${isMobile ? "start" : "center"
						} justify-content-center`}
				>
					<div style={{ textAlign: isMobile ? "center" : "left" }}>
						<h1 className="mb-4" style={{ fontWeight: "bold" }}>
							Андрей Великий
						</h1>
						<p className="mb-4">Блоггер, путешественник</p>
						<button
							className="btn btn-lg btn-light btn-hover-cursor"
							style={{ backgroundColor: "#FF6464", color: "#fff" }}
						>
							Добавить пост
						</button>
					</div>
				</Col>
			</Row>

			<div className="spacer" style={{ height: "50px" }}></div>

			<Row className="mt-5">
				<h4 className="text-start  mt-5 mb-5">Мои публикации</h4>

				<Col xs={12} md={6} className="text-start">
					<img
						src={IMAGE}
						alt="Montenegro"
						className="w-75"
						style={{ borderRadius: "5px" }}
					/>
				</Col>

				<Col xs={12} md={6} className="d-flex align-items-start">
					<div>
						<h3 className="mb-4" style={{ fontWeight: "bold" }}>
							Индия
						</h3>
						<button className="btn btn-secondary btn-hover-cursor me-3 mb-3">
							2020
						</button>
						<p className="mb-4">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
							non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam
							consequat sunt nostrud amet.
						</p>
					</div>
				</Col>
			</Row>

			<Row className="mt-5">
				<Col xs={12} md={6} className="text-start">
					<img
						src={IMAGE}
						alt="Montenegro"
						className="w-75"
						style={{ borderRadius: "5px" }}
					/>
				</Col>

				<Col xs={12} md={6} className="d-flex align-items-start">
					<div>
						<h3 className="mb-4" style={{ fontWeight: "bold" }}>
							Индия
						</h3>
						<button className="btn btn-secondary btn-hover-cursor me-3 mb-3">
							2020
						</button>
						<p className="mb-4">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
							non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam
							consequat sunt nostrud amet.
						</p>
					</div>
				</Col>
			</Row>

			<Row className="mt-5">
				<Col xs={12} md={6} className="text-start">
					<img
						src={IMAGE}
						alt="Montenegro"
						className="w-75"
						style={{ borderRadius: "5px" }}
					/>
				</Col>

				<Col xs={12} md={6} className="d-flex align-items-start">
					<div>
						<h3 className="mb-4" style={{ fontWeight: "bold" }}>
							Индия
						</h3>
						<button className="btn btn-secondary btn-hover-cursor me-3 mb-3">
							2020
						</button>
						<p className="mb-4">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
							non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam
							consequat sunt nostrud amet.
						</p>
					</div>
				</Col>
			</Row>

			<Row className="justify-content-center mt-5 mb-5">
				<Col xs={12} className="d-flex justify-content-center">
					<button className="btn btn-outline-secondary btn-lg">
						На главную
					</button>
				</Col>
			</Row>

			<div className="spacer" style={{ height: "50px" }}></div>

			<Row className="justify-content-center mt-5">
				<Col xs={12} md={4} className="text-center">
					<FaTwitter size={32} className="me-3" />
					<FaInstagram size={32} className="me-3" />
					<FaFacebook size={32} />
				</Col>
				<p className="text-center mt-3">Copyright ©2020 All rights reserved </p>
			</Row>
		</Container>
	);
}

export default Profile;
