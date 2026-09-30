<!-- ---
layout: default
title: Home
# nav_enabled: false
--- -->
#  Automated Tomato Sorting Machine
{: .fs-9 }

<center>
<img width="500" alt="tomato sorter" src="../../images/projects/tomato_sorter/WhatsApp%20Image%202026-08-23%20at%202.38.36%20PM%20(3).jpeg">
</center>

## Overview
An automated machine that grades tomatoes by ripeness. A camera photographs each tomato, a Keras model classifies it as **ripe**, **unripe** or **overripe**, and an ESP32 drives the feeder, twister and drop mechanisms to route it to the correct chute. The rig is built from aluminium profiles, 3D printed parts and laser cut panels.

[GitHub Repository](https://github.com/Siddharth2308/tomato_sorter){: .btn .btn-green .fs-4 .mb-2 .mb-md-0 .mr-2 }

## How it Works
The main script runs the full sort cycle in a loop:

1. **Fill Buffer:** A stepper-driven rotary hopper moves tomatoes into the feed buffer.
2. **Feed:** Feeder servos push a single tomato toward the camera. A colour-based detector watches the live feed and retries the feeder until a tomato appears.
3. **Classify:** A photo is taken and split into a direct view and a mirror view. Each view is classified separately and the two predictions are fused into one verdict. The tomato is then twisted so a second side can be captured and classified the same way. Optical flow (Lucas-Kanade) confirms that the twist actually rotated the tomato, and the twist is retried if it didn't.
4. **Decide & Drop:** If either side is anything other than *ripe*, the tomato is rejected. Otherwise it is dropped into the good bin. Once the camera confirms the tomato has left the frame, the drop mechanism resets and the next cycle starts.

<center>
<img width="400" alt="rotary hopper" src="../../images/projects/tomato_sorter/WhatsApp%20Image%202026-08-23%20at%202.38.36%20PM%20(2).jpeg">
<img width="400" alt="camera and twister" src="../../images/projects/tomato_sorter/WhatsApp%20Image%202026-08-23%20at%202.38.35%20PM%20(1).jpeg">
</center>

## Salient Features
- **Multi-View Classification:**
  - A mirror gives two views per capture, and the twister exposes a second side, so every tomato is checked from several angles before a decision is made.
- **Twist Verification using Optical Flow:**
  - Lucas-Kanade optical flow checks that the tomato actually rotated, so a slipped twist doesn't produce a duplicate view.
- **Custom Trained Model:**
  - A Keras classifier trained on a dataset labelled by ripeness (ripe / unripe / overripe) and health (healthy / damaged).
- **Simple Serial Protocol:**
  - The PC sends single-character commands to the ESP32 over USB serial (115200 baud) to drive the feeder servos, buffer stepper, twister motor, drop servo and exit servo.
- **Test & Production Modes:**
  - In test mode each step runs manually, which is useful for calibrating the rig and checking the model. Production mode runs the whole cycle automatically, with pause and quit controls.
- **Live Monitoring:**
  - OpenCV windows show the live feed with a detection overlay, plus the model's confidence breakdown for each view.
- **Portable Firmware:**
  - The PlatformIO firmware targets an ESP32 WROOM but ports to other microcontrollers by changing the pin definitions and servo library.

<center>
<img width="500" alt="sorted output" src="../../images/projects/tomato_sorter/WhatsApp%20Image%202026-08-23%20at%202.38.37%20PM.jpeg">
</center>

## Mechanical Design
The frame uses aluminium profiles with 3D printed mounts. Tomatoes are loaded into a rotary hopper at the top, pass through a camera chamber with the twister rollers, and exit through a servo-actuated drop that sends them to the good or reject bins. The CAD files for the base plate, stepper mounts, twister roller and camera mounts, and the sorter chamber are included in the repository.
