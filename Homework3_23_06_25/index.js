<!DOCTYPE html>
<html lang="="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>GitHub Profile Viewer</title>
  <style>
    /*  Body styling - background, font, layout */
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(to right, #2c3e50, #3498db); /* Beautiful gradient background */
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      min-height: 100vh;
    }

    /*  Search box spacing */
    .search-box {
      margin-top: 20px;
    }

    /*  Input field style */
    input {
      padding: 10px;
      width: 300px;
      border-radius: 20px;
      border: none;
      font-size: 16px;
    }

    /*  Card to display user info */
    .card {
      margin-top: 30px;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.1); /* Light transparent */
      border-radius: 15px;
      text-align: center;
      width: 350px;
      box-shadow: 0 0 15px rgba(0,0,0,0.3); /* shadow effect */
    }

    /*  Profile image style */
    .profile-img {
      width: 100px;
      border-radius: 50%;
      border: 3px solid #00d4ff;
      margin-bottom: 10px;
    }

    /*  Badges container */
    .badges {
      display: flex;
      justify-content: space-around;
      margin: 10px 0;
    }

    /* 🏷 Each badge style */
    .badge {
      background-color: #00d4ff;
      color: black;
      padding: 5px 10px;
      border-radius: 15px;
      font-weight: bold;
      font-size: 12px;
    }

    /*  GitHub link button */
    .link-btn {
      display: inline-block;
      background-color: white;
      color: black;
      padding: 8px 12px;
      margin-top: 10px;
      border-radius: 20px;
      text-decoration: none;
      font-weight: bold;
    }

    .link-btn:hover {
      background-color: #00d4ff;
    }

    /*  Repo list style */
    .repos ul {
      padding-left: 20px;
      font-size: 13px;
      text-align: left;
    }
  </style>
</head>
<body>

  <!--  Title -->
  <h1>GitHub Profile Viewer</h1>

  <!--  Input box for GitHub username -->
  <div class="search-box">
    <input type="text" id="username" placeholder="Enter GitHub username and press Enter">
  </div>

  <!--  Profile card container -->
  <div class="card" id="profileCard">
    <p>Type a GitHub username and press Enter 👇</p>
  </div>

  <script>
    //  Get the input box and card element
    const input = document.getElementById("username");
    const card = document.getElementById("profileCard");

    /**
     *  fetchGitHubProfile - Fetch profile and repos using Fetch API
     * @param {string} username - GitHub username entered by user
     */
    async function fetchGitHubProfile(username) {
      try {
        // Step 1: Fetch profile data from GitHub API
        const profileResponse = await fetch(`https://api.github.com/users/${username}`);

        // If the user is not found, show error
        if (!profileResponse.ok) throw new Error(" User not found!");

        // Convert profile response to JS object
        const user = await profileResponse.json();

        // Step 2: Fetch user's repos
        const repoResponse = await fetch(user.repos_url);
        const repos = await repoResponse.json(); // array of repos

        // Step 3: Call function to display profile
        showProfile(user, repos.slice(0, 5)); // Show only first 5 repos
      } catch (error) {
        // 🛑 Show error in the profile card
        card.innerHTML = `<p style="color: red;">${error.message}</p>`;
      }
    }

    /**
     *  showProfile - Display user profile and repos on screen
     * @param {object} user - GitHub profile object
     * @param {array} repos - List of user's public repos
     */
    function showProfile(user, repos) {
      // Step 1: Create repo list HTML
      let repoList = `<div class="repos"><strong>Recent Repos:</strong><ul>`;
      repos.forEach(repo => {
        repoList += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
      });
      repoList += `</ul></div>`;

      // Step 2: Build profile card content
      card.innerHTML = `
        <img src="${user.avatar_url}" alt="Avatar" class="profile-img" />
        <h2>${user.name || user.login}</h2>
        <p><strong>Bio:</strong> ${user.bio || "No bio available"}</p>
        <p><strong>Location:</strong> ${user.location || "Not mentioned"}</p>

        <div class="badges">
          <div class="badge">Repos: ${user.public_repos}</div>
          <div class="badge">Followers: ${user.followers}</div>
          <div class="badge">Following: ${user.following}</div>
        </div>

        <a href="${user.html_url}" target="_blank" class="link-btn">Visit GitHub</a>
        ${repoList}
      `;
    }

    /**
     *  Listen for Enter key to start search
     */
    input.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        const username = input.value.trim(); // remove spaces
        if (username !== "") {
          fetchGitHubProfile(username); // call main function
        }
      }
    });
  </script>
</body>
</html>
