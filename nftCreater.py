import base58
import json
import api.metaplex_api
from cryptography.fernet import Fernet
import requests
SERVER_DECRYPTION_KEY = Fernet.generate_key().decode("ascii")
TEST_PRIVATE_KEY = "XXXXX"
TEST_PUBLIC_KEY = "B73uwarpYM72sZDJJjd8ALQaCHGB37BPRiaaiXPdNHvG"
cfg = {
    "PRIVATE_KEY": TEST_PRIVATE_KEY,
    "PUBLIC_KEY": TEST_PUBLIC_KEY,
    "DECRYPTION_KEY": SERVER_DECRYPTION_KEY
}
deployer = api.metaplex_api.MetaplexAPI(cfg)

api_endpoint = "https://api.testnet.solana.com/"

#json file is handled in main.py mint function

#first do a test of one minter and mint to see that it works
#then, do a loop to make 33 minters for each. second and third parameters are name and symbol. 
#write each contract_key variable to a file, separated by new lines

#make call to api with mode = add, nft = contractKey, and biz = biz
#and make sure biz is the exact same as the company name field in the NFT metadata, and the company website will call the api with the exact same company name 
  #https://script.google.com/macros/s/AKfycbyj-PiyYiVn24C2MoCa9aEoEpwKQ3dtA3CPPzJZasZoXrIAK-BPz9Fi6w4lzPGfTO5t/exec
biz = "Gucci"
#outputFile = open("contractKeys.txt", "a")


for x in range(0, 33):
  print("iteration number " + str(x))
  # deploy a contract. will return a contract key.
  result = deployer.deploy(api_endpoint, "Gucci Utility NFT", "Gucci", 2)
  contract_key = json.loads(result).get('contract')
  if contract_key == None:
    continue
  print("contract key ")
  print(contract_key)
  print("\n")

  #outputFile.write(contract_key + "\n")

  response = requests.get("https://script.google.com/macros/s/AKfycbyj-PiyYiVn24C2MoCa9aEoEpwKQ3dtA3CPPzJZasZoXrIAK-BPz9Fi6w4lzPGfTO5t/exec?mode=add&nft=" + contract_key + "&biz=" + biz)
  

#outputFile.close()
#mint_res = deployer.mint(api_endpoint, contract_key, TEST_PUBLIC_KEY, divinity_json_file)