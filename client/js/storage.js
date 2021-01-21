const loadProjectsData = () => {
  console.log("Loading projects data...");

  fetch("/api/projects")
    .then((response) => response.json())
    .then((projects) => {
      // let's get the people into the page
      const viewElement = document.getElementById("content");
      let viewContent = "";
      for (project of projects) {
        // ugly way of creating DOM content (do better!)
        viewContent += `<article class="project" id="${project._id}">`;
        viewContent += `<div class="name">${project.name}</div>`;
        viewContent += `<div class="operations"><button class="btn-crud fa fa-trash delete"></button></div>`;
        viewContent += `<div class="introtext">${project.introtext}</div>`;
        viewContent += `<div class="text">${project.text}</div>`;
        viewContent += `</div>`;
        viewContent += "</article>";
      }
      viewElement.innerHTML = viewContent;

      // Handle CRUD buttons
      function buttonCRUDHandler(e) {
        console.log(e, this);

        const targetArticle = e.path.filter(
          (el) => el.tagName === "ARTICLE"
        )[0];

        console.log(targetArticle.id);

        fetch(`/api/projects/${targetArticle.id}`, { method: "DELETE" })
          .then((response) => response.json())
          .then((project) => {
            console.log(`${project.name} just got eliminated`);
          });
      }

      const buttonCRUDCollection = document.getElementsByClassName(
        "btn-crud"
      );

      // iterate over the buttons
      for (button of buttonCRUDCollection) {
        console.log(button);
        button.addEventListener("click", buttonCRUDHandler);
      }
    });
};
