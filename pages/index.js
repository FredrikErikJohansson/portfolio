import Head from 'next/head'
import Link from "next/link"

import Card from "../components/Card"

import person from "../public/data/person.json"
import projects from "../public/data/projects.json"

export default function Home() {

  const renderProjects = projects.map(project => 
    <Link key={project.id} href={`/project/${project.id}`}>
      <a>
        <Card title={project.title} summary={project.summary} year={project.year} preview={project.images[0]} />
      </a>
    </Link>)

  return (
    <div>
      <Head>
        <title>Fredrik | Portfolio</title>
        {/* <style>{'body { background-color: gray; }'}</style> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="items-center m-4">
        <div className="grid grid-cols-1 gap-4 my-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold">Hi, I'm {person.firstName},</h1>
            <h3 className="text-lg text-gray-500">a software engineer based in Sweden</h3>
          </div>
          <p className="text-base">{person.about}</p>
        </div>
        <h1 className="text-3xl font-bold">Projects</h1>
        {/* <div className="grid grid-cols-1 gap-4 my-4  md:grid-cols-2 lg:grid-cols-3"> */}
        <div className="py-4 md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit">
          {renderProjects}
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>{person.email}</p>
      </footer>
    </div>
  )
}
