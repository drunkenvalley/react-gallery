import consumerportal from '../img/consumerportal.png'
import byraetsydvest from '../img/byraetsydvest.png'

import github_logo from '../img/github_logo.svg'

import react_logo from '../img/react_logo.svg'
import sass_logo from '../img/sass_logo.svg'
import svelte_logo from '../img/svelte_logo.svg'
import vue_logo from '../img/vue_logo.svg'

export default function Developer () {
    const Technology = ({ children, src, title, url }) => (
        <li className='bg-light-300 pad-lg-ms'>
            <img src={src} alt="" className='square icon icon-double contain' />
            <main className='pad h-100'>
                <h4>
                    {url ? (
                        <a href={url} className="text-red">
                            {title}
                        </a>
                    ) : title}
                </h4>
                {children}
            </main>
        </li>
    )

    const Project = ({ children, src, title, url }) => (
        <article className='bg-light-300'>
            <img src={src} className='widescreen' alt="" />
            <div className='pad'>
                <h4>
                    {url ? (
                        <a href={url} className="text-red">
                            {title}
                        </a>
                    ) : title}
                </h4>
                <p>
                    {children}
                </p>
            </div>
        </article>
    )

    return (
        <>
            <div className="container flow bg-light text-dark">
                <main>
                    <h2 id="developer"><a href="#developer" className='text-red'># Coding for the future!</a></h2>
                    <article className='flow' style={{ maxWidth: 'calc(var(--max-width) * 0.5)' }}>
                        <p>
                        While I got an education in game programming - primarily centered on C++ - I call myself mostly a webdeveloper. I build websites. I'm good both at writing the code, but I also have an "eye for design." <br/>
                        You know what they say, "Graphic design is my passion" 👼
                        </p>
                        <p>
                        In any case, I have a variety of experiences and skills in a good variety of technologies.
                        </p>
                    </article>
                </main>
            </div>
            <div className="container flow pad-y bg-light-300 text-dark">
                <h3 className="pad-y border-mb border-light-900 text-dark-100">Favorite technologies</h3>
                <ul className='pad-ms-0 flex-list margin-mb-0 grid grid-half'>
                    <Technology src={sass_logo} title="SASS" url="https://sass-lang.com/">
                        I've really learned to love SASS. Relatedly, I'm trying the <a href="https://cube.fyi/" className='text-red'>"CUBE"</a> method on this site.
                    </Technology>
                    <Technology src={react_logo} title="React" url="https://reactjs.org/">
                        JSX is super fun to write, but React feels very much like Javascript first - if that makes sense.
                    </Technology>
                    <Technology src={svelte_logo} title="Svelte" url="https://svelte.dev/">
                        Nice, compact, and has very little boilerplate. Writing in Svelte feels great.
                    </Technology>
                    <Technology src={vue_logo} title="Vue" url="https://vuejs.org/">
                        For several years I wrote in Vue. It's very complete - like a more matured Svelte.
                    </Technology>
                </ul>
            </div>
            <div className="container flow pad-mt bg-light text-dark">
                <h3 className="pad-y border-mb border-light-900 text-dark-100">Favorite projects</h3>
                <main className='grid grid-half'>
                    <Project src={byraetsydvest} title="Byrået Sydvest" url="https://byraetsydvest.no/">
                        Some years ago I worked with a design bureau building websites for their clients. They were in Wordpress,
                        with various pagebuilding solutions. This is with <a className='text-red' href='https://oxygenbuilder.com/'>Oxygen</a>!
                    </Project>
                    <Project src={consumerportal} title="My Swedbank Pay Consumerportal" url="https://app.swedbankpay.com/">
                        This is a cute SPA written in Vue, and I was the primary developer on the frontend side for several years.
                        I even added a customized chat feature!
                    </Project>
                </main>
                <h3 className="pad-y border-mb border-light-900 text-dark-100">Bonus</h3>
                <ul className='bg-light-300 pad flex-list'>
                    <Technology src={github_logo} title="This website on github" url="https://github.com/drunkenvalley/react-gallery">
                        How I've built this website isn't something intended to be a secret, so if you wanna check out what I've been up to you can see the git repo!
                    </Technology>
                </ul>
            </div>
        </>
    )
}
