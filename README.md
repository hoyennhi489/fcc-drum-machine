# Drum Machine

### Description  
A Drum Machine application as required by freeCodeCamp, built using React with a customizable interface.

### Requirements  

**User Story #1**  
I should be able to see an outer container with a corresponding `id="drum-machine"` that contains all other elements.  

**User Story #2**  
Within `#drum-machine`, I can see an element with a corresponding `id="display"`.  

**User Story #3**  
Within `#drum-machine`, I can see **9 clickable drum pad elements**, each with:  
- A class name of `.drum-pad`.  
- A unique `id` describing the audio clip it will trigger.  
- An inner text corresponding to one of these keyboard keys: **Q, W, E, A, S, D, Z, X, C**.  
- The drum pads **MUST** be in this order.  

**User Story #4**  
Within each `.drum-pad`, there should be an **HTML5 `<audio>` element** that:  
- Has a `src` attribute pointing to an audio clip.  
- Has a class name of `.clip`.  
- Has an `id` matching the inner text of its parent `.drum-pad` (e.g., `id="Q"`, `id="W"`, `id="E"`, etc.).  
**User Story #5**  
When I **click** on a `.drum-pad` element, the audio clip inside its child `<audio>` element should be **triggered**.  

**User Story #6**  
When I **press** the keyboard key associated with a `.drum-pad`, the audio clip inside its child `<audio>` element should be **triggered** (e.g., pressing the `Q` key should trigger the drum pad that contains `Q`, pressing the `W` key should trigger the drum pad that contains `W`, etc.).  

**User Story #7**  
When a `.drum-pad` is triggered, a **string describing the associated audio clip** should be **displayed** as the inner text of the `#display` element. **Each string must be unique**.

### Technologies Used  
- React, HTML, CSS, JavaScript  
- Optional: Bootstrap, SASS, Redux  
