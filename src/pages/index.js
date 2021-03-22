import React from "react"

export default function Home() {
  return (
    <div className="p-6 container max-w-5xl mx-auto sm:pt-32">
      <main>
        <h1 className="text-4xl font-extrabold mb-4 sm:text-7xl sm:mb-16">
          Hi, I'm Frail{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p className="text-lg mb-4 sm:text-3xl sm:mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aut minus cumque explicabo quidem repudiandae tempore eum ducimus
          nihil provident eveniet possimus molestiae consequuntur sed quia nobis
          sunt, voluptatibus enim?
        </p>
        <p className="text-lg mb-4 sm:text-3xl sm:mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aut minus cumque explicabo quidem repudiandae tempore eum ducimus
          nihil provident eveniet possimus molestiae consequuntur sed quia nobis
          sunt, voluptatibus enim?
        </p>
        <p className="text-lg mb-4 sm:text-3xl sm:mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          provident laborum quod culpa maxime corrupti excepturi consectetur
          adipisci error natus?
        </p>
        <p className="text-lg mb-4 sm:text-3xl sm:mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque
          inventore possimus, repellat impedit sapiente. A molestias rerum
          officia tempore in quam voluptatibus? Ut, dolor!
        </p>
        <p className="text-lg mb-4 sm:text-3xl sm:mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima
          maxime laborum et, dolores ea fugiat maiores consectetur quidem esse
          tempora voluptas ad atque nostrum, velit modi libero, numquam
          temporibus.
        </p>
      </main>
      <section className="mb-40">
        <ul>
          <li>
            <a
              href="https://github.com/frailbongat"
              target="_blank"
              rel="noreferrer"
              className="text-xl font-bold mr-4 sm:text-4xl sm:mr-10"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/frail-bongat-70a71413b/"
              target="_blank"
              rel="noreferrer"
              className="text-xl font-bold mr-4 sm:text-4xl sm:mr-10"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/frailbongat"
              target="_blank"
              rel="noreferrer"
              className="text-xl font-bold sm:text-4xl"
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>
      <footer>
        <p className="sm:text-xl">
          © 2020 Frail Bongat. No cookies here{" "}
          <span role="img" aria-label="cookie">
            🍪
          </span>
        </p>
        <p className="sm:text-xl">
          Made with Gatsby & Tailwind CSS. So expect this guy to be very{" "}
          <span role="img" aria-label="fast">
            ⚡
          </span>
        </p>
      </footer>
    </div>
  )
}
