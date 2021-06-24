import Head from 'next/head'

import Card from "../components/Card"

import person from "../public/data/person.json"
import projects from "../public/data/projects.json"

export default function Home() {

  const renderProjects = projects.map(project => <Card title={project.title} summary={project.summary} year={project.year} />)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <div>
          <h1>Hi, I'm {person.firstName},</h1>
          <h3>a software engineer based in Sweden</h3>
          <p>{person.about}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {renderProjects}
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>{person.email}</p>
      </footer>
    </div>
  )
}
