import { FreePractice, Qualifying, QualifyingSprint, Sprint, GrandPrix } from '../constructors/Race.js';
export const races = [
    // Australian Grand Prix Weekend
    new FreePractice('Australian GP Free Practice 1', 'Albert Park Circuit', '2026-03-06'),
    new FreePractice('Australian GP Free Practice 2', 'Albert Park Circuit', '2026-03-06'),
    new FreePractice('Australian GP Free Practice 3', 'Albert Park Circuit', '2026-03-07'),
    new Qualifying('Australian GP Qualifying', 'Albert Park Circuit', '2026-03-07'),
    new GrandPrix('Australian Grand Prix', 'Albert Park Circuit', '2026-03-08'),

    // Chinese Grand Prix Weekend
    new FreePractice('Chinese GP Free Practice 1', 'Shanghai International Circuit', '2026-03-13'),
    new QualifyingSprint('Chinese GP Qualifying Sprint', 'Shanghai International Circuit', '2026-03-13'),
    new Sprint('Chinese GP Sprint', 'Shanghai International Circuit', '2026-03-14'),
    new Qualifying('Chinese GP Qualifying', 'Shanghai International Circuit', '2026-03-14'),
    new GrandPrix('Chinese Grand Prix', 'Shanghai International Circuit', '2026-03-15'),

    // Japanese Grand Prix Weekend
    new FreePractice('Japanese GP Free Practice 1', 'Suzuka International Racing Course', '2026-03-27'),
    new FreePractice('Japanese GP Free Practice 2', 'Suzuka International Racing Course', '2026-03-27'),
    new FreePractice('Japanese GP Free Practice 3', 'Suzuka International Racing Course', '2026-03-28'),
    new Qualifying('Japanese GP Qualifying', 'Suzuka International Racing Course', '2026-03-28'),
    new GrandPrix('Japanese Grand Prix', 'Suzuka International Racing Course', '2026-03-29'),

    // Bahrain Grand Prix Weekend
    new FreePractice('Bahrain GP Free Practice 1', 'Bahrain International Circuit', '2026-04-10'),
    new FreePractice('Bahrain GP Free Practice 2', 'Bahrain International Circuit', '2026-04-10'),
    new FreePractice('Bahrain GP Free Practice 3', 'Bahrain International Circuit', '2026-04-11'),
    new Qualifying('Bahrain GP Qualifying', 'Bahrain International Circuit', '2026-04-11'),
    new GrandPrix('Bahrain Grand Prix', 'Bahrain International Circuit', '2026-04-12'),

    // Jeddah Grand Prix Weekend
    new FreePractice('Jeddah GP Free Practice 1', 'Jeddah Corniche Circuit', '2026-04-17'),
    new FreePractice('Jeddah GP Free Practice 2', 'Jeddah Corniche Circuit', '2026-04-17'),
    new FreePractice('Jeddah GP Free Practice 3', 'Jeddah Corniche Circuit', '2026-04-18'),
    new Qualifying('Jeddah GP Qualifying', 'Jeddah Corniche Circuit', '2026-04-18'),
    new GrandPrix('Jeddah Grand Prix', 'Jeddah Corniche Circuit', '2026-04-19'),

    // Miami Grand Prix Weekend
    new FreePractice('Miami GP Free Practice 1', 'Miami International Autodrome', '2026-05-01'),
    new QualifyingSprint('Miami GP Qualifying Sprint', 'Miami International Autodrome', '2026-05-01'),
    new Sprint('Miami GP Sprint', 'Miami International Autodrome', '2026-05-02'),
    new Qualifying('Miami GP Qualifying', 'Miami International Autodrome', '2026-05-02'),
    new GrandPrix('Miami Grand Prix', 'Miami International Autodrome', '2026-05-03'),

    // Canadian Grand Prix Weekend
    new FreePractice('Canadian GP Free Practice 1', 'Circuit Gilles Villeneuve', '2026-05-22'),
    new QualifyingSprint('Canadian GP Qualifying Sprint', 'Circuit Gilles Villeneuve', '2026-05-22'),
    new Sprint('Canadian GP Sprint', 'Circuit Gilles Villeneuve', '2026-05-23'),
    new Qualifying('Canadian GP Qualifying', 'Circuit Gilles Villeneuve', '2026-05-23'),
    new GrandPrix('Canadian Grand Prix', 'Circuit Gilles Villeneuve', '2026-05-24'),

    // Monaco Grand Prix Weekend
    new FreePractice('Monaco GP Free Practice 1', 'Circuit de Monaco', '2026-06-05'),
    new FreePractice('Monaco GP Free Practice 2', 'Circuit de Monaco', '2026-06-05'),
    new FreePractice('Monaco GP Free Practice 3', 'Circuit de Monaco', '2026-06-06'),
    new Qualifying('Monaco GP Qualifying', 'Circuit de Monaco', '2026-06-06'),
    new GrandPrix('Monaco Grand Prix', 'Circuit de Monaco', '2026-06-07'),

    // Spanish Grand Prix Weekend
    new FreePractice('Spanish GP Free Practice 1', 'Circuit de Barcelona-Catalunya', '2026-06-12'),
    new FreePractice('Spanish GP Free Practice 2', 'Circuit de Barcelona-Catalunya', '2026-06-12'),
    new FreePractice('Spanish GP Free Practice 3', 'Circuit de Barcelona-Catalunya', '2026-06-13'),
    new Qualifying('Spanish GP Qualifying', 'Circuit de Barcelona-Catalunya', '2026-06-13'),
    new GrandPrix('Spanish Grand Prix', 'Circuit de Barcelona-Catalunya', '2026-06-14'),

    // Austrian Grand Prix Weekend
    new FreePractice('Austrian GP Free Practice 1', 'Red Bull Ring', '2026-06-26'),
    new FreePractice('Austrian GP Free Practice 2', 'Red Bull Ring', '2026-06-26'),
    new FreePractice('Austrian GP Free Practice 3', 'Red Bull Ring', '2026-06-27'),
    new Qualifying('Austrian GP Qualifying', 'Red Bull Ring', '2026-06-27'),
    new GrandPrix('Austrian Grand Prix', 'Red Bull Ring', '2026-06-28'),

    // British Grand Prix Weekend
    new FreePractice('British GP Free Practice 1', 'Silverstone Circuit', '2026-07-03'),
    new QualifyingSprint('British GP Qualifying Sprint', 'Silverstone Circuit', '2026-07-03'),
    new Sprint('British GP Sprint', 'Silverstone Circuit', '2026-07-04'),
    new Qualifying('British GP Qualifying', 'Silverstone Circuit', '2026-07-04'),
    new GrandPrix('British Grand Prix', 'Silverstone Circuit', '2026-07-05'),

    // Belgian Grand Prix Weekend
    new FreePractice('Belgian GP Free Practice 1', 'Circuit de Spa-Francorchamps', '2026-07-17'),
    new FreePractice('Belgian GP Free Practice 2', 'Circuit de Spa-Francorchamps', '2026-07-17'),
    new FreePractice('Belgian GP Free Practice 3', 'Circuit de Spa-Francorchamps', '2026-07-18'),
    new Qualifying('Belgian GP Qualifying', 'Circuit de Spa-Francorchamps', '2026-07-18'),
    new GrandPrix('Belgian Grand Prix', 'Circuit de Spa-Francorchamps', '2026-07-19'),

    // Hungarian Grand Prix Weekend
    new FreePractice('Hungarian GP Free Practice 1', 'Hungaroring', '2026-07-24'),
    new FreePractice('Hungarian GP Free Practice 2', 'Hungaroring', '2026-07-24'),
    new FreePractice('Hungarian GP Free Practice 3', 'Hungaroring', '2026-07-25'),
    new Qualifying('Hungarian GP Qualifying', 'Hungaroring', '2026-07-25'),
    new GrandPrix('Hungarian Grand Prix', 'Hungaroring', '2026-07-26'),

    // Dutch Grand Prix Weekend
    new FreePractice('Dutch GP Free Practice 1', 'Circuit Zandvoort', '2026-08-21'),
    new QualifyingSprint('Dutch GP Qualifying Sprint', 'Circuit Zandvoort', '2026-08-21'),
    new Sprint('Dutch GP Sprint', 'Circuit Zandvoort', '2026-08-22'),
    new Qualifying('Dutch GP Qualifying', 'Circuit Zandvoort', '2026-08-22'),
    new GrandPrix('Dutch Grand Prix', 'Circuit Zandvoort', '2026-08-23'),

    // Italian Grand Prix Weekend
    new FreePractice('Italian GP Free Practice 1', 'Monza Circuit', '2026-09-04'),
    new FreePractice('Italian GP Free Practice 2', 'Monza Circuit', '2026-09-04'),
    new FreePractice('Italian GP Free Practice 3', 'Monza Circuit', '2026-09-05'),
    new Qualifying('Italian GP Qualifying', 'Monza Circuit', '2026-09-05'),
    new GrandPrix('Italian Grand Prix', 'Monza Circuit', '2026-09-06'),

    // Madrid Grand Prix Weekend
    new FreePractice('Madrid GP Free Practice 1', 'Circuito del Jarama', '2026-09-11'),
    new FreePractice('Madrid GP Free Practice 2', 'Circuito del Jarama', '2026-09-11'),
    new FreePractice('Madrid GP Free Practice 3', 'Circuito del Jarama', '2026-09-12'),
    new Qualifying('Madrid GP Qualifying', 'Circuito del Jarama', '2026-09-12'),
    new GrandPrix('Madrid Grand Prix', 'Circuito del Jarama', '2026-09-13'),

    // Azerbaijan Grand Prix Weekend
    new FreePractice('Azerbaijan GP Free Practice 1', 'Baku City Circuit', '2026-09-25'),
    new FreePractice('Azerbaijan GP Free Practice 2', 'Baku City Circuit', '2026-09-25'),
    new FreePractice('Azerbaijan GP Free Practice 3', 'Baku City Circuit', '2026-09-26'),
    new Qualifying('Azerbaijan GP Qualifying', 'Baku City Circuit', '2026-09-26'),
    new GrandPrix('Azerbaijan Grand Prix', 'Baku City Circuit', '2026-09-27'),

    // Singapore Grand Prix Weekend
    new FreePractice('Singapore GP Free Practice 1', 'Marina Bay Street Circuit', '2026-10-09'),
    new QualifyingSprint('Singapore GP Qualifying Sprint', 'Marina Bay Street Circuit', '2026-10-09'),
    new Sprint('Singapore GP Sprint', 'Marina Bay Street Circuit', '2026-10-10'),
    new Qualifying('Singapore GP Qualifying', 'Marina Bay Street Circuit', '2026-10-10'),
    new GrandPrix('Singapore Grand Prix', 'Marina Bay Street Circuit', '2026-10-11'),

    // United States Grand Prix Weekend
    new FreePractice('US GP Free Practice 1', 'Circuit of the Americas', '2026-10-23'),
    new FreePractice('US GP Free Practice 2', 'Circuit of the Americas', '2026-10-23'),
    new FreePractice('US GP Free Practice 3', 'Circuit of the Americas', '2026-10-24'),
    new Qualifying('US GP Qualifying', 'Circuit of the Americas', '2026-10-24'),
    new GrandPrix('United States Grand Prix', 'Circuit of the Americas', '2026-10-25'),

    // Mexico City Grand Prix Weekend
    new FreePractice('Mexico City GP Free Practice 1', 'Autódromo Hermanos Rodríguez', '2026-10-30'),
    new FreePractice('Mexico City GP Free Practice 2', 'Autódromo Hermanos Rodríguez', '2026-10-30'),
    new FreePractice('Mexico City GP Free Practice 3', 'Autódromo Hermanos Rodríguez', '2026-10-31'),
    new Qualifying('Mexico City GP Qualifying', 'Autódromo Hermanos Rodríguez', '2026-10-31'),
    new GrandPrix('Mexico City Grand Prix', 'Autódromo Hermanos Rodríguez', '2026-11-01'),

    // São Paulo Grand Prix Weekend
    new FreePractice('São Paulo GP Free Practice 1', 'Interlagos Circuit', '2026-11-06'),
    new FreePractice('São Paulo GP Free Practice 2', 'Interlagos Circuit', '2026-11-06'),
    new FreePractice('São Paulo GP Free Practice 3', 'Interlagos Circuit', '2026-11-07'),
    new Qualifying('São Paulo GP Qualifying', 'Interlagos Circuit', '2026-11-07'),
    new GrandPrix('São Paulo Grand Prix', 'Interlagos Circuit', '2026-11-08'),

    // Las Vegas Grand Prix Weekend
    new FreePractice('Las Vegas GP Free Practice 1', 'Las Vegas Street Circuit', '2026-11-20'),
    new FreePractice('Las Vegas GP Free Practice 2', 'Las Vegas Street Circuit', '2026-11-20'),
    new FreePractice('Las Vegas GP Free Practice 3', 'Las Vegas Street Circuit', '2026-11-21'),
    new Qualifying('Las Vegas GP Qualifying', 'Las Vegas Street Circuit', '2026-11-21'),
    new GrandPrix('Las Vegas Grand Prix', 'Las Vegas Street Circuit', '2026-11-22'),

    // Qatar Grand Prix Weekend
    new FreePractice('Qatar GP Free Practice 1', 'Losail International Circuit', '2026-11-27'),
    new FreePractice('Qatar GP Free Practice 2', 'Losail International Circuit', '2026-11-27'),
    new FreePractice('Qatar GP Free Practice 3', 'Losail International Circuit', '2026-11-28'),
    new Qualifying('Qatar GP Qualifying', 'Losail International Circuit', '2026-11-28'),
    new GrandPrix('Qatar Grand Prix', 'Losail International Circuit', '2026-11-29'),

    // Abu Dhabi Grand Prix Weekend
    new FreePractice('Abu Dhabi GP Free Practice 1', 'Yas Marina Circuit', '2026-12-04'),
    new FreePractice('Abu Dhabi GP Free Practice 2', 'Yas Marina Circuit', '2026-12-04'),
    new FreePractice('Abu Dhabi GP Free Practice 3', 'Yas Marina Circuit', '2026-12-05'),
    new Qualifying('Abu Dhabi GP Qualifying', 'Yas Marina Circuit', '2026-12-05'),
    new GrandPrix('Abu Dhabi Grand Prix', 'Yas Marina Circuit', '2026-12-06'),
];
    