import { Match } from "./match";

export class ScoreBoard {
    private matches: Match[] = [];

    startMatch(homeTeam: string, awayTeam: string): void {
        throw new Error("Method not implemented.");
    }
    
    updateScore(homeTeam: string, awayTeam: string, scoreHome: number, scoreAway: number): void {
        throw new Error("Method not implemented.");
    }
    
    finishMatch(homeTeam: string, awayTeam: string): void {
        throw new Error("Method not implemented.");
    }
    
    generateSummary(): Match[] {
        throw new Error("Method not implemented.");
    }
    
    private findMatch(homeTeam: string, awayTeam: string): Match | undefined {
        throw new Error("Method not implemented.");
    }
}
