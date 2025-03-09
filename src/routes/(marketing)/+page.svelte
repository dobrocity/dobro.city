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
        class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-3 md:mb-7 pb-1"
      >
        DoBro City
      </div>

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
        <a href="https://github.com/dobrocity/dobro.city">
          <button class="btn btn-primary btn-sm px-6">★ us on Github</button>
        </a>
        <a href="https://docs.dobro.city/ru">
          <button class="btn btn-outline btn-primary btn-sm px-6 mt-3 mx-2"
            >Read the Docs</button
          >
        </a>
      </div>
    </div>
  </div>
</div>

<div class="min-h-[40vh]">
  <div class="pt-10 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2"
      >
        Roadmap
      </div>
    </div>

    <div class="max-w-3xl mx-auto mt-12">
      <div class="flex flex-col gap-8">
        <div
          class="card bg-base-100 shadow-[inset_0_2px_4px_0_rgb(0,0,0,0.25)]"
        >
          <div class="card-body">
            <h2 class="card-title text-2xl">2025</h2>
            <p class="text-lg opacity-80">Digital twin of the popup</p>
          </div>
        </div>

        <div
          class="card bg-base-100 shadow-[inset_0_2px_4px_0_rgb(0,0,0,0.25)]"
        >
          <div class="card-body">
            <h2 class="card-title text-2xl">2026</h2>
            <p class="text-lg opacity-80">First festival in Montenegro</p>
          </div>
        </div>
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
      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <img
            src="/images/team/rinat.jpeg"
            alt="Rinat Enikeev"
            class="rounded-xl w-48 h-48 object-cover"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Rinat Enikeev</h2>
          <p class="text-sm opacity-70">Product Lead</p>
        </div>
      </div>

      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <img
            src="/images/team/valerij.jpeg"
            alt="Valeriy Utrosin"
            class="rounded-xl w-48 h-48 object-cover"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Valeriy Utrosin</h2>
          <p class="text-sm opacity-70">Finance Lead</p>
        </div>
      </div>

      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <img
            src="/images/team/aleksei.jpeg"
            alt="Aleksei Tkachuk"
            class="rounded-xl w-48 h-48 object-cover"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Aleksei Tkachuk</h2>
          <p class="text-sm opacity-70">Acquisition Lead</p>
        </div>
      </div>

      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <img
            src="/images/team/victor.jpeg"
            alt="Victor Korb"
            class="rounded-xl w-48 h-48 object-cover"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Victor Korb</h2>
          <p class="text-sm opacity-70">Comms Lead</p>
        </div>
      </div>

      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <img
            src="/images/team/dmitriy.jpeg"
            alt="Dmitriy Sergeevich"
            class="rounded-xl w-48 h-48 object-cover"
          />
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
          <img
            src="/images/team/mi.jpeg"
            alt="Mi San"
            class="rounded-xl w-48 h-48 object-cover"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Mi San</h2>
          <p class="text-sm opacity-70">MTL Fest</p>
        </div>
      </div>

      <div class="card w-64 bg-base-100 shadow-xl">
        <figure class="px-6 pt-6">
          <img
            src="/images/team/soz.jpeg"
            alt="Soz Nov"
            class="rounded-xl w-48 h-48 object-cover"
          />
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
