import { ScoreBoard } from "../src/scoreBoard";

test("startMatch", () => {
    const scoreboard = new ScoreBoard();
    scoreboard.startMatch("Mexico", "Canada");

    expect(scoreboard["matches"].length).toBe(1);
    expect(scoreboard["matches"][0].homeTeam).toBe("Mexico");
    expect(scoreboard["matches"][0].awayTeam).toBe("Canada");
    
    scoreboard.startMatch("Spain", "Brazil");

    expect(scoreboard["matches"].length).toBe(2);
    expect(scoreboard["matches"][1].homeTeam).toBe("Spain");
    expect(scoreboard["matches"][1].awayTeam).toBe("Brazil");
});

test("updateScore valid", () => {
    const scoreboard = new ScoreBoard();
    scoreboard.startMatch("Spain", "Brazil");

    scoreboard.updateScore("Spain", "Brazil", 2, 3);

    const match = scoreboard["matches"][0];
    expect(match.scoreHomeTeam).toBe(2);
    expect(match.scoreAwayTeam).toBe(3);
});

test("generateSummary", () => {

    const scoreboard = new ScoreBoard();
    scoreboard.startMatch("Mexico", "Canada");
    scoreboard.startMatch("Spain", "Brazil");
    scoreboard.startMatch("Germany", "France");
    scoreboard.startMatch("Uruguay", "Italy");
    scoreboard.startMatch("Argentina", "Australia");

    scoreboard.updateScore("Mexico", "Canada", 0, 5);
    scoreboard.updateScore("Spain", "Brazil", 10, 2);
    scoreboard.updateScore("Germany", "France", 2, 2);
    scoreboard.updateScore("Uruguay", "Italy", 6, 6);
    scoreboard.updateScore("Argentina", "Australia", 3, 1);

    const summary = scoreboard.generateSummary();
    expect(summary[0].homeTeam).toBe("Uruguay");
    expect(summary[1].homeTeam).toBe("Spain");
});
