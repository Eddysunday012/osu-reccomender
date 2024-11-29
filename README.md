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
    - [x] Auth functionality (show profile on login)
    - [x] Isolate AvatarLoginButton from Navbar and use session as its prop for better testing
      - [ ] Then create test for this specific function
    - [x] Main functionality (without auth)
    - [x] Styling
  - [x] Side Bar
    - [x] Main functionality
    - [x] Styling
  - [ ] e2e testing (making sure it navigates to proper pages)
    - [x] Navigates to main three pages
    - [ ] Auth navigation works (figuring out how to properly test)
- [x] Home Page (scaffold version of it)
  - [x] List of all User's Beatmaps

### Backend

- [ ] Setup tRPC for API calls in nextjs application
  - [ ] Figure out middleware functionality for refresh tokens
  - [ ] Write tRPC osu route handler
    - [ ] - testing
- [ ] Setup Firebase
  - [ ] Create Firebase App
  - [ ] Setup Firebase Emulator
- [ ] Reccomender Model
  - [ ] Create Dataset
    - [x] Find way to parse beatmap data from beatmapsets
  - [ ] Analyze Dataset
  - [ ] Generate Model
- [ ] Deploy Model onto Firebase backend
