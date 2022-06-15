// //Async and Await approach
// async function displayCommits() {
//   const user = await getUser(1);
//   const repos = await getRepositories(user.gitHubUsername);
//   const commits = await getCommits(repos);
//   console.log(commits);
// }
// displayCommits();



// generator function* () approach.
// generator function* ().
mentalMaker(function* () {
  const id = 1;
  const user = yield getUser(id);//returns UserObject{}
  const repositories = yield getRepositories(user.gitHubUsername); //returns array of Repositories.
  const commits = yield getCommits(repositories); //returns array of commits.
  console.log(commits); //prints commits.
});

function mentalMaker(generator) {
  const myGenerator = generator();
  const execute_generator = myGenerator.next(); // returns Iterator Object --value = Pending Promise.
  const promise = execute_generator.value;
  promise.then(value => { 
    console.log(`User = `, value);
    const execute_generator2 = myGenerator.next(value);
    /* returns { id: id, gitHubUsername: 'mosh' } to store in user at line 16 and resumes generator function to continue execution.
       in this step, here 3 things happens-
        1. returning the result of the value = { id: id, gitHubUsername: 'Pradyumna-Hegde' }
        2. resuming the generator() function to continue execution and
        3. Line 17 executes and returns generator object containing Pending Promise Object.
    */

    const promise2 = execute_generator2.value;
    promise2.then(value => {
      console.log(`Array of repositories = `, value);
      const execute_generator3 = myGenerator.next(value);
       /* returns [ 'repo1', 'repo2', 'repo3' ] to store in repositories at line 17 and resumes generator function to continue execution.
       in this step, here also 3 things happens-
        1. returning the result of the value --[ 'repo1', 'repo2', 'repo3' ]
        2. resuming the generator() function to continue execution and
        3. Line 18 executes and returns generator object containing Pending Promise Object.
    */

      const promise3 = execute_generator3.value;
      promise3.then(value => {
        // console.log(`Array of Commits = `, value);
        myGenerator.next(value);
      });
    });
  });
}


















/* creating the function  to get the user{} object from the database. */
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'Pradyumna-Hegde' });
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
      resolve(['commit-1', 'commit-2', 'commit-3']);
    }, 2000);
  });
}