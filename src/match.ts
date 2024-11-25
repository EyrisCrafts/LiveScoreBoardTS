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
        throw new Error("Not yet implemented");
    }
    
    getTotalScore(): number {
        throw new Error("Not yet implemented");
    }
}
