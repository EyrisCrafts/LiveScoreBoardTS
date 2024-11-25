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

// updateScore function

test("updateScore valid", () => {
    const scoreboard = new ScoreBoard();
    scoreboard.startMatch("Spain", "Brazil");

    scoreboard.updateScore("Spain", "Brazil", 2, 3);

    const match = scoreboard["matches"][0];
    expect(match.scoreHomeTeam).toBe(2);
    expect(match.scoreAwayTeam).toBe(3);
});

test("updateScore no matching matches", () => {
    const scoreboard = new ScoreBoard();

    // No matches started
    expect(() => {
        scoreboard.updateScore("Spain", "Brazil", 2, 3);
    }).toThrow("No match found between Spain and Brazil.");
});

test("updateScore negative scores", () => {
    const scoreboard = new ScoreBoard();

    // No matches started
    expect(() => {
        scoreboard.updateScore("Spain", "Brazil", -2, -3);
    }).toThrow("Scores must be positive numbers.");
});


// finishMatch function

test("finishMatch valid", () => {
    const scoreboard = new ScoreBoard();

    // Start a match
    scoreboard.startMatch("Germany", "Italy");

    // Finish the match
    scoreboard.finishMatch("Germany", "Italy");

    // Verify that the match is removed from the scoreboard
    expect(scoreboard["matches"].length).toBe(0);
});

test("finishMatch no matching match", () => {
    const scoreboard = new ScoreBoard();

    // Try to finish a match that doesn't exist
    expect(() => {
        scoreboard.finishMatch("Germany", "Italy");
    }).toThrow("No match found between Germany and Italy.");
});

test("finishMatch multiple matches", () => {
    const scoreboard = new ScoreBoard();

    // Start multiple matches
    scoreboard.startMatch("Germany", "Italy");
    scoreboard.startMatch("Spain", "Brazil");

    // Finish one of the matches
    scoreboard.finishMatch("Germany", "Italy");

    // Verify that only the correct match was removed
    expect(scoreboard["matches"].length).toBe(1);
    expect(scoreboard["matches"][0].homeTeam).toBe("Spain");
    expect(scoreboard["matches"][0].awayTeam).toBe("Brazil");
});


// Generate summary functoin

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

// Find match indirect test

test("findMatch indirect test - valid match", () => {
    const scoreboard = new ScoreBoard();
    scoreboard.startMatch("Germany", "Italy");

    scoreboard.updateScore("Germany", "Italy", 2, 1);

    const match = scoreboard["matches"][0];
    expect(match.scoreHomeTeam).toBe(2);
    expect(match.scoreAwayTeam).toBe(1);
});

test("findMatch indirect test - no match", () => {
    const scoreboard = new ScoreBoard();

    expect(() => {
        scoreboard.finishMatch("Spain", "Brazil");
    }).toThrow("No match found between Spain and Brazil.");
});
