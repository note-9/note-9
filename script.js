document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { name: "LogWatcher", description: "A real-time log monitoring and alert system using FastAPI." },
        { name: "BeatSage AI", description: "Audio genre and mood classifier using machine learning." },
        { name: "SnekAPI", description: "Multiplayer snake game backend with API control." }
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
        projectList.appendChild(li);
    });
});
