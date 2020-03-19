import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit, OnDestroy {
  isDropup = true;
  isCollapsed1 = true;
  isCollapsed = true;

  isCollapsed2 = true;
  isCollapsed3 = true;

  focus;
  focus1;
  focus2;
  focus3;
  mytime;
  page3 = 2;

  date: Date = new Date();

  switch = true;

  page = 2;
  page1 = 3;
  page2 = 4;

  data1 = [{ id: "2", itemName: "Foobar" }, { id: "3", itemName: "Is great" }];
  settings1 = {
    singleSelection: true,
    text: "Single Select",
    enableSearchFilter: false,
    classes: "selectpicker btn-primary"
  };
  selectedItems1 = [];
  data2 = [
    { id: "2", itemName: "Paris " },
    { id: "3", itemName: "Bucharest" },
    { id: "4", itemName: "Rome" },
    { id: "5", itemName: "New York" },
    { id: "6", itemName: "Miami " },
    { id: "7", itemName: "Piatra Neamt" },
    { id: "8", itemName: "Paris " },
    { id: "9", itemName: "Bucharest" },
    { id: "10", itemName: "Rome" },
    { id: "11", itemName: "New York" },
    { id: "12", itemName: "Miami " },
    { id: "13", itemName: "Piatra Neamt" },
    { id: "14", itemName: "Paris " },
    { id: "15", itemName: "Bucharest" },
    { id: "16", itemName: "Rome" },
    { id: "17", itemName: "New York" },
    { id: "18", itemName: "Miami " },
    { id: "19", itemName: "Piatra Neamt" }
  ];
  selectedItems2 = [];
  settings2 = {
    singleSelection: false,
    text: "Choose City",
    enableSearchFilter: false,
    classes: "selectpicker btn-info"
  };
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
}
