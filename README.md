# Slash

A real-time chatting app (Slack clone).

Users can:

1. post a massage (with images/links)
2. create a new channel and add users to it
3. comment in thread or off it
4. add emojis reactions
5. edit & delete massages (as owners)
6. search for channels and users
7. send direct messages between users

<!-- ### [Online Demo](https://canna-cure.netlify.app/) -->

## Tech Stack:

- NodeJS/Express
- React
- CSS
- Stream.io
- Twilio
- Universal-Cookie

### Signup page:

![Alt text](Project_images\chat_app_cover.png?raw=true "Signup page")

### Create new channel:

![Alt text](Project_images\chat_app_create_channel.png?raw=true "Create new Channel")

### Search modal:

![Alt text](Project_images\chat_app_search.png?raw=true "Search modal")

### Channel overview

![Alt text](Project_images\chat_app.png?raw=true "Search modal")

## Getting started

Please fork a copy of this repository. Forking a repository allows you to freely experiment with changes without affecting the original project. Alternatively download or clone the master branch.

### Download & Install Dependencies on your machine

Clone the repo to your machine

```
git clone <CloneURL>
```

### Launch Server

1. Within terminal or cmd ensure you have navigated inside the 'server' directory and installed the dependencie

```
   cd <.../path/to/server>
   yarn add OR npm install
```

2. Run the start script
   ```
   yarn run start OR npm run start
   ```

### Launch Client

1. Open a new terminal window and navigate inside the 'client' folder as you will need to keep the backend running in the background
   ```
   cd <../path/to/client>
   yarn add OR npm install
   ```
2. Run the start script
   ```
   yarn run start OR npm run start
   ```

Your app should be running on: http://localhost:3000
