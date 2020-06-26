
This works properly in Gatsby while in develop mode.  Upon a build, the Canvas does not display and the Dev Tools console will show an error:


Uncaught (in promise) Error: page resources for / not found. Not rendering React
    at production-app.js:128


----


Changing <a.mesh> to <mesh> will remove this error.

