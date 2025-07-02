// components/Projects.js
const projectsData = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1.',
      imageUrl: '/images/project1.png', // Replace with your image path
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Project 2',
      description: 'Details about project 2 and its features.',
      imageUrl: '/images/project2.png', // Replace with your image path
      liveUrl: '#',
      codeUrl: '#',
    },
    // Add more projects
  ];
  
  export default function Projects() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a href={project.liveUrl} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Live Demo</a>
                    <a href={project.codeUrl} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }