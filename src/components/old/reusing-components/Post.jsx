const names = ['rosephdarl', 'roseph', 'darl', 'rd+', 'rd']
const topics = ['React JS', 'HTML', 'JavaScript', 'PHP', 'CSS']
function Post() {
    const chosenName = names[Math.floor(Math.random() * names.length)];
    const chosenTopics = topics[Math.floor(Math.random() * topics.length)];
  return (
    <>
        <h1>{chosenName}</h1>
        <p>{chosenTopics} is awesome!</p>
    </>
  )
}

export default Post