import { createRoot, mount } from 'svelte'
import Component from './Component.svelte'

// hydrate is not an option in v5, but it was in v4

// v5
createRoot(Component, { 
  target: document.getElementById("create-root"),
  hydrate: true
})

mount(Component, { 
  target: document.getElementById("mount"),
  hydrate: true
})

// v4
// new Component({
//   target: document.getElementById("new-component"),
//   hydrate: true
// })

