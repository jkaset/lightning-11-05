console.log("Welcome to the main module")
const colorArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

const colorList = (array) => {
  
  const contentTarget = document.querySelector(".rainbow")
  contentTarget.innerHTML = `
  <ul>
    ${array.map(color => `<li>${color}</li>`).join("")}
  </ul>
  `
  console.log(contentTarget)
}

colorList(colorArray)
