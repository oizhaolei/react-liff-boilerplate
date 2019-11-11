# react-liff-boilerplate
Starter Kit for ReactJs developer to run and learn [LINE Frontend Framework](https://developers.line.me/en/docs/liff/overview/) (LIFF)

## How it work
This project build from [create-react-app](https://github.com/facebook/create-react-app) and [bootstrap](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap). Then add Line Frontend Framework (LIFF) [SDK](https://developers.line.me/en/docs/liff/developing-liff-apps/) and also provide `LiffHelper` and `messagingApiHelper` to help in communicate with LINE LIFF Platform.

# Install
Clone and run
```
npm install
```
Create config file in JSON and named it as `config.json`
```json
{
  "line" : {
    "channelAccessToken": "YOUR_CHANNEL_ACCESS_TOKEN"
  }
}
```
Run
```
npm start
```
then you can access [http://localhost:3000](http://localhost:3000)

## Demo
**Profile** : [http://localhost:3000](http://localhost:3000)

**SendMessage** : [http://localhost:3000/message](http://localhost:3000/message)

**LIFF Window** : [http://localhost:3000/window](http://localhost:3000/window)


# API
## Get Profile
Utility class `liffHelper` automatic initial LIFF when application launched. You can get user profile with command
```js
liffHelper.getProfile()
   .then(profile => {
      // do something
   });
```
## Get LIFF Info
Get User Context information
```
liffHelper.getLIFFInfo();
```
return [result](https://developers.line.me/en/reference/liff/#liffinit())

## Send Message
```
const message = messagingApiHelper.createTextMessage('text');
liffHelper.sendMessages(message);
```
## LIFF Window
```
liffHelper.openWindow('https://url.com', false);   // open url in LINE browser
liffHelper.openWindow('https://url.com', true);    // open url in external browser
liffHelper.closeWindow();                          // close LIFF window
```

## Author
Sitthi Thiammekha

### Deploy the app using 'Deploy to Heroku' button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/oizhaolei/react-liff-boilerplate)

1. Click **Deploy to Heroku** above.
2. On the "Create New App" page in Heroku, fill in the required information.
3. Click **Deploy app**.
4. Click **View** to confirm that your app is successfully deployed. You should see a page with the text "You have not assigned any value for LIFF ID". 
5. Take a note of your app's URL (`https://{Heroku app name}.herokuapp.com`). You'll need it when you add the app to LIFF.
