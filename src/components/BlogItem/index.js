import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog

  return (
    <li className="blog-item">
      <div className="title-date">
        <h3>{title}</h3>
        <p>{publishedDate}</p>
      </div>
      <p className="desciption">{description}</p>
    </li>
  )
}

export default BlogItem
