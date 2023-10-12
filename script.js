console.clear();
console.log("sanity check");
//get this element from the html file,in this case it is a span element
const peopleInSpace = document.querySelector('[data-js="people-in-space"]');

console.log(peopleInSpace);

// give the function a name
async function fetchSpaceData() {
  //create a variable with the API you want to use to fetch data
  const response = await fetch("http://api.open-notify.org/astros.json");
  console.log(response);

  //json()function is like a magic decoder that can turn special text into a regular JavaScript object
  const data = await response.json();
  console.log("data:", data);
  // people in space is a variable for the span tag,text content should show the content in the span tag,a finally the data we recieved from the API,since it is a number,we have to use the .number after the variable data in which we stored the repsonse.json from the API
  peopleInSpace.textContent = data.number;
}
//must always call the function
fetchSpaceData();
