import './index.css'

import BlogItem from '../BlogItem/index'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list-container">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} item={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
