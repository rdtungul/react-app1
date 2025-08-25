const names = ['rosephdarl', 'roseph', 'darl', 'rd+', 'rd']
function Post() {
    const chosenName = names[Math.floor(Math.random() * names.length)];
  return (
    <div>
        <h1>{chosenName}</h1>
        <p>React JS is awesome!</p>
    </div>
  )
}

export default Post