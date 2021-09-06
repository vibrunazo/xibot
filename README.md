## Xibot - Cross Eye Bot

Online tool to convert 3d stereogram images between *Cross View* and *Parallel View*.

[Side by Side 3d stereogram images](https://en.wikipedia.org/wiki/Stereoscopy#Side-by-side) are a pair of images that can be seen as 3d. To do so, you can use 2 different techniques:

- Cross View - Crossing your eyes together. [See r/CrossView/](https://www.reddit.com/r/CrossView/)
- Parallel View - Looking into the distance to open your eyes apart. [See r/ParallelView/](https://www.reddit.com/r/ParallelView/)

But an image that was setup to be viewed in Cross View will look incorrect with inverted depth if you try to view it with Parallel View. And vice-versa. To correct this is a simple matter of flipping the left and right sides of the image. Xibot does this for you. This can be helpful since some people can only use one of the 2 methods, and find the other too difficult.

## How does it work?

Really all that the website does is place the input image twice, side by side. Then hides the left side of the left image and the right side of the right image to make it look like it's just one new image with the right side of the left image and the left side of the right image. This is done on the client only. There's no server code rendering any new images. So it's just a simple static web page, cheap to host.

https://vib-xibot.web.app/
