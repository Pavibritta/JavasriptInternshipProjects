const gitBtn = document.querySelector(".gitBtn");
const inputEl = document.querySelector(".inputValue");
const urlel = document.querySelector(".url");

gitBtn.addEventListener("click", () => {
  const username = inputEl.value.trim();
  if (!username) {
    alert("Please Enter Profile Name");
    return;
  }
  const URL = `https://api.github.com/users/${username}`;
  console.log(URL);
  let dataFromgitapi = [];
  const gituserData = async () => {
    try {
      const response = await fetch(URL);
      console.log(response);
      const data = await response.json();

      console.log(data);
      dataFromgitapi.push(data);
      username = "";
    } catch (error) {
      console.log(error);
    }
  };
  gituserData().then(() => {
    const outputDiv = document.querySelector(".outputDiv");
    const data = dataFromgitapi[0];
    console.log(data.message);

    if (data.message == "Not Found") {
      outputDiv.innerHTML = `<div class="max-w-sm w-full bg-white rounded-2xl shadow-lg px-6 py-2">
        <P class="text-lg text-red-600">Profile Not Found</P>

      </div>`;
    } else {
      outputDiv.innerHTML = `<div class="max-w-sm w-full bg-gray-700 rounded-2xl shadow-lg p-6">
        <!-- Avatar -->
        <div class="flex justify-center">
          <img
            src=${data.avatar_url}
            alt="GitHub Avatar"
            class="w-28 h-28 rounded-full border-4 border-gray-200"
          />
        </div>

        <!-- User Info -->
        <div class="text-center mt-4">
          <h2 class="text-xl font-semibold text-gray-50">${data.login}</h2>
          <p class="text-gray-100 text-sm">${data.bio}</p>
        </div>

        <!-- Stats -->
        <div class="flex justify-around mt-6 text-center">
          <div>
            <p class="text-lg font-bold text-gray-100">${data.public_repos}</p>
            <p class="text-xs text-orange-300 font-bold">Repos</p>
          </div>
          <div>
            <p class="text-lg font-bold text-gray-100">${data.followers}</p>
            <p class="text-xs text-blue-300 font-bold">Followers</p>
          </div>
          <div>
            <p class="text-lg font-bold text-gray-100">${data.following}</p>
            <p class="text-xs text-purple-300 font-bold">Following</p>
          </div>
        </div>

        <!-- Profile Button -->
        <div class="mt-6">
          <a
            href=${data.html_url}
            target="_blank"
            class="block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-800 transition cursor-pointer"
          >
            View GitHub Profile
          </a>
        </div>
      </div>`;
    }
  });
});
