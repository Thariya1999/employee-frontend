provider "aws" {
  region = "eu-north-1"
}

# Define variables for key name and private key path
variable "key_name" {
  description = "Name of the SSH key pair"
  default     = "your-key"
}

variable "private_key_path" {
  description = "Path to the private key file"
}

# Check for an existing instance
data "aws_instances" "existing" {
  filter {
    name   = "tag:Name"
    values = ["AppServer"]
  }
}

# Create an instance only if no existing instance is found
resource "aws_instance" "app_server" {
  count         = length(data.aws_instances.existing.instances) == 0 ? 1 : 0
  ami           = "ami-04542995864e26699"
  instance_type = "t2.micro"
  key_name      = var.key_name
  security_groups = ["default"]

  tags = {
    Name = "AppServer"
  }

  # Add a connection block to allow SSH access for provisioning
  connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = file(var.private_key_path)
    host        = self.public_ip
  }

  provisioner "remote-exec" {
    inline = [
      "echo 'Server provisioned and ready!'"
    ]
  }
}

# Output the instance IP
output "instance_ip" {
  value = coalesce(join("", data.aws_instances.existing.public_ips), aws_instance.app_server[0].public_ip)
}
