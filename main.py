from flask import Flask, request
import base58
import json
import os
import api.metaplex_api
from cryptography.fernet import Fernet
import base64
app = Flask(__name__)

@app.route('/') #this will be the landing page
def index():
  return "hi"


SERVER_DECRYPTION_KEY =   Fernet.generate_key().decode("ascii")
TEST_PRIVATE_KEY = "XXXXX"
TEST_PUBLIC_KEY = "B73uwarpYM72sZDJJjd8ALQaCHGB37BPRiaaiXPdNHvG"
cfg = {
  "PRIVATE_KEY": TEST_PRIVATE_KEY,
  "PUBLIC_KEY": TEST_PUBLIC_KEY,
  "DECRYPTION_KEY": SERVER_DECRYPTION_KEY
}
deployer = api.metaplex_api.MetaplexAPI(cfg)

api_endpoint = "https://api.testnet.solana.com/"
'''
@app.route("/send")
def send():
  send_res = deployer.send(api_endpoint, request.args.get("contractKey"), TEST_PUBLIC_KEY, request.args.get("address"), privKey)
  return send_res
'''
@app.route("/mint") #this will be a page that displays nfts
def mint():
  contractKeysFileName = ""
  usedFileName = ""
  totalNFTs = 0
  if request.args.get("biz") == "Spotify":
    contractKeysFileName = "Spotify.txt"
    usedFileName = "SpotifyUsed.txt"
    totalNFTs = 27
  elif request.args.get("biz") == "Gucci":
    contractKeysFileName = "Gucci.txt"
    usedFileName = "GucciUsed.txt"
    totalNFTs = 39
  else:
    contractKeysFileName = "Razer.txt"
    usedFileName = "RazerUsed.txt"
    totalNFTs = 25

  contractKeysFile = open(contractKeysFileName, "r")
  usedFile = open(usedFileName, "r")
  numIter = int(usedFile.read())

  if numIter > totalNFTs:
    return "<h1> Sorry, all " + request.args.get("biz") + " NFTs have been minted. </h1>"
  
  contractKey = ""
  for x in range(0, numIter+1):
    contractKey = contractKeysFile.readline()

  contractKeysFile.close()
  usedFile.close()
  
  usedFile = open(usedFileName, "w")
  usedFile.write(str(numIter + 1))
  usedFile.close()
  # conduct a mint, and send to a recipient, e.g. wallet_2
  
  mint_res = deployer.mint(api_endpoint, contractKey, request.args.get("address"), request.args.get("jsonFile"))

  return mint_res

  
app.run(host='0.0.0.0', port=8080)