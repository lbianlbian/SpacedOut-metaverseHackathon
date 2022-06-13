# Github Repository Submission for Ken Labs Metaverse hackathon 2022
## A guide to our repository
### main.py
This python file integrates the Flask and Metaplex Python API libraries. Flask is used for web serving. Metaplex Python API handles Solana NFT-related functionality. It handles minting NFTs. 
### nftCreater.py
This python file uses the Metaplex Python API library. It is responsible for creating the mint authority accounts, also known as contractKeys, on the Solana blockchain, which can be thought of as "NFT machines", which a user calls to mint NFTs.
This also interacts with NFTsToCompanies.gs
The python files are hosted on https://austinplex.wesleybian.repl.co, along with other files from the Metaplex Python API, as well as files that keep track of minted contractKeys. 
### gucci.html
This file codes for a website that checks whether the visitor holds the Gucci NFT. It is a demonstration of what a real-world company could do with SpacedOut NFTs.
### nftDetector.js
This file uses the solana/web3-js library to check if a user has an NFT. It also calls NFTsToCompanies to check if an NFT was issued by a company.
### NFTsToCompanies.gs
This file is a Google Apps Script (GAS) file, which is a language that allows developers to connect Google services with web applications. We use this code to set and determine whether NFTs match with a company. 
### frontend folder
This folder contains a React.js app that connects all of the above in a beautiful website.
### Whitepaper (PDF file)
This file is an in-depth explanation of our vision for SpacedOut!
