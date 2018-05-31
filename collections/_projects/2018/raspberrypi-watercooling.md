---
title: RaspberryPi Watercooling

navtype: project

pubdate: 2018-03-08 -
categories: all project

coverimg: https://lh3.googleusercontent.com/vQuScKIoeMcDKLUnT9c_Y3c71DWKSuHLFTc5NFEG9hweYeJAno-9aGQHBgbIgSq1AGGtCcBzEoBk5swri2UksPgRiPh3UD4cyYC5wAyzeoixwCQCXUGJWlm9H4Z4cbx-0sXTlpOBVA
---
I've had this idea for a while now, but I finally got round to executing it.
The core of this is the water cooling block, which is made from three layers; a base of aluminium, a second hollow plastic one and a third plastic layer with holes for water to flow in and out. I ended up using the sheathing from some earthing wire to create the segment which the longer tube attached to, and then applied copious amounts of CA glue to bond all the parts together, before letting it set for half an hour or so. I had initially added a small piece in the middle of the cavity, which I had thought would improve water flow round the edges, but bubble ended up collecting around it so removed it to find my worries were not true. The whole cooler, however was a little oversize, but I was able to fit it by mounting at an angle.

<img class="post-image" src="https://lh3.googleusercontent.com/vQuScKIoeMcDKLUnT9c_Y3c71DWKSuHLFTc5NFEG9hweYeJAno-9aGQHBgbIgSq1AGGtCcBzEoBk5swri2UksPgRiPh3UD4cyYC5wAyzeoixwCQCXUGJWlm9H4Z4cbx-0sXTlpOBVA">
<img class="post-image" src="https://lh3.googleusercontent.com/zYYdsnReZ1qOsU7dEgaMl9cJx4kVAP2wotdqpiJqbu1IdvyNJGS5rAw96QNpNMaq8_O4UBUlE06YANG6lg_y01_eYP7nO4Q5Yf2C749GAFtFQALFWOk7zi9EsrRO1UX-e_EeK9-viA">

I then set up a cooling loop, using a mini 12v aquarium pump I bought online, and a small amount of Arctic Alumina thermal compound on the CPU, making sure to mask off the rest of the board with tape to ensure shorts did no occur.

<img class="post-image" src="https://lh3.googleusercontent.com/L0dfZbfZdCnj_4AQyEhPj6EZCP8QWx9cmXrfdpBwp-YVBvYO3cZNHdVX9oqrMN9s1GCu8J6_3cPd33MNKY1g0HYMNTFyZ6DmvLJFiJSN0qoRB6rD7TsZChfkzqeK4p68lDqkEEjcpA">
<img class="post-image" src="https://lh3.googleusercontent.com/AJ63X89ihtnk0L5EVeYZdJdT2-0s6vaWdBIkKfFayyEJwbhEMpS0NONUdZOWkjP-ZjyBhHUKKIzhpIJibdTTSK9oYhJh2agG31sZXkCnItEhgji2pBvZKDyHGijh7DrZ1acaa757EQ">

I monitored the PI over SSH from my laptop for simplicity, and ran the Garlicoin CPU miner as a stress test, and overclocked to the default 'high' setting in RaspiConfig. I monitored the temperatures using the commands explained here, which flattened out at around 20˚C, proving that this concept, although entirely impractical, worked well. I also took pleasure in watching drops of dye spread around the pipes in pulses (see video).
<div>
  <img class="post-image" src="https://lh3.googleusercontent.com/TUoGA9VUTK01D4q8R5x_E7VE7gGX_s2K7ScSqbuavSh9JLQwVwMtnp_C4Os86Gn7lYb150JaZxI7CfUiWZVchnXuZPT6H5S5O2FrFl39s1Q43W6OdH3dWMfN1KSZUiWsX50OWcwFrA">
  <iframe class="post-image" height="283" src="https://www.youtube.com/embed/hgnU9K_aeco?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
