var evshow = document.getElementById("events");
fetch('https://kudago.com/public-api/v1.4/events/?location=msk&is_free=1&fields=id,title,images')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    evshow.innerHTML = data;
  });

  