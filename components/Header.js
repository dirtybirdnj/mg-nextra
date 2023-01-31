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
    <Container css={{paddingTop: '30px', paddingBottom: '30px'}}>
      <Row justify="space-between" align="center">
        <Col span={2}>
          <Image src="/img/vtj-circle.svg" alt="verticaltubejig.com" />
          <Text h4>verticaltubejig.com</Text>
        </Col>
        <Col css={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>  
          <Button className="snipcart-checkout">View Cart 🛒</Button>        
          <Navbar isCompact disableShadow disableBlur containerCss={{display: 'flex', justifyContent: 'flex-end'}}>
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