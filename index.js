'use strict';

let flowerNames = [
  "African lily", "Alpine thistle", "Amaryllis", "Amazon lily", "Arum Lily", "Baby’s breath", "Barberton",
  "Bell Flower/Canterbury Bells", "Bells of Ireland", "Bird of paradise", "Bleeding Heart", "Bloom",
  "Blue throatwort", "Broom", "Busy Lizzie", "Calla lily", "Canterbury Bells/Bell Flower", "Carnation",
  "Chincerinchee", "Christmas rose", "Cockscomb", "Columbine", "Coneflower", "Cornflower", "Daffodil",
  "Evening primrose", "Feverfew", "Flame tip", "Flamingo flower/painter’s palette", "Forget-me-not",
  "Foxglove", "Gay feather", "Globe thistle", "Golden rod", "Grape hyacinth", "Guernsey lily",
  "Hyacinth", "Iris", "Jersey lily", "Lady’s mantle", "Larkspur", "Lavender", "Lilac",
  "Lily", "Lisianthus", "Lobster claw", "Love in a mist", "Lupin", "Marigold", "Michaelmas Daisy",
  "Mimosa", "Moth orchid", "Mums", "Painter’s palette/Flamingo flower", "Peony", "Peruvian lily",
  "Prairie gentian", "Rose", "Scabious", "Sea lavender", "September flower", "Singapore orchid", "Snapdragon",
  "Spray carnation", "Statice", "Stock", "Sugarbush", "Sunflower", "Sweet pea", "Sweet william", "Sword lily",
  "Transvaal daisy", "Tulip", "Waxflower", "Windflower", "Yarrow"];

//add flower names in the <datalist> element
function datalistAddMore() {
  let dataList = document.querySelector('#planetlist');
  flowerNames.forEach(f => dataList.appendChild(new Option(f)));
}

//add flower names in the <select> element
function selectAddMore() {
  let aSelect = document.querySelector('#aselect');
  let agroup = document.createElement('optgroup');
  agroup.label = 'Wonderful Flowers';
  aSelect.appendChild(agroup);
  flowerNames.forEach(f => aSelect.appendChild(new Option(f)));
}

//show what's selected from the input-datalist combo
function datalistShowSelected() {
  //value selected is in input control
  let myPlanet = document.querySelector('#myInput');
  alert(myPlanet.value);
  return;
}

//show what's selected from the select element
function selectShowSelected() {

  let aSelect = document.querySelector('#aselect');
  alert((aSelect.options[aSelect.selectedIndex]).value);
  return;
}
