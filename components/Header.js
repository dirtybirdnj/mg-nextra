import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container, Row, Col, Button, Text, Image, Navbar } from "@nextui-org/react";

const Header = ({
  pageMap
}) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  // console.log('pageMap', pageMap);
  // console.log('currentRoute', currentRoute);

  const [navItems, setNavItems] = useState(null);

  useEffect(() => {
    if (pageMap) {
      const navEls = pageMap.map((item, i) => { 
        if (item.route) {
          return (
            <Navbar.Link as={Link} key={i} isActive={currentRoute === item.route} href={item.route}>
              {item.name === 'index' ? 'home' : item.name}
            </Navbar.Link>
          ) 
        }
      })

      setNavItems(navEls);
    }
  }, [pageMap])

  return (
    <Container>
      <Row>
        <Col>
          <Image width={100} height={100} src="/img/vtj-circle.svg" alt="verticaltubejig.com" />
          <Text h4>verticaltubejig.com</Text>
        </Col>
        <Col>
          <Button className="snipcart-checkout">View Cart 🛒</Button>
          <Navbar>
            <Navbar.Content>
              {navItems}
            </Navbar.Content>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
};

export default Header;