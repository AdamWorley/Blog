<script>
  import { settings } from '../store';

  let darkModeEnabled = $settings.darkModeEnabled === 'true';
  
  const rootEl = typeof document !== "undefined" 
    ? document.documentElement 
    : null;

  $: if (rootEl && !darkModeEnabled) {
     rootEl.classList.remove("theme-dark");
   } else if (rootEl && darkModeEnabled) {
     rootEl.classList.add("theme-dark");
   }

  function handleChange(event) {
    darkModeEnabled = event.target.checked;
    settings.setKey('darkModeEnabled', event.target.checked);
  }

</script>
<div class="theme-toggle">
  <label class="switch">
    <input
      id="theme-checkbox"
      type="checkbox"
      name="theme-toggle"
      checked={darkModeEnabled}
      title="Enable dark theme"
      aria-label="Enable dark theme"
      on:change={handleChange}
    />
    <span class="slider" />
  </label>
</div>

<style>
  .theme-toggle input[type="checkbox"] {
    visibility: hidden;
    display: none;
  }

  .theme-toggle *,
  .theme-toggle ::after,
  .theme-toggle ::before {
    box-sizing: border-box;
  }

  /* The switch - the box around the slider */
  .theme-toggle .switch {
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;
    /* size of sliding icon -- sun and moon */
    --size-of-icon: 1.4em;
    /* it is like a inline-padding of switch */
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
    display: inline-block;
  }

  /* The slider */
  .theme-toggle .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f4f5;
    transition: 0.4s;
    border-radius: 30px;
  }

  .theme-toggle .slider:before {
    position: absolute;
    content: "";
    height: var(--size-of-icon, 1.4em);
    width: var(--size-of-icon, 1.4em);
    border-radius: 20px;
    left: var(--slider-offset, 0.3em);
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    transition: 0.4s;
  }

  .theme-toggle input:checked + .slider {
    background-color: #303136;
  }

  .theme-toggle input:checked + .slider:before {
    left: calc(
      100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em))
    );
    background: #303136;
    /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
  }
</style>
