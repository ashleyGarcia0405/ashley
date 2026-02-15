import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  images: string[];
  currentImageIndex: number;
  shortDescription: string;
  fullDescription: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Frostbiting',
      images: [
        '/portfolio/IMG_6709.jpeg',
        '/portfolio/IMG_6704.jpeg',
        '/portfolio/IMG_6697.jpeg'
      ],
      currentImageIndex: 0,
      shortDescription: 'A small vessel built from circuitry, exploring motion outside its intended medium.',
      fullDescription: `I started sailing in college, almost by accident, and it very quickly became something I care deeply about. I grew up in Florida, close to the ocean, and sailing brings me back to that feeling of being around water and wind. It’s hands-on, technical, and intuitive at the same time, which is probably why it stuck.

The boat itself is built directly onto a protoboard. The hull is made from two soldered wires that angle toward each other, forming a long, narrow triangle when viewed from underneath - it kind of looks like a sled, which ended up being perfect. The mast is another wire soldered straight into the board, and the boom is a piece of scrap wire I found in the Makerspace and soldered onto the mast. The tiller is a 12-pin header soldered off the back of the board, which I liked because it clearly comes from electronics but still reads as a real steering element. The sails are just cloth I found in the Makerspace, cut into simple triangular shapes and attached to the mast and boom.

I didn’t include a centerboard or a rudder, partly because of limited materials and partly because I didn’t feel like the piece needed to be “complete” in a traditional sense. Instead, the shape of the hull does something cool: when placed on snow, the boat actually sleds downhill.
Placing a sailboat in the snow wasn’t planned, but it became one of my favorite parts of the project. It’s a boat that comes from a warmer place in my head, built out of electronics, moving across a cold, unfamiliar landscape. Even without wind or water, it still travels. `,
      isExpanded: false
    },
    {
      id: 2,
      title: 'Christmas Trinket',
      images: [
        '/portfolio/IMG_7417.jpeg',
        '/portfolio/IMG_7416.jpeg',
        '/portfolio/IMG_7420.jpeg',
        `/portfolio/IMG_7418.jpeg`,
      ],
      currentImageIndex: 0,
      shortDescription: `I designed and milled a 555 timer LED flasher PCB in the shape of a Christmas tree, taking it from KiCAD layout through CNC milling and hand soldering. This was an intentional experiment outside of my usual visual interests, and while the process was valuable, I wasn't especially attached to the final piece creatively.`,
      fullDescription: `The Christmas tree shape was a deliberate choice to push myself outside of the sailing and ocean-related themes I tend to doodle about. I wanted to see what it felt like to design something that didn't come from a personal obsession, but instead from a more playful, seasonal idea.

The layout process in KiCAD was the most time-consuming part. The tree silhouette forced awkward routing decisions. Converting the files and milling the board on the CNC went smoothly, and watching the tree outline and copper traces appear physically and not just on KiCAD was so crazy.

Assembly is where things broke down. Between shaky hands, my glasses getting repaired, using the wrong soldering iron tip (too thick), and pads that were much smaller than I'm used to, soldering got extremely messy. I made unreliable joints, I was connecting tracks that were definitely not supposed to get connected, and I lost confidence in the electrical integrity of the board. In the end, the LED never lit up. That failure was frustrating, but also a very direct lesson in how unforgiving hardware fabrication is.

Creatively, I didn't end up feeling very attached to the final piece, and I think that's partly because the theme didn't connect to something I care deeply about. I did really like that I got to break into a different medium for expression (I've always wanted to mill my own PCB) and it made me more aware that I'm most engaged when the concept connects to my own interests, not just when the shape is visually fun. `,
      isExpanded: false
    }
  ];

  nextImage(project: Project): void {
    project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
  }

  prevImage(project: Project): void {
    project.currentImageIndex = (project.currentImageIndex - 1 + project.images.length) % project.images.length;
  }

  goToImage(project: Project, index: number): void {
    project.currentImageIndex = index;
  }

  toggleExpand(project: Project): void {
    project.isExpanded = !project.isExpanded;
  }
}
