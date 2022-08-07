const day_7 = new Vue({
    el: '#app',
    data: {
        day7: `Vue DevTools`,
        devToolsPara1: `The Vue Devtools is a development tool built and maintained by the Vue core team. It can be installed through one of the following formats:`,
        devToolsPara1List: [
            {id: 1, value: `Chrome Extension`},
            {id: 1, value: `Firefox Addon`},
            {id: 3, value: `Standalone Electron App`}
        ],
        devToolsPara2: `If you don’t have the Devtools installed - feel free to install it with the format you prefer. We’ll be using and referencing the Devtools at separate points throughout the course.`,
        devToolsPara3: `When successfully installed on to a browser, we'll be able to see the icon available in our browser menu. If Vue is not detected in the page, the icon in the browser menu would be greyed out and the prompt will tell us that "Vue.js is not detected:`,
        imgDevTools1: `./img/img-dev-tools-1.png`,
        devToolsPara4: `For applications that use Vue, the browser menu won’t be greyed out. However, we’ll be notified that we’re unable to use the extension if the app is in production or the Devtools is explicitly disabled:`,
        imgDevTools2: `./img/img-dev-tools-2.png`,
        devToolsPara5: `Finally, for applications we develop locally and don’t have the Devtools explicitly disabled, we’ll be notified that Vue is detected and we’re able to use the extension:`,
        imgDevTools3: `./img/img-dev-tools-3.png`,
        fileBasedUrlPara1: `If you’d like to use the Vue Devtools with applications opened via file:// protocol in Chrome - you’ll need to enable the “Allow access to file URLs” setting for the extension in Chrome’s extension manager:`,
        imgDevTools4: `./img/img-dev-tools-4.png`,
        fileBasedUrlPara2: `In Firefox, the extension should have access to file based URLs by default.`,
        usingDevToolsPara1: `Let’s use the Vue Devtools on the application we’ve set up in the last article. If we recall, we used the v-model directive to help bind data properties to different inputs in a form:`,
        imgDevTools5: `./img/img-dev-tools-5.png`,
        usingDevToolsPara2: `Launching the application, opening the browser Devtools, and locating the Vue tab - we’ll be able use the Vue Devtools to debug our application:`,
        imgDevTools6: `./img/img-dev-tools-6.png`,
        usingDevToolsPara3: `To use the Vue Devtools, you may need to open the application in a separate tab/window instead of surveying the app within the iframe. All code samples can be found for each respective article/day at the Github Repo.`,
        usingDevToolsPara4: `In the "Components" tab, we're able to survey all the components (i.e. instances and child-instances) in our application. Our application only contains a single <Root> component which refers to the Vue instance of the entire Vue app. By selecting the <Root> component, we’re then able to survey the data properties instantiated in our app:`,
        imgDevTools7: `./img/img-dev-tools-7.png`,
        usingDevToolsPara5: `To better recognize how the v-model directive allows for two-way data binding, we can:`,
        usingDevToolsPara5List: [
            {id: 1, value: `Change something directly in our form and verify that data of our <Root> instance, in the Vue Devtools, is automatically updated.`},
            {id: 2, value: `Change the value of a data property directly on the Vue Devtools and verify that our template re-renders to show the updated value.`},
        ],
        usingDevToolsPara6: `Here's a GIF displaying just that.`,
        imgDevTools8: `./img/img-dev-tools-8.gif`,
        usingDevToolsPara7: `By being able to directly update our application and monitor data changes (and vice-versa), the Vue Devtools is an especially useful tool for debugging Vue apps.`,
        usingDevToolsPara8: `The Vue Devtools also offers a lot more capabilities like being able to track Custom Events, inspect props (data) being passed from one component to its child, and conduct time travel debugging in a Vuex integrated app. We’ll be discussing these features when we investigate the relevant concepts in the course.`,
        usingDevToolsPara9: `Congrats on getting through the first week! In the next coming sections, we’ll be taking a deeper dive into the Vue instance.`
    }
});