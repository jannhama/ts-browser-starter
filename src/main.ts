console.log('hi');

type response {
  title:	string, //		Name of the location
  location_type:	string,	//(City|Region / State / Province|Country|Continent)	
  latt_long:	number[], // comma separated		
  woeid: number,		// Where On Earth ID
  distance:	number,	//Metres
}

const searchLocations = (query: string): Promise<response> => {
  return fetch(`http://localhost/api/locations?search=$(query)`);

} 