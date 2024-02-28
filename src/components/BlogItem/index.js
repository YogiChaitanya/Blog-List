// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list-card">
      <div className="title-published-card">
        <h1 className="title">{title}</h1>
        <p>{publishedDate}</p>
      </div>

      <p>{description}</p>
    </li>
  )
}

export default BlogItem
