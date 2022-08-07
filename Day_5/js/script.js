const vue = new Vue({
  el: '#app',
  data: {
    chapter: 'List Rendering with v-for',
    listRenderingPara1:
      'List rendering is one of the most commonly used practices in front-end web development. Dynamic list rendering allows us to present a series of similarly grouped information in a concise and friendly format to the user. In almost every web application we use, we can see lists of content in numerous areas of the app.',
    vForDirectivePara1: `The v-for directive is used to render a list of items based on a data source. The directive can be used on a template element and requires a specific syntax along the lines of item in items, where items is a data collection and item is an alias for every element that is being iterated upon:`,
    imageVForSyntax: './img/v-for-syntax.png',
    vForDirectivePara2: `Let’s see a very simple example of this in practice. Assume we have a template currently displaying a list of static numbers in ascending order:`,
    imageVForPara2: './img/v-for-para2.png',
    vForDirectivePara3: `If we had the list of numbers available to us in a collection (e.g. an array) in our Vue instance:`,
    imageVForPara3: './img/v-for-para3.png',
    vForDirectivePara4: `We could avoid repeating the <li> element in the template and instead have the v-for directive do the work for us. Since numbers is the array we’ll be iterating over, number would be an appropriate alias to use. We’ll add the v-for directive on the element we want repeated - the <li> element:`,
    imageVForPara4: './img/v-for-para4.png',
    vForDirectivePara5:
      'We’re using the Mustache syntax to bind the number alias on to the text content of the repeated element since we’re interested in only displaying the number values from the array.',
    vForDirectivePara6:
      'At this moment, the v-for directive would display the list of static numbers from the numbers data array:',
    vForDirectivePara7: `In addition to helping make the template be more D.R.Y, the v-for directive is helpful since our application is now entirely dynamic. Regardless of how the numbers array changes over time, our set up will always render all the numbers in the collection in the same markup we expect.`,
    theKeyAttributePara1: `It’s common practice to specify a key attribute for every iterated element within a rendered v-for list. This is because Vue uses the key attribute to create unique bindings for each node’s identity.`,
    theKeyAttributePara2: `If there were any dynamic UI changes to our list (e.g. the numbers list gets randomly reshuffled), Vue will (by default) opt towards changing data within each element instead of moving the DOM elements accordingly. This won’t be an issue in most cases. However, in certain instances where our v-for list depends on DOM state and/or child component state, this can cause some unintended behavior.`,
    theKeyAttributePara3: `Let’s see an example of this. Instead of rendering just the number content within each element, let’s render both the number value and an input element for each number in the numbers array.`,
    imageKeyAttributePara3: './img/key-para3.png',
    theKeyAttributePara4: `Assume we wanted to introduce another new feature into our app. This feature would involve allowing the user to shuffle the list of numbers randomly. To do this, we’ll first include a “Shuffle!” button in our HTML template right after the unordered list:`,
    imageKeyAttributePara4: './img/key-para4.png',
    theKeyAttributePara5: `We’ve attached a click event listener on the button element to call a shuffle method when triggered. We've also introduced a new <script> tag in our template that has a src pointing to a CDN of the Lodash utility library. We'll be using Lodash to help create the shuffle functionality in our list.`,
    theKeyAttributePara6: `In our Vue instance; we’ll create the shuffle method responsible for randomly shuffling the numbers collection in the instance. To avoid having to create a random shuffle of our own, we’ll use the Lodash _.shuffle method to achieve this:`,
    imageKeyAttributePara6: './img/key-para6.png',
    theKeyAttributePara7: `Lodash is a JavaScript utility library that provides a large collection of additional methods to help interact with arrays, objects, numbers, strings, etc. In our application, we're simply using the _.shuffle method which shuffles an array using a version of the Fisher-Yates algorithm.`,
    theKeyAttributePara8: `If we save our changes, refresh the app, and click the shuffle button a few times; we’ll notice the numbers in the list get randomly assorted with each click.`,
    imageKeyAttributePara8: './img/numbers-list-no-shuffle.gif',
    theKeyAttributePara9: `Though each rendered list element contains its own displayed number and input field, when we shuffle the list - the number in the element is the only portion that gets shuffled. This is because since we haven’t opted to using the key attribute, Vue has not created unique bindings to each list item. As a result, when we’re aiming to reorder the list items, Vue takes the more performant saving approach to simply change (or patch) data in each element. Since the temporary DOM state (i.e. the inputted text) remains in place, we experience this potentially unintended mismatch.`,
    imageKeyAttributePara9: './img/patched-data-diagram.png',
    theKeyAttributePara10: `To avoid this; we’ll have to assign a key to every rendered element in the list. The key attribute for every element should be unique so we’ll restructure our numbers collection to be a series of objects with each object containing id and value properties:`,
    imageKeyAttributePara10: './img/key-para10.png',
    theKeyAttributePara11: `In the template, we’ll now reference number.value as the text content that would be rendered and we’ll use the v-bind directive to bind number.id as the key attribute for the v-for directive:`,
    imageKeyAttributePara11: './img/key-para11.png',
    theKeyAttributePara12: `Vue will now recognize each list element’s identity; and thus reorder the elements when we intend on shuffling the list. Give it a try here - type some information in a few input fields and click shuffle a few times.`,
    theKeyAttributePara13: `Should the key attribute always be used? It’s recommended. The Vue docs specify that the key attribute should only be omitted if:`,
    theKeyAttributePara13ListItems: [
      {
        id: 1,
        value:
          'We intentionally want the default manner of patching elements in place for performance reasons.',
      },
      { id: 2, value: 'Or the DOM content is simple enough.' },
    ],
    numbers: [
      { id: 1, value: 1 },
      { id: 2, value: 10 },
      { id: 3, value: 100 },
      { id: 4, value: 1000 },
      { id: 5, value: 10000 },
      { id: 6, value: 100000 },
    ],
  },
  methods: {
    shuffle() {
      this.numbers = _.shuffle(this.numbers);
    },
  },
});
