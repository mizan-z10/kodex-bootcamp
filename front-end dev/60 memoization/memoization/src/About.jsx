import React from 'react'

const About = () => {
  console.log("aabout rengering");
  return (
    <div>About</div>
  )
}

export default React.memo(About,(prev,next)=>{
    return prev.first.id === next.first.id
})
// export default About 