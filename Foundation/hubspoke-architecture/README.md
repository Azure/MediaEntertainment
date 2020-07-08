# Hub and spoke network topology
   
Hub and spoke is a networking model for more efficient management of common communication or security requirements. It also helps avoid Azure subscription limitations. This model addresses the following concerns:

- Cost savings and management efficiency. Centralizing services that can be shared by multiple workloads, such as network virtual appliances (NVAs) and DNS servers, in a single location allows IT to minimize redundant resources and management effort.
- Overcoming subscriptions limits. Large cloud-based workloads might require the use of more resources than are allowed in a single Azure subscription. Peering workload virtual networks from different subscriptions to a central hub can overcome these limits. For more information, see Azure subscription limits.
- Separation of concerns. You can deploy individual workloads between Central IT teams and workload teams.
Smaller cloud estates might not benefit from the added structure and capabilities that this model offers. But larger cloud adoption efforts should consider implementing a hub and spoke networking architecture if they have any of the concerns listed previously.

## What are the technology components and/or solution?

The following example demonstrates a landing zone in Azure with a Hub that includes:
- VPN Gateway
- Azure Firewall
- Azure Bastion (Optional)
- Active Directory (Optional)

<p align="center">
  <a href="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/hub-spoke-network-topology"><img src="../../images/hybrid-network-hub-spoke.png"></a>
</p>

## Why do you need it?

The Hub and Spoke will enable the following:
- Best Practice Architecture for a secure, reliable, and scalable solution in Azure
- Separation of security zones between applications (spokes) and shared services (hub)
- Support multiple applications and security between spokes

## What are the potential use cases?

- Use this model for greenfield deployments for PoC's or for use in building a development or production environment
- Serves as a foundation to run other scripts in this repository to build media solutions

## Access to the Source Repository

Please go to this repository for pre-defined Terraform deployment scripts to create this architecture:

### [caf-terraform-landing-zones](https://github.com/Azure/caf-terraform-landingzones/tree/master/landingzones/landingzone_hub_spoke)

