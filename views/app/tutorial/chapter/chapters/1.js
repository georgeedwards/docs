"use strict";
exports.content = "<article>\n    <h1 id=\"chapter-1getting-up-and-running\"> <a href=\"#chapter-1getting-up-and-running\"> Chapter 1\u2014Getting Up and Running< /a></h1 >\n\n        <p>In this chapter you're going to start with the basics, including installing the NativeScript CLI, starting a new project, and getting your first app up and running.</p>\n\n            < h2 id= \"table-of-contents\" > <a href=\"#table-of-contents\" > Table of contents< /a></h2 >\n\n                <ul>\n                <li><a href=\"#11-install-nativescript-and-configure-your-environment\" > 1.1: Install NativeScript and configure your environment< /a></li >\n                    <li><a href=\"#12-start-your-app\" > 1.2: Start your app< /a></li >\n                        <li><a href=\"#13-add-target-development-platforms\" > 1.3: Add target development platforms< /a></li >\n                            <li><a href=\"#14-running-your-app\" > 1.4: Running your app< /a></li >\n                                <li><a href=\"#15-development-workflow\" > 1.5: Development workflow< /a></li >\n                                    </ul>\n\n                                    < h2 id= \"11-install-nativescript-and-configure-your-environment\" > <a href=\"#11-install-nativescript-and-configure-your-environment\" > 1.1: Install NativeScript and configure your environment< /a></h2 >\n\n                                        <p>The NativeScript CLI has a few system requirements you must have in place before building NativeScript apps.Before we get started building, make sure you\u2019ve completed the NativeScript installation instructions using the link below.</p>\n\n                                            < ul >\n                                            <li><a href=\"/angular/start/quick-setup\" > Complete the NativeScript installation guide< /a></li >\n                                                </ul>\n\n                                                < h2 id= \"12-start-your-app\" > <a href=\"#12-start-your-app\" > 1.2: Start your app< /a></h2 >\n\n                                                    <p>With the NativeScript CLI installed, it's time to start building your app. Normally, you would <a href=\"https://github.com/NativeScript/NativeScript-cli#create-project\">use the <code>tns create</code> command to create an empty NativeScript application</a>.\n        For this guide, we've scaffolded out a boilerplate project to act as a starting point for <a href=\"https://github.com/NativeScript/sample-Groceries\"> Groceries < /a>.</p >\n\n                                                        <h4 class=\"exercise-start\" >\n                                                        <b>Exercise < /b>: Get the Groceries starting point\n                                                        < /h4>\n\n                                                        < p > Navigate to a folder where you want to keep your app code: </p>\n\n                                                            < div class=\"no-copy-button\" > </div>\n\n                                                                < pre > <code>cd the- folder - you - want - groceries - to - be -in\n                                                                    </code></pre>\n\n                                                                    <p>Next, assuming you have < a href= \"http://www.git-scm.com/\" > git installed< /a>, clone the Groceries repo from GitHub:</p >\n\n                                                                        <pre><code>git clone https://github.com/NativeScript/sample-Groceries.git\n</code></pre>\n\n    <p>After that, change to the newly cloned repo's folder:</p>\n\n        < pre > <code>cd sample- Groceries\n            < /code></pre >\n\n            <p>Finally, switch to the \u201Cstart\u201D branch for this guide's starting point:</p>\n\n                < pre > <code>git checkout start\n                    < /code></pre >\n\n                    <blockquote>\n                    <p><strong>TIP:</strong> The \u201Cend\u201D branch has the final state of this guide's tutorial. Feel free to <a href=\"https:// github.com / NativeScript / sample - Groceries / tree / end\">refer to the branch on GitHub</a>        if you get stuck.</p>\n        < /blockquote>\n\n            < div class=\"exercise-end\"> </div>\n\n                < h2 id=\"13-add-target-development-platforms\"> <a href=\"#13-add-target-development-platforms\"> 1.3: Add target development platforms< /a></h2 >\n\n                                <p>Your app is now set up, but before you run it, you need to initialize a platform- specific native project for each platform you intend to target.</p>\n\n                                    < h4 class=\"exercise-start\" >\n                                        <b>Exercise < /b>: Add the iOS and Android platforms\n                                        < /h4>\n\n                                        < p > If you're on a Mac, start by adding the iOS platform:</p>\n\n                                            < pre > <code>tns platform add ios\n                                                < /code></pre >\n\n                                                <p>Next, add the Android platform with the same < code > platform add< /code> command:</p >\n\n                                                    <pre><code>tns platform add android\n                                                        < /code></pre >\n\n                                                        <div class=\"exercise-end\" > </div>\n\n                                                            < blockquote >\n                                                            <p><strong>IMPORTANT:</strong> You can add platforms only for SDKs that you already have installed on your development machine. If you get errors running <code>tns platform add</code>, refer back to the section on < a href= \"#11-install-nativescript-and-configure-your-environment\" > setting up your development environment< /a>.</p >\n                                                                </blockquote>\n\n                                                                < p > The < code > platform add< /code> command adds a folder called <code>platforms</code > to your project, and copies all of the required native SDKs into this folder.When you build the application, the NativeScript CLI will copy your application code into the < code > platforms < /code> folder so that a native binary can be created.</p >\n\n                                                                    <h2 id=\"14-running-your-app\" > <a href=\"#14-running-your-app\" > 1.4: Running your app< /a></h2 >\n\n                                                                        <p>With the platform initialization complete, you can run your app in an emulator or on devices.</p>\n\n                                                                            < h4 class=\"exercise-start\" >\n                                                                                <b>Exercise < /b>: Run your app\n                                                                                < /h4>\n\n                                                                                < p > If you're on a Mac, start by running the app in an iOS simulator with the following command:</p>\n\n                                                                                    < pre > <code>tns run ios --emulator\n                                                                                        < /code></pre >\n\n                                                                                        <p>If all went well, you should see something like this:</p>\n\n                                                                                            < p > <img src=\"/img/cli-getting-started/nativescript/chapter1/ios/1.png\" alt= \"iOS login\" > </p>\n\n                                                                                                < p > Next, run your app on an Android emulator with the following command: </p>\n\n                                                                                                    < pre > <code>tns run android --emulator\n                                                                                                        < /code></pre >\n\n                                                                                                        <blockquote>\n                                                                                                        <p><strong>WARNING < /strong>:</p >\n\n                                                                                                        <ul>\n                                                                                                        <li>You must have at least one Android AVD (Android Virtual Device) configured for this command to work.If you get an error, try <a href=\"http://developer.telerik.com/featured/using-android-emulator-hybrid-mobile-apps-telerik-appbuilder/#managing-avds\" > setting up an AVD< /a> and then run the command again.</li >\n                                                                                                            <li>If you're using <a href=\"https://www.genymotion.com\">Genymotion</a>,\n                    launch your Genymotion virtual device, and then run <code>tns run android</code>.</li>\n                    < /ul>\n                        < /blockquote>\n\n                            < p> If all went well, you should see your app running in an Android emulator: </p>\n\n                                < p> <img src=\"/img/cli-getting-started/nativescript/chapter1/android/1.png\" alt=\"Android login\">                                    </p>\n\n                                    < div class=\"exercise-end\"> </div>\n\n                                        < p> Here are a few other tips for running NativeScript apps.</p>\n\n                                            < blockquote>\n                                                <p><strong>TIP < /strong>:</p >\n\n                                                                                                                                <ul>\n                                                                                                                                <li>To run on a USB- connected Android or iOS device, use the same < code > run < /code> command without the <code>--emulator</code > flag\u2014i.e. <code > tns run android< /code> and <code>tns run ios</code >.</li>\n                                                                                                                                    < li > The < code > tns device< /code> command lists all USB-connected iOS devices, USB-connected Android devices, and Genymotion virtual devices that <code>tns run</code > can deploy to.Note that < code > tns device< /code> does not list iOS simulators.</li >\n                                                                                                                                        </ul>\n                                                                                                                                        < /blockquote>\n\n                                                                                                                                        < h2 id= \"15-development-workflow\" > <a href=\"#15-development-workflow\" > 1.5: Development workflow< /a></h2 >\n\n                                                                                                                                            <p>At this point, you have the NativeScript CLI downloaded and installed, as well as the iOS and Android dependencies that you need to run your app.Now you need a good workflow that lets you make changes and see results fast.For that we\u2019ll use the < code > tns livesync< /code> command.</p >\n\n                                                                                                                                                <h4 class=\"exercise-start\" >\n                                                                                                                                                    <b>Exercise < /b>: Your first NativeScript change\n                                                                                                                                                    < /h4>\n\n                                                                                                                                                    < p > If your previous < code > tns run ios< /code> or <code>tns run android</code > task is still running, type < code > Ctrl + C < /code> in your terminal to kill it.</p >\n\n                                                                                                                                                        <p>If you\u2019re on a Mac, start an iOS livesync watcher by executing the following command: </p>\n\n                                                                                                                                                            < pre > <code>tns livesync ios --emulator --watch\n                                                                                                                                                                < /code></pre >\n\n                                                                                                                                                                <p>If you have your app running on an Android emulator, start an Android livesync watcher by executing the following command: </p>\n\n                                                                                                                                                                    < pre > <code>tns livesync android --emulator --watch\n                                                                                                                                                                        < /code></pre >\n\n                                                                                                                                                                        <p>If you instead have your app running on a USB- connected Android device or Genymotion virtual device, run the same command without the < code > --emulator < /code> flag:</p >\n\n                                                                                                                                                                            <pre><code>tns livesync android --watch\n                                                                                                                                                                                < /code></pre >\n\n                                                                                                                                                                                <p>The < code > tns livesync< /code> command updates your app by transferring the updated source code to the device or simulator. By adding the <code>--watch</code > flag, the < code > livesync < /code> command additionally watches the files in your NativeScript project. Whenever one of those files changes, the command detects the update, and patches your app with the updated code.</p >\n\n                                                                                                                                                                                    <blockquote>\n                                                                                                                                                                                    <p><strong>TIP < /strong>: You can learn about how this is possible by reading more about <a href=\"http:/ / developer.telerik.com / featured / nativescript - works / \">how NativeScript works</a>.</p>\n                                                                                                                                                                                    < /blockquote>\n\n                                                                                                                                                                                    < p > To see livesync in action let\u2019s make a small update to your app.Open your app's <code>app/views/login/login.xml</code> file in your text editor of choice and change <code>&lt;Label text=\"hello world\" /&gt;</code> to <code>&lt;Label text=\"hello NativeScript\" /&gt;</code>.</p>\n\n                                                                                                                                                                                        < p > Save < code > app / views / login / login.xml < /code> and you should see the app relaunch and the updated text displayed.</p >\n\n                                                                                                                                                                                        <div class=\"exercise-end\" > </div>\n\n                                                                                                                                                                                            < p > Regardless of whether you\u2019re running on iOS or Android, or whether you\u2019re using < code > tns livesync< /code> or <code>tns run</code >, the NativeScript CLI shows the output of < code > console.log() < /code> statements as your app executes, as well as stack traces when things go wrong. So if your app crashes at any time during this guide, look to the terminal for a detailed report of the problem.</p >\n\n                                                                                                                                                                                                <p>The iOS and Android logs can be a bit noisy, so you might have to scroll up a bit to find the actual problem.For example if I try to call < code > foo.bar() < /code> when <code>foo</code > does not exist, here's the information I get on iOS:</p>\n\n                                                                                                                                                                                                    < pre > <code>/app/path / to / file.js:14:8: JS ERROR ReferenceError: Can't find variable: foo\n1   0xe3dc0 NativeScript::FFICallback & lt; NativeScript::ObjCMethodCallback & gt;::ffiClosureCallback(ffi_cif *, void*, void**, void*)\n    < /code></pre >\n\n    <p>And here's the same information in the Android logs:</p>\n\n        < pre > <code>E / TNS.Native(2063): ReferenceError: foo is not defined\nE / TNS.Native(2063): File: \"/data/data/org.nativescript.groceries/files/app/./views/login/login.js, line: 13, column: 4\n    < /code></pre >\n\n    <blockquote>\n    <p><strong>TIP < /strong>: When you're trying to debug a problem, you can also try adding <code>console.log()</code > statements in your JavaScript code\u2014exactly as you would in a browser- based application.</p>\n\n        < p > <strong>WARNING < /strong>: Not all changes can be livesync\u2019d in a NativeScript app. For instance, livesync cannot patch native configuration file changes (<code>Info.plist</code >, <code>AndroidManifest.xml < /code>, and so forth), new plugin installations, and any other change that requires a full compilation of the application. In those cases, you\u2019ll want to use <code>Ctrl+C</code > to stop livesync, and rerun the application using the < code > tns run ios< /code> or <code>tns run android</code > commands.Don\u2019t worry though; when situations that require a full compilation come up in this guide, these instructions will be explicitly listed.</p>\n            < /blockquote>\n\n            < p > Now that you've created an app, configured your environment, and set up your app to run on iOS and Android, you're ready to start digging into the files that make up a NativeScript app.</p>\n\n                < div class=\"next-chapter-link-container\" >\n                    <a href=\"/tutorial/chapter-2\" > Continue to Chapter 2\u2014Building the UI< /a>\n                        < /div>\n                        < /article>";
//# sourceMappingURL=1.js.map