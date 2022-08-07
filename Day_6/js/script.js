const day_6 = new Vue({
    el: "#app",
    data: {
        day6: "Form Handling with v-model",
        vmodelPara1: `The v-model directive creates two-way data binding between form inputs and text area elements. In other words, v-model directly binds user input with a Vue object’s data model that as one changes, the other automatically gets updated. The v-model directive syntax takes an expression which is the name of the data property that the input is bound to:`,
        imgVModel1: `./img/img-v-model-1.png`,
        vmodelPara2: `v-model removes any difficulty in keeping user input and the data model in sync and can be applied to virtually any form input element:`,
        vmodelPara2List: [
            { id: 1, value: `Text Inputs`},
            { id: 2, value: `Dropdowns`},
            { id: 3, value: `Checkboxes`},
            { id: 4, value: `Radio Inputs`},
            { id: 5, value: `etc…`}
        ],
        vmodelPara3: `Let’s see the v-model directive in action. For today's article, we’ll be setting up a form that contains a series of different inputs:`,
        imgVModel2: `./img/img-v-model-2.png`,
        vmodelPara4: `The form will contain a text input field to capture the user’s name, a dropdown for the user to select a subject, a checkbox to verify if the user has approved termsAndConditions, radio inputs to determine if the user has selected yesOrNo, and a Submit button.`,
        vmodelPara5: `Vue requires us to initialize any properties we intend to use in our application, so we’ll initialize the properties that are to be used in our form with empty/initial values. We’ll also set up a submit() instance method that will console log the values of each of these properties.`,
        imgVModel3: `./img/img-v-model-3.png`,
        vmodelPara6: `In the code sample above, notice how the properties in data are initialized differently depending on the form input that we expect the property to be used with?`,
        vmodelPara6List: [
            {id: 1, value: `We want the name and subject fields to be rendered with values of an empty string.`},
            {id: 2, value: `termsAndConditions will be bound to a checkbox. HTML checkbox elements traditionally have a boolean value unless otherwise specified. We’ve initialized termsAndConditions with false since we expect the checkbox to be rendered in the unchecked (i.e. false) state.`},
            {id: 3, value: `Radio inputs are often arranged in groups with each input usually given a unique value. We’ve initialized the yesOrNo property that would be used in our radio inputs with a string value of 'No'.`},
        ],
        vmodelPara7: `We'll now create the template and use the v-model directive to bind the appropriate data properties to their respective input elements. We’ll also attach a listener to the submit button to call an instance submit() method when clicked. This makes our entire template look like the following:`,
        imgVModel4: `./img/img-v-model-4.png`,
        vmodelPara8: `In the template, we've introduced a local styles.css file like we've done before but we've also included the Bulma CSS framework into our application from a CDN.`,
        vmodelPara9: `Bulma is a CSS framework, much like Twitter’s popular Bootstrap framework. It provides us with a grid system and some simple styling. Though we'll be using Bulma from time to time, we won’t need to know Bulma in-depth to go through this article or the rest of the course.`,
        vmodelPara10: `Let’s break down what each of the field elements in the template contain.`,
        vmodelPara11: `For every keystroke made in the 'Name' text input field, the v-model directive will bind the value of this input field to the name data property.`,
        imgVModel5: `./img/img-v-model-5.png`,
        vmodelPara12: `For every option selected in the 'Subject' dropdown, v-model will bind the value of the option selected to the subject data property. We’ve set a value of an empty string (which is also the initial value of the subject property) to the first disabled option as to have it selected when the application first renders.`,
        imgVModel6: `./img/img-v-model-6.png`,
        vmodelPara13: `Checkbox inputs naturally have a boolean value which dictates whether the checkbox is checked or unchecked. Our termsAndConditions property is initialized with false and bound directly to the checkbox input.`,
        imgVModel7: `./img/img-v-model-7.png`,
        vmodelPara14: `Finally, since radio inputs usually have custom values specified with them, we’ve set the expected values for each radio input alongside the v-model directive.`,
        imgVModel8: `./img/img-v-model-8.png`,
        vmodelPara15: `We can now go ahead and test our application. If we populate our form, click the Submit button, and check the developer console - we’ll be able to see the values of each of the data attributes within our instance.`,
        imgVModel9: `./img/img-v-model-9.png`,
        vmodelPara16: `Here’s a sample expected response:`,
        imgVModel10: `./img/img-v-model-10.png`,
        vmodelPara17: `It’s important to keep in mind that when using the v-model directive - v-model takes the data property of the Vue instance as the single source of truth as opposed to HTML element attributes like checked or selected.`,
        vmodelPara18: `Oftentimes we would probably find ourselves using the v-model directive in the simplest possible way but there are ways to create unique value bindings and modifiers in certain cases. Be sure to check out the Form Input Bindings - Value Bindings and Form Input Bindings - Modifiers sections of the Vue documentation if you're interested in seeing how some of these unique bindings/modifiers can be applied.`,
        twoWayBindingPara1: `Though the v-model directive creates two-way data binding, we haven’t really been able to see the two-way binding in the application we've built in this article. We could witness this by creating functionality that changes the values of the data properties being used in the form and verifying that our template updates (i.e. re-renders) to show the new values.`,
        twoWayBindingPara2: `A simpler way we can witness v-model's two-way data binding is by using the Vue Devtools - a browser dev tools extension built and maintained by the Vue core team. Vue Devtools provides incredibly useful capabilities in debugging Vue applications and we’re going to spend the next article discussing it!`,
        'svgInfoIcon': `./img/svg-icon-info.svg`,
        example: {
            name: '',
            subject: '',
            termsAndConditions: false,
            yesOrNo: 'No'
        }
    },
    methods: {
        submit() {
            console.log('Name : ', this.example.name);
            console.log('Subject : ', this.example.subject);
            console.log('T&C : ', this.example.termsAndConditions);
            console.log('Y/N : ', this.example.yesOrNo);
        }
    }
});