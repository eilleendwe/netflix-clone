# netflix-clone

A Netflix-inspired web application built with React, Firebase, and Vite.

## Features

- User authentication (Sign Up, Sign In, Sign Out) via Firebase
- Browse movies using The Movie Database (TMDb) API
- Watch trailers via embedded YouTube player
- Responsive UI with custom components (Navbar, Footer, TitleCards)
- Loading spinner and toast notifications for user feedback
- **Planned:** Search movies by title
- **Planned:** Search movies by category

## Folder Structure

```
src/
  App.jsx                # Main app component with routing
  firebase.js            # Firebase configuration and auth logic
  main.jsx               # Entry point, sets up React and Router
  index.css              # Global styles
  assets/                # Images and icons
    cards/               # Card images for featured movies
  components/
    Navbar/              # Top navigation bar
    Footer/              # Footer with social icons
    TitleCards/          # Movie cards carousel
  pages/
    Home/                # Homepage with hero banner and movie lists
    Login/               # Login and signup page
    Player/              # Trailer player page
public/
  background_banner.jpg  # Background image
  netflix_favicon.ico    # Favicon
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

## Environment

- React 19
- Firebase 11
- Vite 7
- React Router DOM 7
- React Toastify

## API

- [Firebase](https://firebase.google.com/)
- [TMDb](https://www.themoviedb.org/documentation/api)
- [YouTube Embed](https://developers.google.com/youtube/player_parameters)

## License

This project is for educational purpose only

## Credit

- This project was built by following a YouTube tutorial.  
- Credit to the original creator for guidance and resources.