import Link from 'next/link'
import styles from '../theme.module.sass'

const Navbar = () => {

  return (
    <div className={styles.navbar}>
      <h2>verticaltubejig.com</h2>
      {
        // You can also set a NEXT_LOCALE cookie to make it the default redirection target:
        // document.cookie = `NEXT_LOCALE=de; path=/`
      }
      <Link href={'/'}>
        home
      </Link>
      {' | '}
      <Link href={'/store'}>
        shop
      </Link>
      {' | '}
      <Link href={'/gallery'}>
        gallery
      </Link>
      {' | '}
      <Link href={'/blog'}>
        blog
      </Link>
      {' | '}
      <Link href={'/about'}>
        about
      </Link>
      {' | '}
      <Link href={'/contact'}>
        contact
      </Link>
    </div>
  )
};

export default Navbar;