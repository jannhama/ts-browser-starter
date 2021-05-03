console.log('hi');

type LocationItem = {
  title: string, //	Name of the location
  location_type: string,	// (City|Region / State / Province|Country|Continent)
  latt_long: number[], // comma separated
  woeid: number,		// Where On Earth ID
  distance: number,	// Metres
};

export const searchLocations = async (query: string) => {
  return fetch(`http://localhost:3000/api/location?search=${query}`);

};

export const doSearch = async (location: string) => {
  const locationList: HTMLElement = document.getElementById('locationList');
  locationList.innerHTML = '';
  const result: LocationItem[] = await (await searchLocations(location)).json();

  if (result && result.length) {
    result.forEach(element => {
      const newElement = `
      <div>
        <span>${element.title}</span><span>${element.location_type}</span><span>${element.woeid}</span>
      </div>
      `;
      locationList.innerHTML += newElement;
    });
  }
  console.log(result);
  return result;
};

const element = document.getElementById('submitQuery');
console.log(element);
element.addEventListener('click', (e) => {
  const locationText: string = (document.getElementById('locationText') as HTMLInputElement).value;
  if (locationText.length) {
    doSearch(locationText);
  }

});