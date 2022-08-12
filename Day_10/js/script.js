const day10 = new Vue({
    el: '#app',
    data: {
        title: `Lifecycle Hooks`,
        lifecycleHooksPara1: `In a Vue instance, Vue gives us some hooks where we can insert our own functionality at different times in the instance’s lifecycle. In order to hook into the lifecycle, we'll need to define functions on an instance which Vue calls at the appropriate time for each hook. An example of such a lifecycle hook is the created() hook.`,
        createdPara1: `The created() hook is run when an instance has just been created, where the instance data and events are active, and when the instance can be accessed. Since the created() hook is run the moment an instance has been created but before the DOM has been mounted/rendered, it’s often the ideal moment to fetch data that is needed to populate the instance.`,
        createdPara2: `For today's article, let's attempt to display a card element in which its content is to be obtained from an external source. This card would look something like this:`,
        imgHooks1: `./img/img-hooks-1.png`,
        createdPara3: `The external data source that is to provide us with the data we need would be the /users resource of JSONPlaceholder - a fake online REST API for testing and prototyping.`,
        createdPara4: `As we set our up our Vue instance, we’ll need to initialize all the data we intend to have displayed in the template:`,
        imgHooks2: `./img/img-hooks-2.png`,
        createdPara5: `We’ll utilize the Card UI element from Bulma and bind the data on to our template:`,
        imgHooks3: `./img/img-hooks-3.png`,
        createdPara6: `We've introduced a <script> tag that references the axios library which will be the HTTP library we'll use to make our GET request.`,
        createdPara7: `At this moment, our card won’t display anything and look like the following:`,
        imgHooks4: `./img/img-hooks-4.png`,
        createdPara8: `The floating quotations are the quotations we’re using in the template to wrap {{company.catchPhrase}}`,
        createdPara9: `Let’s update our Vue instance to make a request to the JSONPlaceholder API. We’ll declare the created() hook and use the axios library to make our request.`,
        imgHooks5: `./img/img-hooks-5.png`,
        createdPara10: `The /users resource of the api returns details of 10 different users. For our application, we’ll randomly grab a single user object from the list and update the details of our instance data from that object. This would have our created() hook look something like this:`,
        imgHooks6: `./img/img-hooks-6.png`,
        createdPara11: `When we launch our app, the created() hook would run even before the DOM is mounted on the template. The axios call that gets fired in the hook happens asynchronously. With potentially poorer connections, the DOM might already be mounted while the async call is still in-flight. This could have the user see the card in its blank slate temporarily.`,
        imgHooks7: `./img/img-hooks-7.gif`,
        createdPara12: `To make a quick change to alert the user that data might still be in the process of being fetched, we can initialize our instance data properties with 'Loading…' values instead of a blank string:`,
        imgHooks8: `./img/img-hooks-8.png`,
        createdPara13: `The user would now recognize that the app is “loading” if the data hasn’t yet been made available.`,
        imgHooks9: `./img/img-hooks-9.gif`,
        createdPara14: `At the final state, the app will render the card element with information about a certain user.`,
        createdPara15: `We should also always have an appropriate error case in our request to notify the user that something’s wrong when our call ever fails. We won’t be doing that here, but it might be a good exercise for you to try!`,
        mountedPara1: `The mounted() hook is run after the instance has been mounted and where the rendered DOM can be accessed.`,
        mountedPara2: `Vue tracks and makes changes to a virtual representation of nodes in the DOM tree before patching those changes on to the actual DOM. This in-memory view that Vue maintains and manages for us is often known as the Virtual DOM.`,
        mountedPara3: `Vue uses the virtual DOM to maintain/manage and track the changes in an application in a “less-expensive” way than directly tracking the changes being made on the actual DOM.`,
        mountedPara4: `When we talk about mounting, we're talking about the process of converting the virtual elements into actual DOM elements that are placed in the DOM by Vue.`,
        mountedPara5: `In the mounted() hook of an instance, we’re able to access the rendered DOM with this.$el.`,
        imgHooks10: `./img/img-hooks-10.png`,
        mountedPara6: `By console logging the rendered DOM in our card application, we’ll be able to read the information of the user that’s being rendered in our application.`,
        imgHooks11: `./img/img-hooks-11.png`,
        mountedPara7: `Since we’re able to access the resolved DOM, the mounted() hook is often best used when DOM dependant changes need to be made (i.e. when you need access to the DOM to make certain changes).`,
        updatedPara1: `In article #3 of the course, we discussed how Vue applications are reactive in nature. In short, when data is changed - the template is re-rendered (i.e. updated) to show the change. The updated() hook gets fired whenever a data change is made that causes the instance to be updated/re-rendered.`,
        updatedPara2: `The updated() hook behaves like the watch property but for the entire instance. It’s important to know that for specific state changes, the watch property (or oftentimes computed properties) should always be used instead.`,
        updatedPara3: `In the updated() hook, the accessible DOM refers to the resolved DOM after the update has been made.`,
        imgHooks12: `./img/img-hooks-12.png`,
        destroyedPara1: `The destroyed() hook is fired after an instance has been fully destroyed (which can be done with the vm.$destroy() method). This is the last hook that’s fired in the lifecycle and at this moment the instance event listeners, child instances and directives are all removed.`,
        imgHooks13: `./img/img-hooks-13.png`,
        destroyedPara2: `Though we may not find ourselves using the destroyed() hook often, we’re able to use the hook to perform any last minute changes before our instance is ever completely removed.`,
        beforeHooksPara1: `For each of the standard lifecycle hooks (created(), mounted(), updated(), and destroyed()), Vue also provides hooks that run just before these lifecycle events have occurred. These before hooks are useful if we want to run some functionality before the intended lifecycle change has been made. Here’s a simple diagram that shows each of the methods and the stages of the lifecycle they represent:`,
        imgHooks14: `./img/img-hooks-14.png`,
        beforeHooksPara2: `The Vue Documentation has a very well laid out lifecycle diagram that addresses, in more detail, what happens as the instance goes through each stage of its lifecycle - Instance Lifecycle Diagram.`,
        beforeHooksPara3: `These are all the lifecycle hooks we can interact with in the Vue framework. We'll often find ourselves using these as we build our Vue apps, so it's a good idea to be familiar with them, that they exist, and how to hook into the life of an instance.`,
        beforeHooksPara4: `In the next section, we’ll be discussing a topic that we’ve deliberately avoided until now. We’ll be discussing Vue Components and their role in building Vue applications!`,
        name: 'Loading...',
        email: 'Loading...',
        company: {
            name: 'Loading...',
            catchPhrase: 'Loading...'
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            const data = response.data;
            const randomUser = response.data[
                Math.floor(Math.random() * data.length)
            ];

            this.name = randomUser.name;
            this.email = randomUser.email;
            this.company.name = randomUser.company.name;
            this.company.catchPhrase = randomUser.company.catchPhrase;
        });
    },
    mounted() {
        console.log("Mounted", this.$el);
    },
    updated() {
        console.log("Updated", this.$el);
    }
});