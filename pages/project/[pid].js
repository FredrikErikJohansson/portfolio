import projects from "../../public/data/projects.json"

export default function Project({ project }) {

  return (
    <div className="items-center m-4">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
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