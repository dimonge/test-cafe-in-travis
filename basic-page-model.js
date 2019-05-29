import { Selector } from "testcafe";

const label = Selector("label");

class Feature {
  constructor(text) {
    this.label = label.withText(text);
    this.checkbox = this.label.find("input[type=checkbox]");
  }
}

export default class Page {
  constructor() {
    this.emailInput = Selector("#id_username");
    this.passwordInput = Selector("#id_password");
    this.signInButton = Selector("button.login-view-element");
    this.tableProjectsTotal = Selector("#table_live_projects tbody tr").count;
    this.firstProject = Selector("td.sorting_1 a").withText("Finnbuild");

    this.selectNotesTab = Selector("div.navbar-container")
      .find(".hidden-xs")
      .find("a")
      .withText("Notes");
    this.noteTable = Selector(".cg-table-tr").find("td");
    this.featureList = [
      new Feature("Support for testing on remote devices"),
      new Feature("Re-using existing JavaScript code for testing"),
      new Feature("Easy embedding into a Continuous integration system")
    ];

    this.slider = {
      handle: Selector(".ui-slider-handle"),
      tick: Selector(".slider-value")
    };

    this.interfaceSelect = Selector("#preferred-interface");
    this.interfaceSelectOption = this.interfaceSelect.find("option");
  }
}
