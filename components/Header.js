import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useBreakpoints, useCurrentWidth } from 'react-breakpoints-hook';

import Logo from '../public/img/vtj-circle.svg';

import Image from 'next/image';

const HeaderContainer = styled.div`
  display: flex;
  gap: 25px;
  justify-content: space-between;
  flex-direction: ${props => props.small ? 'column' : 'row'};
  align-items: ${props => props.small ? 'center' : 'flex-end'};

  .snipcart-checkout {
    order: ${props => props.small ? '50' : '0'};
  }
`;

const NavbarEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  flex-direction: ${props => props.small ? 'row' : 'column'};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;


  img {
    width: 100%;
    max-width: 150px;
    height: auto;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 15px;

  @media only screen and (max-width: 600px) {
    justify-content: space-between;
  }

  a {
    line-height: 30px;

    &.active {
      text-decoration: none;
      font-weight: bold;
      pointer-events: none;
    }
  }
`;

const CartContainer = styled.div`
  display: flex;
  gap: 15px;
  cursor: pointer;
`;

const Cart = styled.button`
  background: #275ea3;
  border-radius: 4px;
  padding: 0px 10px;
  line-height: 30px;
  color: #e9edef;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 15px;
  margin: 0px;
  font-weight: bold;
  color: #000010;
`;

const Navbar = ({
  pageMap
}) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const smWidthSize = 690;
  let width = useCurrentWidth();

  const [navLinks, setNavLinks] = useState(null);
  const [isSmall, setIsSmall] = useState(width < smWidthSize ? true : false);

  const cartCopy = isSmall ? 'Cart' : 'View Cart';

  useEffect(() => {
    if (pageMap) {
      const links = pageMap.map((item, i) => {  
        if (item.route){
          return (
            <Link key={i} className={currentRoute === item.route ? 'active' : ''} href={item.route}>
              {item.name === 'index' ? 'home' : item.name}
            </Link>
          ) 
        }
      });

      setNavLinks(links);
    }
  }, [pageMap]);

  useEffect(() => {
    setIsSmall(width < smWidthSize);
  }, [width]);

  return (
    <HeaderContainer small={isSmall}>
      <LogoContainer> 
        <Image src={Logo} alt="verticaltubejig.com" />
        {!isSmall && (<Title>verticaltubejig.com</Title>)}
      </LogoContainer>
      <NavbarEl small={isSmall}>
        <CartContainer className="snipcart-checkout">
          {!isSmall && (<span>🛒</span>)}
          <Cart>{cartCopy}</Cart>
        </CartContainer>
        <LinksContainer>{navLinks && navLinks}</LinksContainer>        
      </NavbarEl>
    </HeaderContainer>
  )
};

export default Navbar;