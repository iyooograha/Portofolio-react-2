import ProjectCard from "../component/ProjectCard";

const projects = [
    {
        id: 1,
        title: "Web Portofolio-Pribadi",
        desc: "aplikasi yang menampilkan Portofolio digital",
        image: `/image/nope.png`,
        tech:["React", "React-Router", "CSS"],
        githubUrl: "https://github.com//",
        demoUrl:"portofolio-satrio.netlify.app",
    },
    {
       id: 2,
        title: "Aplikasi Quizz Sederhana",
        desc: "aplikasi tes soal untuk ulangan.",
        image: `/image/quizz.png`,
        tech: ["React", "UseState", "Localstorage"],
        githubUrl: "https://github.com/username/catatn.app",
        demoUrl: "https:quizz-rafi.netlify.app",
    },
       

];

function Projects() {
    return (
        <section className="projects">
            <h2>Projek Saya</h2>
            <div className ="project-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.id} {...p} />
                ))}
            </div>
        </section>
    );
}

export default Projects;