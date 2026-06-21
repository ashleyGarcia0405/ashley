import { Component } from '@angular/core';
import { BlogPostLayoutComponent } from '../../blog-post-layout/blog-post-layout.component';

@Component({
  selector: 'app-blog-wemu',
  standalone: true,
  imports: [BlogPostLayoutComponent],
  styles: [`
    .img-wemu {
      width: 100%;
      height: 500px;
      object-fit: cover;
      object-position: center;
      display: block;
      border-radius: 4px;
      margin: 1.5rem 0;
    }
    .image-row-wemu {
      display: flex;
      gap: 0.75rem;
      margin: 1.5rem 0;
      align-items: flex-start;
    }
    .image-row-wemu .img-wemu {
      flex: 1;
      min-width: 0;
      width: 0;
      height: 400px;
      margin: 0;
    }
    .image-row-wemu .embed-wemu {
      flex: 1;
      min-width: 0;
      width: 0;
      margin: 0;
    }
    /* portrait pair: fixed-height row so 9:16 image + 9:16 Shorts align */
    .portrait-pair {
      height: 480px;
      align-items: stretch;
    }
    .portrait-pair .img-wemu {
      height: 100%;
      aspect-ratio: unset;
    }
    .portrait-pair .embed-wemu {
      height: 100%;
      aspect-ratio: unset;
      max-width: none;
    }
    .embed-wemu {
      width: 100%;
      aspect-ratio: 16/9;
      border-radius: 4px;
      border: none;
      display: block;
      margin: 1.5rem 0;
    }
    .embed-short {
      width: 100%;
      max-width: 360px;
      aspect-ratio: 9/16;
      border-radius: 4px;
      border: none;
      display: block;
      margin: 1.5rem 0;
    }
    .image-caption-wemu {
      font-size: 0.8rem;
      color: var(--comment-color);
      margin-top: -1rem;
      margin-bottom: 1.5rem;
      font-style: italic;
    }
    .section-label {
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--comment-color);
      margin-bottom: 0.25rem;
    }
  `],
  template: `
    <app-blog-post-layout
      title="WeMu"
      date="Jan 14, 2026"
      [readingTime]="5"
    >
      gi

      <p>The theremin is one of the oldest electronic instruments, invented by Leon Theremin in 1920. It has two antennas—a vertical rod and a horizontal loop—and the player never touches either of them. Instead, it works by heterodyning: two radio-frequency oscillators, both running around 170 kHz, are mixed together. One is fixed and the other shifts frequency based on the capacitance between the vertical antenna and the player's hand. You end up hearing the difference between those two frequencies. Move your hand closer, the variable oscillator drifts further from the fixed one, the beat frequency rises, the pitch goes up. The horizontal loop controls volume the same way through a separate amplitude circuit.</p>

      <iframe
        class="embed-wemu"
        src="https://www.youtube.com/embed/K6KbEnGnymk"
        title="Theremin demonstration"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>


      <p>My team and I had worked with sound before and wanted to build something that used human movement as the input. We also wanted the piece to center around human connection, which meant two bodies, not just one. Instead of hand-to-instrument distance, what if the instrument was the distance between people?</p>

      <p>WeMu is a UWB-based theremin for two pairs of performers. Each dancer wears a DWM3001CDK—a Qorvo Ultra-Wideband ranging module—and a TTGO T1 ESP32 on their wrist. The CDK handles the ranging: it exchanges timed radio pulses with its paired CDK using the FiRa TWR (Two-Way Ranging) protocol and resolves the distance between them down to a few centimeters. That value gets passed over UART to the relay ESP32, which forwards it wirelessly to a master ESP32. The master aggregates both pair readings and sends them over UART to the audio board.</p>

      <p>The audio board is an Arduino UNO with an Adafruit Music Maker Shield, which breaks out a VS1053—a hardware MP3/MIDI synthesis chip. We put it in real-time MIDI mode and kept a single note sustained: GM patch 54, "Voice Oohs." Pair 1's distance stream modulates pitch via MIDI pitch bend messages, across a ±24 semitone range. Pair 2's distance stream modulates volume via CC7. The VS1053 also adds a vibrato layer running at 5.5 Hz, which we left in because it made the sustained note feel less static.</p>

      <p>When Pair 1 dancers are close—under 60cm—the pitch bends into a dissonant cluster. As they move apart it resolves into cleaner intervals: fifths, then fourths, then at a certain distance settles into a pure octave drone. Pair 2 works differently: close together is fast pulse with heavy sub bass, mid-range becomes textured and moderate, far apart fades to almost nothing.</p>

      <p>Splitting those two musical dimensions between two separate pairs of bodies meant no one pair controlled the full picture. The complete sound only existed if both performers were in the room and moving.</p>

      <h2>Chip and wearable decisions</h2>

      <p>For the audio chip we went back and forth on a few options—there were more capable synthesis chips out there, but they were very expensive and we had five days and a student budget, so we landed on the VS1053 setup, which turned out to be sufficient.</p>

      <p>The wearable was its own problem. The original plan was a rigid 3D-printed armband, something structural that held the CDK and ESP32 firmly in place. We scrapped it pretty quickly once we realized five days wasn't enough time to model and print that on top of all our other tasks (grad week included). Lamees came up with the idea of 3D printing a flexible fabric-like material instead—something that could wrap around an arm and move with it. She iterated through several prototypes.</p>

      <img src="/portfolio/IMG_0583.webp" class="img-wemu" alt="3D-printed flexible wearable prototype" />

      <h2>UWB and its failure modes</h2>

      <p>UWB is good for ranging—centimeter-accurate, robust against multipath interference in a way that BLE RSSI or Wi-Fi simply isn't—but it depends on the two CDKs completing a full TWR exchange to produce a valid reading. That exchange doesn't always finish on moving wrists. The antenna gets occluded by the arm, the geometry changes mid-measurement, and you end up with a stale reading, a distance value that was valid milliseconds ago but no longer reflects where the dancers actually are. If you let a stale value propagate to the audio board, the pitch or volume snaps back to wherever it was and stays frozen until a new reading comes in, which sounds terrible.</p>

      <p>We handled this in the serial protocol between the master ESP32 and the audio board. When a pair hasn't produced a valid ranging result recently, the master sends <code>--</code> instead of a distance. The audio board parses that and holds its last known pitch bend and volume positions rather than resetting to zero. It's not perfect because the sound can drift out of sync with what the dancers are actually doing, but it's a lot better than the alternative.</p>

      <p>The other thing that cost us time: UWB channels. The DWM3001CDK supports multiple channels for the ranging radio. If both pairs run on the same channel, their ranging exchanges interfere—they start measuring distances to each other's CDKs instead of their own partners, and the values you get back look plausible but are completely wrong. We ran Pair 1 on channel 9 and Pair 2 on channel 5. Keeping that straight across four CDKs and two relay ESP32s, with a shared config header file that had to be updated before each flash, meant the order of operations mattered every single time. Flash one unit out of sequence and you'd be debugging phantom readings for longer than you'd like.</p>

      <iframe
        class="embed-wemu"
        src="https://www.youtube.com/embed/AxTzRhJ1jAE"
        title="WeMu preliminary hardware testing"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <p class="image-caption-wemu">Preliminary hardware testing</p>

      <iframe
        class="embed-wemu"
        src="https://www.youtube.com/embed/4HiX-rM-M2k?start=6"
        title="ESP display cold to hot"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <p class="image-caption-wemu">ESP display — cold to hot</p>

      <h2>Exhibit Setup + Performance</h2>

      <div class="image-row-wemu portrait-pair">
        <img src="/portfolio/82B602C6.webp" class="img-wemu" alt="Exhibit setup" />
        <iframe
          class="embed-short embed-wemu"
          src="https://www.youtube.com/embed/p1m2c7ulEe0"
          title="Debugging in the Studio"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <p class="image-caption-wemu">Debugging in the Studio</p>

      <div class="image-row-wemu">
        <img src="/portfolio/98ACCBEA.webp" class="img-wemu" alt="Setting up the lights" />
        <img src="/portfolio/DB413B33.webp" class="img-wemu" alt="Setting up the lights" />
      </div>
      <p class="image-caption-wemu">Setting up the light</p>

      <p>Massive thank you to our performers. Here's a little demo they helped us out with:</p>

      <iframe
        class="embed-wemu"
        src="https://www.youtube.com/embed/hKU77OL_SKE"
        title="WeMu performance demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <p>The full source code is on <a href="https://github.com/lamwasil2203/WeMu" target="_blank">GitHub</a>.</p>
    </app-blog-post-layout>
  `
})
export class WemuComponent {}
