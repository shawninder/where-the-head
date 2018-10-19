# Where the <Head>?

This repo reproduces a bug in Next 7 where the server doesn't render the <head>, producing among other symptoms a flash of unstyled content (FOUC).

# Install
`npm i`

# Reproduce the issue
- `npm run dev`
- visit http://localhost:3000/
- observe a FOUC on reloading the page
- visit `view-source:http://localhost:3000/`
- notice the absence of a `<head>` tag

# Work around the issue
- `rm pages/_document.js`
- Kill dev server (Ctrl+C) and restart (`npm run dev`)
- issues have disappeared
