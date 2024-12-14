# Install KVM (RHEL 9)
### Virtualization Support Checks

    cat /proc/cpuinfo | egrep "vmx|svm"
    lscpu | grep Virtualization

### Installing Required Packages

    sudo dnf update -y
    sudo dnf install cockpit cockpit-machines -y
    sudo systemctl enable --now cockpit.socket
    sudo firewall-cmd --add-service=cockpit --permanent
    sudo dnf install qemu-kvm qemu-img libvirt virt-install libvirt-client virt-top libguestfs-tools -y
    sudo systemctl enable libvirtd
    sudo systemctl start libvirtd

### Add User to _libvirt_ Group (Ability to Create System VMs)

    sudo usermod -a -G libvirt $(whoami)


# Setting Up SSH Tunnel
### Configuring the _sshd_config_
##### In the SSH config file in `/etc/ssh/sshd_config` edit the `GatewayPorts` and `AllowTcpForwarding` lines to the following

    GatewayPorts yes
    AllowTcpForwarding yes

### Restart the SSH service

    sudo systemctl restart sshd
    sudo systemctl status sshd


# Enabling Wake-on-LAN
Remember to enable wake-on-lan capabilities in the BIOS.
### Configuring the Linux network interfaces to enable Wake-on-LAN

    # Temporarily enables wake-on-lan
    sudo ethtool -s <interface> wol g
    # Permanently enabled wake-on-lan
    sudo nmcli connection modify <interface> 802-3-ethernet.wake-on-lan magic
    sudo nmcli connection up 


# Restrict Command Execution
### Create _rbash_ if it doesn't exist

    sudo ln -s /bin/bash /bin/rbash

### Add _PATH=$HOME/bin_ to the restricted user's _.bash_profile_ to disable all commands

    PATH=$HOME/allowed_programs_folder

### In the _allowed_programs_folder_ folder, all the permitted programs that can be ran are stored here
#### To add more, just copy the executable or create a symbolic link in this folder


# Certain Command Execution with sudo privlages
Edit the _/etc/sudoers_ or run _visudo_
### Add the following line

    user     ALL=(ALL)     path_to_command

### No password needed option

    user     ALL=(ALL)     NOPASSWD: path_to_command


### Check the syntax by running

    sudo visudo -c