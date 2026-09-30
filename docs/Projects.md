---
layout: home
title: Projects
nav_order: 3
---

# Projects
{: .fs-9 }

Things I have designed and built, from autonomous robots and custom PCBs to field devices for agriculture. Cards marked "Read more" have a full write-up.
{: .fs-5 .fw-300 .page-lead }

<div class="view-toggle" id="project-view-toggle" role="group" aria-label="Project layout" hidden>
  <span class="view-toggle__label">View</span>
  <button type="button" data-view="mixed" aria-pressed="true">All projects</button>
  <button type="button" data-view="category" aria-pressed="false">By category</button>
</div>

<div class="robot-grid" id="project-grid">
  <div class="robot-tile robot-tile--link" data-cat="robotics">
    <img class="tile-media" src="../images/projects/f1tenth/WhatsApp%20Image%202026-08-20%20at%203.42.25%20AM.jpeg" alt="F1TENTH race car" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Robotics &amp; Autonomy</span>
      <h4>F1TENTH Autonomous Race Car</h4>
      <div class="tile-tags"><span class="label label-blue">ROS 2</span><span class="label label-purple">Controls</span></div>
      <p>A 1/10-scale autonomous race car with IMU-fused odometry, an offline minimum-curvature raceline optimizer, and Stanley + VFH, MPPI and MPC racing controllers.</p>
      <a class="read-more" href="Projects/F1Tenth.html">Read more →</a>
    </div>
  </div>

  <div class="robot-tile robot-tile--link" data-cat="electronics">
    <img class="tile-media" src="../images/projects/gynaecam/control_board.jpg" alt="GynaeCam control board" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Electronics &amp; Embedded</span>
      <h4>GynaeCam: Control &amp; Lighting Electronics</h4>
      <div class="tile-tags"><span class="label label-purple">PCB Design</span><span class="label label-green">ESP32-C3</span></div>
      <p>Battery-powered control and LED lighting electronics for a portable camera device: USB-C Power Delivery, Li-ion charging with a fuel gauge, and a PWM-dimmed high-power LED driver on a 4-layer board.</p>
      <a class="read-more" href="Projects/GynaeCam.html">Read more →</a>
    </div>
  </div>

  <div class="robot-tile robot-tile--link" data-cat="agri">
    <img class="tile-media" src="../images/projects/agri_1.jpg" alt="Agri-Edge boards" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Agriculture &amp; Environment</span>
      <h4>Agri-Edge</h4>
      <div class="tile-tags"><span class="label label-green">SDR</span><span class="label label-blue">LoRa · GSM</span></div>
      <p>A mobile SDR tool that works as a data interpreter and a weather station. It can read data from 150+ weather stations and connects over LoRa 433/868, Wi-Fi, BLE and 4G.</p>
      <a class="read-more" href="Projects/AgriEdge.html">Read more →</a>
    </div>
  </div>

  <div class="robot-tile robot-tile--link" data-cat="robotics">
    <img class="tile-media tile-media--contain" src="../images/projects/tomato_sorter/WhatsApp%20Image%202026-08-23%20at%202.38.36%20PM%20(3).jpeg" alt="Tomato sorting machine" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Robotics &amp; Autonomy</span>
      <h4>Automated Tomato Sorting Machine</h4>
      <div class="tile-tags"><span class="label label-blue">Machine Vision</span><span class="label label-green">ESP32</span></div>
      <p>Grades tomatoes as ripe, unripe or overripe using a Keras model with multi-view capture, twisting verified by optical flow, and ESP32-driven feed and drop mechanisms.</p>
      <a class="read-more" href="Projects/TomatoSorter.html">Read more →</a>
    </div>
  </div>

  <div class="robot-tile robot-tile--link" data-cat="electronics">
    <img class="tile-media tile-media--contain" src="../images/projects/forts/fort_model.jpg" alt="Illuminated fort model" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Electronics &amp; Embedded</span>
      <h4>Illuminated Scale Models of Historical Forts</h4>
      <div class="tile-tags"><span class="label label-yellow">Education</span><span class="label label-purple">Lighting Control</span></div>
      <p>Scale replicas of historical forts with built-in lighting, made as an educational exhibit and now installed at a school. I did the electronics and programming.</p>
      <a class="read-more" href="Projects/Forts.html">Read more →</a>
    </div>
  </div>

  <div class="robot-tile robot-tile--link" data-cat="agri">
    <img class="tile-media" src="../images/projects/mobsense.jpg" alt="MobileSense device" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Agriculture &amp; Environment</span>
      <h4>MobileSense</h4>
      <div class="tile-tags"><span class="label label-green">Sensing</span><span class="label label-yellow">USB-C</span></div>
      <p>A USB-C micro-climate sensing device with sensors for light, temperature, humidity, pressure and motion.</p>
      <a class="read-more" href="Projects/MobileSense.html">Read more →</a>
    </div>
  </div>

  <div class="robot-tile robot-tile--link" data-cat="robotics">
    <img class="tile-media" src="../images/projects/cl.png" alt="Remote lab setup" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Robotics &amp; Autonomy</span>
      <h4>Remote Labs for Robotics Education</h4>
      <div class="tile-tags"><span class="label label-yellow">Research</span><span class="label label-blue">Industrial Robotics</span></div>
      <p>A low-cost remote lab platform that makes industrial robotics education more accessible, tested with 1,000+ students in the e-Yantra Robotics Competition.</p>
      <a class="read-more" href="Projects/CL.html">Read more →</a>
    </div>
  </div>

  <div class="robot-tile robot-tile--link" data-cat="electronics">
    <img class="tile-media tile-media--contain" src="../images/projects/DeadRecon.png" alt="Dead reckoning track on a map" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Electronics &amp; Embedded</span>
      <h4>Automotive-Grade Dead Reckoning for Telematics</h4>
      <div class="tile-tags"><span class="label label-blue">Sensor Fusion</span><span class="label label-green">IMU</span></div>
      <p>A low-cost 3D dead reckoning system that supports GPS navigation, and takes over when the signal is weak or lost.</p>
      <a class="read-more" href="Projects/DeadReconking.html">Read more →</a>
    </div>
  </div>

  <div class="robot-tile robot-tile--link" data-cat="agri">
    <img class="tile-media" src="../images/projects/fabBhutan.png" alt="Fab Bhutan Challenge" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Agriculture &amp; Environment</span>
      <h4>Human-Wildlife Conflict: Fab 23 Bhutan</h4>
      <div class="tile-tags"><span class="label label-yellow">Field Work</span></div>
      <p>At the Fab 23 conference in Bhutan, I was deployed in Limbhukha village to develop sustainable solutions to wildlife damaging farms.</p>
      <a class="read-more" href="Projects/Fab23.html">Read more →</a>
    </div>
  </div>

  <div class="robot-tile robot-tile--link" data-cat="electronics">
    <img class="tile-media" src="../images/projects/SDbox1.jpeg" alt="Oxygen concentrator monitoring box" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Electronics &amp; Embedded</span>
      <h4>Oxygen Concentrator Monitoring System</h4>
      <div class="tile-tags"><span class="label label-red">Medical</span><span class="label label-green">Monitoring</span></div>
      <p>Monitors power parameters, oxygen purity and air flow rate, to improve oxygen supply for critically ill patients during long ambulance transfers.</p>
      <a class="read-more" href="Projects/Concentrator.html">Read more →</a>
    </div>
  </div>

  <div class="robot-tile" data-cat="robotics">
    <img class="tile-media tile-media--contain" src="../images/projects/quadruped_leg.jpg" alt="Quadruped robot leg" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Robotics &amp; Autonomy</span>
      <h4>Multi-Agent Architecture for a Quadruped</h4>
      <div class="tile-tags"><span class="label label-purple">Legged Robotics</span></div>
      <p>A quadruped robot built in a team of two. The twist: each leg is an independent agent, with no central coordinator.</p>
    </div>
  </div>

  <div class="robot-tile robot-tile--link" data-cat="electronics">
    <img class="tile-media" src="../images/projects/attendance/device-deployed.jpg" alt="Attendance module mounted on a wall" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Electronics &amp; Embedded</span>
      <h4>Open-Source Biometric Attendance Module</h4>
      <div class="tile-tags"><span class="label label-green">Open Source</span><span class="label label-purple">ESP32</span><span class="label label-blue">Google Sheets</span></div>
      <p>A free, database-free fingerprint attendance system: an ESP32 device that uses a Google Sheet as its backend, with no server, hosting or bills.</p>
      <a class="read-more" href="Projects/Attendance.html">Read more →</a>
    </div>
  </div>

  <div class="robot-tile" data-cat="electronics">
    <img class="tile-media" src="../images/projects/xbox.jpeg" alt="Game controller PCB" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Electronics &amp; Embedded</span>
      <h4>Proprietary HID Devices over Native USB on Teensy 4.1</h4>
      <div class="tile-tags"><span class="label label-green">Open Source</span><span class="label label-purple">USB</span></div>
      <p>A library for connecting controllers such as Xbox and PlayStation pads to ARM-based microcontrollers (Teensy 4.1).</p>
    </div>
  </div>

  <div class="robot-tile" data-cat="robotics">
    <img class="tile-media" src="../images/projects/new%20drone.jpg" alt="Low-cost drone" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Robotics &amp; Autonomy</span>
      <h4>Fab-able Low-Cost Drone &amp; Flight Controller</h4>
      <div class="tile-tags"><span class="label label-purple">Aerial</span><span class="label label-green">Firmware</span></div>
      <p>A ~₹1000 drone that can be made with generic fab lab equipment and components. It is Arduino-compatible, with custom flight controller firmware that implements an EKF.</p>
    </div>
  </div>

  <div class="robot-tile" data-cat="electronics">
    <img class="tile-media tile-media--contain" src="../images/projects/reprap_micron.jpg" alt="RepRapMicron build" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Electronics &amp; Embedded</span>
      <h4>RepRapMicron Replica</h4>
      <div class="tile-tags"><span class="label label-green">Open Source</span><span class="label label-purple">Motion Control</span></div>
      <p>A replica of the open-source <a href="https://github.com/VikOlliver/RepRapMicron">RepRapMicron</a>, a 3D printer for micron-scale fabrication. I also wrote joystick programs to control the tool head.</p>
    </div>
  </div>

  <div class="robot-tile" data-cat="electronics">
    <img class="tile-media" src="../images/projects/xbee.png" alt="Wireless HID test boards" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Electronics &amp; Embedded</span>
      <h4>Low-Cost Wireless HID Devices</h4>
      <div class="tile-tags"><span class="label label-purple">Wireless</span></div>
      <p>Benchmarking wireless technologies for low-latency, high-data-rate robot controllers, targeting 2 Mbps with minimal computational overhead.</p>
    </div>
  </div>

  <div class="robot-tile" data-cat="robotics">
    <img class="tile-media" src="../images/projects/chassis.jpeg" alt="3-wheel holonomic chassis" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Robotics &amp; Autonomy</span>
      <h4>Odometry &amp; Path Rectification for Holonomic Drives</h4>
      <div class="tile-tags"><span class="label label-purple">Kinematics</span><span class="label label-green">Firmware</span></div>
      <p>Kinematic modelling and firmware for 3 and 4-wheel holonomic drives: PID-based odometry, plus an IMU-based algorithm that rectifies the robot's path.</p>
    </div>
  </div>

  <div class="robot-tile" data-cat="electronics">
    <img class="tile-media tile-media--contain" src="../images/projects/magneto.jpg" alt="IMU sensor board" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Electronics &amp; Embedded</span>
      <h4>Object Detection using an IMU</h4>
      <div class="tile-tags"><span class="label label-green">Firmware</span><span class="label label-blue">Magnetometer</span></div>
      <p>Detects ferromagnetic objects from deviations in the magnetic field, to identify the type of vehicle nearby.</p>
    </div>
  </div>

  <div class="robot-tile" data-cat="agri">
    <img class="tile-media" src="../images/projects/power.png" alt="Power generation predictor app" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Agriculture &amp; Environment</span>
      <h4>Regional Power Generation Predictor</h4>
      <div class="tile-tags"><span class="label label-blue">Prediction</span></div>
      <p>Predicts power generation for wind turbines and gives recommendations for getting the best output.</p>
    </div>
  </div>

  <div class="robot-tile" data-cat="robotics">
    <img class="tile-media" src="../images/projects/ImageProcessing1.png" alt="Object detection demo" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Robotics &amp; Autonomy</span>
      <h4>Real-Time Object Detection on a Raspberry Pi 4B</h4>
      <div class="tile-tags"><span class="label label-blue">Computer Vision</span></div>
      <p>Custom object detection running in real time on a Raspberry Pi 4B with OpenCV.</p>
    </div>
  </div>

  <div class="robot-tile" data-cat="electronics">
    <img class="tile-media" src="../images/projects/ebike.png" alt="E-bike display" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Electronics &amp; Embedded</span>
      <h4>Speedometer, Odometer &amp; Telemetry for an E-Bike</h4>
      <div class="tile-tags"><span class="label label-green">Embedded</span></div>
      <p>A GLCD display and telemetry system for a custom e-bike.</p>
    </div>
  </div>

  <div class="robot-tile" data-cat="robotics">
    <img class="tile-media tile-media--contain" src="../images/projects/ImageProcessing2.png" alt="Android object detection app" loading="lazy">
    <div class="robot-tile__body">
      <span class="kicker card-kicker">Robotics &amp; Autonomy</span>
      <h4>Android App for Object Detection</h4>
      <div class="tile-tags"><span class="label label-blue">Computer Vision</span><span class="label label-yellow">Android</span></div>
      <p>An Android app for deploying custom object detection models, with wireless communication for integrating with robots.</p>
    </div>
  </div>
</div>

<div id="project-categories" hidden></div>

## More Work
{: .mt-8 }

Other projects I have worked on, without write-ups yet.
{: .fw-300 }

<div class="interest-grid">
  <div><strong>Outcome-Driven Control for CNC Machines</strong><div class="tile-tags"><span class="label label-yellow">Personal</span></div></div>
  <div><strong>grbl-HAL for High-Speed Laser Engraving</strong><span>Optimizing grbl-HAL on a Teensy 4.1 for high-speed laser engraving.</span><div class="tile-tags"><span class="label label-yellow">Personal</span></div></div>
  <div><strong>4-Wheel Differential Drive Platform</strong><span>A robotic platform for education and small-scale automation.</span><div class="tile-tags"><span class="label label-blue">ERTS Lab, IIT Bombay</span></div></div>
  <div><strong>Open-Source Universal Climate Data Acquisition</strong><span>An open-source system for collecting climate data.</span><div class="tile-tags"><span class="label label-blue">ERTS Lab, IIT Bombay</span></div></div>
  <div><strong>Pest Detection &amp; Prediction</strong><span>For capsicum and custard apple crops.</span><div class="tile-tags"><span class="label label-blue">ERTS Lab, IIT Bombay</span></div></div>
  <div><strong>Polyhouse Cultivation &amp; Pest Growth Study</strong><span>How different cultivation approaches in polyhouses affect pest growth.</span><div class="tile-tags"><span class="label label-blue">ERTS Lab, IIT Bombay</span></div></div>
  <div><strong>Efficient Onion Storage System</strong><div class="tile-tags"><span class="label label-blue">ERTS Lab, IIT Bombay</span></div></div>
</div>

<script src="/assets/js/projects-view.js" defer></script>
