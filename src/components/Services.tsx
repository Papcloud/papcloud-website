import { Container, Row, Col, Card } from "react-bootstrap";

function Services() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Web Design</Card.Title>
              <Card.Text>
                Beautiful and responsive websites tailored to your needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>SEO Optimization</Card.Title>
              <Card.Text>
                Improve your website's visibility on search engines.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Social Media Marketing</Card.Title>
              <Card.Text>
                Grow your brand through targeted social media campaigns.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
