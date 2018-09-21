# Warehouse Web Developer Exercise

In this excercise we would like you to build a web component similar to this [screenshot](recommendation_screenshot.png) using the [JSON](data/recommendations.json) provided. Creativity is accepted but do not alter the JSON. The component you build should display images, prices and link to the product taking into consideration how it would work with i18n.

### Requirements
* Responsive
* Reusable code

Please fork this repository and commit your changes for review.

Amend this Readme in your forked repo and use your commits to outline the component you have created and the decisions that you have made.

### Run the project

`npm install`
`npm run start`

### Design decisions

I used React because I find it more suitable to build reusable components.
The main component is `ItemCard`. In the `App` entry point component I imported the datas from the json file and used a map in order to create several ItemCards, to which I passed the props that will then be passed to the child components.
By changing the props passed to `ItemCard` in `App`, the derived components will automatically be updated.

I used SCSS combined with BEM because it makes it easier to nest selectors and the styling code is more maintainable.
