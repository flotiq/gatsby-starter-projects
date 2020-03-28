<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://gatsby-london.netlify.com">
    <img alt="Gatsby" src="./content/assets/screenshot-desktop.jpg" />
  </a>
</p>

---

A custom, image-centric theme for Gatsby. Made for publishers and portfolios with plenty of graphics to show off to the world. Completely free and fully responsive, released under the MIT license.

**Based on [London](https://github.com/TryGhost/London) for Ghost**

**Demo: https://gatsby-london.netlify.com**

---
<p align="center">
  <a href="https://jamstack.studio">
    <img alt="Jamstack Studio" src="https://raw.githubusercontent.com/ImedAdel/media/master/jamstack.studio_(Laptop%20with%20HiDPI%20screen).png" />
  </a>
</p>

---

_I haven't really spent any time adding the JS animations or removing any unused CSS (automatically done by PurgeCSS). You will also need HTML in your Markdown file in order to add CSS classes to your images_

---

_First time with Gatsby? Take a look on the [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

If you never used Gatsby before, I highly recommend you to [set up your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)!

To copy and install this starter run this command:

```bash
$ gatsby new project-portfolio https://github.com/flotiq/gatsby-starter-projects
```

The main data source of this starter is a Projects Content Type in [Flotiq.com](https://flotiq.com), after you [register](https://editor.flotiq.com/register.html), you can choose `Project` when you create your first Content Type Definition (all you need to do is follow the tutorial on Flotiq Dashboard).

Next - add some projects in Flotiq! Hint: you can use the integrated Unsplash media library to pull some awesome pictures.

The last step is to configure the application to know from where it has to fetch the data, this is going to be made by using `environment variables`. You need to create a file called `.env` inside the root directory of the project, with the following structure:

```js
GATSBY_FLOTIQ_BASE_URL=https://api.flotiq.com
FLOTIQ_API_KEY=YOUR API KEY
```

To get YOUR API KEY check out [documentation](https://flotiq.com/docs/API/).

After this you can start development:
```
gatsby develop
```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-blog-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!


## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/flotiq/gatsby-starter-projects)
<!-- AUTO-GENERATED-CONTENT:END -->
