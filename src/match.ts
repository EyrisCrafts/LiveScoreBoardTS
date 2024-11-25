export class Match {
    homeTeam: string;
    awayTeam: string;
    scoreHomeTeam: number;
    scoreAwayTeam: number;
    matchStartTimeMs: number;

    constructor(homeTeam: string, awayTeam: string) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.scoreHomeTeam = 0;
        this.scoreAwayTeam = 0;
        this.matchStartTimeMs = Date.now();
    }

    updateScore(homeTeamScore: number, awayTeamScore: number): void {
        if (homeTeamScore < 0 || awayTeamScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this.scoreHomeTeam = homeTeamScore;
        this.scoreAwayTeam = awayTeamScore;
    }

    getTotalScore(): number {
        return this.scoreHomeTeam + this.scoreAwayTeam;
    }
}
