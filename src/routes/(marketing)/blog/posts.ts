export const blogInfo = {
  name: "Popup City Blog",
  description: "A blog about the Popup City in Montenegro",
}

export type BlogPost = {
  link: string
  date: string // date is a string 'YYYY-MM-DD'
  title: string
  description: string
  parsedDate?: Date // Optional because it's added dynamically
}

// Update this list with the actual blog post list
// Create a page in the "(posts)" directory for each entry
const blogPosts: BlogPost[] = [
  {
    title: "Cofounding Process Started",
    description: "Offer is open for everyone!",
    link: "/blog/awesome_post",
    date: "2024-1-07",
  },
  {
    title: "Cofounders meeting",
    description: "Announcement of the cofounders meeting!",
    link: "/blog/cofounders_meeting",
    date: "2024-1-18",
  },
  {
    title: "Foundation",
    description: "The dobro.city was founded!",
    link: "/blog/foundation",
    date: "2024-1-19",
  },
  {
    title: "Seed round",
    description: "Seed round is announced!",
    link: "/blog/seed",
    date: "2024-1-24",
  },
]

// Parse post dates from strings to Date objects
for (const post of blogPosts) {
  if (!post.parsedDate) {
    const dateParts = post.date.split("-")
    post.parsedDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
    ) // Note: months are 0-based
  }
}

export const sortedBlogPosts = blogPosts.sort(
  (a: BlogPost, b: BlogPost) =>
    (b.parsedDate?.getTime() ?? 0) - (a.parsedDate?.getTime() ?? 0),
)
