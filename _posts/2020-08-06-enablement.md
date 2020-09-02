---
layout: post
title: "Core Enablement"
author: "Microsoft"
categories: enablement
tags: ['enablement']
image: enablement.jpg
---

## Solutions

A Hub and spoke topology is a networking model for more efficient management of common communication or security requirements. This arrangement also helps avoid Azure subscription limitations. This hub and spoke model addresses the following concerns:

Cost savings and management efficiency. Multiple workloads, such as network virtual appliances (NVAs) and DNS servers, can share centralized services in a single location. This approach enables IT departments to minimize redundant resources and management effort.
Overcoming subscriptions limits. Large cloud-based workloads might require the use of more resources than a single Azure subscription allows. Arranging virtual network workloads on a peer-to-peer basis from different subscriptions to a central hub can overcome these limits. For more information, see Azure subscription limits.
Separation of concerns. You can deploy individual workloads between Central IT teams and workload teams.
Note that smaller cloud environments might not benefit from the added capabilities that this model offers. However, if you are designing a larger cloud-based environment, you should consider implementing a hub and spoke networking architecture if you have any of the concerns in the previous list.

<div class="mstitlebox">
<h3><a href="https://github.com/Azure/caf-terraform-landingzonese">Azure Terraform Landing Zones</a></h3>
</div>
<div class ="textbox">
<i>Sample landing zones
Currently we provide you with the following sample landing zones:

Name	Purpose
landingzone_caf_foundations	setup all the fundamentals for a subscription (logging, accounting, security.). You can find all details of the caf_foundations landing zone Here
landingzone_hub_spoke	example of hub and spoke environment documentation here
landingzone_hub_mesh	example of hub and mesh environment with Azure Virtual WAN documentation here
landingzone_vdc_demo	setup a demo environment of a hub-spoke topology including shared services, as well as various DMZ (ingress, egress, transit). You can find all details of the vdc_demo landing zone Here
landingzone_secure_vnet_dmz	(preview) this is an early implementation of the reference architecture secure_vnet_dmz. This is a work in progress used to illustrate landing zone creation process as described here . You can find all details of the secure vnet dmz landing zone Here
landingzone_starter	this is an empty landing zones to use as a template to develop a level 2 landing zone. You can find all details of the starter landing zone Here</i>
<br>
<h4>(provided by Microsoft)</h4>
</div>

<p>
<br>
<p>