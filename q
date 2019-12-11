[0;1;31m●[0m virtualbox.service - LSB: VirtualBox Linux kernel module
   Loaded: loaded (/etc/init.d/virtualbox; generated)
   Active: [0;1;31mfailed[0m (Result: exit-code) since Mon 2019-12-09 20:16:50 CET; 18s ago
     Docs: man:systemd-sysv-generator(8)
  Process: 30884 ExecStart=/etc/init.d/virtualbox start [0;1;31m(code=exited, status=1/FAILURE)[0m

dic 09 20:16:50 praxedes-OMEN systemd[1]: Starting LSB: VirtualBox Linux kernel module...
dic 09 20:16:50 praxedes-OMEN virtualbox[30884]:  * Loading VirtualBox kernel modules...
dic 09 20:16:50 praxedes-OMEN virtualbox[30884]:  * modprobe vboxdrv failed. Please use 'dmesg' to find out why
dic 09 20:16:50 praxedes-OMEN virtualbox[30884]:    ...fail!
dic 09 20:16:50 praxedes-OMEN systemd[1]: [0;1;39m[0;1;31m[0;1;39mvirtualbox.service: Control process exited, code=exited status=1[0m
dic 09 20:16:50 praxedes-OMEN systemd[1]: [0;1;39m[0;1;31m[0;1;39mvirtualbox.service: Failed with result 'exit-code'.[0m
dic 09 20:16:50 praxedes-OMEN systemd[1]: [0;1;31m[0;1;39m[0;1;31mFailed to start LSB: VirtualBox Linux kernel module.[0m
