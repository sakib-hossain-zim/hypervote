# Prerequisites:

To run Hyperledger Composer and Hyperledger Fabric, we recommend you have at least 4Gb of memory. The machine may need to be restarted during this process or you may be asked to log out and log back in once all prerequisites are installed.

The following are prerequisites for installing the required development tools:

* Operating Systems: Ubuntu Linux 14.04 / 16.04 LTS (both 64-bit), or Mac OS 10.12
* Docker Engine: Version 17.03 or higher
* Docker-Compose: Version 1.8 or higher
* Node: 8.9 or higher (note version 9 is not supported)
* npm: v5.x
* git: 2.9.x or higher
* Python: 2.7.x
* A code editor of your choice, we recommend VSCode.

**If installing Hyperledger Composer using Linux, be aware of the following advice:**

Login as a normal user, rather than root.<br>
Do not su to root.<br>
When installing prerequisites, use curl, then unzip using sudo.<br>
Run prereqs-ubuntu.sh as a normal user. It may prompt for root password as some of it's actions are required to be run as root.<br>
Do not use npm with sudo or su to root to use it.<br>
Avoid installing node globally as root.<br>

### UBUNTU

A prerequisite one-step install package is available for Ubuntu.
Instructions are as at https://hyperledger.github.io/composer/installing/installing-prereqs.html#ubuntu<br>

**Note: As of Apr 3, 2018 - Ubuntu 17+ is not supported yet.**<br>
```
curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh
chmod u+x prereqs-ubuntu.sh
./prereqs-ubuntu.sh
```
### MAC

No one-step install packages are available for Mac.
Detailed instructions are at https://hyperledger.github.io/composer/installing/installing-prereqs.html#macos<br>

Software primarily needed:
* XCode (most programmers will already have this - requires 30-60 min for first install)
* Node (latest preferred - instructions use nvm to install)
* Docker (https://download.docker.com/mac/stable/Docker.dmg)

# Installation

Once the prerequisites are installed, we can move towards setting up 1) Hyperledger and 2) HyperVote.<br>
HyperVote is best envisioned as a Business Network app deployed on the Hyperledger framework.<br>
Scripts for both steps on Ubuntu and Mac are available.<br>

Hyperledger for MAC: <br>
HyperVote for MAC: <br>
Hyperledger for UBUNTU: <br>
HyperVote for UBUNTU: <br>

### UBUNTU

```
git clone https://github.com/al8876/hypervote/
cd hypervote
chmod u+x hyperInstall.sh
./hyperInstall.sh
```

### MAC

```
git clone https://github.com/al8876/hypervote/
cd hypervote
chmod u+x hyperInstall.command
./hyperInstall.command
```
