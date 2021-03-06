## [View Final Project](https://cdn.rawgit.com/diva-D/MDN-learn-web-development/30a4f023/JavaScript/Assessment%2002%20-%20Image%20Gallery/index.html)


# Project brief
You have been provided with some HTML, CSS and image assets and a few lines of JavaScript code; you need to write the necessary JavaScript to turn this into a working program. The HTML body looks like this:

```html
<h1>Image gallery example</h1>

<div class="full-img">
  <img class="displayed-img" src="images/pic1.jpg">
  <div class="overlay"></div>
  <button class="dark">Darken</button>
</div>

<div class="thumb-bar">

</div>
```

The example looks like this:

![Final example](gallery.png)

The most interesting parts of the example's CSS file:

- Absolutely position the three elements inside the full-img ``<div>`` — the ``<img>`` in which the full-sized image is displayed, an empty `<div>` that is sized to be the same size as the `<img>` and put right over the top of it (this is used to apply a darkening effect to the image via a semi-transparent background color), and a `<button>` that is used to control the darkening effect.
- Set the width of any images inside the thumb-bar `<div>` (so-called "thumbnail" images) to 20%, and float them to the left so they sit next to one another on a line.

Your JavaScript needs to:

- Loop through all the images, and for each one insert an `<img>` element inside the thumb-bar `<div>` that will embed that image in the page.
- Attach an onclick handler to each `<img>` inside the thumb-bar `<div>` so that when they are clicked, the corresponding image will be displayed in the displayed-img `<img>` element.
- Attach an onclick handler to the `<button>` so that when it is clicked, a darken effect is applied to the full-size image. When it is clicked again, the darken effect is removed again.