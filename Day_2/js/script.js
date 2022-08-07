var day_2 = new Vue({
  el: '#app',
  data: {
    vueInstance:
      'To reiterate what we’ve learned, the Vue instance is the starting point of Vue applications and contains a data property that allows us to bind data from our instance and on to the template. In Vue, information within the data property of an instance is known to be reactive. This means that if we manage to modify or change the data values of a Vue instance, Vue will recognize this change and re-render the template to show the updated data values.',
    vueMethods:
      'The methods property of a Vue instance allows us to define methods bound to that instance that behave like normal JavaScript functions (i.e. are evaluated only when called). In these methods, we’re able to directly change data values kept in our instance.',
    vueEventHandling:
      'With our method prepared, we’ll need to call the method from our template when the user clicks the "Change Greeting" button. To handle this interaction, we’ll use Vue’s v-on directive. A Vue directive is essentially a special type of command that can be added to HTML content.',
    vOnDirective:
      'The v-on directive is one of the many native Vue directives available to us in the template. To be able to listen to the button click event and run the instance changeGreeting() method, we’ll attach the v-on directive to a click listener on the button element.',
    greeting: 'Hello, This is Day 2 of learning Vue JS.',
    user: 'Bishal Thapaliya',
    city: 'Grenoble',
    country: 'France',
  },
  methods: {
    changeGreeting() {
      this.greeting =
        this.greeting === 'Hello, This is Day 2 of learning Vue JS.'
          ? 'Keep learning!!!'
          : 'Hello, This is Day 2 of learning Vue JS.';
    },
  },
});
