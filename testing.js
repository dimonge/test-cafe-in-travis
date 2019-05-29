import Page from "./basic-page-model";
import { loginUser } from "./login-test";
fixture`My first fixture`.page`https://kakkosnelonen.fi/live/`;

const page = new Page();

/*test("Get the count of the project in the table", async t => {
  await t
    .useRole(loginUser)
    .expect(page.tableProjectsTotal)
    .eql(3);
});
*/
test("Test slow urls like note page", async t => {
  await t
    .useRole(loginUser)
    .click(page.firstProject)
    .click(page.selectNotesTab)
    .expect(page.noteTable.innerText)
    .contains("Quality");
});
