# -*- mode: ruby -*-
# vi: set ft=ruby :
VAGRANTFILE_API_VERSION="2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.define "VPTournamets"
  config.vm.box = "ubuntu/bionic64"
  config.vm.box_check_update = false
  
  config.vm.provider "virtualbox" do |vptournaments|
    vptournaments.memory = "1024"
    vptournaments.gui = false
    vptournaments.cpus=2
  end

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "provision/myplaybook.yml"
  end
end