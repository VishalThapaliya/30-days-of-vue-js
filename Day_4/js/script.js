const day_4 = new Vue({
  el: '#app',
  data: {
    chapterDescription: `A Vue directive is essentially a special type of command that can be added to HTML content and often appears as a prefixed HTML attribute. We’ll first revisit the v-on directive since we’ve already used it in one of the earlier articles.`,
    eventHandling: 'Event Handling with v-on',
    eventHandlingPara1: `The v-on directive can be used to create event listeners within the DOM to enable us to do something when a particular event happens.`,
    eventHandlingPara2: `Though inline JavaScript works just as well, calling methods bound to the instance is often preferable when intended functionality change gets more complicated. It's important to keep in mind that the v-on directive can be used with virtually any native DOM event:`,
    greeting: 'Welcome back on day 4 of Vue JS.',
    alertMessage: '',
    attributeBinding: 'Attribute binding with v-bind',
    attributeBindingPara1: `The simplest form of data binding in Vue is the Mustache Syntax (i.e. double curly braces) which is used to bind data values on to text content of HTML elements.`,
    attributeBindingPara2: `In the code samples prepared previously, we used the Mustache Syntax to bind properties such as: greeting, chapterDescription, eventHandling, etc. defined in our instance on to the template.`,
    attributeBindingPara3: `We’re unable to use the Mustache syntax to bind data to standard HTML attributes like href, id, src, etc. To bind HTML attributes, Vue provides the native v-bind directive.`,
    attributeBindingPara4: `Here’s an example of using the v-bind directive to bind a data property (named vueImage) to the src attribute of an img element`,
    vueImage: './img/vue-js.jpg',
    conditionalRendering: 'Conditional rendering with v-if (or v-show)',
    conditionalRenderingPara1: `Oftentimes, we may find ourselves interested in conditionally rendering content based on the value of an expression. In Vue, we can achieve this with the help of the v-if and v-show directives.`,
    conditionalRenderingPara2: `The changeCity() method first checks if the city data value is 'Grenoble', if so - it changes the city to 'Edinburgh' and the cityImage to a hosted image of the Edinburgh in Scotland. If the city information has been already been changed, the changeCity() information simply reverts the information back to Grenoble.`,
    conditionalRenderingPara3: `If we wanted to render some content in certain conditions (e.g. when city === 'Grenoble'), the v-if or v-show directive would prove useful. Since I (Bishal) live in Grenoble, we can change the text content in the template to better reflect my presence. For example, we’ll use two separate <p> tags each containing a v-if directive to display the appropriate description text content`,
    conditionalRenderingPara4: `The text content of the first <p> tag that says by Bishal Thapaliya who lives in Grenoble, France will only render if the city property is equal to 'Grenoble'. If city is equal to 'Edinburgh', the second <p> tag will instead only be displayed and say by Bishal Thapaliya who wishes to visit Edinburgh, Scotland:`,
    conditionalRenderingPara5: `Vue also provides the v-else directive to describe an else block and the v-else-if directive to describe an else-if-block. Instead of the v-if directive, we could also use the v-show directive to conditionally render content:`,
    conditionalRenderingPara6: `Though they achieve a similar outcome, the v-if and v-show directives differ from one another. The v-if directive does not render the element only until the stated condition is true. The v-show directive, on the other hand, always renders the element but controls the CSS display property depending on whether the stated condition is true.`,
    conditionalRenderingPara7: `The v-if directive is usually preferred as long as you don’t need the element to always be present in the DOM and you don’t expect the toggling between displaying/hiding the element to happen very often. If we expect the element to toggle often at runtime - the v-show directive would be more appropriate.`,
    helloMessage: 'This is a hello message',
    user: 'Bishal Thapaliya',
    city: 'Grenoble',
    country: 'France',
    cityImage: './img/img-grenoble.jpg',
    cityImageAlt: 'Grenoble image',
    shorthandSyntax: `Shorthand syntax with v-on and v-bind`,
    shorthandSyntaxPara1: `Vue provides unique shorthand syntax only for the commonly used v-bind and v-on directives. The v-bind directive can be shortened with the : symbol:`,
    shorthandSyntaxExampleComment1: `<!-- the full syntax -->`,
    shorthandSyntaxExample1: `<img v-bind:src="dataProperty" />`,
    shorthandSyntaxExampleComment2: `<!-- the shorthand syntax -->`,
    shorthandSyntaxExample2: `<img :src="dataProperty" />`,
    shorthandSyntaxPara2: `And the v-on directive can be shortened with the @ symbol:`,
    shorthandSyntaxExample3: `<button v-on:click="methodName"></button>`,
    shorthandSyntaxExample4: `<button @click="methodName"></button>`,
    shorthandSyntaxPara3: `Though the shorthand syntax is entirely optional and achieves the exact same outcome, we’ll stick with using the shorthand syntax for the rest of the course.`,
  },
  methods: {
    changeGreeting() {
      this.greeting =
        this.greeting === 'Welcome back on day 4 of Vue JS.'
          ? 'Hello world!'
          : 'Welcome back on day 4 of Vue JS.';
    },
    alertMessageGreeting() {
      this.alertMessage = 'You typed something.';
    },
    alertEnterGreeting() {
      this.alertMessage = 'You typed and pressed Enter.';
    },
    changeCity() {
      if (this.city === 'Grenoble') {
        this.city = 'Edinburgh';
        this.country = 'Scotland';
        this.cityImage = './img/img-scotland.jpg';
        this.cityImageAlt = 'Edinburgh image';
      } else {
        this.city = 'Grenoble';
        this.country = 'France';
        this.cityImage = './img/img-grenoble.jpg';
        this.cityImageAlt = 'Grenoble image';
      }
    },
  },
});
