# Desmos Test Mode Chrome App

The Desmos Test Moe Chrome App is a restricted, test-safe version of the Desmos Graphing Calculator. It was designed in partnership with Eanes Independent School District to be compatible with STAAR exams or any other state assessment.

It runs in "kiosk mode," which allows teachers to more easily monitor students to make sure that they do not use any other apps during a test.

Note: there are two Desmos apps in the Chrome web store: the Desmos Graphing Calculator app, and the Desmos Test Mode app. The Desmos Graphing Calculator app is basically just a link to our website, and does not generally need to be updated. This project builds the Desmos Test Mode app, which has special configurations and uses Kiosk mode.

Builds of this project should be used to update the Desmos Test Mode app, and not the Desmos Graphing Calculator app.

Note: on macOS, you may need to install `wget` in order to run `make chrome_app`. You can do this using Homebrew by running

```
brew install wget
```

## Making the app

```
cd frontend
make
make chrome_app
```

This will generate a knox/chrome_app/package.zip file. This is the file that must be uploaded to google to update the app.

## Installing the app

1.  Open chrome
2.  Navigate to chrome://extensions/
3.  Make sure "Developer mode" is checked
4.  Click "Load unpacked extension"
5.  Navigate to knox/chrome_app and click "select"
6.  The app should be added to the list of apps. Hit launch.

## Publishing the app

1.  Navigate to https://chrome.google.com/webstore/developer/dashboard
2.  Select "edit" for the Desmos Test Mode app
3.  Select "update uploaded package", and upload chrome_app/package.zip
4.  At the bottom right of the page, click the "publish changes" button

More information at:

- https://developer.chrome.com/apps/first_app
- https://developer.chrome.com/webstore/publish
# waecceqawec
