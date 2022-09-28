const App = document.createElement("div")
App.className = "container"

const row1 = document.createElement("div")
row1.className = "row"
const h1 = document.createElement("h1")
h1.innerHTML = "News"
row1.append(h1)

const row2 = document.createElement("div")
row1.className = "row"
const h4 = document.createElement("h4")
h4.innerHTML = "Vestibulum hendrerit mollis tincidunt"
const p = document.createElement("p")
p.innerHTML =
  "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at."
row2.append(h4)
row2.append(p)

App.appendChild(row1)
App.appendChild(row2)

const container = document.getElementById("root")
container.appendChild(App)
