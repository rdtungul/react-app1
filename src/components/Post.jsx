const names = ['rosephdarl', 'roseph', 'darl', 'rd+', 'rd-']
function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names[4];
  return (
    <div>
        <h1>{chosenName}</h1>
        <p>React JS is awesome!</p>
    </div>
  )
}

export default Post