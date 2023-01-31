import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

//import Image from 'next/image';

const Navbar = ({
  pageMap
}) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  console.log('pageMap', pageMap);
  

  const links = pageMap.map((item, i) => {   
    if (item.route)
      return (<Link key={i} className={currentRoute === item.route ? 'active' : ''} href={item.route}>{item.name === 'index' ? 'home' : item.name}</Link>) 
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
        <Col></Col>
        <Col>
          <Button className="snipcart-checkout">View Cart 🛒</Button>
        </Col>
        <Col>{links}</Col>
      </Row>
    </Container>
  )
};

export default Navbar;