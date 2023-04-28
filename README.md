# Intro section with dropdown navigation solution

![Design preview for the Intro section with dropdown navigation coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![A screenshot of my Desktop solution to the challenge](./images/intro-section-with-nav-screenshot.png)

### Links

- Solution URL: [My Solution](https://www.frontendmentor.io/solutions/responsive-landing-page-with-mobile-navigation-menu-YIivjR__0m)
- Live Site URL: [My Live Site](https://fperezfrancisco.github.io/intro-page-with-nav/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Event-listners

### What I learned

This project truly helped me apply my knowledge as a Front-end Developer using HTML, CSS, and Javascript. I was given a set design with some important details -- such as the drop down navigation menus and responsive structure -- and thus I was able to succesfully accomplish those goals.

The biggest takeaway for me came in the application of the navigation menus.

```html
<div class="featuresDropDown flex hidden">
  <ul class="featuresList flex">
    <li class="navLi subLi flex">
      <img src="./images/icon-todo.svg" alt="todo" />
      <span class="subLiTitle">Todo List</span>
    </li>
    <li class="navLi subLi flex">
      <img src="./images/icon-calendar.svg" alt="calander" />
      <span class="subLiTitle">Calander</span>
    </li>
    <li class="navLi subLi flex">
      <img src="./images/icon-reminders.svg" alt="reminders" />
      <span class="subLiTitle">Reminders</span>
    </li>
    <li class="navLi subLi flex">
      <img src="./images/icon-planning.svg" alt="planning" />
      <span class="subLiTitle">Planning</span>
    </li>
  </ul>
</div>
```

I was able to use a simple, elegant, and organized method to structure the "sub-navigation menus" within the larger navigation menu for the Features and Company drop down.

This paired with some stlying and simple event listeners within JS allowed me to have a simple and effective solution to the complex issue of nested drop-down navigation menus.

```js
featureLi.addEventListener("click", () => {
  featureArrowDown.classList.toggle("hidden");
  featureArrowUp.classList.toggle("hidden");
  featuresDropDown.classList.toggle("hidden");
});
```

### Continued development

Some areas I still find myself working on are -- accessibilty and fast-load speeds. Although I have been much more comfortable building and following a website/landing-page design and building it using HTML, CSS, and Vanilla JS, I still find myself needing to master the fine details when it comes to accessibilty and reducing page load time. I will continue to work and learn to turn these into strengths in the near future!

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@fperezfrancisco](https://www.frontendmentor.io/profile/fperezfrancisco)
- LinkedIn - [@yourusername](https://www.twitter.com/yourusername)
