const URL = "https://official-joke-api.appspot.com/random_joke";

async function getRandomJoke() {
  const data = await axios
    .get(URL)
    .then((response) => response)
    .catch((error) => error);

  return data;
}

async function clickHandle() {
  const Response = await getRandomJoke();
  const Data = Response.data;
  const Setup = Data["setup"];
  const Punchline = Data["punchline"];

  document.getElementById("setup").innerHTML = Setup;
  document.getElementById("punchline").innerHTML = Punchline;
}
