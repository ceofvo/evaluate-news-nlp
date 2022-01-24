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
const getSummary = async (formUrl, apiKey, noOfSent) => {
    const formData = new FormData()
    formData.append("key", apiKey)
    formData.append("url", formUrl)
    formData.append("sentences", noOfSent)

    const requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };

    const response = await fetch("https://api.meaningcloud.com/summarization-1.0", requestOptions)
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
        return getSummary(url, data.key, 10)
    })
    .then((res)=> {
        document.getElementById('results').innerHTML = res.summary
    })
}


export { handleSubmit }
