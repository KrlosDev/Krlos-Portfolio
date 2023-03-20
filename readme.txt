dependencies

 --legacy-peer-deps (coz, react tilt uses older versions of react),
 @react-three/fiber(three.js library react based),
 @react-three/drei and maath(for math utility functions three.js uses geometry),
 react-tilt(for tilting animation on hoover),
 react-vertical-timeline-component(to create the vertical timeline),
 @emailjs/browser(for emails),
 framer-motion,
 react-router-dom(for routing)

components/canvas handles the 3d models using three.js
style.js creates tailwind utility styles
motion.js contains some of the motion animations 
constants/index.js is a file that contains global constants
assets/index.js exports the images as constants

/*Orbit controls are for controlling movement also, comments are not allowed inside a three.js code*/
/*When creating three.js components we need to use a mesh tag*/

hoc are higher order components