import React from 'react';

export default function() {
    console.log("Hello from Cocktail Page")

    const search = async (param) => {
        // const val = param ? param : searchText;
    
        console.log("Hello from Search");
        // Best practice: encode the string so that special characters
        //  like '&' and '?' don't accidentally mess up the URL
    
    //     const queryParam = encodeURIComponent(val);
    //     setAppState("searching ...");
    //     const data = await Axios.get(
    //       `https://omdbapi.com/?apikey=a53e8892&s=${queryParam}`
    //     );
    //     // console.log("Success!", data);
    //     // console.warn("asdasdasd", data.data.Search);
    //     if (!data.data.Search) {
    //       setAppState("Could not find movie");
    //     } else {
    //       setAppState("Results for your search:");
    //       setMovies(data.data.Search);
    //     }
    //   };
    
    //   const navigateToSearch = async () => {
    //     const routeParam = encodeURIComponent(searchText);
    //     history.push(`/discover/${routeParam}`);
    
        search();
      };
    
return ""

}