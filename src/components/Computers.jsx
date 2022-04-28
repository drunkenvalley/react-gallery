import img from '../img/mkii-038-/1.png'

import g1 from '../img/mkii-038-/2.png'
import g2 from '../img/mkii-038-/3.png'
import g3 from '../img/mkii-038-/4.png'
import g4 from '../img/mkii-038-/5.png'

import o1 from '../img/switch-810/4.jpeg'
import o2 from '../img/switch-810/3.jpeg'
import o3 from '../img/switch-810/10.jpeg'
import o4 from '../img/ft03_2.jpg'

export default function Computers () {
    const makeGallery = (array) => array.map(src => <img src={src} alt="" className='square'></img>)
    const gallery = makeGallery([g1, g2, g4, g3])
    const otherGallery = makeGallery([o4, o1, o2, o3])

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
          <div className='grid gap-0'>
            {gallery}
          </div>
        </div>
        <div className='container flow bg-dark pad-mb-0'>
          <h3 className="pad-y border-mb border-light-900 text-light">Other computers</h3>
          <main className='bg-dark-500 pad text-light'>
            The <strong>- 038 -</strong> is my favorite, but I've built other computers too. Here are some more pictures.
          </main>
        </div>
        <div className="container bg-dark pad-y-0">
          <div className='grid gap-0'>
            {otherGallery}
          </div>
          <div className='pad-mb bg-dark-500'>&nbsp;</div>
        </div>
        <div className='container flow bg-dark pad-mt-0'></div>
      </>
)}
