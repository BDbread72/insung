const salt = "sakgoon";
const encrypt = (text) => {if(!text) return''; return CryptoJS.AES.encrypt(text,salt).toString()}
const decrypt = (text) => {if(!text) return''; try{const bytes=CryptoJS.AES.decrypt(text,salt);return bytes.toString(CryptoJS.enc.Utf8)}catch(error){console.log(error);return '';}}
var bodyPad = {
  SPYGLASS:{
    password:"85b7046b68b5ad3c7b6e46b15d3b9cec",
    story:"당신은 이제 막 잠들었습니다. 지금 당장 떠오르는 것은 어제 틀린 코딩문제에 대한 해결책 따위죠. 당신은 매일 그러한 것 처럼, 악몽에 빠집니다.",
    link:"U2FsdGVkX180skaHk0oFposgIECs5xH5oIQuRVJ/Ht7+oHsCyEz/luW6zwsA2uy6NovU8Xw6QUfrclERcXCtBD98t7vdegbCiH8xXAHjc0KcIjGu8TZnYmKiCiWWkFvx52xPFgXU9aPak3Dqz3T1tg==",
  },
  TOOLKID:{
    password:"637d8697621a53b596a9c47b6a410df1",
    story:'당신은 하나의 악몽에서 깨어났다고 생각 했습니다. 그러나, 다음 악몽에 잠들기 까지는 오래 걸리지 않았죠.\n\nWIP(Work In Progress)',
    link:"U2FsdGVkX18NLZxky8hyd/fLmBIsp++Ee/bEfsGQMvutrEYB4+FAJqbDHXD5VQFK"
  }
}

function confirm() {
  const title = document.getElementById("title").value.toUpperCase()
  const password = document.getElementById("password").value.toUpperCase()

  let pass=false
  if(bodyPad[title]){
    if(bodyPad[title].password == undefined) pass=true
    else if(bodyPad[title].password == CryptoJS.MD5(password).toString()) pass=true;
  }

  if(pass){
    document.getElementById("story").innerText=bodyPad[title].story
    document.getElementById("link").href = decrypt(bodyPad[title].link)
    document.getElementById("link").innerText = decrypt(bodyPad[title].link)
  }
}
