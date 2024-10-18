# Osu Reccomender Web App

This Project is a Web App for an [Osu](https://osu.ppy.sh/) Reccomender. Currently still in development.

The figma design can be found [here](https://www.figma.com/design/tvCc0rsBiD7Ex1YpUwtSMO/osu-reccomender?node-id=102-995&t=3vYmuE5X8Xz0Ok3l-1).

## TODO:

### Frontend

- [x] Create t3 App
- [x] Install initially needed packages
- [x] Setup Cypress
- [x] Setup Auth Page
  - [ ] Style Auth Page
- [ ] Main Layout Component (Navigation Bar and Side Bar)
  - [ ] Navigation Bar
    - [ ] Auth functionality (show profile on login)
    - [x] Main functionality (without auth)
    - [x] Styling
  - [x] Side Bar
    - [x] Main functionality
    - [x] Styling
  - [ ] e2e testing (making sure it navigates to proper pages)
- [ ] Home Page (scaffold version of it)
  - [ ] List of all User's Beatmaps

### Backend

- [ ] Setup Firebase
  - [ ] Create Firebase App
  - [ ] Setup Firebase Emulator
- [ ] Reccomender Model
  - [ ] Create Dataset
  - [ ] Analyze Dataset
  - [ ] Generate Model
- [ ] Deploy Model onto Firebase backend
