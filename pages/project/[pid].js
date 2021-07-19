import projects from "../../public/data/projects.json"

import Image from "next/image"

import ListItem from "../../components/ListItem"

export default function Project({ project }) {

  const renderFeatures = project.features.map(feature => <ListItem name={feature} />)
  const renderTechnologies = project.technologies.map(tech => <ListItem  name={tech} />)
  const renderImages = project.images.map(image => <Image src={require("../../public/images/" + image)}></Image>)

  return (
    <div className="items-center m-4">
      <h1 className="text-5xl">{project.title}</h1>
      <p>{project.description}</p>
      <h2 className="text-xl">Features</h2>
        <div className="flex flex-wrap">
          {renderFeatures}
        </div>
      <h2 className="text-xl">Technologies</h2>
      <div className="flex flex-wrap">
        {renderTechnologies}
      </div>
      <h2 className="text-xl">Result</h2>
      <div>
        {renderImages}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { pid: project.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const project = projects.find(project => project.id.toString() === context.params.pid)

  return {
    props: {
      project,
    },
  }
}