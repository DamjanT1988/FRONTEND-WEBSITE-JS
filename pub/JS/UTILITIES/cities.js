//array of Swedish cities
const cities = [{
  county: "Värmland",
  city: "Karlstad"
}, {
  county: "Dalarna",
  city: "Borlänge"
}, {
  county: "Stockholm",
  city: "Stockholm"
}, {
  county: "Västenorrland",
  city: "Sundsvall"
}]; //return only cities

function getCities() {
  return cities.map(city => city.city);
} //export the array


export default cities;
export { getCities };