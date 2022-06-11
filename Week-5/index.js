//Async and Await approach
async function displayCommits() {
  const user = await getUser(1);
  const repos = await getRepositories(user.gitHubUsername);
  const commits = await getCommits(repos);
  console.log(commits);
}
displayCommits();


/* creating the function  to get the user{} object from the database. */
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
  });
}

/* function will retrieve all repositories belongs to username. */
function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);  
  });
}

/* function will retrieve all commits belongs to repo. */
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling API...');
      resolve(['commit']);
    }, 2000);
  });
}