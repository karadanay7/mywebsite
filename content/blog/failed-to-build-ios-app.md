---
authorname: Aysegul Karadan

title: "Failed to build iOS app Error (Xcode): Sandbox:"
img: /img/flutter-error/flutter.png
date: 29/10/2023
description: "Fixing the error : Failed to build iOS app Error (Xcode): Sandbox"
head:
  meta:
    - name: "keywords"
      content: "Flutter iOS build error, Xcode build error, Fix Flutter sandbox error, User Script Sandboxing, Troubleshooting Flutter iOS,Flutter file-write permissions,Debugging Xcode errors,Resolving iOS simulator issues,Flutter development tips,Mobile app development solutions,Failed to build iOS app Error (Xcode): Sandbox: rsync.samba(1885) deny(1) file-write-create,Error (Xcode): Sandbox: dart(1863) deny(1) file-write-create, Error (Xcode): Flutter failed to write to a file at, Could not build the application for the simulator. Error launching application on iOS device, Could not build the application for the simulator. Error launching application on  "

    - name: "author"
      content: "Aysegul Karadan"
---

### Failed to build iOS app Error (Xcode): Sandbox: rsync.samba(1885) deny(1) file-write-create

### Error (Xcode): Sandbox: dart(1863) deny(1) file-write-create

### Error (Xcode): Flutter failed to write to a file at

### Could not build the application for the simulator. Error launching application on iOS device.

<img src="/img/flutter-error/flutter.png" width="800" height="400" /><br>

If you're a Flutter developer building an iOS application and you've encountered the following error messages in Xcode:

Error (Xcode): Sandbox: rsync.samba(1885) deny(1) file-write-create
Error (Xcode): Sandbox: dart(1863) deny(1) file-write-create
Error (Xcode): Flutter failed to write to a file at
Could not build the application for the simulator. Error launching application on iPhone 15 Pro.
You're not alone. This error can be frustrating, but there is a simple solution. In this blog post, we'll guide you through the process of fixing this error.<br>
<br>

## The Error Explained

The error messages suggest that there's a problem with file-write permissions during the Flutter iOS build process. This is a common issue, but it can be resolved with a straightforward solution. <br>
<br>

## The Solution

To fix this issue, you can follow these steps:

1-Open Xcode and load your iOS project.

2-In the Xcode project navigator, locate the "Runner" folder within your iOS project.

3-Click on "Runner" to select it.

4-Open the "Build Settings" tab for the "Runner" target.

5-In the search bar, type 'User Script Sandboxing.'

6-You'll find an option named "User Script Sandboxing." Change the value from 'Yes' to 'No.'

7-Save your changes.<br>
<br>

## Why This Works

This issue is related to the security settings for scripts during the build process. Changing the "User Script Sandboxing" option to 'No' disables the sandboxing for user scripts, allowing Flutter to write the necessary files without encountering permission issues.<br>
<br>

## Conclusion

By following the steps mentioned above and changing the "User Script Sandboxing" option to 'No' in Xcode, you should be able to resolve the "Sandbox: rsync.samba(1885) deny(1) file-write-create" error and successfully build your Flutter iOS application for the simulator.

We hope this solution works for you and helps you get back to developing your Flutter apps without any hiccups. If you have any questions or encounter any issues, don't hesitate to reach out to the Flutter community or support channels for additional assistance.<br>
<br>
