import { assert } from "chai";

describe("Sandbox", () => {
  before(() => {
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    assert.strictEqual(title, "Sandbox");
    header.getText().then((h) => {
      assert.strictEqual(h, "Sandbox");
    });
  });
}).timeout(20000);
