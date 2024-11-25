import { Match } from "../src/match";

test("initialization", () => {
    const startTime = Date.now();
    const match = new Match("Germany", "Italy");
    const endTime = Date.now();

    expect(match.homeTeam).toBe("Germany");
    expect(match.awayTeam).toBe("Italy");

    expect(match.scoreHomeTeam).toBe(0);
    expect(match.scoreAwayTeam).toBe(0);
    
    expect(match.matchStartTimeMs).toBeGreaterThanOrEqual(startTime);
    expect(match.matchStartTimeMs).toBeLessThanOrEqual(endTime);

});

test("getTotalScore valid", () => {
    const match = new Match("Germany", "Italy");
    expect(match.getTotalScore()).toBe(0);

    match.updateScore(2, 3);
    expect(match.getTotalScore()).toBe(5);
});

test("getTotalScore invalid", () => {
    const match = new Match("Germany", "Italy");
    expect(match.getTotalScore()).toBe(0);

    expect(() => {
        match.updateScore(-1, 3);
    }).toThrow("Score cannot be negative");

    expect(match.getTotalScore()).toBe(0);
});

test("updateScore negative", () => {
    const match = new Match("Germany", "Italy");
    expect(() => match.updateScore(-5, -5)).toThrow("Score cannot be negative");
});

test("updateScore valid", () => {
    const match = new Match("Germany", "Italy");
    match.updateScore(2, 1);

    expect(match.scoreHomeTeam).toBe(2);
    expect(match.scoreAwayTeam).toBe(1);
});
