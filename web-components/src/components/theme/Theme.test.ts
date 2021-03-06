import { elementUpdated, fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { Theme } from "./Theme";

describe("Theme", () => {
  afterEach(fixtureCleanup);

  test("should render Theme Component", async () => {
    const element = await fixture<Theme.ELEMENT>(`<md-theme></md-theme>`);
    expect(element).not.toBeNull();
  });

  test("should return theme from setTheme() function", async () => {
    const element = await fixture<Theme.ELEMENT>(`<md-theme darktheme></md-theme>`);
    expect(element.darkTheme).toBeTruthy;
  });

  test("should return lumos from setTheme() function", async () => {
    const element = await fixture<Theme.ELEMENT>(`<md-theme lumos></md-theme>`);
    expect(element.lumos).toBeTruthy;
  });

  test("should return lumos in darkTheme from setTheme() function", async () => {
    const element = await fixture<Theme.ELEMENT>(`<md-theme lumos darkTheme></md-theme>`);
    expect(element.lumos).toBeTruthy;
    expect(element.darkTheme).toBeTruthy;
  });

  test("should update when attribute is changed", async () => {
    const element = await fixture<Theme.ELEMENT>(`<md-theme darkTheme></md-theme>`);

    const changeSpy = jest.spyOn(Theme.ELEMENT.prototype, "applyStyle" as never);

    element.lumos = true;

    await elementUpdated(element);
    expect(changeSpy).toHaveBeenCalled();

    changeSpy.mockRestore();
  });
});
