---
title: OneShot - Devlog
description: A space shooter made for the repl.it July 2018 code jam, using p5.js, node.js and socket.io.

links:
  - text: Code
    icon: code
    link: https://repl.it/@IbraheemRodrigues/OneShot
  - text: Play
    icon: link-external
    link: https://OneShot.ibraheemrodrigues.repl.co

date: 2018-07-26 -
image: /assets/p/2018/oneshot/oneshot-radar.png
---

## Days 1 & 2

In the weekly repl.it newsletter, I saw they were hosting a multiplayer games competition. Being fairly confident in making games in JS using [p5.js](https://p5js.org) for rendering, (see [Captain 5ever](/captain-5ever) my unfinished remake of the amazing [Captain Forever](http://www.captainforever.com/captainforever.php)) I thought I would give it a go. And to make it multiplayer, I turned to an express/socket.io node.js server, following [this tutorial](https://youtu.be/bjULmG8fqc8) by Dan Shiffman. The infrastructure repl.it have set up to allow users to host small server-side programs - and across so many languages - truly amazes me.

### Play it [here](https://oneshot--ibraheemrodrigues.repl.co/)

I would have liked to have used Git to track my changes day by day, however since the game had to be created on the site, I was not able to do this. I started out with some small scale tests making a chat room style server (find it [here](https://TestChat--ibraheemrodrigues.repl.co) and the project [here](https://repl.it/@IbraheemRodrigues/TestChat)). In all honesty, it's not that dissimilar from the ipcMessenger and ipcRender used in Electron apps. Having done this I felt I was up to speed with sockets, and so began the development of my game.

The game was to be called 'OneShot' and the concept was as follows: players are in an arena, with one life, one shot and the aim of surviving as long as possible. The architecture I had figured out in my head had the following components:

| Server | Coordinates entity information & relays this information between clients |
| Renderer | The main portion of the client-side code, which handles rendering the data received from the server |
| Sprites | Part of the renderer, these will be functions which take in entity data an execute the required p5 commands to draw things |
| Player Controller | Part of the client, reads in keypresses, handles player physics and relays this information to the server to be distribute to other clients |
| Shot Controller | Part of the server, this controls the physics and collision checking for the players shots |

I first set up a simple express server to serve the files, and the created the renderer and sprites. I reused the art style from [Captain 5ever](/captain-5ever) (that was borrowed from [Captain Forever](http://www.captainforever.com/captainforever.php)). The player controller came next and after that the coordination side of the server. I ended up making it so that the player's sprite was drawn straight away and the other sprites were drawn after their positions were received. I also ended up transmitting their velocities so that the client could fill in the gap between the next know position. For the shots, the player would check if it had the required shots when the shoot key was pressed, and then transmit a message announcing this to the server. The server would spawn the shot, calculate it's physics and then send back a list of all the shots than need to be rendered. One issue that might be faced if there are many people playing this is that all sprites (players and shots) are drawn regardless of whether they are on or off-screen, which is using unnecessary computational resources. I've noted this and will come to fix it later down the line hopefully.

I then set up some UI elements. An info panel in the top left shows the vessel id, ship name (more on that below) as well as the X & Y coordinates and lifetime, i.e the score. In the top right a 'Radar' shows the number of other players in-game, and a scoreboard of the current top 5 lifetimes.
I also added a communications readout in the bottom left and a controls diagram ('Flight Guide') in the borrow right.

![](/assets/p/2018/oneshot/oneshot-ui.png)

As for naming, I thought it would be fun to base ship names off the ship's id (which was just the id of the client's socket connection). After about half an hour of playing with a random word generator I had come up with a system whereby the first three digits formed the name. For example:

`karT8MQaqcFeN-eiAAGa` => `kar` => **K**ing **A**lpaca **R**estrainer  
`lbbwcnERTdt62auMAAGi` => `lbb` => **L**ieutanant **B**ig Boy the **B**agpiper

That's just about it for what I've got done on these first couple of days. I'd say what I have at the moment is an MVP (minimum viable product), and so here are a few things that I seek to improve:

- The comms UI element has a glitch where the previous message is retyped before it shows a new message
- Some sound will make the game a whole lot more exciting, I've begun designing some with [Bfxr](https://www.bfxr.net/)
- Gameplay becomes boring once you have used your shot. Recharge powerups would be the best way to fix this, as the user still will cling on to hope of being able to play again.
- Arrows that point to off-screen ships, in a circle around the player would make gameplay easier and encourage more action.

## Days 3 & 4

I've spent these days implementing the features/fixes I described in my [last post](/blog/oneshot-d1-2/), and I'm probably ready to submit the game at this point.

The first fix I tackled was the issue with the comms UI element, where the previous message would redo it's typing animation before the next one was animated. Turns out this was caused by a single line of code I had forgotten to delete. Originally, there was only one variable to store the message to be displayed, meaning a new message would override the new one even if it's entry 'typing' animation had not finished. I replaced the single variable with an array; the first element would be typed, and after it had finished, if there were other messages waiting, it would be `shift()`ed from the front and the next one would take its place and be typed. I had forgotten to remove the call to restart the animation for the new message from my old approach, so now upon receiving a message the animation would be played (causing the old message to reshow), then the new message would be loaded and moved to the front, and then played for the seconds (and correct time). Despite all this took me over an hour (or even two) to find, since my socket events and event handlers are in different parts of the file. That's debugging for you kids!

Aside from a tackling a few other bugs, I also had an issue with physics, the ship would fly in an unwieldy manner. My approach to the physics was this (I'll probably have a more in-depth explanation of my approach to simple physics soon):

1. Update `x`, `y` and heading (`a` for angle) based on velocity (`dx` & `dy`) and angular velocity (`da`)
2. Apply drag to `dx`, `dy`, & `da`
3. If the user is pressing keys, calculate the increment to `dx`, `dy` & `da`

Due to the mental gymnastics I'm having to do to comprehend this, I'm not quite sure what the exact issue was, but somehow I realized I could fix this storing dx as forward movement, as opposed to movement along the x-axis and the same for `y`, and then apply that to `x` based on `cos(dx) + sin(dy)` and y based on `sin(dx) + cos(dy)` (This is not physically accurate, but it controls better). Perhaps one day I'll manage to wrap my head around this and have a better explanation.

I also added a few conditional clauses to only render entities if off-screen, reducing load on the render engine, and added a circular radar to point you in the direction of other ships within 'the sector' (i.e the game area).

![](/assets/p/2018/oneshot/oneshot-radar.png)  
_Arrows indicate players and circles indicate recharge powerups_

I also added recharge powerups, so you could replenish your one shot if you use it. I hope this will create a draw for other players, perhaps creating a zone of conflict or somewhere to wait for other players to kill. Also on the theme of making gameplay better I added a suicide button -`[X]`- if you so wish as to terminate your time in the sector quickly - useful if you cannot find a recharge for your shot.

I also created some sounds, and using the sound library for [p5.js](https://p5js.org), implemented some effects for the comms system, shooting, death and opening/closing the flight guide. This nicely ties the game to a point where I can call it finished, although there may be some more tweaks to add.

So, without further ado, play it [here](https://oneshot--ibraheemrodrigues.repl.co/)
