import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container, Row, Col, Button, Image, Navbar } from "@nextui-org/react";

const Header = ({
  pageMap
}) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  // console.log('pageMap', pageMap);
  // console.log('currentRoute', currentRoute);

  const links = pageMap.map((item, i) => {   
    if (item.route) {
      return (
        <Navbar.Link as={Link} key={i} isActive={currentRoute === item.route} href={item.route}>
          {item.name === 'index' ? 'home' : item.name}
        </Navbar.Link>
      ) 
    }
  })

  return (
    <Container>
      <Row>
        <Col>
          <Image src="/img/vtj-circle.svg" alt="verticaltubejig.com" />
          <h2>verticaltubejig.com</h2>
          </Col>
      </Row>
      <Row>
        <Col>
          <Button className="snipcart-checkout">View Cart 🛒</Button>
        </Col>
        <Col>
          <Navbar>
            <Navbar.Content>
              {links}
            </Navbar.Content>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
};

export default Header;