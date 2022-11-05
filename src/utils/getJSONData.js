const getJSONData = (setData, keys) => {
  fetch("/config/app.config.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      setData(myJson[keys]);
    });
};

export default getJSONData;
