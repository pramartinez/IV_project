# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # Nombre de la máquina
  config.vm.define "vptournaments-vm"

  # Especificaciones sobre la máquina
  config.vm.box = "azure"
  config.vm.box_url = 'https://github.com/msopentech/vagrant-azure/raw/master/dummy.box'

  # Clave privada
  config.ssh.private_key_path = "~/.ssh/id_rsa"

  config.vm.provider "azure" do |vm, override|
    # Información sobre cliente, subscripción, password...
    vm.tenant_id = ENV['AZURE_TENANT_ID']
    vm.client_id = ENV['AZURE_CLIENT_ID']
    vm.subscription_id = ENV['AZURE_SUBSCRIPTION_ID']
    vm.client_secret = ENV['AZURE_CLIENT_SECRET']

    # Información sobre la máquina
    vm.vm_name = "vm-vpt"
    vm.resource_group_name= "srcgroup-vpt"
    vm.vm_image_urn = "Canonical:UbuntuServer:18.04-LTS:latest"
    vm.vm_size = "Standard_B1s"
    vm.tcp_endpoints = "3000"
    vm.location = 'westeurope'
    
  end

  # Primer playbook
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "despliegue/AZplaybook.yml"
  end

  # Segundo playbook
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "despliegue/playbook_despliegue.yml"
  end
end
