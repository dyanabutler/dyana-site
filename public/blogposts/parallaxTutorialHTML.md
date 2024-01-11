
# Easy Animations for Your Website: No Complex Code Required!

**Ever noticed those animations on websites that come to life as you scroll?**

Curious how it's done but worried the code might be too complex?

Worry not! You won't believe the simplicity of creating scroll-activated animations using just HTML, CSS, and a bit of JavaScript. 

Let's turn your boring static page into a dynamic storytelling canvas. It's easier than you'd think!

###### *Eager to start?* Jump right in by cloning the [GitHub repo](https://github.com/dyanabutler/my-first-parallax). Sometimes diving straight into the action is the best way to learn. When you're ready, you can circle back to this tutorial for a deeper dive into the 'how' and 'why'!


## What is Parallax?
![Driving Riding Gif](https://media.tenor.com/ZJpLxDyieVEAAAAC/driving-riding.gif) <div class="tenor-gif-embed" data-postid="16565442" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%"><a href="https://tenor.com/view/driving-riding-travel-joy-ride-happy-gif-16565442">GIF</a> from <a href="https://tenor.com/search/driving-gifs">Tenor</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

Imagine you're driving through the countryside. The trees close to the road seem to whizz past you, but the mountains in the distance appear to move slowly. This is the essence of the parallax effect—it's all about creating depth by making background objects move slower than foreground objects.

## Image Selection and Preparation

Creating a parallax effect starts with choosing the right images:

- **Ready-to-Use Images**: For a quick start, download the starter project with the layered images from this [GitHub repository](https://github.com/dyanabutler/parallax-project-template) to follow along with our tutorial.

- **Find or Create Layered Images**: Use Photoshop to create or find images with transparent layers. For pre-made options, [Freepik](https://www.freepik.com) is a great resource.

- **Artwork Used**: In our project, select 4-5 layers from [Freepik’s Alien Planet Background](https://www.freepik.com/free-vector/alien-planet-parallax-background-space-game-extraterrestrial-2d-landscape-with-rocks-crystals-two-suns-purple-sky-cartoon-animation-scene-view-with-separated-layers-vector-illustration_21087522.htm#query=parallax&position=3&from_view=search&track=sph) to create the effect.



Each layer should be exported as a separate image with transparency to stack them on your webpage. With the images prepared, let's dive into building the parallax effect.



## Our Project Structure

We'll build a simple `index.html` page with a header, a section and a footer. 

``` HTML
<!doctype html>
<html>
<head>
    <!-- Head content with stylesheets and meta tags -->
    <title> Parallax Scrolling Website | HTML CSS JS</title>

        <link rel="stylesheet" type="text/css" href="style.css">
        <!-- External stylesheet for styles -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.1/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMt23cez/5paNdF+TmFE5o4CM2Ck3fQzJ3w5wB3" crossorigin="anonymous">
        <!-- FontAwesome for icons if needed -->
</head>
<body>

    <header>
        <!-- Simple navigation header with a logo and menu items -->
        <a href="#" class="logo">DYANA</a>
            
            <ul>
                <li><a href="#home-section" class="active">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#art-section">Art</a></li>
                <li><a href="#contact-section">Contact</a></li>
            </ul>
            <!-- Each menu item links to a different section of the page -->
    </header>

     <!-- Parallax Section Start -->
    <section id="home-section">
       <!-- Each image has a unique ID for individual styling and scripting -->
        <img src="Stars.png" id="stars">
        <img src="moon.png" id="moon">
        <img src="rockBG.png" id="rockBG">
        <h2 id="text">Fly Me To The Moon</h2>
        <!-- The button below is linked to the about section -->
        <a href="#about-section" id="btn">Explore</a>
        <img src="rockfront.png" id="rockfront">
    </section>

    <!-- Additional sections for About, Art, and Contact -->
     <div class="sec" id="about-section"> 
            <h2>About</h2>
            <p> This website was created for the sole purpose of trying out the famous parallax effect. Made with just HTML, CSS, and a sprinkle of Javascript.</p>
        </div>

        <div class="sec" id="art-section">
            <h2>Art Cred</h2>
            <p>
                <a href="https://www.freepik.com/free-vector/alien-planet-parallax-background-space-game-extraterrestrial-2d-landscape-with-rocks-crystals-two-suns-purple-sky-cartoon-animation-scene-view-with-separated-layers-vector-illustration_21087522.htm#query=parallax&from_query=paralla&position=3&from_view=search&track=sph">A special thanks to this talented artist for allowing their work to enhance this digital experience.</a>
            
                </p>
           
        </div>

        <div class="sec" id="contact-section"> 
            <h2>Let's Connect</h2>
            <p>If you're inspired by what you see or just want to drop a hello, I'd love to hear from you! Head over to main website to get in touch.</p>
            <button><a href="https://www.dyanabutler.com/#contact">Commense Connect</a></button>
        </div>

    <footer>
        <p>Visit my main website at <a href="http://dyanabutler.com">dyanabutler.com</a></p>
    </footer>
    
    <!-- JavaScript at the bottom before the closing body tag -->
    <script>
        // Code explained in the JavaScript section below
    </script>

</body>
</html>
```
## Adding Styles with CSS 

Now, let's style our `style.css` page. The key to parallax is absolute positioning and z-index. 

The CSS is crucial for positioning your elements. You're using position: absolute; which is perfect for parallax because it takes the elements out of the normal document flow and positions them relative to their closest positioned parent or to the initial containing block (usually the viewport).

For the parallax effect to work, you'll want to ensure that the z-index is correctly set so that elements layer on top of one another as expected. For example, you'll notice #rockfront has a higher z-index to ensure it stays above the other layers, which is what we want.

```CSS
/* Imports the 'Poppins' font in multiple weights from Google Fonts for use throughout the page. */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* Universal reset to remove default margins and padding; sets 'box-sizing' to ensure elements are sized by border-box, and sets the default font for all elements. 'scroll-behavior: smooth' enables smooth scrolling for anchor links. */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
}

/* Sets a minimum height for the body to ensure it fills the viewport and applies a background gradient. 'overflow-x: hidden' prevents horizontal scroll. */
body {
    min-height: 100vh;
    background: linear-gradient(#000000, #190531);
    overflow-x: hidden;
}

/* Styles the header with absolute positioning and high z-index to ensure it's always on top, with padding and flexbox for layout. */
header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
}

/* Logo styling with uppercase text, letter spacing, and white color to stand out against the dark background. */
header .logo {
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* Flexbox layout for the header navigation list for even spacing and centering of items. */
header ul {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Removes list styling and adds margin to each list item for spacing. */
header ul li {
    list-style: none;
    margin-left: 20px;
}

/* Styles for the navigation links with padding for clickable area and rounded borders for aesthetics. */
header ul li a {
    text-decoration: none;
    padding: 6px 15px;
    color: #fff;
    border-radius: 20px;
}

/* Hover and active styles for navigation links to indicate interactivity and the current section. */
header ul li a:hover,
header ul li a.active {
    background: #fff;
    color: #A766D0;
}

/* Section base styling sets up the section's size and uses flexbox for centering its content. 'overflow: hidden' enables the clipping of child elements for the parallax effect. */
section {
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* This pseudo-element styles a gradient at the bottom of sections for a fade-out effect, enhancing the parallax experience. */
section::before {
    content: '';
    position: absolute;
    bottom: -150px;
    width: 100%;
    height: 300px;
    background: linear-gradient(to top, #190531, transparent);
}

/* Absolute positioning for images in sections allows them to be placed independently of the text, essential for parallax. */
section img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
}

/* The 'moon' image uses 'mix-blend-mode: screen' to blend with the dark background. 'object-fit: contain' keeps its aspect ratio. */
section img#moon {
    mix-blend-mode: screen;
    object-fit: contain;
}

/* Foreground 'rockfront' image is given a higher z-index to ensure it's on top of other elements. */
section img#rockfront {
    z-index: 10;
}

/* Styles for the main heading text with absolute positioning and a large font size. It starts off-screen to the right. */
#text {
    position: absolute;
    right: -350px;
    color: #fff;
    white-space: nowrap;
    font-size: 7.5vw;
    z-index: 9;
}

/* Button styling with inline-block for layout, padding for size, rounded borders, and initial transformation for an off-screen start position. */
#btn {
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    border-radius: 40px;
    background: #fff;
    color: #2b1055;
    font-size: 1.5em;
    z-index: 9;
    transform: translateY(100px);
}

/* Additional section styling for non-parallax sections with padding, background gradient, and centered text. */
.sec {
    position: relative;
    padding: 50px 100px;
    background:linear-gradient(to bottom, transparent, #564094);
    text-align: center;
    margin: 100px auto;
    max-width: 800px;
    overflow: hidden;
}

/* Heading and paragraph styles within '.sec' sections for size, color, and margin for visual separation. */
.sec h2 {
    font-size: 3.5em;
    margin-bottom: 20px;
    color: #fff;
}

.sec p {
    font-size: 1.2em;
    margin-bottom: 20px;
    color: #fff;
}

/* Link styling within '.sec' to ensure visibility and a hover effect for better user experience. */
.sec a {
    color: #fff;
}

.sec a:hover {
    text-decoration: none;
}

/* Button styling within '.sec' with padding, background color, border-radius for rounded corners, and a hover effect. */
.sec button {
    padding: 10px 20px;
    background-color: #A765D0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.sec button a {
    text-decoration: none;
}

.sec button:hover {
    background-color: #000;
}

/* Footer styling with background color, padding, and text styling for consistency with the page's color scheme. */
footer {
    background-color: #2b1055;
    padding: 10px 0;
    text-align: center;
    color: #fff;
    font-size: 1em;
}

/* Link styling in the footer with a color transition effect on hover. */
footer a {
    color: #A766D0;
    text-decoration: none;
    transition: 0.3s;
}

footer a:hover {
    text-decoration: underline;
    color: #fff;
}
```




## Adding the Javascript Interaction

JavaScript makes the parallax come to life. You can create a seperate 'main.js' page or you can just type a `<script></script>` into your HTML page before the end of the `</body>` tag,
We'll use window.addEventListener to react to the scroll event. Your script listens for the scroll event and moves each element based on the scrollY value. This is done by changing the top or left properties of the elements, which shifts them at different rates as you scroll down the page.

For example, stars.style.left = value * 0.25 + 'px'; moves the stars to the left as you scroll, but slower than the foreground elements.

```HTML
<script>
            let stars = document.getElementById('stars'); // Selecting our elements using their IDs
            let moon = document.getElementById('moon');
            let rockBG = document.getElementById('rockBG');
            let text = document.getElementById('text');
            let btn = document.getElementById('btn');
            let rockfront = document.getElementById('rockfront');
            let header = document.querySelector('header')

            window.addEventListener('scroll', function() {
                let value = window.scrollY; // This value changes as you scroll
                stars.style.left = value * 0.25 + 'px'; // This value changes as you scroll
                moon.style.top = value * 1.05 + 'px'; // Moves a bit faster than the scrolling speed
                rockBG.style.top = value * 0.5 + 'px'; // Moves at half the speed of scrolling
                text.style.marginRight = value * 4 + 'px';  // Moves rapidly to the right
                text.style.marginTop = value * 1.5 + 'px';// Moves down but slower than 'moon'
                btn.style.marginTop = value * 1 + 'px'; // Moves down with the scroll speed
                rockfront.style.top = value * 0 + 'px'; // Doesn't move vertically
                header.style.top = value * 0.5 + 'px'; // Header moves down at half the scroll speed
                
            })
           </script>
```
Each element is moved at a different rate when scrolling, which creates the depth effect of the parallax. The value variable gets the number of pixels that the document is currently scrolled along the vertical axis, and then it's used to calculate the new positions of the elements.

With these details in place, you have a functional parallax effect. You can fine-tune the speed multipliers (like 0.25, 1.05, 0.5, etc.) to adjust how fast each element moves and to perfect the visual depth effect.

Make sure to test across different browsers and devices to ensure consistency in the experience, as the performance of parallax scrolling can vary.

# Conclusion

And that’s it! You've created a beautiful parallax effect. 

The parallax effect can add a lot of visual interest to your site, but it's also important not to overdo it. Too much movement can be overwhelming for users. Always test your design to make sure it's pleasant and doesn't distract from your content.

[Access the full GitHub repo here](https://github.com/dyanabutler/my-first-parallax) and check out my portfolio website at [dyanabutler.com](https://www.dyanabutler.com).

[Sign up for my newsletter](https://dyanabutler.beehiiv.com/subscribe) for **weekly updates** and **exclusive freebies** that fueled my journey from retail to tech 💌

Ready to bring your own parallax project to life? I can't wait to see it! Share your creation with me to showcase your talent and inspire the community. Post your link and tag me on [social media!](https://www.linkedin.com/in/dyanabutler/) 

