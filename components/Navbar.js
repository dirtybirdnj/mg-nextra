import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../theme.module.sass';
import Image from 'next/image'


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

    return <Link key={i} className={currentRoute === path ? styles.active : ''} href={path}>{item}</Link>
  })

  return (
    <div className={styles.header}>

      <div style={{display: 'flex', alignItems: 'center'}}> <Image style={{  }} src="/img/vtj-circle.svg" alt="verticaltubejig.com" width={100} height={100} /></div>

      <h2>verticaltubejig.com</h2>
      <p><button className="snipcart-checkout">View Cart 🛒</button></p>
      <div className={styles.navbar}>
        {links}
      </div>
    </div>
  )
};

export default Navbar;