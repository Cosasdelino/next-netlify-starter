import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <a href="https://www.cosasdelino.com/"><Header title="Tienda online de artículos de lino" /></a>
        <p className="description">
          Esta web fomenta el uso del lino, aquí podrás comprar e informarte sobre todo tipo de productos hechos con lino.
      <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
