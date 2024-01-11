# Parallax Zoom Scroll Effect in Webflow

## Overview
Create a dynamic gallery with a central image zooming effect and surrounding images fading out upon scrolling, all without writing any code in Webflow.

## Preparing Images
- Select approximately 5 images, with credits to creators if necessary.
- Ensure images are available in the Webflow assets panel.

## Setting Up The Landing Page
1. Start with a pre-designed navigation and hero section.
2. Create a `div` named `scroll-stack` with the following styles:
   - Position: `relative` (this will let grid-mask know where to stick to using position: `sticky`)
   - Height: `500svh`
3. Inside `scroll-stack`, insert a `quick stack` grid with 4 rows and 3 columns.
   - Adjust the grid to merge some cells to layout the image gallery.
   - Set the `quick stack` height to `100svh`.
## Implementing The Grid Mask
- Wrap `quick stack` in a new `div` with class `grid-mask`:
  - Set overflow: `hidden`.
  - Position: `sticky` with a top value of `0`.

## Arranging Images
1. Drag images from assets into the grid cells.
2. For non-central images, create a class `fading-image` with:
   - Width: `100%`
   - Height: `100%`
   - Fit: `Cover`
3. Apply `fading-image` class to all peripheral images.
4. For the central image, apply the same settings but with a class `main-image`.

Got it. So it seems we need to adjust the column sizes after adding the images to ensure all images are fully visible and the layout is as desired. Here’s a simplified version of the corrected step:

After adding images to the grid, change the column sizes for the first and third rows to 20svh to make sure the bottom images aren't cut off and the middle row stands out at 60svh.



## Adding Content Below Parallax
- Add a pre-designed section below, like a "Teams" layout, to complete the effect.

## Animation Interaction
1. Select the `scroll-stack` layer and navigate to interactions.
2. Create a "while scrolling in view" trigger named "scroll-zoom-effect".
3. Customize the `quick stack` animation:
   - Set the start keyframe at 15% with a scale of `1`.
   - End the animation around the 80% keyframe with a scale of `2.3`.

## Fading Out Peripheral Images
1. Select a `fading-image` class.
2. Animate opacity from `100` at 15% keyframe to `0` at 30% keyframe.

## Enhancing The Central Image
You could finish  here but let's make it better. To add a more immersive pan out while panning in effect let's wrap the main image in div block and call it main-image-mask. Set to overflow:`hidden`

- For a drifting effect, animate the central `main-image`:
  - Start with a scale of `1.5` at 15% keyframe.
  - Scale back to `1` at 80% keyframe.


## Conclusion
Congratulations on completing this simple Webflow parallax effect without coding! If you enjoy my tutorials and wish to support more content, consider a donation.

*Happy creating, and I look forward to seeing your projects!*

[Newsletter Subscription](#)
[Additional Tutorials](#)
