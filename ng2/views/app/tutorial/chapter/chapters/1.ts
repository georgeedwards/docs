export var content: string =

`<article>
    <h1 id="chapter-1getting-up-and-running"> <a href="#chapter-1getting-up-and-running"> Chapter 1—Getting Up and Running< /a></h1 >

        <p>In this chapter you're going to start with the basics, including installing the NativeScript CLI, starting a new project, and getting your first app up and running.</p>

            < h2 id= "table-of-contents" > <a href="#table-of-contents" > Table of contents< /a></h2 >

                <ul>
                <li><a href="#11-install-nativescript-and-configure-your-environment" > 1.1: Install NativeScript and configure your environment< /a></li >
                    <li><a href="#12-start-your-app" > 1.2: Start your app< /a></li >
                        <li><a href="#13-add-target-development-platforms" > 1.3: Add target development platforms< /a></li >
                            <li><a href="#14-running-your-app" > 1.4: Running your app< /a></li >
                                <li><a href="#15-development-workflow" > 1.5: Development workflow< /a></li >
                                    </ul>

                                    < h2 id= "11-install-nativescript-and-configure-your-environment" > <a href="#11-install-nativescript-and-configure-your-environment" > 1.1: Install NativeScript and configure your environment< /a></h2 >

                                        <p>The NativeScript CLI has a few system requirements you must have in place before building NativeScript apps.Before we get started building, make sure you’ve completed the NativeScript installation instructions using the link below.</p>

                                            < ul >
                                            <li><a href="/angular/start/quick-setup" > Complete the NativeScript installation guide< /a></li >
                                                </ul>

                                                < h2 id= "12-start-your-app" > <a href="#12-start-your-app" > 1.2: Start your app< /a></h2 >

                                                    <p>With the NativeScript CLI installed, it's time to start building your app. Normally, you would <a href="https://github.com/NativeScript/NativeScript-cli#create-project">use the <code>tns create</code> command to create an empty NativeScript application</a>.
        For this guide, we've scaffolded out a boilerplate project to act as a starting point for <a href="https://github.com/NativeScript/sample-Groceries"> Groceries < /a>.</p >

                                                        <h4 class="exercise-start" >
                                                        <b>Exercise < /b>: Get the Groceries starting point
                                                        < /h4>

                                                        < p > Navigate to a folder where you want to keep your app code: </p>

                                                            < div class="no-copy-button" > </div>

                                                                < pre > <code>cd the- folder - you - want - groceries - to - be -in
                                                                    </code></pre>

                                                                    <p>Next, assuming you have < a href= "http://www.git-scm.com/" > git installed< /a>, clone the Groceries repo from GitHub:</p >

                                                                        <pre><code>git clone https://github.com/NativeScript/sample-Groceries.git
</code></pre>

    <p>After that, change to the newly cloned repo's folder:</p>

        < pre > <code>cd sample- Groceries
            < /code></pre >

            <p>Finally, switch to the “start” branch for this guide's starting point:</p>

                < pre > <code>git checkout start
                    < /code></pre >

                    <blockquote>
                    <p><strong>TIP:</strong> The “end” branch has the final state of this guide's tutorial. Feel free to <a href="https:// github.com / NativeScript / sample - Groceries / tree / end">refer to the branch on GitHub</a>        if you get stuck.</p>
        < /blockquote>

            < div class="exercise-end"> </div>

                < h2 id="13-add-target-development-platforms"> <a href="#13-add-target-development-platforms"> 1.3: Add target development platforms< /a></h2 >

                                <p>Your app is now set up, but before you run it, you need to initialize a platform- specific native project for each platform you intend to target.</p>

                                    < h4 class="exercise-start" >
                                        <b>Exercise < /b>: Add the iOS and Android platforms
                                        < /h4>

                                        < p > If you're on a Mac, start by adding the iOS platform:</p>

                                            < pre > <code>tns platform add ios
                                                < /code></pre >

                                                <p>Next, add the Android platform with the same < code > platform add< /code> command:</p >

                                                    <pre><code>tns platform add android
                                                        < /code></pre >

                                                        <div class="exercise-end" > </div>

                                                            < blockquote >
                                                            <p><strong>IMPORTANT:</strong> You can add platforms only for SDKs that you already have installed on your development machine. If you get errors running <code>tns platform add</code>, refer back to the section on < a href= "#11-install-nativescript-and-configure-your-environment" > setting up your development environment< /a>.</p >
                                                                </blockquote>

                                                                < p > The < code > platform add< /code> command adds a folder called <code>platforms</code > to your project, and copies all of the required native SDKs into this folder.When you build the application, the NativeScript CLI will copy your application code into the < code > platforms < /code> folder so that a native binary can be created.</p >

                                                                    <h2 id="14-running-your-app" > <a href="#14-running-your-app" > 1.4: Running your app< /a></h2 >

                                                                        <p>With the platform initialization complete, you can run your app in an emulator or on devices.</p>

                                                                            < h4 class="exercise-start" >
                                                                                <b>Exercise < /b>: Run your app
                                                                                < /h4>

                                                                                < p > If you're on a Mac, start by running the app in an iOS simulator with the following command:</p>

                                                                                    < pre > <code>tns run ios --emulator
                                                                                        < /code></pre >

                                                                                        <p>If all went well, you should see something like this:</p>

                                                                                            < p > <img src="/img/cli-getting-started/nativescript/chapter1/ios/1.png" alt= "iOS login" > </p>

                                                                                                < p > Next, run your app on an Android emulator with the following command: </p>

                                                                                                    < pre > <code>tns run android --emulator
                                                                                                        < /code></pre >

                                                                                                        <blockquote>
                                                                                                        <p><strong>WARNING < /strong>:</p >

                                                                                                        <ul>
                                                                                                        <li>You must have at least one Android AVD (Android Virtual Device) configured for this command to work.If you get an error, try <a href="http://developer.telerik.com/featured/using-android-emulator-hybrid-mobile-apps-telerik-appbuilder/#managing-avds" > setting up an AVD< /a> and then run the command again.</li >
                                                                                                            <li>If you're using <a href="https://www.genymotion.com">Genymotion</a>,
                    launch your Genymotion virtual device, and then run <code>tns run android</code>.</li>
                    < /ul>
                        < /blockquote>

                            < p> If all went well, you should see your app running in an Android emulator: </p>

                                < p> <img src="/img/cli-getting-started/nativescript/chapter1/android/1.png" alt="Android login">                                    </p>

                                    < div class="exercise-end"> </div>

                                        < p> Here are a few other tips for running NativeScript apps.</p>

                                            < blockquote>
                                                <p><strong>TIP < /strong>:</p >

                                                                                                                                <ul>
                                                                                                                                <li>To run on a USB- connected Android or iOS device, use the same < code > run < /code> command without the <code>--emulator</code > flag—i.e. <code > tns run android< /code> and <code>tns run ios</code >.</li>
                                                                                                                                    < li > The < code > tns device< /code> command lists all USB-connected iOS devices, USB-connected Android devices, and Genymotion virtual devices that <code>tns run</code > can deploy to.Note that < code > tns device< /code> does not list iOS simulators.</li >
                                                                                                                                        </ul>
                                                                                                                                        < /blockquote>

                                                                                                                                        < h2 id= "15-development-workflow" > <a href="#15-development-workflow" > 1.5: Development workflow< /a></h2 >

                                                                                                                                            <p>At this point, you have the NativeScript CLI downloaded and installed, as well as the iOS and Android dependencies that you need to run your app.Now you need a good workflow that lets you make changes and see results fast.For that we’ll use the < code > tns livesync< /code> command.</p >

                                                                                                                                                <h4 class="exercise-start" >
                                                                                                                                                    <b>Exercise < /b>: Your first NativeScript change
                                                                                                                                                    < /h4>

                                                                                                                                                    < p > If your previous < code > tns run ios< /code> or <code>tns run android</code > task is still running, type < code > Ctrl + C < /code> in your terminal to kill it.</p >

                                                                                                                                                        <p>If you’re on a Mac, start an iOS livesync watcher by executing the following command: </p>

                                                                                                                                                            < pre > <code>tns livesync ios --emulator --watch
                                                                                                                                                                < /code></pre >

                                                                                                                                                                <p>If you have your app running on an Android emulator, start an Android livesync watcher by executing the following command: </p>

                                                                                                                                                                    < pre > <code>tns livesync android --emulator --watch
                                                                                                                                                                        < /code></pre >

                                                                                                                                                                        <p>If you instead have your app running on a USB- connected Android device or Genymotion virtual device, run the same command without the < code > --emulator < /code> flag:</p >

                                                                                                                                                                            <pre><code>tns livesync android --watch
                                                                                                                                                                                < /code></pre >

                                                                                                                                                                                <p>The < code > tns livesync< /code> command updates your app by transferring the updated source code to the device or simulator. By adding the <code>--watch</code > flag, the < code > livesync < /code> command additionally watches the files in your NativeScript project. Whenever one of those files changes, the command detects the update, and patches your app with the updated code.</p >

                                                                                                                                                                                    <blockquote>
                                                                                                                                                                                    <p><strong>TIP < /strong>: You can learn about how this is possible by reading more about <a href="http:/ / developer.telerik.com / featured / nativescript - works / ">how NativeScript works</a>.</p>
                                                                                                                                                                                    < /blockquote>

                                                                                                                                                                                    < p > To see livesync in action let’s make a small update to your app.Open your app's <code>app/views/login/login.xml</code> file in your text editor of choice and change <code>&lt;Label text="hello world" /&gt;</code> to <code>&lt;Label text="hello NativeScript" /&gt;</code>.</p>

                                                                                                                                                                                        < p > Save < code > app / views / login / login.xml < /code> and you should see the app relaunch and the updated text displayed.</p >

                                                                                                                                                                                        <div class="exercise-end" > </div>

                                                                                                                                                                                            < p > Regardless of whether you’re running on iOS or Android, or whether you’re using < code > tns livesync< /code> or <code>tns run</code >, the NativeScript CLI shows the output of < code > console.log() < /code> statements as your app executes, as well as stack traces when things go wrong. So if your app crashes at any time during this guide, look to the terminal for a detailed report of the problem.</p >

                                                                                                                                                                                                <p>The iOS and Android logs can be a bit noisy, so you might have to scroll up a bit to find the actual problem.For example if I try to call < code > foo.bar() < /code> when <code>foo</code > does not exist, here's the information I get on iOS:</p>

                                                                                                                                                                                                    < pre > <code>/app/path / to / file.js:14:8: JS ERROR ReferenceError: Can't find variable: foo
1   0xe3dc0 NativeScript::FFICallback & lt; NativeScript::ObjCMethodCallback & gt;::ffiClosureCallback(ffi_cif *, void*, void**, void*)
    < /code></pre >

    <p>And here's the same information in the Android logs:</p>

        < pre > <code>E / TNS.Native(2063): ReferenceError: foo is not defined
E / TNS.Native(2063): File: "/data/data/org.nativescript.groceries/files/app/./views/login/login.js, line: 13, column: 4
    < /code></pre >

    <blockquote>
    <p><strong>TIP < /strong>: When you're trying to debug a problem, you can also try adding <code>console.log()</code > statements in your JavaScript code—exactly as you would in a browser- based application.</p>

        < p > <strong>WARNING < /strong>: Not all changes can be livesync’d in a NativeScript app. For instance, livesync cannot patch native configuration file changes (<code>Info.plist</code >, <code>AndroidManifest.xml < /code>, and so forth), new plugin installations, and any other change that requires a full compilation of the application. In those cases, you’ll want to use <code>Ctrl+C</code > to stop livesync, and rerun the application using the < code > tns run ios< /code> or <code>tns run android</code > commands.Don’t worry though; when situations that require a full compilation come up in this guide, these instructions will be explicitly listed.</p>
            < /blockquote>

            < p > Now that you've created an app, configured your environment, and set up your app to run on iOS and Android, you're ready to start digging into the files that make up a NativeScript app.</p>

                < div class="next-chapter-link-container" >
                    <a href="/tutorial/chapter-2" > Continue to Chapter 2—Building the UI< /a>
                        < /div>
                        < /article>`;