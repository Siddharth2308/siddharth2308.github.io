---
layout: home
title: Robots
nav_order: 4
---

# Robots
{: .fs-9 }

The robot platforms I have worked with: mobile robots I have made autonomous, robotic arms I have programmed, and the robots I built for ABU Robocon.
{: .fs-5 .fw-300 .page-lead }

---

## Autonomous Mobile Robots

I have implemented autonomous navigation on a wide range of drive configurations, from quadrupeds to skid-steer and holonomic bases, in both indoor and outdoor environments. The work covers localization, mapping, path planning and control across the whole range of stacks: custom navigation stacks written from scratch, fully autonomous execution running entirely on microcontrollers, and Nav2. I have plenty of experience with ROS. That is not the same as liking it.

<div class="chip-row">
  <span class="label label-blue">3D LiDAR</span><span class="label label-blue">2D LiDAR</span><span class="label label-green">Wheel Encoders</span><span class="label label-green">Passive Encoders</span><span class="label label-purple">IMU</span>
</div>

<div class="robot-grid">
  <div class="robot-tile">
    <img class="tile-media" src="../images/robots/go2_stock.jpg" alt="Unitree Go2 quadruped" loading="lazy">
    <div class="robot-tile__body">
      <h4>Unitree Go2</h4>
      <div class="tile-tags"><span class="label label-purple">Quadruped</span><span class="label label-yellow">Indoor · Outdoor</span></div>
      <p>A legged platform that can handle terrain wheeled robots can't.</p>
    </div>
  </div>

  <div class="robot-tile">
    <img class="tile-media tile-media--contain" src="../images/robots/outdoor_4wd.jpg" alt="Red outdoor 4-wheel skid-steer robot" loading="lazy">
    <div class="robot-tile__body">
      <h4>Outdoor 4WD Skid-Steer</h4>
      <div class="tile-tags"><span class="label label-purple">Skid-Steer</span><span class="label label-yellow">Outdoor</span></div>
      <p>A rugged all-terrain base for navigating unstructured outdoor spaces such as a campus.</p>
    </div>
  </div>

  <div class="robot-tile">
    <img class="tile-media" src="../images/robots/ebot_side.jpg" alt="eBot warehouse robot" loading="lazy">
    <div class="robot-tile__body">
      <h4>eBot</h4>
      <div class="tile-tags"><span class="label label-purple">4WD Differential</span><span class="label label-yellow">Indoor</span></div>
      <p>A warehouse robot used in e-Yantra's logistics themes, working alongside a robotic arm to move payloads.</p>
    </div>
  </div>

  <div class="robot-tile">
    <img class="tile-media" src="../images/projects/eysip/3wheel.webp" alt="Custom skid-steer mobile base" loading="lazy">
    <div class="robot-tile__body">
      <h4>Modular Skid-Steer Base</h4>
      <div class="tile-tags"><span class="label label-purple">Skid-Steer</span><span class="label label-yellow">Indoor</span></div>
      <p>A custom-built base with a 20 kg payload capacity and a universal mounting plate, running Nav2. <a href="InternshipProjects.html">Built with my interns</a>.</p>
    </div>
  </div>

  <div class="robot-tile">
    <img class="tile-media" src="../images/projects/chassis.jpeg" alt="3-wheel holonomic drive chassis" loading="lazy">
    <div class="robot-tile__body">
      <h4>3 &amp; 4-Wheel Holonomic Drives</h4>
      <div class="tile-tags"><span class="label label-purple">Omni-Wheel</span><span class="label label-yellow">Indoor</span></div>
      <p>Omni-wheel bases that can move in any direction. I did the kinematic modelling, PID-based odometry and path correction.</p>
    </div>
  </div>

  <div class="robot-tile">
    <img class="tile-media" src="../images/projects/f1tenth/WhatsApp%20Image%202026-08-20%20at%203.42.25%20AM.jpeg" alt="F1TENTH race car" loading="lazy">
    <div class="robot-tile__body">
      <h4>F1TENTH Race Car</h4>
      <div class="tile-tags"><span class="label label-purple">Ackermann</span><span class="label label-yellow">Indoor</span></div>
      <p>A 1/10-scale autonomous race car that follows an optimized raceline. <a href="Projects/F1Tenth.html">Read more</a></p>
    </div>
  </div>
</div>

## Robotic Arms
{: .mt-8 }

<div class="showcase-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/C349iywNu6s" title="Logistic coBot (LB) eYRC 2024-25 Theme Film" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div>
    <div class="arm-head">
      <img src="../images/robots/ur5_stock.jpg" alt="UR5 robotic arm" loading="lazy">
      <div>
        <span class="kicker">Universal Robots · 6-DoF</span>
        <h3>UR5</h3>
      </div>
    </div>
    <p>The UR5 is the collaborative arm at the centre of the e-Yantra Robotics Competition themes I developed, Cosmo Logistic and Logistic coBot. In these themes, students program it through ROS 2 to pick and place payloads, working together with the eBot mobile robot in a warehouse setting. <a href="Projects/CL.html">Read more</a></p>
  </div>
</div>

<div class="showcase-card">
  <div class="video-stage" style="--poster: url('https://i.ytimg.com/vi/8mna-7ut_lI/hqdefault.jpg')">
    <div class="video-embed video-embed--short">
      <iframe src="https://www.youtube.com/embed/8mna-7ut_lI" title="Kinova Gen3 Lite drawing robot" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
  <div>
    <div class="arm-head">
      <img src="../images/robots/kinova_gen3_lite.jpg" alt="Kinova Gen3 Lite robotic arm" loading="lazy">
      <div>
        <span class="kicker">Kinova · 6-DoF</span>
        <h3>Kinova Gen3 Lite</h3>
      </div>
    </div>
    <p>A drawing robot: the arm holds a pen and sketches images on paper.</p>
  </div>
</div>

<div class="showcase-card">
  <div class="insta-embed">
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DbAnRQcPqwg/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DbAnRQcPqwg/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DbAnRQcPqwg/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by e-Yantra, IIT Bombay (@eyantra)</a></p></div></blockquote>
    <script async src="https://www.instagram.com/embed.js"></script>
  </div>
  <div>
    <div class="arm-head">
      <img src="../images/robots/agilex_piper.jpg" alt="AgileX PiPER robotic arm" loading="lazy">
      <div>
        <span class="kicker">AgileX · 6-DoF</span>
        <h3>AgileX PiPER</h3>
      </div>
    </div>
    <p>A chess-playing robot that moves pieces on a physical board to play a game against a human.</p>
  </div>
</div>

## ABU Robocon
{: .mt-8 }

The robots I built with Team Rudra for ABU Robocon, the Asia-Pacific robotics contest where each year's game sets a new challenge.
{: .fw-300 }

### 2023: Supervising the team
{: .mt-6 }

I supervised the electronics and programming of both robots. Each was semi-automatic, a fully closed-loop system with a Teensy 4.1 as the main controller. Their task was to pick up rings and throw them onto targets to score as many points as possible.

<div class="robot-grid">
  <div class="robot-tile">
    <img class="tile-media tile-media--contain" src="../images/projects/rr.png" alt="Rabbit Robot, Robocon 2023" loading="lazy">
    <div class="robot-tile__body">
      <h4>Rabbit Robot</h4>
      <p>Picks up the placed rings and throws them onto the targets.</p>
    </div>
  </div>
  <div class="robot-tile">
    <img class="tile-media tile-media--contain" src="../images/projects/er.png" alt="Elephant Robot, Robocon 2023" loading="lazy">
    <div class="robot-tile__body">
      <h4>Elephant Robot</h4>
      <p>Picks up the placed rings and throws them onto the targets.</p>
    </div>
  </div>
</div>

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/lhZCzc_C7HQ" title="Team Rudra Journey Robocon 2023" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 2022: Electronics, programming and operating
{: .mt-6 }

I was responsible for the electronics and programming of both robots. Each was semi-automatic with a fully automatic mode, and each was a closed-loop system with active feedback on every mechanism, built around an ARM Cortex-M7 Teensy 4.1. I also operated Robot 1 at the official competition.

<div class="robot-grid">
  <div class="robot-tile">
    <img class="tile-media tile-media--contain" src="../images/projects/r1.png" alt="Robot 1, Robocon 2022" loading="lazy">
    <div class="robot-tile__body">
      <h4>Robot 1</h4>
      <p>Throws balls to knock down the lagori (the stack of stones) and to hit the ball on the opposing robot's head.</p>
    </div>
  </div>
  <div class="robot-tile">
    <img class="tile-media tile-media--contain" src="../images/projects/r2.jpg" alt="Robot 2, Robocon 2022" loading="lazy">
    <div class="robot-tile__body">
      <h4>Robot 2</h4>
      <p>Rebuilds the knocked-down lagori pile while balancing a ball on its head.</p>
    </div>
  </div>
</div>

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/hE4lK5lMFOk" title="Team Rudra Journey Robocon 2022" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 2021: My first robots
{: .mt-6 }

Both robots were semi-automatic with a fully automatic mode, and each was a closed-loop system with an ATmega2560 as the main controller. I was responsible for their programming and automation.

<div class="robot-grid">
  <div class="robot-tile">
    <img class="tile-media tile-media--contain" src="../images/projects/dr.png" alt="Defense Robot, Robocon 2021" loading="lazy">
    <div class="robot-tile__body">
      <h4>Defense Robot</h4>
      <p>Picks up, passes, deflects and throws arrows.</p>
    </div>
  </div>
  <div class="robot-tile">
    <img class="tile-media tile-media--contain" src="../images/projects/tr.png" alt="Throwing Robot, Robocon 2021" loading="lazy">
    <div class="robot-tile__body">
      <h4>Throwing Robot</h4>
      <p>Picks up arrows and throws them.</p>
    </div>
  </div>
</div>

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/G_NCaxcpWDg" title="Team Rudra Journey 2021" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<p class="credits">
Image credits: UR5, “Cobot.jpg” by GrowSkills Robotics, <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>, cropped, via <a href="https://commons.wikimedia.org/wiki/File:Cobot.jpg">Wikimedia Commons</a>. Unitree Go2, “Unitree Go2 of Salvamont front view” by HotNews Romania (Adi Iacob, Ovidiu Popica), <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>, via <a href="https://commons.wikimedia.org/wiki/File:Unitree_Go2_of_Salvamont_front_view.jpg">Wikimedia Commons</a>.
</p>
