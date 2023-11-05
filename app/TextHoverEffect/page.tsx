'use client';
import './TextHoverEffect.css'
import gsap from 'gsap';

const projects = [
  {
    title: "New York",
    color: "#F06318"
  },
  {
    title: "San Francisco",
    color: "#DCF018"
  },
  {
    title: "Bihar",
    color: "#18F0E8"
  },
  {
    title: "Nashville",
    color: "#8C0CF0"
  },
  {
    title: "Bhupendera Jogi",
    color: "#F0183C"
  },
  {
    title: "New Orleans",
    color: "#F0BA18"
  },
  {
    title: "Detroit",
    color: "#0CBCF0"
  },
  {
    title: "Indianapolis",
    color: "#91F018"
  }
]

export default function TextHoverEffect() {
  const manageMouseEnter = (e:any, index:any) => {
    gsap.to(e.target, {backgroundColor: projects[index].color, top: "-2vh", duration: 0.3 })
  }

  const manageMouseLeave = (e:any, index:any) => {
    gsap.to(e.target, {backgroundColor: "white", top: "0", duration: 0.3, delay: 0.1 })
  }

  return (
    <main className='main-container'>
       <div className='project-container'>
          {
            projects.map ((project, index) => {
              return <div onMouseEnter={(e) => {manageMouseEnter(e, index)}} onMouseLeave={(e) => {manageMouseLeave(e, index)}} key={index}>
                <p>{project.title}</p>                
              </div>
            })
          }
       </div>
    </main>
  )
}
