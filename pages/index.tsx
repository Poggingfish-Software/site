import '@vercel/analytics'
import { NextSeo } from 'next-seo'
function myNav() {
  return (
  <div className="navbar are-large navbar_bg">
    <div className="navbar-brand">
      <a className="navbar-item-brand-logo">
      </a>
      <a className="navbar-item has-text-white" href="/">Poggingfish Software</a>
    </div>
  </div>)
}
function App() {
  return (
    <>
      <NextSeo title="Poggingfish Software" description="The goal of Poggingfish Software is to create software for everyone, including you!"/>
      <link rel="icon" href="/favicon.ico" />
      <div className="main">
        {myNav()}
        <div className="has-text-centered">
          <p className='title has-text-white pl-4 pt-4'>Poggingfish Software</p>
          <p className="subtitle has-text-white pl-4 is-size-6">Open source software company.</p>
        </div>
        <div className="card secondary p-3 m-5">
          <p className="title has-text-white has-text-centered">About</p>
          <p className="subtitle has-text-white has-text-centered">The goal of Poggingfish Software is to create software for everyone, including you!<br></br>
          We believe everyone has the right to modify and view the source code of software.
          </p>
        </div>
        <div className="card secondary p-3 m-5">
          <p className="title has-text-white has-text-centered">Contact</p>
          <p className="subtitle has-text-white has-text-centered">For any questions, please email <a href="mailto:luna@pogging.fish">luna@pogging.fish</a></p>
        </div>
        <footer className="secondary m-5 mt-6 p-4">
          <div className="content has-text-centered">
            <p className="has-text-white">© 2023 Poggingfish Software</p>
            <a className="has-text-white" rel="me" href="https://mastodon.social/@pogsft"> <img src="mastodon.svg"></img> Mastodon</a><br></br>
            <a className="has-text-white" href="https://github.com/Poggingfish-Software"><img src="github.svg"></img> Github</a><br></br>
            <a className="has-text-white" href="https://transequality.org/ways-to-give"><img src="trans.svg"></img> LGBTQ+ owned company!</a><br></br>
            <a className="has-text-white" href="https://www.gnu.org/licenses/gpl-3.0.en.html"><img src="code.svg"></img> GPL'd!</a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
