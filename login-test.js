import { Role } from "testcafe";

export const loginUser = Role("https://kakkosnelonen.fi/live", async t => {
  await t
    .typeText("#id_username", "peter.shodeinde@congrid.fi")
    .typeText("#id_password", "dolapo10")
    .click("button.login-view-element");
});
