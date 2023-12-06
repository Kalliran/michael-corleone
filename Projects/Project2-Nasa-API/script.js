document.querySelector('button').addEventListener('click', getFetch) 

function getFetch(){
  const choice = document.querySelector('input').value            
  
  const url = `https://api.nasa.gov/planetary/apod?api_key=kXBKh3xJbDx2319Bf84bWdvuibRmxfdfOZa3HqQU&date=${choice}`        

  fetch(url)                                                       
      .then(res => res.json()) 
      .then(data => {
        console.log(data)                       // to display the data object that came back so we can see it's properties
        if( data.media_type === 'image' ){     // since nasa sometimes has videos, we want a conditional to check for images or videos. the property media_type was found in the console.log()
          document.querySelector('img').src = data.hdurl
        }else if( data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }
        
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
