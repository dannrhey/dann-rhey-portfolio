/* ============================================================================
   PORTFOLIO DATA — EDIT THIS FILE TO UPDATE YOUR WEBSITE
   ============================================================================
   Everything you see on the site (name, about text, services, projects,
   tools, skills, work samples, testimonials, contact info, social links)
   comes from this one file. You should never need to touch the HTML, CSS,
   or the other JS files just to change your content.

   HOW TO EDIT:
   - Find the section you want to change below (they're labeled with
     banner comments like the one above).
   - Change the text between the quote marks. Keep the quote marks.
   - To add a new item to a list (a new service, project, tool, etc.),
     copy an existing { ... } object in that list, paste it as a new
     entry, and change its values. Separate objects with a comma.
   - To remove an item, delete its whole { ... } object (and the comma
     that goes with it).
   - Save the file and refresh your browser. That's it.

   See README.md for step-by-step walkthroughs with screenshots-in-words
   for every common edit.
   ============================================================================ */

export const portfolioData = {

  /* ------------------------------------------------------------------------
     0. EXPERIENCE SETTINGS
     Control theme, hero media, and motion without editing components.
  ------------------------------------------------------------------------ */
  settings: {
    defaultTheme: "dark",
    animations: true,
    animationIntensity: "medium",
    enableParallax: true,
    enableVideo: false
  },

  hero: {
    eyebrow: "Remote support · Philippines",
    title: "Dann Rhey Temorcina",
    subtitle: "Virtual Assistant for calm, capable operations.",
    description: "I bring order to busy inboxes, moving projects, research, customer communication, and creative production — so your team can stay focused on the work that grows the business.",
    backgroundVideo: "/videos/hero-background.mp4",
    mobileFallback: "/images/profile/profile.jpg",
    enableVideo: false,
    primaryCta: { label: "Explore my work", href: "#projects" },
    secondaryCta: { label: "Start a conversation", href: "#contact" }
  },

  /* ------------------------------------------------------------------------
     1. PERSONAL INFORMATION
     Shown in: Hero section, About section, Footer, browser tab title
  ------------------------------------------------------------------------ */
  personal: {
    name: "Dann Rhey Temorcina",
    title: "Virtual Assistant | Administrative Support | Operations Support | Graphic Designer",

    // Short line shown under your name in the Hero section
    intro: "I help businesses stay organized, productive, and focused by providing reliable administrative, operations, research, customer support, and creative assistance.",

    // Longer version for the About section. Use \n\n to start a new paragraph.
    aboutLong: "I'm a virtual assistant who enjoys taking the operational weight off a founder's or small team's shoulders — the inbox that needs triaging, the calendar that needs defending, the spreadsheet that needs to actually make sense.\n\nMy background blends administrative coordination, light research and data work, and hands-on design in tools like Canva, so I can support both the back-office and the client-facing side of a business without you needing to hire two people.\n\nI care most about being someone you don't have to double-check. If I say it's handled, it's handled — and if something's unclear, I'll ask before I guess.",

    // Replace this file to change your profile photo. Keep the filename
    // the same, or update the path below to match your new filename.
    profileImage: "images/profile/profile.jpg",

    email: "youremail@example.com",
    location: "Philippines",

    // Small pill shown above your name in the Hero section
    availabilityLabel: "Available for new projects",

    // Path to your resume file. Drop your PDF into /files and update this.
    resume: "files/Dann-Rhey-Temorcina-Resume.pdf",

    // A few words that sum up how you work — shown as small tags in the About section
    strengths: [
      "Detail-oriented",
      "Fast learner",
      "Clear communicator",
      "Deadline-driven",
      "Trustworthy with sensitive information"
    ],

    // A sentence or two describing how you like to work day-to-day
    workStyle: "I work best with clear priorities and async check-ins — a shared task list, a weekly sync, and the freedom to flag blockers early rather than sit on them. I document what I do as I go, so nothing lives only in my head."
  },

  /* ------------------------------------------------------------------------
     2. SERVICES
     Shown in: Services section
     Add a new service by copying an object below and editing it.
     "icon" accepts any of: "inbox", "calendar", "search", "headset",
     "share", "palette", "clipboard", "chart" — see icons.js for the shapes.
  ------------------------------------------------------------------------ */
  services: [
    {
      id: "admin-support",
      title: "Administrative Support",
      description: "Inbox and calendar management, document prep, data entry, and day-to-day coordination so nothing slips through the cracks.",
      icon: "inbox"
    },
    {
      id: "operations-support",
      title: "Operations Support",
      description: "Process documentation, workflow organization, and tool setup (Trello, ClickUp, Notion, Asana) to keep a growing team running smoothly.",
      icon: "clipboard"
    },
    {
      id: "research-data",
      title: "Research & Data Support",
      description: "Market and competitor research, lead list building, and spreadsheet work — organized into something you can actually act on.",
      icon: "search"
    },
    {
      id: "customer-support",
      title: "Customer Support",
      description: "Friendly, on-brand responses across email and chat, ticket triage, and FAQ documentation for a smoother customer experience.",
      icon: "headset"
    },
    {
      id: "social-media-support",
      title: "Social Media Support",
      description: "Content calendars, post scheduling, and light community management to keep your channels active and consistent.",
      icon: "share"
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      description: "Social graphics, presentation decks, and simple marketing assets designed in Canva and Adobe tools.",
      icon: "palette"
    }
  ],

  /* ------------------------------------------------------------------------
     3. SAMPLE PROJECTS
     Shown in: Projects section (detailed case-study style cards)
     These are PRACTICE projects, not real client work — the "sample" flag
     below keeps that label showing on the site automatically. Leave it
     set to true until you replace a project with real client work.
  ------------------------------------------------------------------------ */
  projects: [
    {
      id: "ops-dashboard",
      sample: true,
      title: "Business Operations Dashboard",
      category: "Operations",
      description: "A practice project building a single dashboard to track weekly tasks, deadlines, and team workload for a small team.",
      objective: "Give a small team one place to see what's due, who owns it, and what's overdue — instead of scattered chat messages.",
      role: "Designed the sheet structure, set up conditional formatting for status and due dates, and documented how to use it.",
      tools: ["Google Sheets", "Google Forms"],
      process: [
        "Mapped out the team's recurring task types and owners",
        "Built a master tracker with status, owner, and due-date columns",
        "Added conditional formatting to flag overdue or at-risk items",
        "Wrote a one-page guide so the team could maintain it independently"
      ],
      results: "Produced a self-updating tracker template that took the team's task list out of scattered chat threads and into one shared view.",
      images: ["images/projects/ops-dashboard.png"],
      video: "",
      link: ""
    },
    {
      id: "market-research",
      sample: true,
      title: "Market Research Report",
      category: "Research",
      description: "A sample competitor-landscape report for a fictional local coffee brand, comparing pricing, positioning, and social presence.",
      objective: "Practice turning scattered public information about competitors into a short, decision-ready summary.",
      role: "Researched, organized, and wrote the full report end to end.",
      tools: ["Google Sheets", "Google Docs", "Canva"],
      process: [
        "Identified five comparable competitors",
        "Logged pricing, menu positioning, and social following in a comparison sheet",
        "Summarized findings into a one-page brief with recommendations",
        "Designed a simple Canva layout for easy reading"
      ],
      results: "Delivered a one-page, skimmable competitor brief instead of a raw data dump.",
      images: ["images/projects/market-research.png"],
      video: "",
      link: ""
    },
    {
      id: "lead-research",
      sample: true,
      title: "Lead Research & Database",
      category: "Research",
      description: "A practice lead-generation project: building a clean, filterable prospect list from public sources for a hypothetical outreach campaign.",
      objective: "Build a usable, de-duplicated contact list that a sales process could actually run on.",
      role: "Sourced, verified, and structured the lead data.",
      tools: ["Google Sheets", "Google Search"],
      process: [
        "Defined the ideal-customer criteria",
        "Sourced candidate contacts from public directories",
        "Verified and standardized names, emails, and company details",
        "Tagged leads by industry and priority for easy filtering"
      ],
      results: "Produced a structured, filter-ready lead sheet organized by industry and priority.",
      images: ["images/projects/lead-research.png"],
      video: "",
      link: ""
    },
    {
      id: "content-calendar",
      sample: true,
      title: "Social Media Content Calendar",
      category: "Social Media",
      description: "A month-long sample content calendar and asset set for a fictional small business Instagram account.",
      objective: "Show a full planning-to-publishing workflow for a small brand's social presence.",
      role: "Planned the content themes, wrote captions, and designed the accompanying graphics.",
      tools: ["Canva", "Google Sheets", "Meta Business Suite"],
      process: [
        "Planned weekly content themes across a month",
        "Wrote captions and hashtag sets for each post",
        "Designed a consistent graphic template in Canva",
        "Logged everything in a shared scheduling calendar"
      ],
      results: "Built a repeatable monthly content system with a consistent visual template.",
      images: ["images/projects/content-calendar.png"],
      video: "",
      link: ""
    },
    {
      id: "admin-workflow",
      sample: true,
      title: "Administrative Workflow Setup",
      category: "Administrative",
      description: "A sample end-to-end inbox and calendar management workflow, documented for a busy solo founder persona.",
      objective: "Design a repeatable system for triaging email and protecting focus time on the calendar.",
      role: "Designed the workflow and wrote the supporting documentation.",
      tools: ["Gmail", "Google Calendar", "Notion"],
      process: [
        "Mapped a typical week of inbound email and meeting requests",
        "Built a triage system (respond / delegate / schedule / archive)",
        "Set up calendar blocking rules for focus time",
        "Documented the system as a simple SOP"
      ],
      results: "Documented a reusable triage-and-scheduling system in a short SOP.",
      images: ["images/projects/admin-workflow.png"],
      video: "",
      link: ""
    },
    {
      id: "brand-graphics",
      sample: true,
      title: "Graphic Design Sample Set",
      category: "Graphic Design",
      description: "A small set of sample marketing graphics — social posts, a simple flyer, and a presentation cover slide — for a fictional brand.",
      objective: "Demonstrate a consistent visual style across a few common deliverable types.",
      role: "Designed all pieces from a shared color and type system.",
      tools: ["Canva", "Adobe Acrobat"],
      process: [
        "Set a simple color palette and type pairing",
        "Designed three social post templates",
        "Adapted the system into a flyer and a slide cover"
      ],
      results: "Created a small, reusable design system spanning social, print, and presentation formats.",
      images: ["images/projects/brand-graphics.png"],
      video: "",
      link: ""
    }
  ],

  /* ------------------------------------------------------------------------
     4. TOOLS
     Shown in: Tools section, grouped by category
     Add a tool by copying an object into the right category's "items" list.
     "logo" is optional — if left blank, the tool's initial letter is shown.
  ------------------------------------------------------------------------ */
  toolCategories: [
    {
      category: "Productivity",
      items: [
        { name: "Google Workspace", logo: "" },
        { name: "Microsoft 365", logo: "" },
        { name: "Trello", logo: "" },
        { name: "ClickUp", logo: "" },
        { name: "Notion", logo: "" },
        { name: "Asana", logo: "" }
      ]
    },
    {
      category: "Communication",
      items: [
        { name: "Gmail", logo: "" },
        { name: "Google Meet", logo: "" },
        { name: "Zoom", logo: "" },
        { name: "Slack", logo: "" },
        { name: "Microsoft Teams", logo: "" }
      ]
    },
    {
      category: "CRM",
      items: [
        { name: "Zoho CRM", logo: "" },
        { name: "HubSpot", logo: "" },
        { name: "Salesforce", logo: "" },
        { name: "GoHighLevel", logo: "" }
      ]
    },
    {
      category: "Marketing",
      items: [
        { name: "Canva", logo: "" },
        { name: "Meta Business Suite", logo: "" },
        { name: "Mailchimp", logo: "" },
        { name: "Constant Contact", logo: "" },
        { name: "Loomly", logo: "" }
      ]
    },
    {
      category: "Research & Data",
      items: [
        { name: "Google Sheets", logo: "" },
        { name: "Microsoft Excel", logo: "" },
        { name: "Google Forms", logo: "" }
      ]
    },
    {
      category: "Creative",
      items: [
        { name: "Canva", logo: "" },
        { name: "CapCut", logo: "" },
        { name: "Adobe Acrobat", logo: "" }
      ]
    }
  ],

  /* ------------------------------------------------------------------------
     5. SKILLS
     Shown in: Skills section, grouped by category
     No percentages by design — just add or remove skill names.
  ------------------------------------------------------------------------ */
  skillCategories: [
    {
      category: "Technical Skills",
      items: [
        "Data Entry",
        "Internet Research",
        "Market Research",
        "Google Sheets",
        "Microsoft Excel",
        "Administrative Support",
        "Email Management",
        "Calendar Management",
        "CRM Management",
        "Social Media Management",
        "Graphic Design",
        "Basic Video Editing",
        "Document Management",
        "Project Coordination"
      ]
    },
    {
      category: "Soft Skills",
      items: [
        "Communication",
        "Organization",
        "Time Management",
        "Attention to Detail",
        "Problem Solving",
        "Adaptability",
        "Critical Thinking",
        "Reliability",
        "Initiative",
        "Teamwork"
      ]
    }
  ],

  /* ------------------------------------------------------------------------
     6. WORK SAMPLES
     Shown in: Work Samples gallery (filterable by category)
     "category" must match one of the strings in workSampleCategories below
     so filtering works correctly.
  ------------------------------------------------------------------------ */
  workSampleCategories: [
    "Administrative",
    "Research",
    "Data & Spreadsheets",
    "Operations",
    "Social Media",
    "Graphic Design",
    "Presentations"
  ],

  workSamples: [
    {
      title: "Market Research Report",
      category: "Research",
      image: "images/work-samples/market-research.png",
      description: "Sample competitor research summary for a local coffee brand.",
      tools: ["Google Sheets", "Canva"],
      link: ""
    },
    {
      title: "Weekly Ops Tracker",
      category: "Operations",
      image: "images/work-samples/ops-tracker.png",
      description: "Sample weekly task and workload tracker with status flags.",
      tools: ["Google Sheets"],
      link: ""
    },
    {
      title: "Lead Database Template",
      category: "Data & Spreadsheets",
      image: "images/work-samples/lead-database.png",
      description: "A structured, filterable sample lead list template.",
      tools: ["Google Sheets"],
      link: ""
    },
    {
      title: "Inbox Triage SOP",
      category: "Administrative",
      image: "images/work-samples/inbox-sop.png",
      description: "A one-page sample standard operating procedure for email triage.",
      tools: ["Notion", "Google Docs"],
      link: ""
    },
    {
      title: "Instagram Content Grid",
      category: "Social Media",
      image: "images/work-samples/content-grid.png",
      description: "A sample month of on-brand Instagram post concepts.",
      tools: ["Canva", "Meta Business Suite"],
      link: ""
    },
    {
      title: "Sample Pitch Deck Cover",
      category: "Presentations",
      image: "images/work-samples/pitch-deck.png",
      description: "A sample title slide and section divider set for a pitch deck.",
      tools: ["Canva"],
      link: ""
    },
    {
      title: "Social Post Template Set",
      category: "Graphic Design",
      image: "images/work-samples/social-templates.png",
      description: "A small reusable set of sample social graphic templates.",
      tools: ["Canva"],
      link: ""
    }
  ],

  /* ------------------------------------------------------------------------
     7. WORK PROCESS
     Shown in: Process section
     This is genuinely a sequence, so numbering it makes sense.
  ------------------------------------------------------------------------ */
  process: [
    {
      number: "01",
      title: "Understand",
      description: "I start by learning how you work — your tools, your priorities, and what 'done well' looks like to you."
    },
    {
      number: "02",
      title: "Organize",
      description: "I turn scattered tasks and information into a clear system — trackers, folders, and workflows you can actually follow."
    },
    {
      number: "03",
      title: "Execute",
      description: "I get the day-to-day work done reliably, and communicate clearly when something needs your input."
    },
    {
      number: "04",
      title: "Improve",
      description: "I look for small ways to make the system faster or clearer over time, and flag them instead of quietly living with friction."
    }
  ],

  /* ------------------------------------------------------------------------
     8. WHY WORK WITH ME
  ------------------------------------------------------------------------ */
  whyWorkWithMe: [
    { title: "Reliable Support", description: "You can count on tasks being done on time, without needing to follow up." },
    { title: "Detail-Oriented", description: "I catch the small things — typos, mismatched dates, broken links — before they become problems." },
    { title: "Proactive Approach", description: "I flag issues and suggest improvements instead of waiting to be told what to do." },
    { title: "Clear Communication", description: "Short, honest updates — no guessing where something stands." },
    { title: "Organized Workflow", description: "Everything I touch gets documented, so nothing lives only in my head." },
    { title: "Fast Learner", description: "New tools and workflows don't slow me down for long." },
    { title: "Adaptable", description: "Comfortable adjusting to your preferred tools, tone, and working hours." }
  ],

  /* ------------------------------------------------------------------------
     9. TESTIMONIALS
     IMPORTANT: These are SAMPLE testimonials to show the section's design.
     Replace them with real client testimonials as you receive them, and
     remove the "sample: true" line from each real one (this is what makes
     the "Sample" label disappear).
  ------------------------------------------------------------------------ */
  testimonials: [
    {
      sample: true,
      name: "Sample Client Name",
      position: "Founder, Example Co.",
      quote: "This is placeholder testimonial text showing how a client quote will appear once real feedback is added.",
      photo: ""
    },
    {
      sample: true,
      name: "Sample Client Name",
      position: "Operations Lead, Example Studio",
      quote: "Replace this with a real testimonial once you've completed client work. Keep it short and specific.",
      photo: ""
    }
  ],

  /* ------------------------------------------------------------------------
     10. SOCIAL LINKS
     Shown in: Hero, Contact, Footer
     Leave "url" as "#" for any link you don't have yet — the site will
     still work, the link just won't go anywhere until you fill it in.
  ------------------------------------------------------------------------ */
  socialLinks: [
    { platform: "LinkedIn", url: "#", icon: "linkedin" },
    { platform: "Facebook", url: "#", icon: "facebook" },
    { platform: "Instagram", url: "#", icon: "instagram" }
  ],

  /* ------------------------------------------------------------------------
     11. CONTACT SECTION COPY
  ------------------------------------------------------------------------ */
  contact: {
    heading: "Let's work together",
    intro: "Tell me a bit about what you need support with, and I'll get back to you within one business day.",
    servicesNeeded: [
      "Administrative Support",
      "Operations Support",
      "Research & Data Support",
      "Customer Support",
      "Social Media Support",
      "Graphic Design",
      "Not sure yet"
    ]
  }
};
