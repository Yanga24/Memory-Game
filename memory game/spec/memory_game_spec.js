let Memorygame = require("../src/memorygame");

describe("MemoryGame class", () => {
  beforeEach(() => {
    memoryGame = new MemoryGame([]);
  });

  it("it should have Create MemoryGame ", () => {
    expect(typeof MemoryGame).toBe("function");
  });

  it("it should receive `cards` as a parameter and create it as its own `cards` property", () => {
    expect(memoryGame.cards).toBeDefined();
  });

  it("MemoryGame should have a pickedCards property", () => {
    expect(memoryGame.pickedCards).toBeDefined();
  });

  it("pickedCards property should be an array", () => {
    expect(typeof memoryGame.pickedCards).toBe("object");
  });

  it("MemoryGame should have a pairsClicked property", () => {
    expect(memoryGame.pairsClicked).toBeDefined();
  });

  it("pairsClicked property should be a number", () => {
    expect(typeof memoryGame.pairsClicked).toBe("number");
  });

  it("MemoryGame should have a pairsGuessed property", () => {
    expect(memoryGame.pairsGuessed).toBeDefined();
  });
});
