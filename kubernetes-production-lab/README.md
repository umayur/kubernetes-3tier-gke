\# Kubernetes 3-Tier Application on GKE



\## Overview



This repository is a hands-on Kubernetes learning and production engineering project focused on deploying, securing, scaling, monitoring, and troubleshooting a real-world three-tier application on Google Kubernetes Engine (GKE).



The project progresses from Kubernetes fundamentals to advanced production engineering practices, with practical exercises, deployment manifests, automation scripts, and troubleshooting documentation.



\## Project Objectives



\- Understand Kubernetes architecture and core components.

\- Deploy applications using Pods, Deployments, and Services.

\- Understand Kubernetes networking and service discovery.

\- Implement application configuration and secret management.

\- Configure RBAC and workload identity.

\- Implement Kubernetes scheduling and autoscaling.

\- Package applications using Helm.

\- Automate deployments using CI/CD.

\- Implement monitoring and troubleshooting practices.

\- Understand production-grade GKE operations.



\## Application Architecture



The application follows a three-tier architecture:



\- \*\*Frontend:\*\* React application.

\- \*\*Backend:\*\* Python FastAPI application.

\- \*\*Database:\*\* PostgreSQL.



```text

&#x20;               Users

&#x20;                 |

&#x20;                 v

&#x20;       Load Balancer / Ingress

&#x20;                 |

&#x20;                 v

&#x20;          Frontend Service

&#x20;                 |

&#x20;                 v

&#x20;         Frontend Pods

&#x20;                 |

&#x20;                 v

&#x20;           Backend Service

&#x20;                 |

&#x20;                 v

&#x20;          Backend Pods

&#x20;                 |

&#x20;                 v

&#x20;         PostgreSQL Service

&#x20;                 |

&#x20;                 v

&#x20;         PostgreSQL Database

```



\## Technology Stack



| Category | Technology |

|---|---|

| Cloud | Google Cloud Platform |

| Kubernetes | Google Kubernetes Engine |

| Frontend | React |

| Backend | Python, FastAPI |

| Database | PostgreSQL |

| Containerization | Docker |

| Infrastructure as Code | Terraform |

| Package Management | Helm |

| CI/CD | GitHub Actions |

| Container Registry | Artifact Registry |

| Monitoring | Prometheus, Grafana |

| Version Control | Git, GitHub |



\## Repository Structure



```text

kubernetes-production-lab/

├── 01-pods/

├── 02-namespaces/

├── 03-deployments/

├── 04-services/

├── 05-ingress-gateway/

├── 06-configuration/

├── 07-storage/

├── 08-rbac/

├── 09-workload-identity/

├── 10-scheduling/

├── 11-health-and-resources/

├── 12-helm/

├── 13-cicd/

├── 14-monitoring/

├── 15-network-security/

├── 16-autoscaling/

├── 17-troubleshooting/

├── app/

│   ├── frontend/

│   ├── backend/

│   └── database/

├── docs/

├── scripts/

└── terraform/

&#x20;   └── gke/

```



\## Learning Roadmap



\### Level 1: Kubernetes Fundamentals

\- Pods

\- Namespaces

\- Labels and selectors

\- Deployments and ReplicaSets

\- ConfigMaps and Secrets



\### Level 2: Kubernetes Networking

\- ClusterIP

\- NodePort

\- LoadBalancer

\- Ingress

\- Gateway API

\- DNS and Network Policies



\### Level 3: Application Deployment

\- Three-tier application deployment

\- Database persistence

\- Health probes

\- Rolling updates



\### Level 4: Security

\- RBAC

\- ServiceAccounts

\- GKE Workload Identity

\- Secret management



\### Level 5: Scheduling and Scaling

\- Node selectors

\- Taints and tolerations

\- Affinity and anti-affinity

\- HPA



\### Level 6: Helm

\- Helm charts

\- Environment-specific configurations

\- Upgrades and rollbacks



\### Level 7: CI/CD

\- Docker image builds

\- Artifact Registry

\- GitHub Actions

\- Automated Kubernetes deployments



\### Level 8: Monitoring and Operations

\- Prometheus

\- Grafana

\- Troubleshooting

\- GKE maintenance

\- Cost optimization



\## Project Philosophy



This repository follows a practical learning approach:



\- Every concept includes hands-on implementation.

\- Every deployment includes documentation.

\- Every exercise includes verification commands.

\- Every major change is version-controlled.

\- Temporary cloud resources are recreated when needed.

\- Cloud credentials and secrets are never committed.



\## Lab Environment



\- Local development environment for application development and basic Kubernetes exercises.

\- GKE lab environment for Google Cloud-specific Kubernetes functionality.

\- GitHub as the permanent source of truth for code, manifests, and documentation.



\## Progress



Project initialization completed.



Next milestone: Build the three-tier application and begin Kubernetes fundamentals.



\## Disclaimer



This repository is intended for educational purposes and practical Kubernetes engineering experience. Production deployments require additional security, availability, compliance, and operational considerations.

