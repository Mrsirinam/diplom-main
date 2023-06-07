
import { Container, Row, Col } from "react-bootstrap";
import NavbarMenu from "../components/NavbarHeader";
import IMAGE from "../assets/images/IMAGE.png"

function PostPage() {
	const paragraphStyle = {
		textAlign: "justify",
		width: "100%",
	};

	return (
		<Container>
			<Row className="justify-content-center border-bottom ">
				<NavbarMenu />
			</Row>

			<div className="spacer" style={{ height: "100px" }}></div>

			<Row className="justify-content-beetwen m-0 p-0 mt-3">
				<Col xs={12} md={6} className="justify-content-center mt-2">
					<h2>Черногория</h2>
				</Col>

				<Col xs={12} md={6} className="justify-content-center mt-2 text-end">
					<img
						src={IMAGE}
						alt="Montenegro"
						className="w-100"
						style={{ borderRadius: "5px" }}
					/>
				</Col>
			</Row>

			<Row className=" mt-5">
				<Col xs={12}>
					<div>
						<h4 className="mt-5" style={paragraphStyle}>
							Котор, Будва, Тиват и другие города невероятно красивой страны,
							окруженной высокими горами и чистейшим морем
						</h4>
					</div>
				</Col>
				<Col xs={12}>
					<div className="mt-5">
						<p style={paragraphStyle}>
							Отдых в Черногории выбирают туристы, которые хотят не только
							познакомиться с культурой страны и посмотреть на исторические
							достопримечательности, но и насладиться великолепной природой.
							Самолет летит из Москвы в Черногорию 3 часа. Время в Черногории
							отстает от московского на два часа. Климат Черногории идеально
							подходит для круглогодичного отдыха. Летом здесь не очень жарко
							(максимум +29°C), зимой тепло (на побережье не меньше +11°C, в
							горах около −6°C), проводить время на свежем воздухе очень
							комфортно. Резких перепадов температуры не бывает. Лучшее время
							для отдыха в Черногории — с мая по октябрь. Купальный сезон
							стартует уже в апреле. Зимой в Черногории начинается горнолыжный
							сезон. В декабре на побережье Адриатического моря тепло,
							температура воздуха не опускается ниже +11°C, а в горах уже
							стабильный «минус» (до −9°C) и устойчивый снежный покров.
						</p>
					</div>
				</Col>
			</Row>

			<Row className="justify-content-beetwen m-0 p-0 mt-3">
				<Col
					xs={6}
					md={6}
					className="justify-content-center mt-3 p-0 text-start"
				>
					<p>Иван Иванов</p>
				</Col>
				<Col xs={6} md={6} className="justify-content-center mt-3 p-0 text-end">
					<p>12.01.2023</p>
				</Col>
			</Row>

			{/* //теги */}
			<Row className="justify-content-center">
				<Col xs={12} className="d-flex justify-content-start">
					<button className="btn btn-primary btn-hover-cursor me-3">
						Тег 1
					</button>
					<button className="btn btn-primary btn-hover-cursor me-3">
						Тег 2
					</button>
					<button className="btn btn-primary btn-hover-cursor">Тег 3</button>
				</Col>
			</Row>

			<Row className="justify-content-center mt-5 mb-5">
				<Col xs={12} className="d-flex justify-content-center">
					<button className="btn btn-outline-secondary btn-lg">
						На главную
					</button>
				</Col>
			</Row>

			{/* <Row className="justify-content-center m-0 p-0 mt-3">
				<Footer />
			</Row> */}
		</Container>
	);
}

export default PostPage;
