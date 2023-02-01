import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Logo from '../public/img/vtj-circle.svg';

import Image from 'next/image';

const HeaderContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: flex-end;
  justify-content: space-between;
`;

const NavbarEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  flex-direction: column;
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

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const navItems = [
    'home',
    'store',
    'gallery',
    'blog',
    'about',
    'contact'
  ]

  const links = navItems.map((item, i) => {
    const path = item === 'home' ? '/' : '/' + item;

    return <Link key={i} className={currentRoute === path ? 'active' : ''} href={path}>{item}</Link>
  });

  return (
    <HeaderContainer>
      <LogoContainer> 
        <Image src={Logo} alt="verticaltubejig.com" />
        <Title>verticaltubejig.com</Title>
      </LogoContainer>
      <NavbarEl>
        <CartContainer className="snipcart-checkout">
          <span>🛒</span>
          <Cart>View Cart</Cart>
        </CartContainer>
        <LinksContainer>{links}</LinksContainer>        
      </NavbarEl>
    </HeaderContainer>
  )
};

export default Navbar;