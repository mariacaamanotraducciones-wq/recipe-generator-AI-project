function displayRecipe(response) {
  console.log("recipe concocted");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let ingredientsImput = document.querySelector("#ingredients");
  let apiKey = "03e34f234b90fab95bd92od60988t445";
  let context =
    "You are a nutrition and cooking expert in low Fodmap diet. Your mission is to write a clear and short low Fodmap recipe in basic HTML, and show the recipe directly and do not show the HTML. Make sure to follow user instructions. Sign the recipe with 'Your AI Chef' inside a <strong> element";
  let prompt = `User instructions: generate a low Fodmap recipe with ${ingredientsImput.value} `;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("concocting recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`context: ${context}`);
  axios.get(apiURL).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
