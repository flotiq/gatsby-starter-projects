<a href="https://flotiq.com/">
    <img src="https://editor.flotiq.com/fonts/fq-logo.svg" alt="Flotiq logo" title="Flotiq" align="right" height="60" />
</a>

Gatsby Starter - Projects portfolio
========================

This is a [Gatsby](https://gatsbyjs.org) starter project for a blog. It's configured to pull projects data from [Flotiq](https://flotiq.com) and can be easily deployed to your cloud hosting - Heroku, Netlify, Gatsby Cloud, etc.

Live Demo: https://flotiq-starter-for-projects.herokuapp.com/

Screenshot

<img src="https://github.com/flotiq/gatsby-starter-projects/raw/master/docs/flotiq-starter-projects.png" width=480 />

## Quick start

1. **Start project from template using Gatsby CLI**
    
    ```bash
    gatsby gatsby-starter-projects https://github.com/flotiq/gatsby-starter-projects
    ```
   
1. **Setup "Project" Content Type in Flotiq**

   Create your [Flotiq.com](https://flotiq.com) account. Next, create the `Project` Content Type:

   ![Blog Post content type in flotiq](docs/create-definition-project.png)
    
   _Note: You can also create `Project` using [Flotiq REST API](https://flotiq.com/docs/API/)._ 

1. **Configure application**

    The next step is to configure our application to know from where it has to fetch the data.
       
    You need to create a file called `.env` inside the root of the directory, with the following structure:

    ```
    GATSBY_FLOTIQ_BASE_URL=https://api.flotiq.com
    GATSBY_FLOTIQ_API_KEY=YOUR FLOTIQ API KEY
    ```

1.  **Start developing**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd gatsby-starter-projects/
    npm install
    gatsby develop
    ```
    
    If you wish to import example projects to your account, before running  `gatsby develop`, run:
          
    ```sh
    node ./.flotiq/importExample.js
    ```
    
    It will add 9 images and 3 projects to your Flotiq account.
    
    _Note: You need to put your Read and write API key in `.env` for import to work. You don't need Project content type in your account. If you already have projects with ids `project-1`, `projects-2`, and `project-3` they will be overwritten._

   
1.  **Open the source code and start editing!**
    
    Your site is now running at [http://localhost:8000](http://localhost:8000)!
    
    _Note: You'll also see a second link: _[http://localhost:8000/___graphql](http://localhost:8000/___graphql)`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._
    
    Open a project directory in your code editor of choice and edit `src/templates/index.js`. Save your changes and the browser will update in real time!

1. **Manage your posts using Flotiq editor**
      
    You can now easily manage your projects using [Flotiq editor](https://editor.flotiq.com)
    
    ![Managing posts using Flotiq](docs/manage-projects.png)

## Deploy

  You can deploy this project to Heroku in 3 minutes:

  [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/flotiq/gatsby-starter-projects)
  
  Or to Netlify:
  
  [![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/flotiq/gatsby-starter-projects)


## Collaborating

   If you wish to to talk with us about this project, feel free to hop on our [discord server](https://discord.gg/FwXcHnX).
   
   If you found a bug, please report it in [issues](https://github.com/flotiq/gatsby-starter-blog/issues).
