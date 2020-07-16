export const fetchingData = (url) => 
        fetch(url)
            .then(response => response.json())
            .then(request => request)