# MUcv.com

## A Demo site for CantoVario

Using react for quick developement, and without a database.

### Mashups
<ul>
<li>All fixed mashups made by Trevor are in the Fixed Folder in src</li>
<li>To see a list of all available mashups, check out fixedlist.json in the Fixed folder</li>
<li>To add/edit mashups, follow the naming conventions laid out in the json for all fields and then add the mp3 file </li>
    <ul>
    <li> For example, if I wanted to use a different mp3 for Love More and Because:
    </li>
    <li> Find the location of that mashup in the songfiles.
    </li>
    <li> It would be called src/Fixed/love_more_X_because.mp3
    </li>
    <li> Take your new mp3, name it "love_more_X_because.mp3" (notice that it's the same name)
    <li>
    Delete the old one, and put in your new one</li>
    </li>
    <li>
    In the command line, run npm run deploy and the changes will reflect in the deployed version in an hour or two </li>
    </ul>
<li>I think gh-pages might have a 1gb limit for static site hosting, so be careful with that</li>
</ul>

### Styles
All styling is done in the App.css file

### Routing / New Pages
This page uses react-router to control endpoints. Add the route in App and then create your components accoringly!

### Deployment

This site is deployed using [react-gh-pages](https://github.com/gitname/react-gh-pages) module. If any  changes are made, redeploy using command ```npm run deploy```. Changes may take a while to take effect.