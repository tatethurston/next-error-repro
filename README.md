# Change in rendered page output for serverside errors

This repo replicates a minimal demo of a behavior change starting in next 12.1. Compare the behaviors of next version 12.2.0, 12.2.1 and 12.2.5:

|version|observation|
--------|-------------
|12.2.0| Custom _error page renders: <div>Error encountered!</div>;|
|12.2.1-12.2.4| Infinite Loop|
|12.2.5| Custom _error page does not render: Application error: a client-side exception has occurred|

## Steps to replicate:

- Clone the repo
- Change `next` version in `package.json` to 12.2.0, 12.2.1 or 12.2.5
- Run `yarn` (using yarn classic - 1.x)
- Run `yarn build`
- Run `yarn start`
- Visit `localhost:3000`
