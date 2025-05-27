'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { House, LibraryBig, Scroll, Search, SunMoon, User } from 'lucide-react'
import styles from './nav.module.scss'

const NavComponent = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <House size={30} className={styles.icon} />
      </Link>


      <Search size={30} className={styles.icon}  />


      <Link href='/pokemonList' className={styles.link}>
        <Scroll size={30} className={styles.icon} />
      </Link>

      <Link href='/pokemonCard' className={styles.link}>
        <LibraryBig size={30} className={styles.icon} />
      </Link>

      <Link href='/cabinet' className={styles.link}>
        <User size={30} className={styles.icon} />
      </Link>

      <SunMoon size={30} className={styles.sunMoonWrapper} />
    </nav>
  )
}

export default NavComponent