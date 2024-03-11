# Personal Website

## Overview
This website acts as a central hub showcasing both past and ongoing projects. Hosted statically on AWS S3 and distributed via CloudFront, it leverages various AWS serverless technologies on the backend to augment features while maintaining cost-effectiveness. 

## Project Structure
The cloud infrastructure for this project was configured using Terraform and can be located within the [home-lab](https://github.com/nathanamackenzie/home-lab/tree/main) project.

### Front-End Distribution 
The project utilizes AWS S3 static website hosting to store its source code. A CloudFront distribution is set up, enabling the use of ACM-generated SSL certificates for HTTPS. Traffic redirection from NateMackenzie.com to Route53 Nameservers is facilitated through GoDaddy DNS servers, with an A-record mapping to the S3 website.

### Back-End 
To augment the website's capabilities, API Gateway is employed alongside DynamoDB to record user interactions during their visits. EventBridge filters DynamoDB updates to notify SNS whenever a new user session has been created. 

<p align="center">
  <img src="https://raw.githubusercontent.com/nathanamackenzie/personal-website/main/img/architecture.PNG" alt="architecture" width="600">
</p>

## Licence

Home-Lab is [MIT licenced](LICENSE)