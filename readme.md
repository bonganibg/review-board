## Reviewer Board
Chrome extension for sharing notes on student submission history for reviewers.

## Requirements 
- Chrome (MV3)
- Tailwind CSS

## Set up

### Running Extension

#### Setting Up Code
1. Set the value of the `API_URL` in the `./src/popup.js` file to the correct URL.
2. Set the value of the `API_KEY` in the `./src/popup.js` to your API Key.

### Setting Up Extension
1. Open Chrome
2. Set URL to *chrome://extensions/*
3. Click Load unpacked
4. Locate `review-board` folder
5. You're done

## Working with the Code

### Initialize Tailwind CSS
Before making any changes to the styling, you need to get Tailwind CSS running so that the output.css can be updated and the new styles can be implemented.

``` shell
npx tailwindcss build -i ./src/css/style.css -o ./src/css/output.css --watch
```

## Suggested Features and Bugs
If there are any features you would like to see or any bugs that you have found, you can create an [issue](https://github.com/bonganibg/review-board/issues). Please make sure that you add the an appropriate label for the issue.