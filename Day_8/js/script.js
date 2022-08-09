const day8 = new Vue({
    el: '#app',
    data: {
        heading: 'Methods and Computed Properties',
        mainPara1: `In this article, we're going to look at two specific properties of the Vue instance - Methods and Computed Properties.`,
        methodsPara1: `We used methods in articles #2 and #3 to highlight reactivity of data contained within a Vue instance. To reiterate, methods in a Vue instance behave like normal JavaScript functions and are evaluated only when explicitly called. Instead of using methods we could always write our intended functionality change inline in the template.`,
        methodsPara2: `Let’s see an example of this. We’ll reuse an example seen in the Vue documentation that involves reversing a series of characters from a string. We'll first create a Vue instance that contains a single message property that has a value of 'Greetings!':`,
        imgMethods1: `./img/img-methods-1.png`,
        methodsPara3: `In the template, we’ll look to bind the message directly and also bind the message in its reversed state. We’ll reverse the value of message by splitting the property into an array of characters (.split('')), reversing the elements in the array (.reverse()), and rejoining the reversed array back into a single string (.join('')).`,
        imgMethods2: `./img/img-methods-2.png`,
        methodsPara4: `With the help of the styling given to us by Bulma, our simple app will look like the following:`,
        imgMethods3: `./img/img-methods-3.png`,
        methodsPara5: `There’s nothing inherently wrong with specifying functionality change, like the above, inline. However, methods are often times more appropriate to use when the intended changes get harder to decipher.`,
        methodsPara6: `We can change the above example to instead use a method in our Vue instance to help reverse the message string:`,
        imgMethods4: `./img/img-methods-4.png`,
        methodsPara7: `The method is given a name of reverseString and expects a payload. We can declare this method in the template and pass in the message property as the payload:`,
        imgMethods5: `./img/img-methods-5.png`,
        methodsPara8: `Our UI would behave just the way it had before by displaying the message greeting and the reversed version right below it:`,
        methodsPara9: `Functionality wise - the above two examples achieve the same thing. Methods might be seen to be more appropriate since it keeps the template cleaner and easier to understand.`,
        methodsPara10: `We’re also able to achieve the same outcome as above with the use of another property - called the computed property.`,
        computedPara1: `Computed properties are used to handle complex calculations of information that need to be displayed in the view. For our third iteration in building the same simple app, we'll introduce a computed property called reverseMessage that simply reverses the message data property like we’ve done before:`,
        imgComputed1: `./img/img-computed-1.png`,
        computedPara2: `In the template, we can render the value of the reverseMessage computed property just as we would have rendered any other data property:`,
        imgComputed2: `./img/img-computed-2.png`,
        computedPara3: `With this, our app will behave as desired:`,
        computedPara4: `This begs the question, what difference is there to using a computed property or having a method instead return a value?`,
        methodsVsComputedPara1: `In the examples above, using a method or a computed property pretty much achieved the exact same outcome. The key difference to using computed properties is that computed properties are cached based on the dependencies they depend on.`,
        methodsVsComputedPara2: `If we take a look at the reverseMessage computed property we’ve declared, we can see it has one data dependancy - the message property.`,
        imgMethodVsComputed1: `./img/img-methodsVsComputed-1.png`,
        methodsVsComputedPara3: `The value of reverseMessage directly depends on the message data property. When the value of message changes, so does reverseMessage. Computed properties are useful because as long as the dependant data property (message) remains constant (i.e. unchanged), calling the computed property (reverseMessage) multiple times will always return the same cached value.`,
        methodsVsComputedPara4: `Let's see a simple example of this visually. We can place a console.log() message in the computed property function to alert us when the function has been run:`,
        imgMethodVsComputed2: `./img/img-methodsVsComputed-2.png`,
        methodsVsComputedPara5: `In the template, we can aim to render the reverseMessage computed property a couple of times:`,
        imgMethodVsComputed3: `./img/img-methodsVsComputed-3.png`,
        methodsVsComputedPara6: `By running the application and opening our browser console, we’ll see the console.log() message logged only once:`,
        imgMethodVsComputed4: `./img/img-methodsVsComputed-4.png`,
        methodsVsComputedPara7: `The first time the reverseMessage property is computed, its value is cached. With every other call to render the value of reverseMessage, the message property hasn’t changed, so the cached result is simply returned without running the computed function again.`,
        methodsVsComputedPara8: `If we repeat a similar example but instead call methods multiple times in the template, the console.log() message will be run every single time the method is declared:`,
        imgMethodVsComputed5: `./img/img-methodsVsComputed-5.png`,
        methodsVsComputedPara9: `In conclusion, though methods can be used in place of computed properties - computed properties should essentially be used if we intend to compute a value from a data property. Caching can help our application with performance once our application starts to have countless properties with each derived functionality potentially being somewhat computationally expensive.`,
        methodsVsComputedPara10: `Here's a table that highlights the main differences between using methods or computed properties:`,
        imgMethodVsComputed6: `./img/img-methodsVsComputed-6.png`,
        methodsVsComputedPara11: `A good rule of thumb to follow:`,
        methodsVsComputedPara11List: [
            {id: 1, value:`Use methods when responding to changes (e.g. clicking a button, submitting a form, etc.) or to run explicit functionality change within the instance (e.g. have a method be called from a lifecycle hook).`},
            {id: 2, value:`Use computed properties for data manipulation (e.g. create a sorted array from an unsorted array in the instance).`},
        ],
        methodsVsComputedPara12: `We’ll be stopping here for today and be taking a look at another instance property called watchers tomorrow.`,
    },  
    methods: {
        reverseString(string) {
            console.log('Method entered!!!');
            return string.split('').reverse().join('');
        }
    },
    computed: {
        computedReverseString() {
            console.log('Entered computed!!!');
            return this.heading.split('').reverse().join('');
        }
    }
});