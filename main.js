var x = null;
projectsObj = [
  {
    name: "Zart Message",
    gitHubImage: "./image/Octocat.png",
    gitHub: "https://github.com/adibfazli/Zart-Message",
    link: "https://zart-message.herokuapp.com/login",
    image: "./image/zart.jpg",
    technology: "./image/MERN.png",
  },
  {
    name: "Junkie",
    gitHubImage: "./image/Octocat.png",
    gitHub: "https://github.com/adibfazli/junkie",
    link: "https://collection-junkie.herokuapp.com/",
    image: "./image/junkie.jpg",
    technology: "./image/python.png",
  },
  {
    name: "You Pick",
    gitHubImage: "./image/Octocat.png",
    gitHub: "https://github.com/adibfazli/youPick",
    link: "https://youpick2.herokuapp.com/",
    image: "./image/youpick.jpg",
    technology: "./image/MEN.png",
  },
  {
    name: "Minesweeper",
    gitHubImage: "./image/Octocat.png",
    gitHub: "https://github.com/adibfazli/Minesweeper",
    link: "https://adibfazli.github.io/Minesweeper/",
    image: "./image/minesweeper.jpg",
    technology: "./image/jsHtmlCss.png",
  },
  {
    name: "Minesweeper",
    gitHubImage: "./image/Octocat.png",
    gitHub: "https://github.com/adibfazli/Minesweeper",
    link: "https://adibfazli.github.io/Minesweeper/",
    image: "./image/minesweeper.jpg",
    technology: "./image/jsHtmlCss.png",
  },
  {
    name: "Minesweeper",
    gitHubImage: "./image/Octocat.png",
    gitHub: "https://github.com/adibfazli/Minesweeper",
    link: "https://adibfazli.github.io/Minesweeper/",
    image: "./image/minesweeper.jpg",
    technology: "./image/jsHtmlCss.png",
  },
];

// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
//     document.querySelector(".aboutDiv").style.visibility = "visible";
//   } else {
//     document.querySelector(".aboutDiv").style.visibility = "hidden";
//   }
// }

const container = document.querySelector(".appContainer");
var navStatus;
// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> Navbar content handler
                        // ABOUT
var aboutButton = document.querySelector(".about");
aboutButton.addEventListener("click", about);
function about(evt) {
  while (container.firstChild) { container.removeChild(container.firstChild); }
  navStatus = "about";
  navBarButtonLight();
  const aboutMe = document.createElement("p");
  aboutMe.innerHTML = "\"I am a full-stack developer with computer science background. Big fan of Off-roading and adventure who is motivated and self-starter with a persistent drive to succeed. I was a chemical engineer major until I found the love of my life (Programing world) when I took a computer programing class by mistake, and ever since then EAT CODE SLEEP REPEAT."
  container.appendChild(aboutMe);
}
//_________________________________________________________________________________________
                        // PROJECTS
var projectsButton = document.querySelector(".projects");
  projectsButton.addEventListener("click", projects);
function projects(evt) {
  while (container.firstChild) { container.removeChild(container.firstChild); }
  navStatus = "projects";
  navBarButtonLight();
  projectsObj.forEach((element) => {
    // <><><><><><><><><><><><><><><><><><><><><><><> INFO
    const info = document.createElement("div");
    info.classList.add("appInfoDiv");

    const name = document.createElement("a");
    name.classList.add("projectName");
    name.textContent = `${element.name}`;
    name.setAttribute("href", `${element.link}`);
    info.appendChild(name);

    // <><><><><><><><><><><><><><><><><><><><><><><> SHOT
    const shot = document.createElement("div");
    shot.classList.add("postShotDiv");
    const projectShot = document.createElement("img");
    projectShot.setAttribute("src", `${element.image}`);
    projectShot.classList.add("postImg");
    shot.appendChild(projectShot);
    info.appendChild(shot);
    // <><><><><><><><><><><><><><><><><><><><><><><>

    const gitA = document.createElement("a");
    const gitImg = document.createElement("img");
    gitImg.classList.add("gitImg");
    gitImg.setAttribute("src", `${element.gitHubImage}`);
    gitImg.setAttribute("href", `${element.gitHub}`);
    gitA.appendChild(gitImg);

    const gitHubLink = document.createElement("a");
    const gitDiv = document.createElement("div");
    gitDiv.classList.add("gitDiv");
    gitHubLink.classList.add("gitHubLink");
    gitHubLink.textContent = "GitHub";
    gitHubLink.setAttribute("href", `${element.gitHub}`);
    gitDiv.appendChild(gitImg);
    gitDiv.appendChild(gitHubLink);
    info.appendChild(gitDiv);

    const stack = document.createElement("img");
    stack.classList.add("stack");
    stack.setAttribute("src", `${element.technology}`);
    info.appendChild(stack);
    // <><><><><><><><><><><><><><><><><><><><><><><> POST
    post = document.createElement("div");
    post.classList.add("post");
    post.appendChild(info);
    // post.appendChild(shot);
    container.appendChild(post);
  });
}
//_________________________________________________________________________________________
                                // CONTACT
var contactButton = document.querySelector(".contact");
contactButton.addEventListener("click", contact);
function contact(evt) {
  while (container.firstChild) { container.removeChild(container.firstChild); }
  navStatus = "contact";
  navBarButtonLight();
  const test = document.createElement("p");
  test.innerHTML = "contact";
  container.appendChild(test);
}
//_________________________________________________________________________________________
                                // RESUME
var resumeButton = document.querySelector(".resume");
resumeButton.addEventListener("click", resume);
function resume(evt) {
  while (container.firstChild) { container.removeChild(container.firstChild); }
  navStatus = "resume";
  navBarButtonLight();
  const test = document.createElement("p");
  test.innerHTML = "resume";
  container.appendChild(test);
}
//_________________________________________________________________________________________
function navBarButtonLight (){
    navStatus == "about" ? aboutButton.setAttribute("id" , "mystyle") : aboutButton.removeAttribute("id");
    navStatus == "projects" ? projectsButton.setAttribute("id" , "mystyle") : projectsButton.removeAttribute("id");
    navStatus == "contact"  ? contactButton.setAttribute("id" , "mystyle") : contactButton.removeAttribute("id");
    navStatus == "resume"   ? resumeButton.setAttribute("id" , "mystyle") : resumeButton.removeAttribute("id");
}