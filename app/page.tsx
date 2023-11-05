import './mainPage.css';

const projects = [
  {
    number: "[01]",
    title: "Empty",
    link: "",
  },
  {
    number: "[02]",
    title: "Empty",
    link: "",
  },
  {
    number: "[03]",
    title: "Empty",
    link: "",
  },
  {
    number: "[04]",
    title: "Empty",
    link: "",
  },
  {
    number: "[05]",
    title: "Empty",
    link: "",
  },
  {
    number: "[06]",
    title: "Empty",
    link: "",
  },
  {
    number: "[07]",
    title: "Empty",
    link: "",
  },
  {
    number: "[08]",
    title: "Empty",
    link: "",
  },
  {
    number: "[09]",
    title: "Empty",
    link: "",
  },
  {
    number: "[10]",
    title: "Empty",
    link: "",
  },
  {
    number: "[11]",
    title: "Empty",
    link: "",
  },
  {
    number: "[12]",
    title: "Empty",
    link: "",
  },
  {
    number: "[13]",
    title: "Empty",
    link: "",
  },
  {
    number: "[14]",
    title: "Empty",
    link: "",
  },
  {
    number: "[15]",
    title: "Empty",
    link: "",
  },
  {
    number: "[16]",
    title: "Empty",
    link: "",
  },
  {
    number: "[17]",
    title: "Empty",
    link: "",
  },
  {
    number: "[18]",
    title: "Empty",
    link: "",
  },
  {
    number: "[19]",
    title: "Empty",
    link: "",
  },
  {
    number: "[20]",
    title: "Empty",
    link: "",
  },
  {
    number: "[21]",
    title: "Empty",
    link: "",
  },
  {
    number: "[22]",
    title: "Empty",
    link: "",
  },
  {
    number: "[23]",
    title: "Empty",
    link: "",
  },
  {
    number: "[24]",
    title: "Empty",
    link: "",
  }
]

export default function Home() {
  return (
    <main>
      <div className='container'>
      <h1>WEB EFFECTS AND ANIMATIONS!/</h1>
        <div className='project-container'>
        {
          projects.map( (project, index) => {
            return <div key={index}>
              <h3>{project.number}</h3>
              <a href={project.link}>{project.title}</a>
              </div>
          })
        }
        </div>
        </div>
    </main>
  )
}
