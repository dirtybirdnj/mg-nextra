import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Image from 'next/image';

const smallBreakpoint = '600px';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const NavbarEl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: ${smallBreakpoint}) {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
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
  font-size: 36px;
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
    <NavbarContainer>
      <LogoContainer> 
        <Image src="/img/vtj-circle.svg" alt="verticaltubejig.com" width={100} height={100} />

        <Title>verticaltubejig.com</Title>
      </LogoContainer>
      <NavbarEl>
        <LinksContainer>{links}</LinksContainer>
        <CartContainer className="snipcart-checkout">
          <span>🛒</span>
          <Cart>View Cart</Cart>
        </CartContainer>
      </NavbarEl>
    </NavbarContainer>
  )
};

export default Navbar;