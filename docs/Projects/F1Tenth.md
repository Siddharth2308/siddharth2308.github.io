<!-- ---
layout: default
title: Home
# nav_enabled: false
--- -->
#  F1TENTH Autonomous Race Car
{: .fs-9 }

<center>
<img width="600" alt="f1tenth car" src="../../images/projects/f1tenth/WhatsApp%20Image%202026-08-20%20at%203.42.25%20AM.jpeg">
</center>

## Overview
An autonomous 1/10-scale F1TENTH race car running ROS 2 Humble. The software stack includes a custom fused odometry node, an offline minimum-curvature raceline optimizer, and several racing controllers (Stanley with VFH obstacle avoidance, MPPI, and kinematic MPC). All of the controllers follow a raceline generated from a SLAM map of the track.

[GitHub Repository](https://github.com/Siddharth2308/f1tenth){: .btn .btn-green .fs-4 .mb-2 .mb-md-0 .mr-2 }

<center>
<iframe width="600" height="400" src="https://www.youtube.com/embed/VIDEO_ID_1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

## Salient Features
- **Stanley Controller with VFH (Primary):**
  - The Stanley steering law uses a track-width-normalized gain, so it corrects harder near walls and more gently on wide straights. It runs deterministically in under 1 ms per cycle.
  - Curvature-based dynamic braking computes corner speeds ahead of time and brakes before slow corners.
  - A Vector Field Histogram layer steers around unplanned obstacles seen on the LiDAR, such as other cars or debris.
- **Offline Raceline Optimization:**
  - A planner in the style of TUM's *global_racetrajectory_optimization* goes from a SLAM occupancy grid to a race-ready trajectory.
  - Pipeline: safe corridor extraction, then skeletonization, then a **minimum-curvature QP**, then a periodic cubic spline, then a friction-circle **velocity profile** with forward and backward passes.
- **MPPI Controller:**
  - Standalone Model Predictive Path Integral controller that samples 4096 rollouts over a 60-step horizon at 20 Hz. Each rollout is scored on cross-track error, speed, heading and an exponential wall penalty.
- **Kinematic MPC (Experimental):**
  - Receding-horizon MPC on a kinematic bicycle model, kept as a test bench with an instrumented debug node.
- **Raceline Speed Editor:**
  - An interactive Tkinter/matplotlib tool for hand-tuning the speed profile. You can boost straights or slow specific corners without re-running the planner.

## Custom Odometry: `good_odom`
Raw VESC wheel odometry integrates its own noisy yaw from the steering angle and ERPM. That estimate drifts badly over a lap, so the map-frame localization ends up fighting the odometry. The `good_odom` node keeps the best part of each sensor:
- **Position** comes from the wheel encoder distance travelled.
- **Orientation** comes from the VESC's onboard IMU yaw, which is effectively drift-free over a lap.

The node dead-reckons position along the IMU heading. This gives a straighter, lower-drift `odom -> base_link` estimate, which keeps the localization correction small and gives the controllers a stable pose to track.

<center>
<iframe width="600" height="400" src="https://www.youtube.com/embed/VIDEO_ID_2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

## Hardware & Driver Stack
- **Hokuyo LiDAR** for localization and obstacle detection.
- **VESC** motor controller for motor ERPM and servo control, which also provides wheel odometry and the onboard IMU.
- **ExpressLRS (ELRS) RC link** through a custom CRSF teleop bridge, with dedicated deadman, autonomous-enable, direction and boost switches. Flipping the deadman switch down is a global E-stop at any time.
- **Ackermann Mux** arbitrates between teleop and autonomous commands, so the RC deadman always takes priority over autonomy.
- Custom 3D printed and laser cut chassis plates, with mounts for the compute unit, VESC and tracker.
