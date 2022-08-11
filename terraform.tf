terraform {
  cloud {
    organization = "tafari"

    workspaces {
      name = "Cloud-Resume-Back-End"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = var.aws_region
}
