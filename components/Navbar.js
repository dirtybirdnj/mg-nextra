import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

//import Image from 'next/image';

const Navbar = ({
  pageMap
}) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  console.log('pageMap', pageMap);
  console.log('currentRoute', currentRoute);

  const links = pageMap.map((item, i) => {   
    if (item.route) {
      return (
        <Nav.Item key={i} eventKey={item.route} >
          <Link className={'nav-link ' + (currentRoute === item.route ? 'active' : '')} href={item.route}>{item.name === 'index' ? 'home' : item.name}</Link>
        </Nav.Item>
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
          <Nav defaultActiveKey="/">
            {links}
          </Nav>
        </Col>
      </Row>
    </Container>
  )
};

export default Navbar;