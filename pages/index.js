import Head from 'next/head'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <div className="app">
      <Navbar /> 
      <Hero />
      <main>
        <Gallery />
      </main>
    </div>
  )
}
