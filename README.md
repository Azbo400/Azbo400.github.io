# ryanarnouk.github.io

This is my personal webpage that is up to date for 2019.

Developed with React.js.

## Important: Building/Updating Project
### Method #1
To push to repo, simply build the project and copy the build folder into the master branch to push for the user organization GitHub pages.
### Method # 2
1. Build the project to gh-pages normally using `npm run deploy`, however since this is a github user page we want to make sure that we end up using the master branch as the final built folder. 
2. Delete the master branch completely `git push origin --delete master`. Since we already have previous code on the master branch we can simply delete it all together to push a new build to the master branch. 
3. Simply on GitHub make a new branch `master` as a clone from gh-pages and you should be good to go. 

**Important: All work must be done on the the `source` branch, master is for the build** 