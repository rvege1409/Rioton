## Rioton
iot project


## ADB 설치하기

* Ubuntu에 adb와 fastboot 툴을 설치하는 방법이다.

``` bash
sudo add-apt-repository ppa:nilarimogard/webupd8
sudo apt-get update
sudo apt-get install android-tools-adb android-tools-fastboot
```

## sshpass

sshpass -p {{pwd}} ssh -o StrictHostKeyChecking=no {{host.id}}@{{host.ip}} "sh /home/pi/gpio/test.sh"
