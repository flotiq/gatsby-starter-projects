import React from "react"
import { Link } from "gatsby"

export default props => (
  <article
    className={`post-card ${props.count % 3 === 0 && `post-card-large`} ${props.node.gallery[0] ? `with-image` : `no-image`}`}
    style={
      props.node.gallery[0] && {
        backgroundImage: `url(${
            process.env.GATSBY_FLOTIQ_BASE_URL + '/image/1920x0/' + props.node.gallery[0].id + '.' + props.node.gallery[0].extension
        })`,
      }
    }
  >
    <Link to={props.node.slug} className="post-card-link">
      <div className="post-card-content">
        <h2 className="post-card-title">
          {props.node.name}
        </h2>
      </div>
    </Link>
  </article>
)
