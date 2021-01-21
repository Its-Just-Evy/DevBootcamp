const init = () => {
  console.log("DOM loaded");

  function buttonHandler(e) {
    console.log(e, this);

    // do something based on button ID
    switch (this.id) {
      case "projects":
        // do something
        loadProjectsData();
        break;
      case "home":
      case "me":
      default:
        console.log(this.id);
    }

    // turn off all buttons
    for (button of buttonCollection) {
      button.classList.remove("active");
    }
    // make pressed button active
    this.classList.add("active");
  }

  // Handle main navigation buttons
  const buttonCollection = document.getElementsByClassName("btn");

  // iterate over the buttons
  for (button of buttonCollection) {
    console.log(button);
    button.addEventListener("click", buttonHandler);
  }
};

window.addEventListener("load", init);
