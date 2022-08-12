const tweets = [
    {
        id: 1,
        name: 'Jayanti Thapaliya',
        handle: '@traditional',
        img: './img/img-jayanti.png',
        tweet: 'Believe in God... He is always with us.',
        likes: 40
    },
    {
        id: 2,
        name: 'Nilkantha Thapaliya',
        handle: '@health',
        img: './img/img-nilkantha.png',
        tweet: 'Corona Virus Update',
        likes: 80
    },
    {
        id: 3,
        name: 'Bibha Thapaliya',
        handle: '@party',
        img: './img/img-bibha.png',
        tweet: 'Hangouts with friends.',
        likes: 38
    },
    {
        id: 4,
        name: 'Birbhadra Thapaliya',
        handle: '@yoga',
        img: './img/img-birbhadra.png',
        tweet: 'Do yoga everyday, keep your body fit.',
        likes: 133
    },
    {
        id: 5,
        name: 'Bishal Thapaliya',
        handle: '@application',
        img: './img/img-bishal.png',
        tweet: 'Build an app with Vue JS.',
        likes: 480
    },
    {
        id: 6,
        name: 'Merina Shrestha',
        handle: '@engineering',
        img: './img/img-merina.png',
        tweet: 'Concrete bridge culvert',
        likes: 84
    },
    {
        id: 7,
        name: 'Aastha Thapaliya',
        handle: '@science',
        img: './img/img-aastha.png',
        tweet: 'Astronouts has landed into the Mars.',
        likes: 1085
    },
    {
        id: 8,
        name: 'Aarambha Thapaliya',
        handle: '@entertainment',
        img: './img/img-aarambha.png',
        tweet: 'Doremon fought angainst the aliens.',
        likes: 61
    },
    {
        id: 9,
        name: 'Bishal Thapaliya',
        handle: '@application',
        img: './img/img-bishal.png',
        tweet: 'New version of Vue JS is launched now.',
        likes: 1320
    },
]

Vue.component('tweet-component', {
    template: `
        <div class="tweet">
            <div class="box">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img src="./img/img-nilkantha.png" alt="user image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>Bishal Thapaliya</strong>
                                <small>@application</small>
                                <br>
                                If you don't succeed, dust yourself off and try again.
                            </p>
                        </div>
                        <div class="level-left">
                            <a href="#" class="level-item">
                                <span class="icon is-small">
                                    <i class="fas fa-heart"></i>
                                </span>
                                <span class="likes">10</span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
            <div class="control has-icons left flex">
                <input type="text" class="input is-small" placeholder="Tweet your reply...">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
            </div>
        </div>
    `
});

const day11 = new Vue({
    el: '#app',
    data: {
        tweets,
        title: `Vue Components - Global Components`,
        mainPara1: `In the last week and a half, we’ve covered a large number of properties and features within a Vue instance. We’ve discussed an instance’s reactivity, its directives, methods, computed properties, watchers, and lifecycle hooks. For those who might have used other newer front end libraries/frameworks, you may have noticed we haven’t discussed a vital piece of modern UI development - components.`,
        componentsPara1: `Vue provides the ability for us to create isolated components within an application. Reusability and maintainability are some of the main reasons as to why building an application with well-structured components are especially important.`,
        componentsPara2: `Vue components are intended to be self-contained modules since we can group markup (HTML), logic (JS), and even styles (CSS) within them. This allows for easier maintenance, especially when applications grow much larger in scale.`,
        componentsPara3: `An important note to keep in mind is that Vue components are Vue instances. This means almost all the properties we’ve seen thus far (except for a few root-level options) in a root instance are applicable to components as well. In fact, the Vue documentation states that “[Vue] components are reusable Vue instances with a name…”.`,
        componentsPara4: `To get a better understanding of components, we’ll go ahead and create one.`,
        componentsPara5: `By the end of tomorrow's article, we’ll look to have created a mock Twitter application that displays a list of tweets from a data source.`,
        imgComponents1: `./img/img-components-1.png`,
        componentsPara6: `The data source will be available to us on the client-side and passed into the data property of the application instance:`,
        imgComponents2: `./img/img-components-2.png`,
        componentsPara7: `By binding the information of just the first tweet object on to the template, our HTML will look something like the following:`,
        imgComponents3: `./img/img-components-3.png`,
        componentsPara8: `We've introduced the Font Awesome library for icons and are referencing images that are kept within the images folder of our project.`,
        componentsPara9: `With the appropriate styles already prepared for us, our application will now look like this:`,
        imgComponents4: `./img/img-components-4.png`,
        componentsPara10: `Our aim is to show a tweet element for every single tweet object available in our data. Since we’ll be rendering a list of elements, the best way to achieve this is with the help of the v-for directive:`,
        imgComponents5: `./img/img-components-5.png`,
        componentsPara11: `In the template above, we’re binding the contents of the iterated tweet object onto our template. This renders a list of tweet elements with each element containing details of a single tweet object:`,
        imgComponents6: `./img/img-components-6.png`,

        globalComponentsPara1: `If we take a look at the UI we've set up, we can distinctively point out the pieces of our application that could be made to be self contained modules of their own.`,
        imgComponents7: `./img/img-components-7.png`,
        globalComponentsPara2: `The Root Instance resembles the entire root instance of our application while tweet-component could be the instance that isolates the markup responsible for a single tweet element.`,
        globalComponentsPara3: `Let's go ahead and create this tweet-component. The simplest method for creating a component is using the Vue.component() constructor.`,
        imgComponents10: `./img/img-components-10.png`,
        globalComponentsPara4: `The Vue.component() constructor registers a component globally in an application. In the constructor above, the first argument we've passed in is the name (i.e. the identifier) of the component - tweet-component. In the second argument, we've passed in an empty options object that will contain the definition of the component such as its data, methods, etc.`,
        globalComponentsPara5: `Though there are a few different ways to declare the template of a component, the standard way of doing so is using the template option which expects a string value.`,
        globalComponentsPara6: `We haven’t found the need to use the template option in our root instance since we were able to use the root-level option, el, to declare the view our instance will depend upon.`,
        globalComponentsPara7: `To get things started, we’ll create a tweet-component with hard-coded data. We’ll specify the template of the component to simply be the markup associated with <div class="tweet">...</div>. We'll create this component right before the instantiation of our root instance.`,
        imgComponents8: `./img/img-components-8.png`,
        globalComponentsPara8: `We’ve declared the template of the component within backticks (i.e. ES6 template literals) to be able to neatly arrange the markup in multi-line format.`,
        globalComponentsPara9: `Template literals are an unsupported feature for older browsers like IE11.`,
        globalComponentsPara10: `With the component created, we’ll now be able to render the component in the root template. We’ll want the component to be rendered for every tweet in the tweets array. Since we want to render a list of tweet-component's, we'll declare the v-for directive where the component is being rendered. Removing the old template code and rendering a list of tweet-component's would have our root template be updated to the following:`,
        imgComponents9: `./img/img-components-9.png`,
        globalComponentsPara11: `Notice how the root template is a lot easier to read now? This is in part due to using components to encapsulate relevant content within themselves. This is a very simple application, but for larger apps - the importance of well structured and named components can’t be stressed enough.`,
        globalComponentsPara12: `Though we’re rendering a list of components, the application isn’t where we want it to be since each component is rendering the same static information. What we intend to do is have the template of every tweet-component render the details of a single unique tweet object from the tweets array.`,
        globalComponentsPara13: `The tweets data array is part of the root instance and tweet-component is generally unaware of its existence. Since tweet-component is rendered as a child of the root instance, we can use something known as props to pass the relevant data down to the component.`,
        globalComponentsPara14: `This is where we'll be picking up tomorrow. In the next article, we’ll spend a little time discussing what props are before updating our app to use props to have our components contain the data they need.`
        
    }
});

