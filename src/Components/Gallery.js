import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Gallery({ imageUrls }) {
    
    return (
        <Container fluid={true}>
            <Row>
                {imageUrls.map((imageUrl, index) => {
                    return (
                        <Col className="overflow-hidden" lg={4} md={6} sm={12} key={index}>
                            <img className="mw-100"  src={imageUrl} alt={imageUrl} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Gallery;