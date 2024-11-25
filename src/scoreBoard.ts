import { Match } from "./match";

export class ScoreBoard {
    private matches: Match[] = [];

    startMatch(homeTeam: string, awayTeam: string): void {
        const match = new Match(homeTeam, awayTeam);
        console.log("Time started match: ", match.matchStartTimeMs, " by match between ", match.homeTeam, " and ", match.awayTeam); ;
        this.matches.push(match);
    }

    updateScore(homeTeam: string, awayTeam: string, scoreHome: number, scoreAway: number): void {
        const match = this.findMatch(homeTeam, awayTeam);
        if (match) {
            match.updateScore(scoreHome, scoreAway);
        } else {
            throw new Error(`No match found between ${homeTeam} and ${awayTeam}.`);
        }
    }

    finishMatch(homeTeam: string, awayTeam: string): void {
        const match = this.findMatch(homeTeam, awayTeam);
        if (match) {
            this.matches = this.matches.filter(m => m !== match);
        } else {
            throw new Error(`No match found between ${homeTeam} and ${awayTeam}.`);
        }
    }

    generateSummary(): Match[] {
        return [...this.matches].sort((a, b) => {
            const scoreDiff = b.getTotalScore() - a.getTotalScore();
            return scoreDiff !== 0 ? scoreDiff : b.matchStartTimeMs - a.matchStartTimeMs;
        });
    }

    private findMatch(homeTeam: string, awayTeam: string): Match | undefined {
        return this.matches.find(
            match => match.homeTeam === homeTeam && match.awayTeam === awayTeam
        );
    }
}
