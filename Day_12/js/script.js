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

Vue.component('tweet-content', {
    template: `
        <div class="media-content">
            <div class="content">
                <p>
                    <strong> {{ tweet.name }} </strong>
                    <small> {{ tweet.handle }} </small>
                    <br/>
                    {{ tweet.tweet }} 
                </p>
            </div>
            <div class="level-left">
                <a class="level-item">    
                    <span class="icon is-small">
                        <i class="fas fa-heart"></i>
                    </span>
                    <span class="likes"> {{ tweet.likes }} </span>
                </a>
            </div>
        </div>
    `,
    props: ['tweet']
});

Vue.component('tweet-component', {
    template: `
    <div class="tweet">
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img :src="tweet.img" alt="user image">
                    </figure>
                </div>
                <tweet-content :tweet="tweet"></tweet-content>
            </article>
            
        </div>
        <div class="control has-icons left flex">
            <input type="text" class="input is-small" placeholder="Tweet your reply...">
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
        </div>
    </div>
    `,
    props: {
        tweet: {
            type: Object,
            required: true
        }
    }
});

const day12 = new Vue({
    el: '#app',
    data: {
        tweets,
        title: 'Vue Components - Props',
        mainPara1: `In yesterday’s article, we created our first component (named tweet-component) as part of a mock twitter application. We went as far as having a list of these tweet-component‘s be rendered with only static information.`,
        mainPara2: `Our aim today is to have each tweet-component render unique tweet data from the tweets data array kept in the root instance. We’ll achieve this with the help of props.`,
        propsPara1: `Vue gives us the ability to use props to pass data from parent instances down to child instances.`,
        imgProps1: `./img/props/img-props-1.png`,
        propsPara2: `Using props is fairly simple. The first step involves binding the data that is to be passed to the prop attribute where the child component is being rendered.`,
        propsPara3: `In our mock twitter application, we’re interested in passing a single tweet object to every tweet-component that is rendered. Since the tweet components are rendered with the help of the v-for directive, we can pass the iterated tweet object as props down to each component.`,
        imgProps2: `./img/props/img-props-2.png`,
        propsPara4: `We’re using the v-bind directive to bind the iterated tweet data object to a prop of the same name.`,
        propsPara5: `For tweet-component to use the prop provided to it, it needs to explicitly declare the props it receives with the props option. We’ll introduce a props option in tweet-component and specify the tweet prop being passed in:`,
        imgProps3: `./img/props/img-props-3.png`,
        propsPara6: `In tweet-component, the tweet prop can now be accessed and used like any other data property. We’ll bind information from the tweet prop on to the template of the component instead of statically rendering information.`,
        imgProps4: `./img/props/img-props-4.png`,
        propsPara7: `Our application will now display information from all the different tweets in our instance data.`,
        propsValidationPara1: `Vue also allows us to define requirements for props that get passed into a component. Earlier, we declared the tweet prop in tweet-component in this format:`,
        imgProps5: `./img/props/img-props-5.png`,
        propsValidationPara2: `To define prop validation requirements, we can instead provide an object that has validation requirements to the props option.`,
        imgProps6: `./img/props/img-props-6.png`,
        propsValidationPara3: `If we've stated validation requirements like the above and find ourselves not passing the tweet prop or having the tweet prop be of a type that is not Object, the Vue console will emit warnings. The Vue documentation has more examples on how we’re able to define default and custom validation requirements as well.`,
        propsRelationshipPara1: `Since every component has its own isolated scope, child components can never (and should never) reference data directly from parent components. For a child component to access data from a parent, data has to flow from the parent down to the child with the help of props. This design greatly simplifies the understanding of an applications data flow since child components will never be able to mutate parent state directly.`,
        propsRelationshipPara2: `Props can also be passed down multiple levels deep. For our mock twitter application, assume we wanted tweet-component to be a parent of another component labelled tweet-content.`,
        imgProps7: `./img/props/img-props-7.png`,
        propsRelationshipPara3: `We can use the Vue.component() constructor to create the tweet-content component as we’ve done before. We’ll also declare a tweet prop in the props property of tweet-content and bind the prop’s information to its template. We'll create this tweet-content component right above the creation of tweet-component.`,
        imgProps8: `./img/props/img-props-8.png`,
        propsRelationshipPara4: `tweet-component will now be able to render the tweet-content component and pass in the tweet data object as`,
        imgProps9: `./img/props/img-props-9.png`,
        propsRelationshipPara5: `Our application UI will remain the same but now be composed of two nested components.`,
        propsRelationshipPara6: `The Vue Devtools is incredibly useful in helping debug our application and inspect what data is being passed from one component to another. By launching the Vue Devtools, we’ll be able to see all the components in our application and the props available within each component.`,
        imgProps10: `./img/props/img-props-10.png`,
        propsRelationshipPara7: `It’s important to remember that props can only travel in a unidirectional format (parent to child to grandchild, etc.). If we wanted to communicate to a parent component (e.g. the root instance) about changes made in a child component (e.g. tweet-component), Vue provides something known as Custom Events to help facilitate this.`,
        propsRelationshipPara8: `Good work so far! We’ll stop here for today and begin tomorrow by discussing Custom Events and how to use them!`,
    }
});