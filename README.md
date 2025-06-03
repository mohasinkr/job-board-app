# Job Board App 🚀

This project allows users to browse job listings fetched from the Arbeitnow API and submit applications via Webhook.site.

## ✨ Features

* **Job Listing:** Displays jobs fetched from the Arbeitnow API.
* **Job Details:** View detailed information for each job.
* **Application Submission:** Apply for jobs using a form that submits data to Webhook.site.
* **Responsive Design:** User interface built with Shadcn UI for a seamless experience across devices.
* **Type Safety:** Fully typed codebase with TypeScript.
* **Efficient Data Fetching:** Utilizes TanStack Query for robust data fetching, caching, and state synchronization.
* **Client-Side State Management:** Leverages Jotai for minimalistic and flexible global state management.
* **Form Handling:** Robust form validation and management using React Hook Form and Zod.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) 15 (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via [Shadcn UI](https://ui.shadcn.com/))
* **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
* **HTTP Client:** [Axios](https://axios-http.com/)
* **Data Fetching & State Management (Server Cache):** [TanStack Query (React Query)](https://tanstack.com/query/latest)
* **Global State Management (Client):** [Jotai](https://jotai.org/)
* **Form Validation:** [Zod](https://zod.dev/)
* **Form Handling:** [React Hook Form](https://react-hook-form.com/)
* **API for Job Listings:** [Arbeitnow API](https://arbeitnow.com/api)
* **API for Application Submissions:** [Webhook.site](https://webhook.site/) (or your specific endpoint)

---

## 📁 Project Structure & Naming Conventions

The project follows a feature-first approach combined with a clear separation of concerns. Key directories include:

* `app/`: Contains all routes, layouts, and pages for the Next.js App Router.
* `atoms/`: Holds Jotai atoms for global state management.
* `providers/`: Houses context providers, including TanStack Query client and any other global providers.
* `components/ui/`: Contains reusable UI components, primarily from Shadcn UI or custom-built atomic components.
* `components/job/`: Contains components specifically related to job listings, job details, and application forms.
* `lib/`: Utility functions and helpers.

**Naming Convention:**
This project adheres to **kebab-case** for file and folder names, inspired by best practices for maintainable and scalable React applications (similar to conventions found in repositories like "bullet-proof-react").

Example:
* `components/job/job-card.tsx`
* `app/(main)/job-listings/page.tsx`

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18.x or later recommended)
* npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root of your project and add the necessary environment variables.

    ```plaintext
    # .env.local

    # Example: API endpoint for job applications (if different from a generic webhook.site)
    NEXT_PUBLIC_APPLICATION_WEBHOOK_URL=[https://webhook.site/your-unique-webhook-id](https://webhook.site/your-unique-webhook-id)

    # Example: Arbeitnow API endpoint (if you need to customize it, otherwise it might be hardcoded)
    # NEXT_PUBLIC_ARBEITNOW_API_URL=[https://arbeitnow.com/api/job-board-api](https://arbeitnow.com/api/job-board-api)

    # Add any other environment variables your project requires
    ```
    *Note: Ensure `NEXT_PUBLIC_` prefix is used for variables you want to expose to the browser.*

### Running the Development Server

```bash
pnpm dev