var day_1 = new Vue({
  el: '#app',
  data: {
    what: 'Vue is an open source JavaScript framework geared towards building user interfaces, created by Evan You. If we take a glance at the front page of the main website, we can see that Vue is said to be the progressive JavaScript framework that is approachable, versatile, and performant. Let’s explain each of these points:',
    progressive:
      'Vue is recognized to be progressive since it can often be scaled down as well as it scales up. For very simple use cases, you can use Vue like you use jQuery - by dropping a single script tag:',
    script: '<script src="https://cdn.jsdelivr.net/npm/vue"></script>',
    approachable:
      'Vue is understood to be approachable since as long as you know standard HTML, CSS, and JS; you’re able to start working with Vue right away to build more complex web applications.',
    versatile:
      'The Vue framework is recognized to be versatile since the Vue library itself fits neatly within an ecosystem of tools that make up the entire Vue framework. These tools are the:',
    versatileData: [
      {
        text: 'The vue-cli (i.e. Vue Command Line Interface) which allows for rapid prototyping and set-up of Vue-Webpack applications.',
      },
      {
        text: 'Vue-router which helps us introduce client side routing into our application with relative ease.',
      },
      {
        text: 'Vuex, the Elm-inspired Flux-like library that helps facilitate how data is managed in an application.',
      },
      {
        text: 'Vue-test-utils, the testing utility library that introduces various helpers and function to make testing Vue components a lot easier. Each of the above tools was created and is currently maintained by the Vue core team. This makes integrating and using them in Vue applications a relatively seamless experience. We’ll be discussing each of these libraries at various points throughout this series.',
      },
    ],
    performant: [
      {
        text: 'Finally, Vue is seen to be performant since it takes advantage of the virtual DOM for incredibly fast re-render times. The Vue core library is also built to require minimal effort towards performance optimization.',
      },
      {
        text: 'In the simplest way possible, we can get started working with Vue by placing a script tag in an HTML file that loads the latest version of Vue from a Content Delivery Network (CDN). We can also reference a JavaScript file (named script.js for example) which would be the file where our Vue JavaScript code lives:',
      },
      {
        text: 'With the Vue library available, we’re able to create a new Vue application. We’ll create this application by declaring the Vue Instance - which is the heart of a Vue application - in the main.js file. The Vue instance is created by declaring the new Vue({}) constructor:',
      },
      {
        text: 'A Vue instance accepts an options object which can contain details of the instance such as its template, data, methods, etc. Root level instances allow us to specify the DOM element with which the instance is to be mounted/attached to, like so:',
      },
      {
        text: 'To have the greeting data value be presented in the template, we’ll first need to declare the element that our Vue app is to be mounted on (i.e. the element with the id of app):',
      },
      {
        text: 'We’ll now be able to display the value of the greeting property in our Vue instance on the HTML template. To bind data values as the text content of elements, we’ll use the Mustache Syntax:',
      },
    ],
  },
});
