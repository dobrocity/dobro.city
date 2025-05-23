<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="hero min-h-[60vh]">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-4xl md:text-6xl font-bold px-2"
        style="line-height: 1.2;"
      >
        The
        <span>open source</span>, libertarian and
        <span> blockchain-first</span>
        <span>Popup&nbsp;City</span>
      </div>
      <div class="mt-6 md:mt-10 text-sm md:text-lg">
        Built with <a
          href="https://stellar.org"
          class="link font-bold"
          target="_blank">Stellar</a
        >,
        <a href="https://supabase.com" class="link font-bold" target="_blank"
          >Supabase</a
        >,
        <a href="https://tailwindcss.com" class="link font-bold" target="_blank"
          >Tailwind</a
        >,
        <a href="https://daisyui.com" class="link font-bold" target="_blank"
          >DaisyUI</a
        >, and
        <a
          href="https://www.postgresql.org"
          class="link font-bold"
          target="_blank">Postgres</a
        >
      </div>
      <div class="mt-6 md:mt-2">
        <!-- <a href="/camp">
          <button class="btn btn-primary btn-sm px-6">🏕️ on Camp</button>
        </a> -->
        <a href="https://t.me/dobropopupcity" target="_blank">
          <button class="btn btn-outline btn-primary btn-sm px-6 mt-3 mx-2"
            >🪂&nbsp;&nbsp;on Telegram</button
          >
        </a>
      </div>
    </div>
  </div>
</div>

<div class="min-h-[50vh]">
  <div class="pt-10 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2"
      >
        Leadership
      </div>
    </div>

    <div
      class="flex flex-wrap justify-center gap-8 mt-12 max-w-[900px] mx-auto"
    >
      <!-- Example Card: Rinat -->
      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <picture>
            <source srcset="/images/team/rinat-200.avif" type="image/avif" />
            <source srcset="/images/team/rinat-200.webp" type="image/webp" />
            <img
              src="/images/team/rinat.png"
              alt="Rinat Enikeev"
              class="rounded-xl w-48 h-48 object-cover"
              loading="lazy"
              width="192"
              height="192"
            />
          </picture>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Rinat Enikeev</h2>
          <p class="text-sm opacity-70">Product Lead</p>
        </div>
      </div>

      <!-- Repeat for other team members -->

      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <picture>
            <source srcset="/images/team/valerij-200.avif" type="image/avif" />
            <source srcset="/images/team/valerij-200.webp" type="image/webp" />
            <img
              src="/images/team/valerij.png"
              alt="Valeriy Utrosin"
              class="rounded-xl w-48 h-48 object-cover"
              loading="lazy"
              width="192"
              height="192"
            />
          </picture>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Valeriy Utrosin</h2>
          <p class="text-sm opacity-70">Finance Lead</p>
        </div>
      </div>

      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <picture>
            <source srcset="/images/team/aleksei-200.avif" type="image/avif" />
            <source srcset="/images/team/aleksei-200.webp" type="image/webp" />
            <img
              src="/images/team/aleksei.png"
              alt="Aleksei Tkachuk"
              class="rounded-xl w-48 h-48 object-cover"
              loading="lazy"
              width="192"
              height="192"
            />
          </picture>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Aleksei Tkachuk</h2>
          <p class="text-sm opacity-70">Acquisition Lead</p>
        </div>
      </div>

      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <picture>
            <source srcset="/images/team/victor-200.avif" type="image/avif" />
            <source srcset="/images/team/victor-200.webp" type="image/webp" />
            <img
              src="/images/team/victor.png"
              alt="Victor Korb"
              class="rounded-xl w-48 h-48 object-cover"
              loading="lazy"
              width="192"
              height="192"
            />
          </picture>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Victor Korb</h2>
          <p class="text-sm opacity-70">Comms Lead</p>
        </div>
      </div>

      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <picture>
            <source srcset="/images/team/dmitriy-200.avif" type="image/avif" />
            <source srcset="/images/team/dmitriy-200.webp" type="image/webp" />
            <img
              src="/images/team/dmitriy.png"
              alt="Dmitriy Sergeevich"
              class="rounded-xl w-48 h-48 object-cover"
              loading="lazy"
              width="192"
              height="192"
            />
          </picture>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Dmitriy Sergeevich</h2>
          <p class="text-sm opacity-70">Build Lead</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="min-h-[50vh]">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2"
      >
        Advisory
      </div>
    </div>

    <div
      class="flex flex-wrap justify-center gap-8 mt-12 max-w-[1200px] mx-auto"
    >
      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <picture>
            <source srcset="/images/team/mi-200.avif" type="image/avif" />
            <source srcset="/images/team/mi-200.webp" type="image/webp" />
            <img
              src="/images/team/mi.png"
              alt="Mi San"
              class="rounded-xl w-48 h-48 object-cover"
              loading="lazy"
              width="192"
              height="192"
            />
          </picture>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Mi San</h2>
          <p class="text-sm opacity-70">MTL Fest</p>
        </div>
      </div>

      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <picture>
            <source srcset="/images/team/soz-200.avif" type="image/avif" />
            <source srcset="/images/team/soz-200.webp" type="image/webp" />
            <img
              src="/images/team/soz.png"
              alt="Soz Nov"
              class="rounded-xl w-48 h-48 object-cover"
              loading="lazy"
              width="192"
              height="192"
            />
          </picture>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Soz Nov</h2>
          <p class="text-sm opacity-70">MTLA Secretary</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="min-h-[50vh] flex justify-center">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2"
      >
        Frequently Asked Questions
      </div>
    </div>
    <div class="flex place-content-center">
      <div class="join join-vertical max-w-xl py-6 mx-auto">
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What is DoBro.City?
          </div>
          <div class="collapse-content">
            <p>
              DoBro.City is a libertarian city project based on blockchain
              technologies and open-source developments. We create an innovative
              urban environment where decentralized technologies ensure
              transparency, security, and economic efficiency. We adhere to the
              principles of non-aggression and self-ownership.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What role does blockchain play in the city?
          </div>
          <div class="collapse-content">
            <p>
              Blockchain is used to manage economic processes, including
              financial transactions, property rights notarization, and
              commitment articulation. This increases trust and eliminates
              centralized control.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What does the open-source nature of the project mean?
          </div>
          <div class="collapse-content">
            <p>
              We create an open codebase that allows all interested developers
              to participate in the project, propose improvements, and adapt
              solutions for other cities. You can fork any repository or the
              entire project in your physical location.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What specific city blockchain technologies do you offer?
          </div>
          <div class="collapse-content">
            <p>
              We use the Stellar blockchain for tokenizing the real sector (Real
              World Assets - RWA) and participant commitments (labor tokens). We
              are not inventing a new blockchain. In Popup City, the blockchain
              acts as an automated ledger for recording economic transactions
              and property rights notarization.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What does Popup mean in the project name?
          </div>
          <div class="collapse-content">
            <p>
              Popup implies a modular and flexible city architecture. This means
              the project can be temporary or adaptable, depending on the
              community's needs and location. Cities are such complex
              organizations that they cannot be planned.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Is DoBro.City tied to a specific location?
          </div>
          <div class="collapse-content">
            <p>
              No, our concept is a universal framework that can be deployed in
              different locations. This allows for adapting solutions to the
              needs of various communities and economic conditions.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            How can one join the project?
          </div>
          <div class="collapse-content">
            <p>
              You can participate in the project by submitting Pull Requests on
              GitHub, reposting, and commenting on us on social networks. We are
              also always open to collaboration with developers, urbanists,
              entrepreneurs, and blockchain technology enthusiasts. Write to <a
                href="https://t.me/programyzer"
                class="link font-bold"
                target="_blank">rinat</a
              > with a greeting and an announcement of the contribution you want
              to make.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What social benefits does your project provide?
          </div>
          <div class="collapse-content">
            <p>
              We create an environment where residents can actively participate
              in city management, take advantage of new digital economy
              opportunities, and live in a space free from excessive government
              control.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What advantages does the project have over traditional cities?
          </div>
          <div class="collapse-content">
            <p>
              DoBro.City offers decentralized management, transparent city
              processes, reduced dependence on government structures, and
              innovative financial mechanisms for residents.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div class="pt-10 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-3xl mb-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2"
      >
        Subscribe to our newsletter
      </div>
      <div style="min-height: 58px;max-width: 440px;margin: 0 auto;width: 100%">
        <script
          src="https://cdn.jsdelivr.net/ghost/signup-form@~0.2/umd/signup-form.min.js"
          data-button-color="#52643F"
          data-button-text-color="#fefbf6"
          data-site="https://what-is-dobro.ghost.io/"
          data-locale="en"
          async
        ></script>
      </div>
    </div>
  </div>
</div>
