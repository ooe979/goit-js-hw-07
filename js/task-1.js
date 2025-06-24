const categoryTabl = document.querySelector("#categories");
const categoryTablItems = categoryTabl.querySelectorAll(".item");
console.log("Number of categories:", categoryTablItems.length);
categoryTablItems.forEach((item) => {
  //   const itemName = item.querySelector("h2").textContent;
  //   const itemElementsCalc = item.querySelectorAll("ul li").length;
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("ul li").length}`);
});
