<script lang="ts">
  import { enhance, applyAction } from "$app/forms"
  import type { SubmitFunction } from "@sveltejs/kit"
  import type { FullAutoFill } from "svelte/elements"

  let errors: { [fieldName: string]: string } = $state({})
  let loading = $state(false)
  let showSuccess = $state(false)

  interface FormField {
    id: string
    label: string
    inputType: string
    autocomplete: FullAutoFill
  }

  const formFields: FormField[] = [
    {
      id: "first_name",
      label: "First Name *",
      inputType: "text",
      autocomplete: "given-name",
    },
    {
      id: "last_name",
      label: "Last Name *",
      inputType: "text",
      autocomplete: "family-name",
    },
    {
      id: "email",
      label: "Email *",
      inputType: "email",
      autocomplete: "email",
    },
    {
      id: "phone",
      label: "Phone Number",
      inputType: "tel",
      autocomplete: "tel",
    },
    {
      id: "company",
      label: "Company Name",
      inputType: "text",
      autocomplete: "organization",
    },
    {
      id: "message",
      label: "Message",
      inputType: "textarea",
      autocomplete: "off",
    },
  ]

  const handleSubmit: SubmitFunction = () => {
    loading = true
    errors = {}
    return async ({ update, result }) => {
      await update({ reset: false })
      await applyAction(result)
      loading = false
      if (result.type === "success") {
        showSuccess = true
      } else if (result.type === "failure") {
        errors = result.data?.errors ?? {}
      } else if (result.type === "error") {
        errors = { _: "An error occurred. Please check inputs and try again." }
      }
    }
  }
</script>

<svelte:head>
  <title>Join Our Team - Lead Producer Role</title>
  <meta
    name="description"
    content="Join DoBro City as a Lead Producer. Help us manage events, partnerships, and teams in our blockchain-first popup city."
  />
</svelte:head>

<div class="hero min-h-[40vh] bg-base-200">
  <div class="hero-content text-center py-8">
    <div class="max-w-3xl">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">
        Join Our Team as Lead Producer
      </h1>
      <p class="text-lg mb-6">
        Help shape the future of <a href="https://dobro.city" class="link"
          >dobro.city</a
        > by leading our events, partnerships, and team development
      </p>
      <a href="#application-form">
        <button class="btn btn-primary px-8">Apply Now</button>
      </a>
    </div>
  </div>
</div>

<div class="container mx-auto px-4 py-12 max-w-4xl">
  <div class="prose prose-lg max-w-none">
    <h2 class="text-2xl font-bold border-b-2 border-primary pb-2 mb-6">
      Event Management
    </h2>

    <h3 class="font-bold text-xl">
      🔍 Researching Audience Needs and Choosing Event Topics
    </h3>
    <p>
      You deeply understand your audience's needs and can quickly identify
      relevant problems and trends. You have an extensive network of experts and
      speakers whom you can approach anytime to validate event topics, pinpoint
      hot topics, and highlight audience pain points. You're also proactive in
      helping fellow producers with their research, providing clear, actionable
      feedback.
    </p>

    <h3 class="font-bold text-xl">
      📦 Packaging Event Topics and Selecting Formats
    </h3>
    <p>
      You confidently handle even the most complex event formats without
      requiring managerial support. You're not just executing tasks—you actively
      generate ideas for innovative formats and bring them to life
      independently.
    </p>

    <h3 class="font-bold text-xl">🎤 Searching for and Outreach to Speakers</h3>
    <p>
      You independently build speaker funnels for your events and actively help
      junior colleagues with candidate selection. Your trusted network of
      speakers is always ready to recommend experts and provide relevant
      contacts.
    </p>

    <h3 class="font-bold text-xl">🎯 Preparing Speakers for Presentations</h3>
    <p>
      You offer deep, developmental feedback to speakers on their presentation
      structure and content. You understand storytelling principles and
      psychology, and know exactly how to craft compelling narratives.
    </p>

    <h3 class="font-bold text-xl">🖥️ Landing Page Packaging</h3>
    <p>
      You understand modern landing page design principles, provide designers
      with quality references, and know precisely what mechanics will boost
      conversions—registrations, sales, or target actions.
    </p>

    <h3 class="font-bold text-xl">
      📣 Understanding Marketing Tools for Event Promotion
    </h3>
    <p>
      You effectively collaborate with the marketing team to set promotional
      goals, choose effective channels, and track campaign outcomes. In
      marketing questions, you rely more on your marketer's expertise rather
      than solely on your own.
    </p>

    <h2 class="text-2xl font-bold border-b-2 border-primary pb-2 my-6">
      Partnership Management
    </h2>

    <h3 class="font-bold text-xl">🤝 Finding Partners</h3>
    <p>
      You independently develop partnership strategies and clearly identify the
      companies most beneficial for collaboration.
    </p>

    <h3 class="font-bold text-xl">📝 Creating Partnership Offers</h3>
    <p>
      You craft partnership proposals tailored to partners' goals and
      expectations, always ready to deliver beyond their expectations. You're
      deeply familiar with your company's products and aware of previously
      successful content or marketing formats you can offer.
    </p>

    <h3 class="font-bold text-xl">🎭 Pitching and Presenting</h3>
    <p>
      You formulate a clear strategy for presenting partnership offers,
      tailoring your approach individually to each potential partner. You
      confidently deliver presentations, answer partner questions thoroughly,
      and accurately capture their goals, interests, and desired adjustments.
    </p>

    <h3 class="font-bold text-xl">
      📊 Executing and Managing Partnership Agreements
    </h3>
    <p>
      You independently lead the execution of partnership agreements: setting
      priorities, delegating tasks, resolving conflicts or issues, and regularly
      assessing partnership results to suggest improvements for future
      collaborations.
    </p>

    <h2 class="text-2xl font-bold border-b-2 border-primary pb-2 my-6">
      Team Management
    </h2>

    <h3 class="font-bold text-xl">🔄 Facilitating Team Rituals</h3>
    <p>
      You master reflection and developmental feedback techniques and know how
      to conduct 1-on-1 meetings that drive team member growth.
    </p>

    <h3 class="font-bold text-xl">👥 Hiring New Team Members</h3>
    <p>
      You independently identify which function the team lacks, create clear job
      descriptions, and set detailed objectives for 3-6-12 months. You're
      skilled at screening resumes, conducting interviews, evaluating test
      assignments, and confidently making final hiring decisions.
    </p>

    <h3 class="font-bold text-xl">🚀 Onboarding</h3>
    <p>
      You autonomously conduct complete onboarding processes, organize
      cross-team introductions, and develop comprehensive growth plans for new
      hires for their first 3-6-12 months.
    </p>

    <h3 class="font-bold text-xl">📈 Employee Development Plans</h3>
    <p>
      You independently create development plans for junior and mid-level team
      members.
    </p>

    <h3 class="font-bold text-xl">🌟 Corporate Culture and Values</h3>
    <p>
      You deeply understand and clearly articulate your department's culture and
      values, effectively communicating them to your team. You tactfully provide
      feedback if colleagues' behavior deviates from corporate culture, actively
      influence internal processes, and participate in shaping new cultural
      initiatives.
    </p>

    <h2 class="text-2xl font-bold border-b-2 border-primary pb-2 my-6">
      Business Strategy Involvement
    </h2>

    <h3 class="font-bold text-xl">💡 Product Strategy</h3>
    <p>
      You actively participate in developing product strategy, independently
      identifying key event topics and formats aligned with company objectives.
      You research user behavior, closely follow trends in edtech and
      edutainment, propose concrete implementation steps, and monitor core
      business metrics.
    </p>

    <h3 class="font-bold text-xl">📱 Marketing Strategy</h3>
    <p>
      You're deeply involved in developing marketing strategy, sharing valuable
      insights on user behavior and market trends with your marketing team to
      optimize marketing and content activities.
    </p>

    <h3 class="font-bold text-xl">💰 Sales and Company Revenue</h3>
    <p>
      You participate in creating effective sales strategies, including event
      and partnership pricing strategies. You highlight core product advantages
      and values, build strategic partnerships to expand your customer base, and
      increase overall sales. You create top-of-mind events and products that
      significantly contribute to company revenue growth.
    </p>
  </div>

  <div class="divider my-12">Ready to apply?</div>

  <div id="application-form" class="text-center mb-8">
    <h2 class="text-2xl font-bold mb-4">Submit Your Application</h2>
    <p class="mb-6">Fill out the form below and we'll get back to you soon!</p>
  </div>
</div>

<div
  class="flex flex-col lg:flex-row mx-auto my-4 min-h-[70vh] place-items-center lg:place-items-start place-content-center"
>
  <div
    class="max-w-[400px] lg:max-w-[500px] flex flex-col place-content-center p-4 lg:mr-8 lg:mb-8 lg:min-h-[70vh]"
  >
    <div class="px-6">
      <h1 class="text-2xl lg:text-4xl font-bold mb-4">Contact Us</h1>
      <p class="text-lg">Talk to cofounders to:</p>
      <ul class="list-disc list-outside pl-6 py-4 space-y-1">
        <li class="">Discuss Lead Producer role details</li>
        <li class="">Learn about our production process</li>
        <li class="">Explore career growth opportunities</li>
        <li class="">Schedule an interview</li>
      </ul>
      <p>Once you complete the form, we'll reach out to you! *</p>
      <p class="text-sm pt-8">
        *We will try to reach out to you as soon as possible. 😉
      </p>
    </div>
  </div>

  <div
    class="flex flex-col flex-grow m-4 lg:ml-10 min-w-[300px] stdphone:min-w-[360px] max-w-[400px] place-content-center lg:min-h-[70vh]"
  >
    {#if showSuccess}
      <div class="flex flex-col place-content-center lg:min-h-[70vh]">
        <div
          class="card card-bordered shadow-lg py-6 px-6 mx-2 lg:mx-0 lg:p-6 mb-10"
        >
          <div class="text-2xl font-bold mb-4">Thank you!</div>
          <p class="">We've received your message and will be in touch soon.</p>
        </div>
      </div>
    {:else}
      <div class="card card-bordered shadow-lg p-4 pt-6 mx-2 lg:mx-0 lg:p-6">
        <form
          class="form-widget flex flex-col"
          method="POST"
          action="?/submitContactUs"
          use:enhance={handleSubmit}
        >
          {#each formFields as field}
            <label for={field.id}>
              <div class="flex flex-row">
                <div class="text-base font-bold">{field.label}</div>
                {#if errors[field.id]}
                  <div class="text-red-600 flex-grow text-sm ml-2 text-right">
                    {errors[field.id]}
                  </div>
                {/if}
              </div>
              {#if field.inputType === "textarea"}
                <textarea
                  id={field.id}
                  name={field.id}
                  autocomplete={field.autocomplete}
                  rows={4}
                  class="{errors[field.id]
                    ? 'input-error'
                    : ''} h-24 input-sm mt-1 input input-bordered w-full mb-3 text-base py-4"
                ></textarea>
              {:else}
                <input
                  id={field.id}
                  name={field.id}
                  type={field.inputType}
                  autocomplete={field.autocomplete}
                  class="{errors[field.id]
                    ? 'input-error'
                    : ''} input-sm mt-1 input input-bordered w-full mb-3 text-base py-4"
                />
              {/if}
            </label>
          {/each}

          {#if Object.keys(errors).length > 0}
            <p class="text-red-600 text-sm mb-2">
              Please resolve above issues.
            </p>
          {/if}

          <button class="btn btn-primary {loading ? 'btn-disabled' : ''}"
            >{loading ? "Submitting" : "Submit"}</button
          >
        </form>
      </div>
    {/if}
  </div>
</div>
