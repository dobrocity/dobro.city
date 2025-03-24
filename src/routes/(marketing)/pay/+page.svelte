<svelte:head>
  <title>How to Pay with Stellar</title>
  <meta
    name="description"
    content="Learn how to make payments using the Stellar blockchain and DoBro Wallet"
  />
</svelte:head>

<div class="hero min-h-[40vh] bg-base-200">
  <div class="hero-content text-center py-8">
    <div class="max-w-3xl">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">How to Pay</h1>
      <p class="text-lg mb-6">
        A guide to making payments with Stellar blockchain and DoBro Wallet
      </p>
      <a href="#create-wallet">
        <button class="btn btn-primary px-8">Get Started</button>
      </a>
    </div>
  </div>
</div>

<div class="container mx-auto px-4 py-12 max-w-4xl">
  <div class="prose prose-lg max-w-none">
    <h2 class="text-2xl font-bold border-b-2 border-primary pb-2 mb-6">
      What is Stellar Blockchain?
    </h2>

    <p>
      Stellar is an open-source, decentralized payment protocol that enables
      fast, cross-border transactions between any pair of currencies. Unlike
      many other blockchains, Stellar was designed specifically for financial
      applications, making it ideal for:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">🌍 Cross-border Payments</h3>
          <p>Fast and affordable remittances between any currencies</p>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">💱 Digital Currencies</h3>
          <p>Creating digital representations of any currency</p>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">💸 Micropayments</h3>
          <p>Transactions with minimal fees, even for small amounts</p>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">🏦 Financial Inclusion</h3>
          <p>Banking the unbanked with accessible financial tools</p>
        </div>
      </div>
    </div>

    <p>
      Stellar transactions typically settle in 3-5 seconds and cost a fraction
      of a cent, making it one of the most efficient blockchain networks
      available today.
    </p>

    <h2
      id="create-wallet"
      class="text-2xl font-bold border-b-2 border-primary pb-2 my-6"
    >
      Creating Your Stellar Wallet with DoBro
    </h2>

    <p>
      To start using Stellar, you'll need a wallet. DoBro Wallet is a
      user-friendly mobile application that makes managing your Stellar assets
      simple and secure.
    </p>

    <h3 class="font-bold text-xl">Step 1: Download DoBro Wallet</h3>
    <p>Install DoBro Wallet from your device's app store:</p>
    <div class="flex flex-wrap gap-4 items-center">
      <a
        href="https://play.google.com/store/apps/details?id=city.dobro.wallet"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block"
      >
        <img
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          class="h-16"
        />
      </a>
      <a
        href="https://apps.apple.com/app/id6482980775"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block"
      >
        <img
          alt="Download on the App Store"
          src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
          class="h-12"
        />
      </a>
    </div>

    <h3 class="font-bold text-xl">Step 2: Create a New Wallet</h3>
    <ol class="list-decimal pl-6 mb-6">
      <li>Open the DoBro Wallet app</li>
      <li>Tap "Add account"</li>
      <li>Tap "Create Account"</li>
      <li>Optionally set a password for an account</li>
      <li>Tap on "Create Account" button</li>
      <li>Backup your secret key</li>
      <li>Tap on "Click to reveal secret key" button</li>
      <li>Write down or copy your secret key</li>
      <li>Tap on "Done" button</li>
    </ol>

    <div class="alert alert-warning shadow-lg mb-6">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>
          <strong>Important:</strong> Your secret key is the only way to restore
          your wallet if you lose access. Never share it with anyone and keep it
          in a safe place offline.
        </span>
      </div>
    </div>

    <h3 class="font-bold text-xl">Step 3: Fund Your Wallet</h3>
    <p>
      To activate your Stellar wallet, it needs to be funded with a minimum
      balance of 1 XLM. You can receive XLM from another user or purchase it
      from a cryptocurrency exchange.
    </p>

    <div class="card bg-base-100 shadow-xl my-8">
      <div class="card-body">
        <h3 class="card-title">💡 Need Help?</h3>
        <p>
          If you have any questions about setting up your wallet or making
          payments, join our Telegram community for assistance:
          <a
            href="https://t.me/dobropopupcity"
            class="link font-bold"
            target="_blank">@dobropopupcity</a
          >
        </p>
      </div>
    </div>
  </div>
</div>
