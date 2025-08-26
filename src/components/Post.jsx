function Post(props) {
  const author = props.author
  const body = props.author
  return (
    <div>
        <h1>{author}</h1>
        <p>{body}</p>
    </div>
  )
}

export default Post