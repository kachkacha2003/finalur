"user strict";
// dyamic scroll up button (appears when scroll height is more then 20% of page height)
function scrollUp() {
  const scrollStep = -window.scrollY / (500 / 10);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}


const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    if (window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
      document.addEventListener("wheel", preventScroll);
    }
  } else {
    if (window.innerWidth < 768) {
      document.body.style.overflow = "auto";
      document.removeEventListener("wheel", preventScroll);
    }
  }
});
function preventScroll(e) {
  e.preventDefault();
}
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    document.body.style.overflow = "auto";
    document.removeEventListener("wheel", preventScroll);
    checkbox.checked = false;
  } else {
    if (checkbox.checked) {
      document.body.style.overflow = "hidden";
      document.addEventListener("wheel", preventScroll);
    }
  }
});


//pricing page function to change price from month to year and back
const annual = document.getElementById("annual_type");
const annual1 = document.getElementById("annual1");
const annual2 = document.getElementById("annual2");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");
const planperiods = document.querySelectorAll(".plan_period");

function change() {
  const planperiods = document.querySelectorAll(".plan_period");
  if (annual.checked) {
    annual1.classList.remove("choosed");
    annual2.classList.add("choosed");
    price1.innerHTML = "$190.00";
    price2.innerHTML = "$390.00";
    price3.innerHTML = "$990.00";
    planperiods.forEach((planperiod) => {
      planperiod.innerHTML = "per year";
    });
  } else {
    annual1.classList.add("choosed");
    annual2.classList.remove("choosed");
    price1.innerHTML = "$19.00";
    price2.innerHTML = "$39.00";
    price3.innerHTML = "$99.00";
    planperiods.forEach((planperiod) => {
      planperiod.innerHTML = "per month";
    });
  }
}

const fixedButton = document.getElementById("fixed-button");
const pageHeight = document.documentElement.scrollHeight;
const scrollThreshold = pageHeight * 0.2;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > scrollThreshold) {
    fixedButton.style.display = "block";
  } else {
    fixedButton.style.display = "none";
  }
});

// Async function to fetch data from the GitHub API
async function fetchGitHubData() {
  try {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    const githubDataDiv = document.getElementById('github-data');

    // Create a section for each user
    data.forEach(user => {
      const section = document.createElement('section');
      section.classList.add('user-section');

      // Create a heading for the user's name
      const heading = document.createElement('h2');
      heading.textContent = user.login;
      section.appendChild(heading);

      // Create a link to the user's profile
      const link = document.createElement('a');
      link.href = user.html_url;
      link.target="_blank"
      link.textContent = 'GitHub Profile';
      section.appendChild(link);

      // Append the section to the main div
      githubDataDiv.appendChild(section);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the fetchGitHubData function
fetchGitHubData();
