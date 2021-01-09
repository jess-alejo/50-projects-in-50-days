const projectsContainer = document.getElementById("projects-container")

function showProjects() {
  for (let index = 0; index < projects.length; index++) {
    const data = projects[index]
    const number = (index + 1).toString().padStart(3, "0")
    const project = document.createElement("div")
    project.classList.add("project")

    project.innerHTML = `
    <div class="preview">
      <img src="${data.previewUrl} alt="${data.title}">
    </div>
    <div class="info">
      <h4 class="title">${data.title}</h4>
      <p class="description">
        ${data.description}
      </p>

    </div>
    <div class="footer">
      <small class="number">#${number}</small>
      <a href="${data.url}" class="project-link" target="_blank">Show</a>
    </div>
    `

    projectsContainer.appendChild(project)
  }
}

showProjects()
