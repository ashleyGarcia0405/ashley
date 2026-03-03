import { Component } from '@angular/core';
import { BlogPostLayoutComponent } from '../../blog-post-layout/blog-post-layout.component';

@Component({
  selector: 'app-blog-shape-of-pressure',
  standalone: true,
  imports: [BlogPostLayoutComponent],
  styles: [`
    .img-sop {
      width: 100%;
      height: 500px;
      object-fit: cover;
      object-position: center;
      margin: 1.5rem 0;
      display: block;
      border-radius: 4px;
    }
    .img-small-sop {
      width: 40%;
      height: 250px;
    }
    .img-medium-sop {
      width: 65%;
      height: 300px;
    }
    .image-row-sop {
      display: flex;
      gap: 0.75rem;
      margin: 1.5rem 0;
    }
    .image-row-sop .img-sop {
      flex: 1;
      width: 0;
      height: 500px;
      margin: 0;
    }
    .video-sop {
      width: 100%;
      height: 500px;
      object-fit: cover;
      margin: 1.5rem 0;
      display: block;
      border-radius: 4px;
    }
    .image-row-sop .video-sop {
      flex: 1;
      width: 0;
      height: 500px;
      margin: 0;
    }
    .image-caption-sop {
      font-size: 0.8rem;
      color: var(--comment-color);
      margin-top: -1rem;
      margin-bottom: 1.5rem;
      font-style: italic;
    }
  `],
  template: `
    <app-blog-post-layout
      title="The Shape of Pressure"
      date="Mar 2, 2026"
      [readingTime]="5"
    >
      <p>The Shape of Pressure is a generative animation running on an ESP32 TTGO T-Display (135×240 ST7789 TFT). It visualizes a simplified upwind "soapdish" passback from team racing.</p>

      <p>Three boats approach a windward mark. The windward boat (W2) luffs. The leeward boat (L2) pinches. The middle boat (M2) becomes trapped in dirty air. The system loops between a setup state and a squeeze state every ~4 seconds.</p>

      <p>The piece isolates one structural idea: coordinated deceleration as a method of control.</p>

      <div class="image-row-sop">
        <img src="/portfolio/IMG_8192.jpeg" class="img-sop" alt="Setup" />
        <img src="/portfolio/IMG_8191.jpeg" class="img-sop" alt="Squeeze" />
      </div>

      <p>This image shows the squeeze phase, where the dirty-air ring appears around M2 and the two outer boats converge.</p>

      <h2>Why this maneuver</h2>
      <video class="video-sop" playsinline controls>
        <source src="/portfolio/IMG_8188.MOV" type="video/quicktime" />
        <source src="/portfolio/IMG_8188.MOV" type="video/mp4" />
      </video>
      <p>An aside: I have extremely shaky hands, so I tend to be a horrible videographer, I'm sorry.</p>

      <p>In fleet racing, performance is about maximizing velocity relative to wind angle. In team racing, performance is relational. You don't just optimize your own VMG; you optimize the configuration of six boats relative to a scoring matrix.</p>

      <p>An upwind passback works by redistributing velocity. The leading teammate sacrifices speed to reshape the local tactical geometry. Instead of extending, they create a constraint region that slows an opponent long enough for another teammate to gain.</p>

      <p>It's a cooperative obstruction maneuver.</p>

      <p>What interested me is that the mechanism of control is not forceful acceleration, it's angular adjustment. A small heading change produces a large positional consequence because the boats share a flow field.</p>


      <p>The animation doesn't show sail trim, heel, or wave state. It reduces the interaction to:</p>
      <ul>
        <li>heading vectors</li>
        <li>relative proximity</li>
        <li>and a visualized "pressure" region</li>
      </ul>

      <p>The dirty-air circle is not aerodynamically accurate, I just wanted to show it was there and adds a sense of confinement.</p>

      <h2>Reduction</h2>

      <p>A full soapdish involves six boats: two teams of three. I deliberately reduced the scene to W2, M2, and L2.</p>

      <p>This was because the display was 135 pixels of vertical resolution, which is both a physical and conceptual retraint. Physical because I can't show 6 readable boats and conceptual because the passback fundamentally requires:<\p>

      <ul>
        <li>one boat applying windward control</li>
        <li>one boat applying leeward control</li>
        <li>one boat being compressed</li>
      </ul>

      <p>The remaining boats are strategically important in a race, but they are not necessary to understand the mechanism of the squeeze.</p>

      <p>By collapsing the system to three agents, the geometry becomes legible. The viewer can see convergence, compression, and release without needing full race context.</p>

      <h2>Modeling choices and simplifications</h2>

      <p>The animation loops between two states:</p>

      <ul>
        <li><strong>State A (Setup):</strong> boats in lane, converging toward the middle</li>
        <li><strong>State B (Squeeze):</strong> outer boats angled inward, dirty-air region drawn</li>
      </ul>

      <p>Positions and headings are linearly interpolated between these states over 60 frames, then reversed. The timing is implemented as a triangle wave over a 120-frame cycle (~4 seconds at 33 ms/frame).</p>

      <p>This interpolation creates a known oopsie: during the setup phase, the boats (very) briefly face directly into the wind. A boat cannot sail head-to-wind, it would just luff, and during a race this is kind of really bad.</p>

      <p>Correcting this would require introducing angular constraints or nonlinear interpolation bounded by a no-go zone. That would complicate the state model.</p>

      <p>I chose to accept this simplification.</p>

      <h2>Technical architecture</h2>

      <h3>Hardware</h3>
      <ul>
        <li>ESP32 TTGO T-Display (LilyGo TTGO T1)</li>
        <li>ST7789 135×240 TFT</li>
        <li>USB-C power</li>
        <li>LiPo battery taped to the back of the board</li>
      </ul>

      <h3>Rendering pipeline</h3>
      <ul>
        <li>Full-screen TFT_eSprite used as an off-screen framebuffer</li>
        <li>All primitives drawn into sprite each frame</li>
        <li>pushSprite() to transfer to display and prevent flicker</li>
        <li>~30 FPS loop via delay(33)</li>
      </ul>

      <p>Each frame:</p>
      <ol>
        <li>Clear background</li>
        <li>Draw windward mark and wind vector</li>
        <li>Compute interpolation parameter t</li>
        <li>Interpolate boat positions and headings</li>
        <li>Draw boats as heading-aligned triangles</li>
        <li>Draw constraint lines</li>
        <li>Conditionally render dirty-air region</li>
        <li>Render footer with manual word wrapping</li>
      </ol>

      <p>The display is portrait-oriented via setRotation(), and all geometry is calculated relative to tft.width() and tft.height() to avoid hard-coded assumptions (I hate those in webdev, I hate them here).</p>


      <h2>Installation context</h2>
      <img src="/portfolio/IMG_8184.jpeg" class="img-sop" alt="Module #1" />

      <p>The piece was installed in the Vagelos Computational Science Center at Barnard as part of a distributed embedded installation. Multiple ESP32 modules were suspended along a wall, each running a different generative system.</p>

      <p>My contribution was the module running The Shape of Pressure.</p>

      <p>The modules were:</p>
      <ul>
        <li>Suspended using string attached to popsicle sticks</li>
        <li>Batteries secured with electrical tape</li>
        <li>Mounted into a ceiling nook</li>
        <li>Individually powered and not networked</li>
      </ul>

      <p>My module rotated more than some of the others - like a LOT more LOL. The suspension allowed small degrees of freedom, and the screen would pivot (or really rapidly rotate in my case) while the animation looped. I think I made a joke at some point about how it's as fidgety and restless as me.</p>
      <video class="video-sop" playsinline controls>
        <source src="/portfolio/IMG_8159.MOV" type="video/quicktime" />
        <source src="/portfolio/IMG_8159.MOV" type="video/mp4" />
      </video>

      <p>The lighting was also adjusted with the help of Prof. Santolucito and Miles. Overhead lights were partially covered with paper to reduce glare and create a more controlled viewing environment. It had a cool studio effect.</p>
      <div class="image-row-sop">
        <img class="img-sop" src="/portfolio/IMG_8174.jpeg">
        <video class="video-sop" playsinline controls>
          <source src="/portfolio/IMG_8161.MOV" type="video/quicktime" />
          <source src="/portfolio/IMG_8161.MOV" type="video/mp4" />
        </video>
        <img class="img-sop" src="/portfolio/IMG_8151.jpeg">
      </div>

      <h2>Closing</h2>
      <p><strong>The Shape of Pressure</strong> is a small system about a specific sailing idea: control through coordination and constraint.</p>

      <p>In team racing, you don't really win by overpowering the fleet. You win by understanding where pressure exists and deciding how to shape it. A slight change in angle can stall someone else. A small sacrifice in speed can reorganize the entire configuration.</p>

      <p>This project is basically me trying to render that idea-pressure-as something you can actually see. Wind and dirty air are the real “objects” in the interaction, but they’re invisible in real life.</p>

      <p>It’s a sailing diagram, yes. But it’s also a reminder that most systems—social, technical, competitive—respond more to geometry than to brute force.</p>

      <p>And sometimes the most decisive action is just a small turn into the wind.</p>

      <p>The full source code is on <a href="https://github.com/ashleyGarcia0405/the-shape-of-pressure" target="_blank">GitHub</a>.</p>
    </app-blog-post-layout>
  `
})
export class ShapeOfPressureComponent {}
