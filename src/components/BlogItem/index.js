import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item
  return (
    <li className="blog-item-list-element">
      <div className="blog-item-first-text-container">
        <h1 className="blog-item-heading">{title}</h1>
        <p className="blog-item-para">{description}</p>
      </div>
      <div>
        <p>{publishedDate}</p>
      </div>
    </li>
  )
}

export default BlogItem
