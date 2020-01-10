# Despliegue final del microservicio

El proceso que se ha seguido para poder llevar a cabo el despliegue final del microservicio en una máquina virtual desde cero ha sido el siguiente:

### Primero creamos el grupo de recursos que emplearemos para crear la máquina virtual en cuestión:

```bash
$ az group create -l westeurope -n srcgroup-vpt

{
  "id": "/subscriptions/0742ef1e-9172-4d37-a4e0-9ff6ab96659e/resourceGroups/srcgroup-vpt",
  "location": "westeurope",
  "managedBy": null,
  "name": "srcgroup-vpt",
  "properties": {
    "provisioningState": "Succeeded"
  },
  "tags": null,
  "type": "Microsoft.Resources/resourceGroups"
}
```

Hemos indicado la localización y el nombre deseados. Esta información la necesitamos para incluirla en el Vagrantfile y, entonces, levantar la máquina virtual. 

### A continuación, creamos una asignación de rol según nuestra subscripción:

```bash
$ az ad sp create-for-rbac

Creating a role assignment under the scope of "/subscriptions/0742ef1e-9172-4d37-a4e0-9ff6ab96659e"
  Retrying role assignment creation: 1/36
  Retrying role assignment creation: 2/36
  Retrying role assignment creation: 3/36
  Retrying role assignment creation: 4/36
  Retrying role assignment creation: 5/36
{
  "appId": "******",
  "displayName": "azure-cli-2020-01-10-11-07-46",
  "name": "http://azure-cli-2020-01-10-11-07-46",
  "password": "******",
  "tenant": "******"
}
```

Como vemos, una vez hecho esto se nos proporciona cierta información relevante que no se muestra por privacidad. Dichos datos tenemos que utilizarlos también en el Vagrantfile.

### Creamos Vagrantfile:

```ruby
Vagrant.configure("2") do |config|
  # Definimos la máquina virtual dándole un nombre
  config.vm.define "vptournaments-vm"

  # La máquina virtual va a ser desplegada en Azure
  config.vm.box = "azure"

  # Indicamos la siguiente URL de dummy box que nos va a una base 
  # para la máquina que estamos levantando
  config.vm.box_url = 'https://github.com/msopentech/vagrant-azure/raw/master/dummy.box'

  # Indicamos dónde se encuentra la clave privada para conectarse a la máquina virtual
  config.ssh.private_key_path = "~/.ssh/id_rsa"

  # EL provider es Azure
  config.vm.provider "azure" do |vm, override|
    # Indicamos la siguiente información para poder continuar con el levantamiento
    vm.tenant_id="c7a95d24-50ff-4804-ad9a-e4cba81ad10b"
    vm.client_id="4bcf38d7-65fb-4ddf-883a-5bad5f71e054"
    vm.subscription_id="0742ef1e-9172-4d37-a4e0-9ff6ab96659e"
    vm.client_secret="e344b007-b0db-4228-85d2-91c97f523472"

    # Nombre de la máquina virtual
    vm.vm_name = "vpt"
    # Nombre del grupo de recursos creado previamente
    vm.resource_group_name= "srcgroup-vpt"
    # Imagen de la máquina virtual
    vm.vm_image_urn = "Canonical:UbuntuServer:18.04-LTS:latest"
    # Tamaño de la máquina virtual, es uno de lo más básicos
    vm.vm_size = "Standard_B1s"
    # Puerto donde escucha el microservicio
    vm.tcp_endpoints = "3000"
    # Localización
    vm.location = 'westeurope'
    
  end

  # La provisión se realiza con Ansible
  config.vm.provision "ansible" do |ansible|
    # Indicamos cuál es el playbook
    ansible.playbook = "despliegue/AZplaybook.yml"
  end
end

```

### Levantamos la máquina sin aprovisionarla recurriendo a vagrant (luego usaremos gulp) para probar que todo es correcto:

```bash
$ vagrant up --no-provision

Bringing machine 'vptournaments-vm' up with 'azure' provider...
==> vptournaments-vm: Launching an instance with the following settings...
==> vptournaments-vm:  -- Management Endpoint: https://management.azure.com
==> vptournaments-vm:  -- Subscription Id: 0742ef1e-9172-4d37-a4e0-9ff6ab96659e
==> vptournaments-vm:  -- Resource Group Name: srcgroup-vpt
==> vptournaments-vm:  -- Location: westeurope
==> vptournaments-vm:  -- Admin Username: vagrant
==> vptournaments-vm:  -- VM Name: vpt
==> vptournaments-vm:  -- VM Storage Account Type: Premium_LRS
==> vptournaments-vm:  -- VM Size: Standard_B1s
==> vptournaments-vm:  -- Image URN: Canonical:UbuntuServer:18.04-LTS:latest
==> vptournaments-vm:  -- TCP Endpoints: 80
==> vptournaments-vm:  -- DNS Label Prefix: vpt
==> vptournaments-vm:  -- Create or Update of Resource Group: srcgroup-vpt
==> vptournaments-vm:  -- Starting deployment
==> vptournaments-vm:  -- Finished deploying
==> vptournaments-vm: Waiting for SSH to become available...
Enter passphrase for /home/praxedes/.ssh/id_rsa:
==> vptournaments-vm: Machine is booted and ready for use!
==> vptournaments-vm: Rsyncing folder: /home/praxedes/Documents/ETSIIT/cuarto_curso/IV/IV_project/ => /vagrant
==> vptournaments-vm: Machine not provisioned because `--no-provision` is specified.
```

Vemos que el levantamiento ha sido satisfactorio, por tanto, ya podríamos proveder a aprovisionar la máquina virtual.

### Probamos a contectarnos con *ssh* para probar si todo funciona como debería y se establece la conexión de forma correcta:

```bash
$ vagrant ssh

Welcome to Ubuntu 18.04.3 LTS (GNU/Linux 5.0.0-1027-azure x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Fri Jan 10 11:21:13 UTC 2020

  System load:  0.33              Processes:           115
  Usage of /:   6.8% of 28.90GB   Users logged in:     0
  Memory usage: 40%               IP address for eth0: 10.0.0.4
  Swap usage:   0%


0 packages can be updated.
0 updates are security updates.


vagrant@vpt:~$ 
```

Podemos comprobar que ha sido satisfactoria la prueba, ahora sí que podemos pasar a aprovisionarla. 

### Provisionamos la mv con vagrant (finalmente se crearán nuevas tareas para que podramos realizar todo esto con Gulp):

```bash
$ vagrant provision

==> vptournaments-vm: Running provisioner: ansible...
Vagrant has automatically selected the compatibility mode '2.0'
according to the Ansible version installed (2.9.2).

Alternatively, the compatibility mode can be specified in your Vagrantfile:
https://www.vagrantup.com/docs/provisioning/ansible_common.html#compatibility_mode

    vptournaments-vm: Running ansible-playbook...

PLAY [all] *********************************************************************

TASK [Gathering Facts] *********************************************************
ok: [vptournaments-vm]

TASK [Update apt package list] *************************************************
changed: [vptournaments-vm]

TASK [Install Node.js] *********************************************************
ok: [vptournaments-vm]

TASK [Install git] *************************************************************
ok: [vptournaments-vm]

TASK [Install npm] *************************************************************
ok: [vptournaments-vm]

TASK [Create user] *************************************************************
ok: [vptournaments-vm]

TASK [Add public key for created user] *****************************************
ok: [vptournaments-vm]

TASK [Clone GitHub repository] *************************************************
ok: [vptournaments-vm]

TASK [Install packages based on package.json] **********************************
ok: [vptournaments-vm]

TASK [Install gulp] ************************************************************
ok: [vptournaments-vm]

TASK [Run gulp start] **********************************************************
changed: [vptournaments-vm]

PLAY RECAP *********************************************************************
vptournaments-vm           : ok=11   changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0     
```

El aprovisionamiento también ha sido satisfactorio. Como vemos hay muchos casos en los que se indica ```ok: [vptournaments-vm]```, esto es debido a que la máquina ya se había aprovisionado de ello porque no es la primera vez que lo he ejecutado. Sin embargo, cuando se indica ```changed: [vptournaments-vm]```, significa que se ha producido un cambio en la máquina virtual, es decir, que no se había realizado esa tarea aún o que se ha modificado. 

Veamos cuál ha sido el playbook de Ansible empleado:

```yml
---
- hosts: all
  become: yes
  tasks:
    # Actualizamos todos los paquetes de apt antes de continuar
    - name: Update apt package list
      apt:
        update_cache: yes
    
    # Instalamos el lenguaje del proyecto
    - name: Install Node.js
      apt: name=nodejs state=present
    
    # Instalamos git, luego lo necesitaremos
    - name: Install git
      apt: name=git state=present
    
    # Instalamos npm 
    - name: Install npm
      apt: name=npm state=present

    # Creamos usuario llamado azure
    - name: Create user
      user:
        name: azure
        state: present
        shell: /bin/bash
        system: no       
        createhome: yes  
        home: /home/azure
        
    # Añadimos la clave pública para el usuario creado
    - name: Add public key for 'azure' user
      authorized_key:
        user: azure
        state: present
        key: "{{ lookup('file', '~/.ssh/id_rsa.pub') }}"
            
    # Clonamos el repositorio del proyecto
    - name: Clone GitHub repository
      git:
        repo: 'https://github.com/pramartinez/IV_project.git'
        dest: /home/azure/vptournaments 

    # Instalamos las dependencias del proyecto en base a lo especificado en package.json
    - name: Install packages based on package.json
      npm:
        path: /home/azure/vptournaments
        unsafe_perm: yes
        state: present
        
    # Instalamos Gulp localmente para evitar ciertos problemas
    - name: Install gulp locally
      npm: name=gulp state=present path=/home/azure/vptournaments
      
    # Desplegamos la aplicación
    - name: Run gulp start
      shell:
        cmd: gulp start &
        chdir: /home/azure/vptournaments/
```

### Miramos IP pública de nuestra máquina virtual. Yo he accedido al portal de Azure para comprobar que todo se había creado correctamente y que se encontraba entre mis máquinas virtuales levantadas. En la siguiente imagen observamos la información de la actual:

![Información de la máquina virtual creada](images/../docs/images/info_vpt.png)

### Ya podemos conectarnos con el usuario creado y con la IP pública de la máquina que acabamos de consultar a través del puerto específico para el servicio *SSH*:

```bash
$ ssh azure@137.117.141.136 -p 22

Welcome to Ubuntu 18.04.3 LTS (GNU/Linux 5.0.0-1027-azure x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Fri Jan 10 11:50:32 UTC 2020

  System load:  0.0               Processes:           107
  Usage of /:   8.3% of 28.90GB   Users logged in:     0
  Memory usage: 38%               IP address for eth0: 10.0.0.4
  Swap usage:   0%


19 packages can be updated.
16 updates are security updates.


Last login: Fri Jan 10 11:50:21 2020 from 213.194.177.167
azure@vpt:~$ 
```

### Añadimos una única regla a Gulp para realizar todo este proceso de una vez:

```js
// Tarea para levantar, provisionar y desplegar 
gulp.task('fullup', function(done) {
  exec( 'vagrant up', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});
```

Con esta regla estaríamos levantando la máquina, provisionándola y, además, desplegando el microservicio. Esto es así porque el comando ```vagrant up``` levanta la máquina virtual recurriendo al *Vagrantfile* que hemos creado previamente y, a continuación, la provisiona según lo indicado en el *playbook* de Ansible. 

