<!-- {"title": "How I Created My Own Blog Post With Svelte And Mdsvex In One Day.", "slug": "how-i-created-my-own-blog-post-with-svelte-in-one-day", "date": "2025-05-06"}-->

## Building My First Blog with Svelte and mdsvex

### Why...

So, I wanted to create a blog for some time. It’s been on my mind for a while, but I never actually made one until now. And as a blog is pretty much a beginner project; that everyone makes at some point or another to start learning web development—I wanted to make one too. I am usually not the type of person who follows a trend just because others are doing it, or to do something that is too hyped(which is why i still haven't watched any of the Bahubali movies...). Before this, I was using a WhatsApp channel to share my thoughts, but that was limiting, since only people in my contact list could see them. I figured it was time to build something better—a space where I could share my thoughts more freely, maybe even with the world.

### How...

So I started doing some research on YouTube.

I watched a bunch of videos where people talked about how they made their blogs. Most of them used sites like Blogger or other pre-built platforms. But I wanted to make mine from scratch to really understand what was going on and learn in the process. That’s when I stumbled upon people using a library called [`mdsvex`](https://mdsvex.pngwn.io/) along with Markdown files for text formatting and content creation. (Suddenly, a lot of things started making sense—how the text formatting works on all those AI chat apps... and why i kept getting a whole bunch of `*`s in my API responses and what they meant..)

I also saw that many were using Obsidian as their note-taking app, and that gave me some ideas too. Then I re-watched an old video by [NetworkChuck](https://youtu.be/dnE7c0ELEH8?si=-uGvsMQLJiccNWaN); where he made his own blog with [HUGO](https://gohugo.io/), a open-source static site generator and Obsidian as a place to write the posts. While his workflow was super inspiring, I didn’t want to use Hugo myself. It’s a static site generator, and I was pretty set on making my blog from scratch.

After watching a ton of videos on mdsvex—trying to understand everything... I finally felt ready to begin the project.

### The beginning...

I created the project repository on GitHub first(because that’s how I like to start all my projects). Then I initialized a Svelte project. Conveniently, the [`sv create`](https://svelte.dev/docs/cli/sv-create) command had a built-in option to add mdsvex, so I just selected that option and everything was configured automatically. At this point, all I really wanted was to implement the Markdown system.

At first, I used the file system to fetch the Markdown files list and file data using the inbuilt `fs` Node.js system module.

And soon enough, I had a working demo.

Next, I spent some time fixing the CSS to make it look decent. Once things were looking good, I committed everything to Git. Then I tried to host it on Cloudflare Pages(my go-to hosting platform).

But it failed.

### Debugging...

The deployment threw a bunch of errors that were way beyond my comprehension. I asked Claude. I asked ChatGPT. But neither could give me a solution that worked...<br/>
*(Which just goes to show that AI tools still have a long way to go. They’re super helpful, but they’re not quite ready to replace real developers just yet.)*

#### The Problem...

Eventually, ChatGPT helped me figure out the core issue. It explained that using the file system wasn’t a feasible approach in a server-less environment like Cloudflare Pages, where a traditional file-based routing system isn't accessible at runtime.. That’s why everything was breaking.

#### The Solution...

So I started thinking about switching to fetching instead—something I was already comfortable with from past projects—but I didn’t know how to apply that method here.

But that’s when ChatGPT recommended that i should instead import my markdown files at build time, instead of runtime, and bundle them into my app using Vite. This could be done by using Vite's `import.meta.glob` feature.

### And Finally...

So, After a lot of refactoring and debugging, I got the whole file-data system working using this approach.

### But What About The Metadata...

And now I had to figure out a better way to handle metadata. I knew that mdsvex already supported some sort of way to extract the metadata from a file, but I couldn't implement that for some reason, so I did something a bit different..

#### My Solution...

At the beginning of each file there is a comment in the markdown file that contains some JSON data:
```json
{
	"title": "Title of My Blog.",
	"slug": "title-of-my-blog",
	"date": "2025-05-06"
}
```

So now all I had to do in the JavaScript is to clean it and parse the JSON data, and i had the metadata i needed. I know I could've just used the file path as the slug, and now I only have more work to do as I need to make sure the name of my markdown file and the slug are matching.. but I think that is fine for now.

### Will It Work...

At last, I cleaned up the CSS one more time, committed everything to Git, and hoped the build would be successful this time, until, finally—it was working.

I was *so* happy. After hours and hours of effort—basically my whole day—it finally worked!!

### Conclusion...

#### What I learned...

I got to learn **a lot** from this project—from handling Markdown in Svelte to understanding how to use server-side code on the client using `+page.svelte.ts` (yes, it was my first time doing that!). The learning curve was real, but it was also incredibly rewarding.

I learned about he markdown syntax, how to use `mdsvex`, how to dynamically load content using `import.meta.glob()`, and why file-based systems don't work in server-less environments like Cloudflare Pages. These aren’t just “tips and tricks”—they’re foundational pieces of knowledge I’ll be carrying into future projects. I also got a taste of what it’s like to debug deployment issues in a real-world setup, where things don’t always go according to plan, and answers aren’t always a Google search away.

And while I still have a long way to go when it comes to styling and designing clean, responsive layouts, it gave me a starting point to build on.

#### What The Future Holds...

Even though there's **still so much more** to improve—like refining the CSS, implementing better metadata extraction, or optimizing other functions—I'm proud of what I built. Not because it's perfect, but because it's _mine_, and because I now have a better understanding of how these systems work.

And ***that***, was my experience building a blog for the first time ever, with Svelte and mdsvex, in one day.

Thank you for reading this, and <br/>
catch you in the next one!

— Produnya's Blog