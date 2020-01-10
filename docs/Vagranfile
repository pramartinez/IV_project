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

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "VPT-vm"
  # Especificamos el dummy box, el cual nos proporcionará una base para nuestra máquina.
  config.vm.box_url = 'https://github.com/msopentech/vagrant-azure/raw/master/dummy.box'
  config.ssh.private_key_path = "~/.ssh/id_rsa"

  config.vm.provider "azure" do |v|
    v.tenant_id="c7a95d24-50ff-4804-ad9a-e4cba81ad10b"
    v.client_id="518f9d83-efda-4975-a32c-453c817082cc"
    v.subscription_id="0742ef1e-9172-4d37-a4e0-9ff6ab96659e"
    v.client_secret="c9399600-4aa2-42df-a04f-b45befa3522c"

    v.vm_name = "vagrant-vm"
    v.resource_group_name= "RGN-vm"
    v.vm_image_urn = "Canonical:UbuntuServer:16.04-LTS:latest"
    v.vm_size = "Standard_DS2_v2"
    v.tcp_endpoints = "80"


    #v.location = "westeurope"
    #v.vm_name = "vagrant-vm-vpt"
    #v.resource_group_name= "myResourceGroup-vagrant-vpt"
    #v.vm_image_urn = "Canonical:UbuntuServer:18.04-LTS:18.04.201912050"
    #v.tcp_endpoints = "80"
    # Tamaño de los recursos de Azure
		#v.vm_size = "Classic"
		#v.vm_image_urn = 'Canonical:UbuntuServer:16.04-LTS:latest'
		#Grupo de recursos en los que se creará la máquina.
  end

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   apt-get update
  #   apt-get install -y apache2
  # SHELL
end
