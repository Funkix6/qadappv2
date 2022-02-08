# QADAPP
## _The first step towards Blockchain in the industry._

QADAPP Stands for Quality Assurance Decentralized Application. 
The main goal is to provide a trust-less environment for the quality insurance in the Industry and the supply chain.
It also includes :

## Features
- Real-Time alert system for any issues detected.
- No data disclosure.
- Blockchain Timestamps
- Device Creation & Management (Localisation - Online/Offline status - More to come)
- A very cool dashboard (WIP)
- Ownership access restricted (See only your devices and reports - WIP)
- Access Sharing - Share you dashboard and reports to your clients (WIP)
- IoT Deployement - Linked to the app. (WIP)

## The idea behind QADAPP
This work is based of the Paper "A Blockchain-Based Supply Chain Quality Management Framework" by Si Chen, Rui Shi, Zhuangyu Ren and Jiaqi Yan.
You can find the paper [here]

Although the concept resemble this paper it is fondamentaly different. In this project the goal is NOT to send full data. The privacy of some information should not be disclosed. Moreover, sending full data would cost an immense amount of gas fees. Instead, we focus on keeping what is really important : the information of something going wrong whether it's a bad temperature, low speed on a machine, anything really. This makes this app really flexible. 

## Use Case
Let's imagine that you are a Frozen Food supplier. You have multiple production lines, refregierated trucks to deliver food and a bunch of clients.
Your clients are interested in the quality of your products and they want to know that you never broke the Cold Link (T° Above 0°c). Now you could use a database
some temperature sensor and call it a day. But, any administrator of the database could come and delete anything that he doesn't like. How do your clients trust you when
you have full control of the environment?
That's when the Blockchain technology come into place. By providing a trust-less environment.

## Tech

QADAPP uses a few a open source projects :

- [ReactJS] - Front-end Library for JavaScript
- [Tailwind] - CSS framework packed with classes
- [Vite] - build tool for faster developement experience.
- [Ethers] - Library for interacting with the Ethereum Blockchain and its ecosystem.
- [Hardhat] - Ethereum developement environment

## What's next?

The project it still under development and will be for quite some time for now you can visit the [online version] and create your own devices and simulate generated alerts. 
You will need [Metamask] to use the website.

## Installation
I will upload the process as soon as the app is ready to go into an Alpha build and most of the features are working.

## License
MIT


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[here]: <https://www.researchgate.net/publication/321027278_A_Blockchain-Based_Supply_Chain_Quality_Management_Framework>
[online version]: <https://qadapp.netlify.app/>
[Metamask]: <https://metamask.io/>
[ReactJS]: <https://fr.reactjs.org/>
[Tailwind]: <https://tailwindcss.com/>
[Vite]: <https://vitejs.dev/>
[Ethers]: <https://docs.ethers.io/v5/>
[Hardhat]: <https://hardhat.org>
