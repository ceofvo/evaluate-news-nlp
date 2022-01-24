//Function to get the API key from the server
const getKey = async () => {
    const response = await fetch('/key')
    try{
      const data = await response.json()
      return data  
    } catch(error){
      console.log("error", error);
    }
}

//Function to get the summary or the news article from meaningcloud
const getSummary = async (formUrl, apiKey) => {
  const formData = new FormData()
  formData.append("key", apiKey)
  formData.append("url", formUrl)
  formData.append("lang", "en")

  const requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };

  const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  try{
    const data = await response.json()
    return data  
  } catch(error){
    console.log("error", error);
  }
}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('name').value

    if (!Client.isValidURL(url)) {
      return document.querySelector('.error-message').innerHTML = "Please enter a valid URL"
    } else {
        document.querySelector('.error-message').innerHTML = ""
    }

    getKey()
    .then((data)=>{     
      return getSummary(url, data.key)
    })
    .then((res)=> {
        document.getElementById('results').innerHTML = `
        <p><strong>Subjectivity</strong>: ${res.subjectivity} </p> 
        <p><strong>Confidence</strong>: ${res.confidence} </p> 
        <p><strong>Agreement</strong>: ${res.agreement} </p> 
        <p><strong>Irony</strong>: ${res.irony} </p> 
        <p><strong>Score Tag</strong>: ${res.score_tag} </p> 
        `
    })
}

export { handleSubmit }
