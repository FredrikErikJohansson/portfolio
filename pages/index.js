import Head from 'next/head'
import Link from "next/link"

import Card from "../components/Card"
import Course from "../components/Course"

import projects from "../public/data/projects.json"
import courses from "../public/data/courses.json"

export default function Home() {

  const renderProjects = projects.map(project => 
    <Link key={project.id} href={`/project/${project.id}`}>
      <a>
        <Card title={project.title} summary={project.summary} year={project.year} preview={project.images[0]} />
      </a>
    </Link>)

  const renderBachelorCourses =  courses.Bachelor.map(course => <Course code={course.code} title={course.title}/>)
  const renderMasterCourses = courses.Master.map(course => <Course code={course.code} title={course.title}/>)

  return (
    <div>
      <Head>
        <title>Fredrik | Portfolio</title>
        {/* <style>{'body { background-color: gray; }'}</style> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-auto p-5 mt-12 max-w-screen-xl">
        {/* <div className="m-auto grid grid-cols-1 gap-4 my-8 md:grid-cols-2 max-w-screen-md"> */}
        <div className="flex flex-wrap space-y-4 lg:space-y-0 mb-8">
          <div className="w-full lg:w-1/3">
            <h1 className="text-3xl font-bold">Hi, I'm Fredrik,</h1>
            <h3 className="text-lg text-gray-500">a software engineer based in Sweden</h3>
          </div>
          <div className="text-base w-full lg:w-2/3 space-y-4">
            <p>I recently graduated from Linköping University, 
              Sweden, with a master's degree in Computer Science. 
              I enjoy working with projects that let me utilize 
              my sense of aesthetics together with my technical background. 
              It can range from low-level performance demanding 
              computer graphics to designing and implementing web applications.</p>
            <p>To help me during my work, I have attended master-level 
              courses and worked within: advanced C++ programming, scientific visualization, 
              computer graphics, multi-core and GPU programming, advanced image-processing, 
              artificial intelligence, neural networks, and web development.</p>
          </div>  
        </div>
        <h1 className="text-3xl mb-4 font-bold">Projects</h1>
        <div className="mb-10 md:masonry-2-col lg:masonry-3-col mx-auto">
          {renderProjects}
        </div>
        <h1 className="text-3xl mb-4 font-bold">Master's degree</h1>
        <div className="grid mb-10 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {renderMasterCourses}
        </div>
        <h1 className="text-3xl mb-4 font-bold">Bachelor's degree</h1>
        <div className="grid mb-10 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {renderBachelorCourses}
        </div>
        
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>fredrik96.johansson@gmail.com</p>
      </footer>
    </div>
  )
}
