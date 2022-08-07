const day_3 = new Vue({
  el: '#app',
  data: {
    reactiveData: `Data in Vue is treated as reactive since modifying data often directly causes the view to update. For every key-value pair we declare in the data property of an instance, the Vue library creates getters and setters pertaining to that property. These setters and getters work under the hood to track the data properties and cause the template to re-render when a change has been made.`,
    dataDrivenApplications: `The reactive nature of data in Vue help facilitates the possibility of building applications in a data-driven manner.`,
    dataDrivenApplicationsText1: `Let’s assume we wanted to scale the application and introduce capabilities like:`,
    dataDrivenApplicationsText2: `With all these capabilities, we would adopt the reactive nature of Vue and introduce new data properties like date that’s given a value of the current date ( new Date()) or cities which could be an array that contains a series of cities like ['Lagos', 'New York', 'Tokyo', 'Toronto'].`,
    dataDrivenApplicationsText3: `The Mustache Syntax and certain directives (which we’ll start to see in the next article), will help us in binding all or some of this information to the template. With the help of methods and other inline capabilities, we can trigger changes to the instance data which would update the template to the situations we intend to see. This sort of explains the data-driven mindset of how we build our UI.`,
    dataDrivenApplicationsText4: `In the vanilla JavaScript approach, the DOM is treated as the single source of truth. To determine the text content of the <h2> element, we had to survey the DOM, find the element, then survey its textContent value. This is because the DOM is the only place that has this information!`,
    dataDrivenApplicationsText5: `With our Vue example, we were able to simply retrieve and change the value of the data property being used in the template (greeting), without having the need to survey the DOM. This is why the source of truth in Vue applications is the data property of a Vue instance. In Vue applications, we’ll hardly ever find ourselves using methods like document.getElementsByTagName or document.querySelector('img').setAttribute() and instead use the data properties of our instances to drive the changes in the UI.`,
    capabilities: [
      { text: `Displaying the current date and time.` },
      {
        text: `Toggling the user and city information from a list of options.`,
      },
      {
        text: `Toggling the background color with the click of a button, etc.`,
      },
    ],
    vueDataProperties: `Vue initializes the reactivity of an instance upon instantiation, and as a result, requires us to declare properties upfront before we decide to use them. Because of this, we’re unable to directly add (or remove) properties from an already created instance.`,
  },
});
