---
title: RaspberryPi Watercooling

date: 2018-03-08 -
image: /assets/p/2018/raspberrypi-watercooling/img_6792.jpg
---

I've had this idea for a while now, but I finally got round to executing it.
The core of this is the water cooling block, which is made from three layers; a base of aluminium, a second hollow plastic one and a third plastic layer with holes for water to flow in and out. I ended up using the sheathing from some earthing wire to create the segment which the longer tube attached to, and then applied copious amounts of CA glue to bond all the parts together, before letting it set for half an hour or so. I had initially added a small piece in the middle of the cavity, which I had thought would improve water flow round the edges, but bubble ended up collecting around it so removed it to find my worries were not true. The whole cooler, however was a little oversize, but I was able to fit it by mounting at an angle.

![](/assets/p/2018/raspberrypi-watercooling/img_6792.jpg){: .half-image}
![](/assets/p/2018/raspberrypi-watercooling/img_6791.jpg){: .half-image}

I then set up a cooling loop, using a mini 12v aquarium pump I bought online, and a small amount of Arctic Alumina thermal compound on the CPU, making sure to mask off the rest of the board with tape to ensure shorts did no occur.

![](/assets/p/2018/raspberrypi-watercooling/img_6790.jpg){: .half-image}
![](/assets/p/2018/raspberrypi-watercooling/img_6794.jpg){: .half-image}

I monitored the PI over SSH from my laptop for simplicity, and ran the Garlicoin CPU miner as a stress test, and overclocked to the default 'high' setting in RaspiConfig. I monitored the temperatures using the commands explained here, which flattened out at around 20˚C, proving that this concept, although entirely impractical, worked well. I also took pleasure in watching drops of dye spread around the pipes in pulses (see video).

<div>
  <img class="half-image" src="img_6796.jpg">
  <iframe class="half-image" src="https://www.youtube.com/embed/hgnU9K_aeco?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
