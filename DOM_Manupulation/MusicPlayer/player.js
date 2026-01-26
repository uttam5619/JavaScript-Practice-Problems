
const body= document.body

// creating the container in the body.
const container =document.createElement('div')
container.id='container'
container.style.border='2px solid black'
body.appendChild(container)

//heading
const heading=document.createElement('div')
heading.append('MUSIC PLAYER')
heading.id='title_header'
container.appendChild(heading)

//inner container
const innerContainer= document.createElement('div')
innerContainer.id='innerContainer'
container.appendChild(innerContainer)

//poster
const poster=document.createElement('div')
poster.id='poster'
poster.innerText='poster'
innerContainer.appendChild(poster)

//controls_section
const controlSection= document.createElement('div')
controlSection.id='controlSection'
innerContainer.appendChild(controlSection)

//controls
const controls= document.createElement('div')
controls.id='controls'
controlSection.appendChild(controls)

//play-pause button
const play=document.createElement('div')
play.id='play_pause'
play.type='button'
play.append('play/pause')
controls.appendChild(play)

//forward
const forward=document.createElement('div')
forward.id='forward'
forward.type='button'
forward.append('forward')
controls.appendChild(forward)

//back
const prev =document.createElement('div')
prev.id='prev'
prev.type='button'
prev.append('prev')
controls.appendChild(prev)

//track
const slideTrack =document.createElement('div')
slideTrack.id='slideTrack'





