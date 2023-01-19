const App = document.createElement("div")
const h1 = document.createElement("h1")
h1.innerHTML = "Whale Weigh Platform"
h1.className = "text-2xl font-semibold mb-6"
const whale = document.createElement("div")
whale.className = "border border-gray-300 p-4 mb-3 prose"
const h3 = document.createElement("h3")
h3.innerHTML = "Skiller Whale"
const p = document.createElement("p")
p.innerHTML =
  "The skiller whale, also known as Ada, is a species of sub-Arctic programmer. Known for its love of learning, the skiller whale is chiefly recognisable by its penchant for bad maritime puns."
whale.append(h3)
whale.append(p)
App.appendChild(h1)
App.appendChild(whale)
const container = document.getElementById("root")
container.appendChild(App)
