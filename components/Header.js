import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Buy } from 'react-iconly'
import { Spacer, Container, Row, Col, Button, Text, Image, Navbar } from "@nextui-org/react";

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
    <>
      <Spacer y={2} />
      <Container>
        <Row justify="space-between" align="center">
          <Col span={2} align="center">
            <Image src="/img/vtj-circle.svg" alt="verticaltubejig.com" />
            <Text h4>verticaltubejig.com</Text>
          </Col>
          <Col css={{display: 'flex', alignItems: 'center'}}>          
            <Navbar isCompact disableShadow disableBlur containerCss={{display: 'flex', justifyContent: 'flex-end'}}>
              <Navbar.Content>
                {navItems}
              </Navbar.Content>
            </Navbar>  
            <Button size="sm" bordered auto icon={<Buy primaryColor="currentColor" set="broken" />}>View Cart</Button>
          </Col>
        </Row>
      </Container>
      <Spacer y={2} />
    </>
  )
};

export default Header;