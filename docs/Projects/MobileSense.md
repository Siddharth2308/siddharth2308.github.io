---
layout: default
# title: Home
nav_enabled: false
---
#  MobileSense: Micro-Climate Sensing Device
{: .fs-9 }

<center>
<img width="500" alt="CL" src="../../images/projects/mobsense.jpg">
</center>

## Overview
Deploying sensors on a farm is one option for collecting farm-level data, but low power consumption is essential for these sensors. Additionally, mobility can be an issue; sensors must be placed in fixed locations, and moving them can be tedious. A small farm (e.g., one acre) may need up to five sensors. As farm size increases, so does the number of sensors required, which presents a problem. To address this, we developed the mobileSense device. This device connects to a phone via USB and collects weather parameters, sending the data to the cloud through an Android app on the phone. As a farmer scouts the farm as part of their daily routine, the mobileSense, connected to the phone, will transmit the data to the cloud.

## Salient features:
- Portable sensing device that draws power from the host device
- On-the-move sensing and transmitting of Temperature, relative humidity, pressure, etc.
- The onboard accelerometer enables the push of data to the host device based on the speed of movement
- Onboard memory to store data when the host is unable to send the data to a central server
- Can deploy lightweight ML models on mobileSense MPU
- Currently compatible with a host device that uses a USB C-type port
- Compatible with any mobile platform (Rover, Drones, etc.)
- Extra pins made available to be able to connect more sensors to mobileSense
- USB C-type makes it compatible with any framework for transmitting sensed data
- When mobileSense is connected to a phone, the phone can be charged with a power bank via a female USB C-type connector
