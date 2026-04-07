import { Component } from '@angular/core';
import { BlogPostLayoutComponent } from '../../blog-post-layout/blog-post-layout.component';

@Component({
  selector: 'app-blog-sound-trim',
  standalone: true,
  imports: [BlogPostLayoutComponent],
  styles: [`
    .img-sot {
      width: 100%;
      height: 500px;
      object-fit: cover;
      object-position: center;
      display: block;
      border-radius: 4px;
      margin: 1.5rem 0;
    }
    .img-small-sot {
      width: 40%;
      height: 250px;
    }
    .img-medium-sot {
      width: 65%;
      height: 300px;
    }
    .image-row-sot {
      display: flex;
      gap: 0.75rem;
      margin: 1.5rem 0;
    }
    .image-row-sot .img-sot {
      flex: 1;
      min-width: 0;
      width: 0;
      height: 500px;
      margin: 0;
    }
    .video-sot {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 4px;
      margin: 1.5rem 0;
    }
    .image-row-sot .video-sot {
      flex: 1;
      min-width: 0;
      width: 0;
      height: auto;
      margin: 0;
    }
    .image-caption-sot {
      font-size: 0.8rem;
      color: var(--comment-color);
      margin-top: -1rem;
      margin-bottom: 1.5rem;
      font-style: italic;
    }
  `],
  template: `
    <app-blog-post-layout
      title="The Sound of Trim"
      date="April 7, 2026"
      [readingTime]="7"
    >
      <p>The Sound of Trim is a touch-sensitive sailing instrument built around a model sailboat, an ESP32 TTGO T-Display, copper tape, and a lot of wire management.</p>

      <p>The piece maps five physical regions of the boat to different parts of the sound world I associate with sailing: the main sail, boom, mast, hull, and stern. Each one controls a different continuous sound layer, and combinations of touches trigger changes in the system's behavior.</p>

      <p>At a basic level, it's a capacitive touch controller. But more specifically, it's an attempt to reconstruct the sensory logic of being on a small sailboat—fluttering sail, line tension, wind in your ears, hull noise, wake.</p>

      <div class="image-row-sot">
        <img src="/portfolio/IMG_0283.jpeg" class="img-sot" />
        <img src="/portfolio/IMG_0272.jpeg" class="img-sot" />
      </div>

      <h2>Why this object</h2>

      <p>I wanted the interface to already carry meaning before any electronics were added.</p>

      <p>A lot of touch interfaces end up becoming abstract pads on a flat board. That's fine, but I didn't want the interaction to be arbitrary. I wanted each touch region to correspond to an actual structural part of a boat, so that the gesture of touching it already implied a relationship to the sound it controlled.</p>

      <p>The main sail can control sail flutter. The boom can control the sound of trim and rope under load. The mast can become high wind and rigging-adjacent air. The hull and stern could split the water sound into two different experiences: body contact and trailing wake.</p>

      <p>The instrument ended up being organized around five touch regions:</p>

      <ul>
        <li><strong>Main sail</strong> — sail flutter / luffing in wind</li>
        <li><strong>Boom</strong> — trim line / rope tension</li>
        <li><strong>Mast</strong> — wind whistle / air in the ears</li>
        <li><strong>Hull</strong> — water against the side of the boat</li>
        <li><strong>Stern</strong> — wake / turbulence behind the boat</li>
      </ul>

      <p>That division felt right to me because it separates not just parts of the boat, but parts of the experience.</p>

      <h2>Interaction</h2>

      <p>The system has two modes, both controlled from the touch interface itself.</p>

      <p>In the default mode, the sounds are calmer and more environmental. It feels more like sitting inside a sailing soundscape and bringing different textures forward by touching different parts of the boat.</p>

      <p>In the second mode, the system becomes more exaggerated and unstable. The sounds get sharper, louder, and more reactive. The same gestures feel less like ambient control and more like actively shaping a moment (a maneuver instead of a sound bed).</p>

      <p>Mode switching is triggered by touching a specific two-part combination on the boat rather than using a separate button.</p>

      <p>I also used two-touch combinations elsewhere in the system so the interface would feel more like an instrument and less like five isolated triggers. A single touch brings in one sensation; combinations create more loaded states.</p>

      <video class="video-sot" playsinline controls>
        <source src="/portfolio/IMG_0285.MOV" type="video/mp4" />
      </video>
      <video class="video-sot" playsinline controls>
        <source src="/portfolio/IMG_0286.MOV" type="video/mp4" />
      </video>

      <h2>Sound design</h2>

      <p>The sounds are not meant to be literal field recordings. What interested me more was whether each layer felt structurally correct.</p>

      <p>The main sail is not "wind" in a generic sense. It's a more unstable fluttering layer, meant to feel like sail cloth catching and releasing. The boom is drier and more tactile, more like trim and line handling than impact. The mast became a higher, narrower wind layer—less "outside weather" and more the sound of air when you're actually standing in it.</p>

      <p>The hull and stern ended up being the most useful conceptual split in the whole project. I didn't want both of them to just be "water" so I treated the hull as the sound of water in contact with the body of the boat, and the stern as the sound of movement expressed behind it—wake, churn, turbulence, aftermath.</p>

      <h2>Physical build</h2>

      <p>The touch pads are made from copper tape, each routed to the ESP32 through multistrand wire. I used white outer sheathing on the wires because I wanted them to visually read more like standing rigging or shrouds rather than just electronics glued onto a model. Since the boat already had a built-in visual language, I wanted the added technical material to at least not fight it.</p>

      <p>The ESP32 and breadboard live underneath the boat inside a small dock-like base that acts as both an enclosure and a cable management system.</p>

      <div class="image-row-sot">
        <img src="/portfolio/IMG_0276.jpeg" class="img-sot" />
        <img src="/portfolio/IMG_0278.jpeg" class="img-sot" />
      </div>
      <div class="image-row-sot">
        <img src="/portfolio/IMG_0279.jpeg" class="img-sot" />
        <img src="/portfolio/IMG_0274.jpeg" class="img-sot" />
      </div>

      <p>Some of the routing was a bit improvised. The wire connected to the main sail copper pad partially tore loose while I was trying to thread it through the ring at the top of the mast. I ended up re-securing it with electrical tape, which lost its stickiness, and then eventually with a small amount of duct tape.</p>

      <h2>Technical architecture</h2>

      <h3>Hardware</h3>
      <ul>
        <li>ESP32 TTGO T-Display (LilyGo TTGO T1)</li>
        <li>Breadboard</li>
        <li>Copper tape touch pads</li>
        <li>Multistrand hookup wire</li>
        <li>USB power to laptop</li>
      </ul>

      <h3>Sensor pipeline</h3>

      <p>Each copper region is wired to one of the ESP32's capacitive touch pins. The ESP32 continuously reads the touch values, compares them to a calibrated baseline, and converts the difference into a normalized intensity value.</p>

      <p>That data is sent from the ESP32 to my laptop over serial.</p>

      <h3>Sound pipeline</h3>

      <p>On the laptop side, I used a browser-based serial + audio setup to parse the incoming sensor values and map them to layered sound behaviors. Each region controls a different synthesized or noise-based sound texture, and combinations of regions trigger changes in the overall sonic state.</p>

      <p>The final system is basically:</p>

      <ol>
        <li>touch on boat</li>
        <li>capacitive reading on ESP32</li>
        <li>serial data to laptop</li>
        <li>browser audio engine</li>
        <li>layered sailing soundscape</li>
      </ol>

      <p>That architecture ended up being a good fit for the assignment because it kept the physical interface lightweight while letting the sound generation happen in a more flexible environment.</p>

      <h2>What was annoying</h2>

      <p>Capacitive touch is very easy to demo in a clean breadboard setup and much more annoying once it gets attached to a real object with:</p>

      <ul>
        <li>long wire runs</li>
        <li>tape-based conductive surfaces</li>
        <li>and different amounts of exposed conductive area</li>
      </ul>

      <p>A sensor that works perfectly on a table can become noisy or oversensitive once it's mounted vertically on a sail or routed across a model.</p>

      <p>That meant a lot of the real work was calibration:</p>

      <ul>
        <li>tuning thresholds</li>
        <li>reducing accidental triggers</li>
        <li>and physically stabilizing the wire paths so the instrument didn't constantly read ambient interference as touch</li>
      </ul>

      <h2>Closing</h2>

      <p>Sailing is full of information that is hard to isolate when you're actually doing it. You don't experience "the boat" as one thing. You experience sail pressure, line tension, air noise, hull movement, and water state all at once, continuously, and usually while trying not to mess something up.</p>

      <p>This project is a small attempt to separate those layers and let them be touched individually.</p>

      <p>The full source code is on <a href="https://github.com/ashleyGarcia0405/the-sound-of-trim" target="_blank">GitHub</a>.</p>
    </app-blog-post-layout>
  `
})
export class SoundOfTrimComponent {}
