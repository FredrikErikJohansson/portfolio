import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"

import Card from "../components/Card"
import Course from "../components/Course"

import projects from "../public/data/projects.json"
import courses from "../public/data/courses.json"

import profileImage from "../public/images/profile-grad.png"
import bg from "../public/images/bg.jpg"

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative text-white text-lg bg-black" style={{height: "520px"}}>
        <Image className="opacity-60" layout='fill'
          objectFit='cover' src={bg}></Image>
        {/* <div className="relative m-auto z-1 max-w-sm" >
          <Image layout='responsive' src={profileImage}></Image>      
        </div> */}
        <div className="absolute z-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-wrap space-y-4 lg:space-y-0 mb-8 w-full justify-center">
          <div className="w-full md:w-1/3 pr-8 max-w-md">
            <h1 className="text-6xl font-bold">Hi, I'm Fredrik,</h1>
            <h3 className="text-xl">a software engineer based in Sweden</h3>     
          </div>
          <div className="w-full md:w-2/3 max-w-md">
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
        {/* <div className="z-1 aboslute top-0 left-1/2 transform -translate-x-1/2">      
        </div>   */}
      </div>
      
      <main className="m-auto p-5 max-w-screen-xl">    
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
