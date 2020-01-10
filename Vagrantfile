# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.
  config.vm.define "vptournaments-vm"

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "azure"
  # Especificamos el dummy box, el cual nos proporcionará una base para nuestra máquina.
  config.vm.box_url = 'https://github.com/msopentech/vagrant-azure/raw/master/dummy.box'

  # Clave privada del par usado para conectarse a la VM
  config.ssh.private_key_path = "~/.ssh/id_rsa"

  config.vm.provider "azure" do |vm, override|
    vm.tenant_id="c7a95d24-50ff-4804-ad9a-e4cba81ad10b"
    vm.client_id="4bcf38d7-65fb-4ddf-883a-5bad5f71e054"
    vm.subscription_id="0742ef1e-9172-4d37-a4e0-9ff6ab96659e"
    vm.client_secret="e344b007-b0db-4228-85d2-91c97f523472"

    vm.vm_name = "vpt"
    vm.resource_group_name= "srcgroup-vpt"
    vm.vm_image_urn = "Canonical:UbuntuServer:18.04-LTS:latest"
    vm.vm_size = "Standard_B1s"
    #vm.tcp_endpoints = ENV['PORT']
    vm.tcp_endpoints = "3000"
    vm.location = 'westeurope'
    
  end

# Enable provisioning with a shell script. Additional provisioners such as
# Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
# documentation for more information about their specific syntax and use.
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "despliegue/AZplaybook.yml"
  end
end
