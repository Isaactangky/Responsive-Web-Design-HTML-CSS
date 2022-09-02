import data from './data.json'  assert {type: 'json'};
console.log(data.crew)
const bodyEle = document.querySelector("body");
let fileName = location.href.split("/").splice(-1);
console.log(fileName);

// add  nav bar
const template = `
<!-- Header Section -->
  <header class="main-header">
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
    </div>
    <div id="rectangle"></div>
    <div class="nav">
      <nav class="nav-bar">
        <ul>
          <li >
            <a href="index.html">
              <span>00</span> Home</li>
            </a>
          <li >
            <a href="destination-moon.html">
              <span>01</span> Destination
            </a>
          </li>
          <li>
            <a href="crew-commander.html">
              <span>02</span> Crew
            </a>
          </li>
          <li>
            <a href="technology-vehicle.html">
              <span>03</span> Technology
            </a>
          </li>
        </ul>
      </nav>
    </div> 
  
  </header>
`
bodyEle.innerHTML = template + bodyEle.innerHTML;