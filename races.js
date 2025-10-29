export class Race {
    constructor(name, circuit, date, type ='standard') {
        this.name = name;       
        this.circuit = circuit; 
        this.date = date;       
        this.type = type;       
        this.results = [];      
    }

    addResult(driver, session, pointsGained, statsGained) {
        // Ensure driver has points and stats properties initialized
        if (typeof driver.points !== 'number') driver.points = 0;
        if (typeof driver.stats !== 'number') driver.stats = 0;
        
        driver.points += pointsGained; // Update driver's total points
        driver.stats += statsGained; // Update driver's statistics
        this.results.push({ driver, session, pointsGained, statsGained });
    }
}

// Sous classes pour différents types de courses

export class FreePractice extends Race {
    constructor(name, circuit, date) {
        super(name, circuit, date, 'Free Practice');
    }

    simulate(drivers) {
        console.log(`Simulating Free Practice for ${this.name} at ${this.circuit} on ${this.date}`);
        // Simulate Free Practice session
        return drivers.map(driver => {
            const statsGained = Math.floor(Math.random() * 5); // Random stats gain
            const pointsGained = 0; // No points in Free Practice
            this.addResult(driver, 'Free Practice', pointsGained, statsGained);
            return { driver, pointsGained, statsGained };
        });
    }
}

export class Qualifying extends Race {
    constructor(name, circuit, date) {
        super(name, circuit, date, 'Qualifying');
    }
    simulate(drivers) {
        console.log(`Simulating Qualifying for ${this.name} at ${this.circuit} on ${this.date}`);
        // Simulate Qualifying session
        return drivers.map(driver => {
            const statsGained = Math.floor(Math.random() * 10); // Random stats gain
            const pointsGained = 0; // No points in Qualifying
            this.addResult(driver, 'Qualifying', pointsGained, statsGained);
            return { driver, pointsGained, statsGained };
        });
    }
}

export class QualifyingSprint extends Race {
    constructor(name, circuit, date) {
        super(name, circuit, date, 'Qualifying Sprint');
    }
    simulate(drivers) {
        console.log(`Simulating Qualifying Sprint for ${this.name} at ${this.circuit} on ${this.date}`);
        // Simulate Qualifying Sprint session
        return drivers.map(driver => {
            const statsGained = Math.floor(Math.random() * 10); // Random stats gain
            const pointsGained = 0; // No points in Qualifying Sprint
            this.addResult(driver, 'Qualifying Sprint', pointsGained, statsGained);
            return { driver, pointsGained, statsGained };
        });
    }
}

export class SprintRace extends Race {
    constructor(name, circuit, date) {
        super(name, circuit, date, 'Sprint Race');
    }
    simulate(drivers) {
        console.log(`Simulating Sprint Race for ${this.name} at ${this.circuit} on ${this.date}`);
        // Points distribution for Sprint Race
        const pointsDistribution = [8, 7, 6, 5, 4, 3, 2, 1]; // Top 8 drivers
        // Simulate Sprint Race session
        return drivers.map((driver, index) => {
            const statsGained = Math.floor(Math.random() * 15); // Random stats gain
            const pointsGained = index < pointsDistribution.length ? pointsDistribution[index] : 0;
            this.addResult(driver, 'Sprint Race', pointsGained, statsGained);
            return { driver, pointsGained, statsGained };
        });
    }
}

export class GrandPrix extends Race {
    constructor(name, circuit, date) {
        super(name, circuit, date, 'Grand Prix');
    }
    simulate(drivers) {
        console.log(`Simulating Grand Prix for ${this.name} at ${this.circuit} on ${this.date}`);
        // Points distribution for Grand Prix
        const pointsDistribution = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]; // Top 10 drivers
        // Simulate Grand Prix session
        return drivers.map((driver, index) => {
            const statsGained = Math.floor(Math.random() * 20); // Random stats gain
            const pointsGained = index < pointsDistribution.length ? pointsDistribution[index] : 0;
            this.addResult(driver, 'Grand Prix', pointsGained, statsGained);
            return { driver, pointsGained, statsGained };
        });
    }   
}