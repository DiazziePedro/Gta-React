import { useState } from 'react'
import './App.css'
import logoGta from './assets/logo-gta.svg'

export default function App() {

  return (
    <>
      <main>
        <section>
          <img src={logoGta} alt="" />
        </section>

        <footer>
          <small>@2026 ag2cti.com</small>
          <div id="social">
            <div className="rs"></div>
            <div className="rs"></div>
            <div className="rs"></div>
          </div>
        </footer>
      </main>
    </>
  )
}
