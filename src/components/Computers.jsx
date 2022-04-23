import img from '../img/mkii-038-/1.png'
import g1 from '../img/mkii-038-/2.png'
import g2 from '../img/mkii-038-/3.png'
import g3 from '../img/mkii-038-/4.png'
import g4 from '../img/mkii-038-/5.png'

export default function MKII () {
    const gallery = [g1, g2, g4, g3].map(src => <img src={src} alt="" className='square'></img>)

    return (
      <>
        <div className="container flow bg-dark text-light pad-mb-0">
          <main>
          <h2 id="computers"><a href="#computers" className='text-red'># I love computers!</a></h2>
            <article className='flow' style={{ maxWidth: 'calc(var(--max-width) * 0.5)' }}>
              <p>
                Computers have been a passion for me for a long time, even when I was little. This has manifested in a variety of ways; I recall the days of Windows XP fondly, but I didn't even have internet most of that time.
              </p>
              <p>
                Especially over the last decade I've built my own computers, and shared pictures of them with the internet. I've built a good number of them, but today I'll stick to my favorite.
              </p>
            </article>
          </main>
          <h3 className="pad-y border-mb border-light-900 text-light">MKII - 038 -</h3>
          <div className="group-md bg-light text-dark margin-mb">
            <main>
              <img src={img} alt="" className='h-100' />
            </main>
            <aside className="flow pad">
              <article>
                <p>
                  When I purchased an MBX MKII I very much bought into the energy that <a className="text-red" href="https://million-dollar-pc.com/">Nils @ MDPC</a> and <a className="text-red" href="https://xforma.com/">Charles @ XFORMA</a> carried:
                  To take the aesthetics as far as you're able to take them, even things people might not be able to see. No "cheats" saying "nobody is going to see this," but sincere attention to detail on every level.
                </p>
              </article>
              <figure>
                <blockquote cite="Charles Harwood @ XFORMA" marker="red">
                  Our passion for perfection and obsessive attention to detail give the MKII its heart. Its soul will arise from the connection with its Owner - having completed the first build; and then live on through future builds for years to come.
                </blockquote>
                <figcaption>Charles Harwood @ XFORMA</figcaption>
              </figure>
            </aside>
          </div>
        </div>
        <div className="container bg-dark-500 pad-y-0">
          <div className='grid gap-0' size="span-2 xs-1">
            {gallery}
          </div>
        </div>
        <div className='container bg-dark pad-mt-0'></div>
      </>
)}
