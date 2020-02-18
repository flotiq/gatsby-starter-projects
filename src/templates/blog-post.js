import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
      console.log(this.props.data);
    const post = this.props.data.project;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.name}
        />
        <article
          className={`post-content ${post.gallery[0] || `no-image`}`}
        >
          <header className="post-content-header">
            <h1 className="post-content-title">{post.name}</h1>
          </header>

          {post.description && (
            <div className="post-content-body" dangerouslySetInnerHTML={{ __html: post.description }} />
          )}

          {post.gallery && post.gallery.map((image) =>
            <div className="post-content-image">
              <img src={`${process.env.GATSBY_FLOTIQ_BASE_URL}/image/1920x0/${image.id}.${image.extension}`} alt={post.name}/>
            </div>
          )}
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    project(slug: {eq: $slug}) {
        description
        gallery {
          extension
          id
        }
        id
        name
        slug
      }
  }
`;
