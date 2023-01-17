import Link from 'next/link'
import styles from '../theme.module.sass'

const Navbar = () => {
  const navItems = [
    'home',
    'store',
    'gallery',
    'blog',
    'about',
    'contact'
  ]

  const links = navItems.map(item => {
    return <Link href={item === 'home' ? '/' : '/' + item}>{item}</Link>
  })

  return (
    <div className={styles.header}>
      <h2>verticaltubejig.com</h2>
      {
        // You can also set a NEXT_LOCALE cookie to make it the default redirection target:
        // document.cookie = `NEXT_LOCALE=de; path=/`
      }
      <div className={styles.navbar}>
        {links}
      </div>
    </div>
  )
};

export default Navbar;