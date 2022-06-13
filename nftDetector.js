async function checkTokens(address, checkForThisBiz){

  var pubKeyAddr = new solanaWeb3.PublicKey(address);
  var parsedTokens = await connection.getParsedTokenAccountsByOwner(pubKeyAddr, {programId: tokenProgramID});

  for(var x = 0; x < parsedTokens.value.length; x++){
    var mint = parsedTokens.value[x].account.data.parsed.info.mint;
    var call = new XMLHttpRequest();
    call.open("GET", "https://script.google.com/macros/s/AKfycbyj-PiyYiVn24C2MoCa9aEoEpwKQ3dtA3CPPzJZasZoXrIAK-BPz9Fi6w4lzPGfTO5t/exec?mode=read&nft=" + mint + "&biz=" + checkForThisBiz, false);
    call.send();
    //console.log(call.responseText);
    if(call.responseText == "found"){
      //console.log("found");
      return true;
    }
  }
  //console.log("not found")
  return false;
}
