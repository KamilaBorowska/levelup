var moves = {
    "Pound": {
        type: "normal",
        power: 40,
        accuracy: 100
    },
    "Karate Chop": {
        type: "fighting",
        power: 50,
        accuracy: 100
    },
    "Double Slap": {
        type: "normal",
        power: 15,
        accuracy: 85
    },
    "Comet Punch": {
        type: "normal",
        power: 18,
        accuracy: 85
    },
    "Mega Punch": {
        type: "normal",
        power: 80,
        accuracy: 85
    },
    "Pay Day": {
        type: "normal",
        power: 40,
        accuracy: 100
    },
    "Fire Punch": {
        type: "fire",
        power: 75,
        accuracy: 100
    },
    "Ice Punch": {
        type: "ice",
        power: 75,
        accuracy: 100
    },
    "Thunder Punch": {
        type: "electric",
        power: 75,
        accuracy: 100
    },
    "Scratch": {
        type: "normal",
        power: 40,
        accuracy: 100
    },
    "Vice Grip": {
        type: "normal",
        power: 55,
        accuracy: 100
    },
    "Guillotine": {
        type: "normal",
        power: "?",
        accuracy: 30
    },
    "Razor Wind": {
        type: "normal",
        power: 80,
        accuracy: 100
    },
    "Swords Dance": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Cut": {
        type: "normal",
        power: 50,
        accuracy: 95
    },
    "Gust": {
        type: "flying",
        power: 40,
        accuracy: 100
    },
    "Wing Attack": {
        type: "flying",
        power: 60,
        accuracy: 100
    },
    "Whirlwind": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Fly": {
        type: "flying",
        power: 90,
        accuracy: 95
    },
    "Bind": {
        type: "normal",
        power: 15,
        accuracy: 85
    },
    "Slam": {
        type: "normal",
        power: 80,
        accuracy: 75
    },
    "Vine Whip": {
        type: "grass",
        power: 35,
        accuracy: 100
    },
    "Stomp": {
        type: "normal",
        power: 65,
        accuracy: 100
    },
    "Double Kick": {
        type: "fighting",
        power: 30,
        accuracy: 100
    },
    "Mega Kick": {
        type: "normal",
        power: 120,
        accuracy: 75
    },
    "Jump Kick": {
        type: "fighting",
        power: 100,
        accuracy: 95
    },
    "Rolling Kick": {
        type: "fighting",
        power: 60,
        accuracy: 85
    },
    "Sand Attack": {
        type: "ground",
        power: 0,
        accuracy: 100
    },
    "Headbutt": {
        type: "normal",
        power: 70,
        accuracy: 100
    },
    "Horn Attack": {
        type: "normal",
        power: 65,
        accuracy: 100
    },
    "Fury Attack": {
        type: "normal",
        power: 15,
        accuracy: 85
    },
    "Horn Drill": {
        type: "normal",
        power: "?",
        accuracy: 30
    },
    "Tackle": {
        type: "normal",
        power: 50,
        accuracy: 100
    },
    "Body Slam": {
        type: "normal",
        power: 85,
        accuracy: 100
    },
    "Wrap": {
        type: "normal",
        power: 15,
        accuracy: 90
    },
    "Take Down": {
        type: "normal",
        power: 90,
        accuracy: 85
    },
    "Thrash": {
        type: "normal",
        power: 120,
        accuracy: 100
    },
    "Double-Edge": {
        type: "normal",
        power: 120,
        accuracy: 100
    },
    "Tail Whip": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Poison Sting": {
        type: "poison",
        power: 15,
        accuracy: 100
    },
    "Twineedle": {
        type: "bug",
        power: 25,
        accuracy: 100
    },
    "Pin Missile": {
        type: "bug",
        power: 14,
        accuracy: 85
    },
    "Leer": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Bite": {
        type: "dark",
        power: 60,
        accuracy: 100
    },
    "Growl": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Roar": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Sing": {
        type: "normal",
        power: 0,
        accuracy: 55
    },
    "Supersonic": {
        type: "normal",
        power: 0,
        accuracy: 55
    },
    "Sonic Boom": {
        type: "normal",
        power: "?",
        accuracy: 90
    },
    "Disable": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Acid": {
        type: "poison",
        power: 40,
        accuracy: 100
    },
    "Ember": {
        type: "fire",
        power: 40,
        accuracy: 100
    },
    "Flamethrower": {
        type: "fire",
        power: 95,
        accuracy: 100
    },
    "Mist": {
        type: "ice",
        power: 0,
        accuracy: Infinity
    },
    "Water Gun": {
        type: "water",
        power: 40,
        accuracy: 100
    },
    "Hydro Pump": {
        type: "water",
        power: 120,
        accuracy: 80
    },
    "Surf": {
        type: "water",
        power: 95,
        accuracy: 100
    },
    "Ice Beam": {
        type: "ice",
        power: 95,
        accuracy: 100
    },
    "Blizzard": {
        type: "ice",
        power: 120,
        accuracy: 70
    },
    "Psybeam": {
        type: "psychic",
        power: 65,
        accuracy: 100
    },
    "Bubble Beam": {
        type: "water",
        power: 65,
        accuracy: 100
    },
    "Aurora Beam": {
        type: "ice",
        power: 65,
        accuracy: 100
    },
    "Hyper Beam": {
        type: "normal",
        power: 150,
        accuracy: 90
    },
    "Peck": {
        type: "flying",
        power: 35,
        accuracy: 100
    },
    "Drill Peck": {
        type: "flying",
        power: 80,
        accuracy: 100
    },
    "Submission": {
        type: "fighting",
        power: 80,
        accuracy: 80
    },
    "Low Kick": {
        type: "fighting",
        power: "?",
        accuracy: 100
    },
    "Counter": {
        type: "fighting",
        power: "?",
        accuracy: 100
    },
    "Seismic Toss": {
        type: "fighting",
        power: "?",
        accuracy: 100
    },
    "Strength": {
        type: "normal",
        power: 80,
        accuracy: 100
    },
    "Absorb": {
        type: "grass",
        power: 20,
        accuracy: 100
    },
    "Mega Drain": {
        type: "grass",
        power: 40,
        accuracy: 100
    },
    "Leech Seed": {
        type: "grass",
        power: 0,
        accuracy: 90
    },
    "Growth": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Razor Leaf": {
        type: "grass",
        power: 55,
        accuracy: 95
    },
    "Solar Beam": {
        type: "grass",
        power: 120,
        accuracy: 100
    },
    "Poison Powder": {
        type: "poison",
        power: 0,
        accuracy: 75
    },
    "Stun Spore": {
        type: "grass",
        power: 0,
        accuracy: 75
    },
    "Sleep Powder": {
        type: "grass",
        power: 0,
        accuracy: 75
    },
    "Petal Dance": {
        type: "grass",
        power: 120,
        accuracy: 100
    },
    "String Shot": {
        type: "bug",
        power: 0,
        accuracy: 95
    },
    "Dragon Rage": {
        type: "dragon",
        power: "?",
        accuracy: 100
    },
    "Fire Spin": {
        type: "fire",
        power: 35,
        accuracy: 85
    },
    "Thunder Shock": {
        type: "electric",
        power: 40,
        accuracy: 100
    },
    "Thunderbolt": {
        type: "electric",
        power: 95,
        accuracy: 100
    },
    "Thunder Wave": {
        type: "electric",
        power: 0,
        accuracy: 100
    },
    "Thunder": {
        type: "electric",
        power: 120,
        accuracy: 70
    },
    "Rock Throw": {
        type: "rock",
        power: 50,
        accuracy: 90
    },
    "Earthquake": {
        type: "ground",
        power: 100,
        accuracy: 100
    },
    "Fissure": {
        type: "ground",
        power: "?",
        accuracy: 30
    },
    "Dig": {
        type: "ground",
        power: 80,
        accuracy: 100
    },
    "Toxic": {
        type: "poison",
        power: 0,
        accuracy: 90
    },
    "Confusion": {
        type: "psychic",
        power: 50,
        accuracy: 100
    },
    "Psychic": {
        type: "psychic",
        power: 90,
        accuracy: 100
    },
    "Hypnosis": {
        type: "psychic",
        power: 0,
        accuracy: 60
    },
    "Meditate": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Agility": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Quick Attack": {
        type: "normal",
        power: 40,
        accuracy: 100
    },
    "Rage": {
        type: "normal",
        power: 20,
        accuracy: 100
    },
    "Teleport": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Night Shade": {
        type: "ghost",
        power: "?",
        accuracy: 100
    },
    "Mimic": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Screech": {
        type: "normal",
        power: 0,
        accuracy: 85
    },
    "Double Team": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Recover": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Harden": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Minimize": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Smokescreen": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Confuse Ray": {
        type: "ghost",
        power: 0,
        accuracy: 100
    },
    "Withdraw": {
        type: "water",
        power: 0,
        accuracy: Infinity
    },
    "Defense Curl": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Barrier": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Light Screen": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Haze": {
        type: "ice",
        power: 0,
        accuracy: Infinity
    },
    "Reflect": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Focus Energy": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Bide": {
        type: "normal",
        power: "?",
        accuracy: Infinity
    },
    "Metronome": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Mirror Move": {
        type: "flying",
        power: 0,
        accuracy: Infinity
    },
    "Self-Destruct": {
        type: "normal",
        power: 200,
        accuracy: 100
    },
    "Egg Bomb": {
        type: "normal",
        power: 100,
        accuracy: 75
    },
    "Lick": {
        type: "ghost",
        power: 20,
        accuracy: 100
    },
    "Smog": {
        type: "poison",
        power: 20,
        accuracy: 70
    },
    "Sludge": {
        type: "poison",
        power: 65,
        accuracy: 100
    },
    "Bone Club": {
        type: "ground",
        power: 65,
        accuracy: 85
    },
    "Fire Blast": {
        type: "fire",
        power: 120,
        accuracy: 85
    },
    "Waterfall": {
        type: "water",
        power: 80,
        accuracy: 100
    },
    "Clamp": {
        type: "water",
        power: 35,
        accuracy: 85
    },
    "Swift": {
        type: "normal",
        power: 60,
        accuracy: Infinity
    },
    "Skull Bash": {
        type: "normal",
        power: 100,
        accuracy: 100
    },
    "Spike Cannon": {
        type: "normal",
        power: 20,
        accuracy: 100
    },
    "Constrict": {
        type: "normal",
        power: 10,
        accuracy: 100
    },
    "Amnesia": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Kinesis": {
        type: "psychic",
        power: 0,
        accuracy: 80
    },
    "Soft-Boiled": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "High Jump Kick": {
        type: "fighting",
        power: 130,
        accuracy: 90
    },
    "Glare": {
        type: "normal",
        power: 0,
        accuracy: 90
    },
    "Dream Eater": {
        type: "psychic",
        power: 100,
        accuracy: 100
    },
    "Poison Gas": {
        type: "poison",
        power: 0,
        accuracy: 80
    },
    "Barrage": {
        type: "normal",
        power: 15,
        accuracy: 85
    },
    "Leech Life": {
        type: "bug",
        power: 20,
        accuracy: 100
    },
    "Lovely Kiss": {
        type: "normal",
        power: 0,
        accuracy: 75
    },
    "Sky Attack": {
        type: "flying",
        power: 140,
        accuracy: 90
    },
    "Transform": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Bubble": {
        type: "water",
        power: 20,
        accuracy: 100
    },
    "Dizzy Punch": {
        type: "normal",
        power: 70,
        accuracy: 100
    },
    "Spore": {
        type: "grass",
        power: 0,
        accuracy: 100
    },
    "Flash": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Psywave": {
        type: "psychic",
        power: "?",
        accuracy: 80
    },
    "Splash": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Acid Armor": {
        type: "poison",
        power: 0,
        accuracy: Infinity
    },
    "Crabhammer": {
        type: "water",
        power: 90,
        accuracy: 90
    },
    "Explosion": {
        type: "normal",
        power: 250,
        accuracy: 100
    },
    "Fury Swipes": {
        type: "normal",
        power: 18,
        accuracy: 80
    },
    "Bonemerang": {
        type: "ground",
        power: 50,
        accuracy: 90
    },
    "Rest": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Rock Slide": {
        type: "rock",
        power: 75,
        accuracy: 90
    },
    "Hyper Fang": {
        type: "normal",
        power: 80,
        accuracy: 90
    },
    "Sharpen": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Conversion": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Tri Attack": {
        type: "normal",
        power: 80,
        accuracy: 100
    },
    "Super Fang": {
        type: "normal",
        power: "?",
        accuracy: 90
    },
    "Slash": {
        type: "normal",
        power: 70,
        accuracy: 100
    },
    "Substitute": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Struggle": {
        type: "normal",
        power: 50,
        accuracy: Infinity
    },
    "Sketch": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Triple Kick": {
        type: "fighting",
        power: 10,
        accuracy: 90
    },
    "Thief": {
        type: "dark",
        power: 40,
        accuracy: 100
    },
    "Spider Web": {
        type: "bug",
        power: 0,
        accuracy: Infinity
    },
    "Mind Reader": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Nightmare": {
        type: "ghost",
        power: 0,
        accuracy: 100
    },
    "Flame Wheel": {
        type: "fire",
        power: 60,
        accuracy: 100
    },
    "Snore": {
        type: "normal",
        power: 40,
        accuracy: 100
    },
    "Curse": {
        type: "ghost",
        power: 0,
        accuracy: Infinity
    },
    "Flail": {
        type: "normal",
        power: "?",
        accuracy: 100
    },
    "Conversion 2": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Aeroblast": {
        type: "flying",
        power: 100,
        accuracy: 95
    },
    "Cotton Spore": {
        type: "grass",
        power: 0,
        accuracy: 100
    },
    "Reversal": {
        type: "fighting",
        power: "?",
        accuracy: 100
    },
    "Spite": {
        type: "ghost",
        power: 0,
        accuracy: 100
    },
    "Powder Snow": {
        type: "ice",
        power: 40,
        accuracy: 100
    },
    "Protect": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Mach Punch": {
        type: "fighting",
        power: 40,
        accuracy: 100
    },
    "Scary Face": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Feint Attack": {
        type: "dark",
        power: 60,
        accuracy: Infinity
    },
    "Sweet Kiss": {
        type: "normal",
        power: 0,
        accuracy: 75
    },
    "Belly Drum": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Sludge Bomb": {
        type: "poison",
        power: 90,
        accuracy: 100
    },
    "Mud-Slap": {
        type: "ground",
        power: 20,
        accuracy: 100
    },
    "Octazooka": {
        type: "water",
        power: 65,
        accuracy: 85
    },
    "Spikes": {
        type: "ground",
        power: 0,
        accuracy: Infinity
    },
    "Zap Cannon": {
        type: "electric",
        power: 120,
        accuracy: 50
    },
    "Foresight": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Destiny Bond": {
        type: "ghost",
        power: 0,
        accuracy: Infinity
    },
    "Perish Song": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Icy Wind": {
        type: "ice",
        power: 55,
        accuracy: 95
    },
    "Detect": {
        type: "fighting",
        power: 0,
        accuracy: Infinity
    },
    "Bone Rush": {
        type: "ground",
        power: 25,
        accuracy: 90
    },
    "Lock-On": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Outrage": {
        type: "dragon",
        power: 120,
        accuracy: 100
    },
    "Sandstorm": {
        type: "rock",
        power: 0,
        accuracy: Infinity
    },
    "Giga Drain": {
        type: "grass",
        power: 75,
        accuracy: 100
    },
    "Endure": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Charm": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Rollout": {
        type: "rock",
        power: 30,
        accuracy: 90
    },
    "False Swipe": {
        type: "normal",
        power: 40,
        accuracy: 100
    },
    "Swagger": {
        type: "normal",
        power: 0,
        accuracy: 90
    },
    "Milk Drink": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Spark": {
        type: "electric",
        power: 65,
        accuracy: 100
    },
    "Fury Cutter": {
        type: "bug",
        power: 20,
        accuracy: 95
    },
    "Steel Wing": {
        type: "steel",
        power: 70,
        accuracy: 90
    },
    "Mean Look": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Attract": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Sleep Talk": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Heal Bell": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Return": {
        type: "normal",
        power: "?",
        accuracy: 100
    },
    "Present": {
        type: "normal",
        power: "?",
        accuracy: 90
    },
    "Frustration": {
        type: "normal",
        power: "?",
        accuracy: 100
    },
    "Safeguard": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Pain Split": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Sacred Fire": {
        type: "fire",
        power: 100,
        accuracy: 95
    },
    "Magnitude": {
        type: "ground",
        power: "?",
        accuracy: 100
    },
    "Dynamic Punch": {
        type: "fighting",
        power: 100,
        accuracy: 50
    },
    "Megahorn": {
        type: "bug",
        power: 120,
        accuracy: 85
    },
    "Dragon Breath": {
        type: "dragon",
        power: 60,
        accuracy: 100
    },
    "Baton Pass": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Encore": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Pursuit": {
        type: "dark",
        power: 40,
        accuracy: 100
    },
    "Rapid Spin": {
        type: "normal",
        power: 20,
        accuracy: 100
    },
    "Sweet Scent": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Iron Tail": {
        type: "steel",
        power: 100,
        accuracy: 75
    },
    "Metal Claw": {
        type: "steel",
        power: 50,
        accuracy: 95
    },
    "Vital Throw": {
        type: "fighting",
        power: 70,
        accuracy: Infinity
    },
    "Morning Sun": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Synthesis": {
        type: "grass",
        power: 0,
        accuracy: Infinity
    },
    "Moonlight": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Hidden Power": {
        type: "normal",
        power: "?",
        accuracy: 100
    },
    "Cross Chop": {
        type: "fighting",
        power: 100,
        accuracy: 80
    },
    "Twister": {
        type: "dragon",
        power: 40,
        accuracy: 100
    },
    "Rain Dance": {
        type: "water",
        power: 0,
        accuracy: Infinity
    },
    "Sunny Day": {
        type: "fire",
        power: 0,
        accuracy: Infinity
    },
    "Crunch": {
        type: "dark",
        power: 80,
        accuracy: 100
    },
    "Mirror Coat": {
        type: "psychic",
        power: "?",
        accuracy: 100
    },
    "Psych Up": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Extreme Speed": {
        type: "normal",
        power: 80,
        accuracy: 100
    },
    "Ancient Power": {
        type: "rock",
        power: 60,
        accuracy: 100
    },
    "Shadow Ball": {
        type: "ghost",
        power: 80,
        accuracy: 100
    },
    "Future Sight": {
        type: "psychic",
        power: 100,
        accuracy: 100
    },
    "Rock Smash": {
        type: "fighting",
        power: 40,
        accuracy: 100
    },
    "Whirlpool": {
        type: "water",
        power: 35,
        accuracy: 85
    },
    "Beat Up": {
        type: "dark",
        power: "?",
        accuracy: 100
    },
    "Fake Out": {
        type: "normal",
        power: 40,
        accuracy: 100
    },
    "Uproar": {
        type: "normal",
        power: 90,
        accuracy: 100
    },
    "Stockpile": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Spit Up": {
        type: "normal",
        power: "?",
        accuracy: 100
    },
    "Swallow": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Heat Wave": {
        type: "fire",
        power: 100,
        accuracy: 90
    },
    "Hail": {
        type: "ice",
        power: 0,
        accuracy: Infinity
    },
    "Torment": {
        type: "dark",
        power: 0,
        accuracy: 100
    },
    "Flatter": {
        type: "dark",
        power: 0,
        accuracy: 100
    },
    "Will-O-Wisp": {
        type: "fire",
        power: 0,
        accuracy: 75
    },
    "Memento": {
        type: "dark",
        power: 0,
        accuracy: 100
    },
    "Facade": {
        type: "normal",
        power: 70,
        accuracy: 100
    },
    "Focus Punch": {
        type: "fighting",
        power: 150,
        accuracy: 100
    },
    "Smelling Salts": {
        type: "normal",
        power: 60,
        accuracy: 100
    },
    "Follow Me": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Nature Power": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Charge": {
        type: "electric",
        power: 0,
        accuracy: Infinity
    },
    "Taunt": {
        type: "dark",
        power: 0,
        accuracy: 100
    },
    "Helping Hand": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Trick": {
        type: "psychic",
        power: 0,
        accuracy: 100
    },
    "Role Play": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Wish": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Assist": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Ingrain": {
        type: "grass",
        power: 0,
        accuracy: Infinity
    },
    "Superpower": {
        type: "fighting",
        power: 120,
        accuracy: 100
    },
    "Magic Coat": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Recycle": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Revenge": {
        type: "fighting",
        power: 60,
        accuracy: 100
    },
    "Brick Break": {
        type: "fighting",
        power: 75,
        accuracy: 100
    },
    "Yawn": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Knock Off": {
        type: "dark",
        power: 20,
        accuracy: 100
    },
    "Endeavor": {
        type: "normal",
        power: "?",
        accuracy: 100
    },
    "Eruption": {
        type: "fire",
        power: 150,
        accuracy: 100
    },
    "Skill Swap": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Imprison": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Refresh": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Grudge": {
        type: "ghost",
        power: 0,
        accuracy: Infinity
    },
    "Snatch": {
        type: "dark",
        power: 0,
        accuracy: Infinity
    },
    "Secret Power": {
        type: "normal",
        power: 70,
        accuracy: 100
    },
    "Dive": {
        type: "water",
        power: 80,
        accuracy: 100
    },
    "Arm Thrust": {
        type: "fighting",
        power: 15,
        accuracy: 100
    },
    "Camouflage": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Tail Glow": {
        type: "bug",
        power: 0,
        accuracy: Infinity
    },
    "Luster Purge": {
        type: "psychic",
        power: 70,
        accuracy: 100
    },
    "Mist Ball": {
        type: "psychic",
        power: 70,
        accuracy: 100
    },
    "Feather Dance": {
        type: "flying",
        power: 0,
        accuracy: 100
    },
    "Teeter Dance": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Blaze Kick": {
        type: "fire",
        power: 85,
        accuracy: 90
    },
    "Mud Sport": {
        type: "ground",
        power: 0,
        accuracy: Infinity
    },
    "Ice Ball": {
        type: "ice",
        power: 30,
        accuracy: 90
    },
    "Needle Arm": {
        type: "grass",
        power: 60,
        accuracy: 100
    },
    "Slack Off": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Hyper Voice": {
        type: "normal",
        power: 90,
        accuracy: 100
    },
    "Poison Fang": {
        type: "poison",
        power: 50,
        accuracy: 100
    },
    "Crush Claw": {
        type: "normal",
        power: 75,
        accuracy: 95
    },
    "Blast Burn": {
        type: "fire",
        power: 150,
        accuracy: 90
    },
    "Hydro Cannon": {
        type: "water",
        power: 150,
        accuracy: 90
    },
    "Meteor Mash": {
        type: "steel",
        power: 100,
        accuracy: 85
    },
    "Astonish": {
        type: "ghost",
        power: 30,
        accuracy: 100
    },
    "Weather Ball": {
        type: "normal",
        power: 50,
        accuracy: 100
    },
    "Aromatherapy": {
        type: "grass",
        power: 0,
        accuracy: Infinity
    },
    "Fake Tears": {
        type: "dark",
        power: 0,
        accuracy: 100
    },
    "Air Cutter": {
        type: "flying",
        power: 55,
        accuracy: 95
    },
    "Overheat": {
        type: "fire",
        power: 140,
        accuracy: 90
    },
    "Odor Sleuth": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Rock Tomb": {
        type: "rock",
        power: 50,
        accuracy: 80
    },
    "Silver Wind": {
        type: "bug",
        power: 60,
        accuracy: 100
    },
    "Metal Sound": {
        type: "steel",
        power: 0,
        accuracy: 85
    },
    "Grass Whistle": {
        type: "grass",
        power: 0,
        accuracy: 55
    },
    "Tickle": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Cosmic Power": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Water Spout": {
        type: "water",
        power: 150,
        accuracy: 100
    },
    "Signal Beam": {
        type: "bug",
        power: 75,
        accuracy: 100
    },
    "Shadow Punch": {
        type: "ghost",
        power: 60,
        accuracy: Infinity
    },
    "Extrasensory": {
        type: "psychic",
        power: 80,
        accuracy: 100
    },
    "Sky Uppercut": {
        type: "fighting",
        power: 85,
        accuracy: 90
    },
    "Sand Tomb": {
        type: "ground",
        power: 35,
        accuracy: 85
    },
    "Sheer Cold": {
        type: "ice",
        power: "?",
        accuracy: 30
    },
    "Muddy Water": {
        type: "water",
        power: 95,
        accuracy: 85
    },
    "Bullet Seed": {
        type: "grass",
        power: 25,
        accuracy: 100
    },
    "Aerial Ace": {
        type: "flying",
        power: 60,
        accuracy: Infinity
    },
    "Icicle Spear": {
        type: "ice",
        power: 25,
        accuracy: 100
    },
    "Iron Defense": {
        type: "steel",
        power: 0,
        accuracy: Infinity
    },
    "Block": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Howl": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Dragon Claw": {
        type: "dragon",
        power: 80,
        accuracy: 100
    },
    "Frenzy Plant": {
        type: "grass",
        power: 150,
        accuracy: 90
    },
    "Bulk Up": {
        type: "fighting",
        power: 0,
        accuracy: Infinity
    },
    "Bounce": {
        type: "flying",
        power: 85,
        accuracy: 85
    },
    "Mud Shot": {
        type: "ground",
        power: 55,
        accuracy: 95
    },
    "Poison Tail": {
        type: "poison",
        power: 50,
        accuracy: 100
    },
    "Covet": {
        type: "normal",
        power: 60,
        accuracy: 100
    },
    "Volt Tackle": {
        type: "electric",
        power: 120,
        accuracy: 100
    },
    "Magical Leaf": {
        type: "grass",
        power: 60,
        accuracy: Infinity
    },
    "Water Sport": {
        type: "water",
        power: 0,
        accuracy: Infinity
    },
    "Calm Mind": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Leaf Blade": {
        type: "grass",
        power: 90,
        accuracy: 100
    },
    "Dragon Dance": {
        type: "dragon",
        power: 0,
        accuracy: Infinity
    },
    "Rock Blast": {
        type: "rock",
        power: 25,
        accuracy: 90
    },
    "Shock Wave": {
        type: "electric",
        power: 60,
        accuracy: Infinity
    },
    "Water Pulse": {
        type: "water",
        power: 60,
        accuracy: 100
    },
    "Doom Desire": {
        type: "steel",
        power: 140,
        accuracy: 100
    },
    "Psycho Boost": {
        type: "psychic",
        power: 140,
        accuracy: 90
    },
    "Roost": {
        type: "flying",
        power: 0,
        accuracy: Infinity
    },
    "Gravity": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Miracle Eye": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Wake-Up Slap": {
        type: "fighting",
        power: 60,
        accuracy: 100
    },
    "Hammer Arm": {
        type: "fighting",
        power: 100,
        accuracy: 90
    },
    "Gyro Ball": {
        type: "steel",
        power: "?",
        accuracy: 100
    },
    "Healing Wish": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Brine": {
        type: "water",
        power: 65,
        accuracy: 100
    },
    "Natural Gift": {
        type: "normal",
        power: "?",
        accuracy: 100
    },
    "Feint": {
        type: "normal",
        power: 30,
        accuracy: 100
    },
    "Pluck": {
        type: "flying",
        power: 60,
        accuracy: 100
    },
    "Tailwind": {
        type: "flying",
        power: 0,
        accuracy: Infinity
    },
    "Acupressure": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Metal Burst": {
        type: "steel",
        power: "?",
        accuracy: 100
    },
    "U-turn": {
        type: "bug",
        power: 70,
        accuracy: 100
    },
    "Close Combat": {
        type: "fighting",
        power: 120,
        accuracy: 100
    },
    "Payback": {
        type: "dark",
        power: 50,
        accuracy: 100
    },
    "Assurance": {
        type: "dark",
        power: 50,
        accuracy: 100
    },
    "Embargo": {
        type: "dark",
        power: 0,
        accuracy: 100
    },
    "Fling": {
        type: "dark",
        power: "?",
        accuracy: 100
    },
    "Psycho Shift": {
        type: "psychic",
        power: 0,
        accuracy: 90
    },
    "Trump Card": {
        type: "normal",
        power: "?",
        accuracy: Infinity
    },
    "Heal Block": {
        type: "psychic",
        power: 0,
        accuracy: 100
    },
    "Wring Out": {
        type: "normal",
        power: "?",
        accuracy: 100
    },
    "Power Trick": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Gastro Acid": {
        type: "poison",
        power: 0,
        accuracy: 100
    },
    "Lucky Chant": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Me First": {
        type: "normal",
        power: "?",
        accuracy: Infinity
    },
    "Copycat": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Power Swap": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Guard Swap": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Punishment": {
        type: "dark",
        power: "?",
        accuracy: 100
    },
    "Last Resort": {
        type: "normal",
        power: 140,
        accuracy: 100
    },
    "Worry Seed": {
        type: "grass",
        power: 0,
        accuracy: 100
    },
    "Sucker Punch": {
        type: "dark",
        power: 80,
        accuracy: 100
    },
    "Toxic Spikes": {
        type: "poison",
        power: 0,
        accuracy: Infinity
    },
    "Heart Swap": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Aqua Ring": {
        type: "water",
        power: 0,
        accuracy: Infinity
    },
    "Magnet Rise": {
        type: "electric",
        power: 0,
        accuracy: Infinity
    },
    "Flare Blitz": {
        type: "fire",
        power: 120,
        accuracy: 100
    },
    "Force Palm": {
        type: "fighting",
        power: 60,
        accuracy: 100
    },
    "Aura Sphere": {
        type: "fighting",
        power: 90,
        accuracy: Infinity
    },
    "Rock Polish": {
        type: "rock",
        power: 0,
        accuracy: Infinity
    },
    "Poison Jab": {
        type: "poison",
        power: 80,
        accuracy: 100
    },
    "Dark Pulse": {
        type: "dark",
        power: 80,
        accuracy: 100
    },
    "Night Slash": {
        type: "dark",
        power: 70,
        accuracy: 100
    },
    "Aqua Tail": {
        type: "water",
        power: 90,
        accuracy: 90
    },
    "Seed Bomb": {
        type: "grass",
        power: 80,
        accuracy: 100
    },
    "Air Slash": {
        type: "flying",
        power: 75,
        accuracy: 95
    },
    "X-Scissor": {
        type: "bug",
        power: 80,
        accuracy: 100
    },
    "Bug Buzz": {
        type: "bug",
        power: 90,
        accuracy: 100
    },
    "Dragon Pulse": {
        type: "dragon",
        power: 90,
        accuracy: 100
    },
    "Dragon Rush": {
        type: "dragon",
        power: 100,
        accuracy: 75
    },
    "Power Gem": {
        type: "rock",
        power: 70,
        accuracy: 100
    },
    "Drain Punch": {
        type: "fighting",
        power: 75,
        accuracy: 100
    },
    "Vacuum Wave": {
        type: "fighting",
        power: 40,
        accuracy: 100
    },
    "Focus Blast": {
        type: "fighting",
        power: 120,
        accuracy: 70
    },
    "Energy Ball": {
        type: "grass",
        power: 80,
        accuracy: 100
    },
    "Brave Bird": {
        type: "flying",
        power: 120,
        accuracy: 100
    },
    "Earth Power": {
        type: "ground",
        power: 90,
        accuracy: 100
    },
    "Switcheroo": {
        type: "dark",
        power: 0,
        accuracy: 100
    },
    "Giga Impact": {
        type: "normal",
        power: 150,
        accuracy: 90
    },
    "Nasty Plot": {
        type: "dark",
        power: 0,
        accuracy: Infinity
    },
    "Bullet Punch": {
        type: "steel",
        power: 40,
        accuracy: 100
    },
    "Avalanche": {
        type: "ice",
        power: 60,
        accuracy: 100
    },
    "Ice Shard": {
        type: "ice",
        power: 40,
        accuracy: 100
    },
    "Shadow Claw": {
        type: "ghost",
        power: 70,
        accuracy: 100
    },
    "Thunder Fang": {
        type: "electric",
        power: 65,
        accuracy: 95
    },
    "Ice Fang": {
        type: "ice",
        power: 65,
        accuracy: 95
    },
    "Fire Fang": {
        type: "fire",
        power: 65,
        accuracy: 95
    },
    "Shadow Sneak": {
        type: "ghost",
        power: 40,
        accuracy: 100
    },
    "Mud Bomb": {
        type: "ground",
        power: 65,
        accuracy: 85
    },
    "Psycho Cut": {
        type: "psychic",
        power: 70,
        accuracy: 100
    },
    "Zen Headbutt": {
        type: "psychic",
        power: 80,
        accuracy: 90
    },
    "Mirror Shot": {
        type: "steel",
        power: 65,
        accuracy: 85
    },
    "Flash Cannon": {
        type: "steel",
        power: 80,
        accuracy: 100
    },
    "Rock Climb": {
        type: "normal",
        power: 90,
        accuracy: 85
    },
    "Defog": {
        type: "flying",
        power: 0,
        accuracy: Infinity
    },
    "Trick Room": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Draco Meteor": {
        type: "dragon",
        power: 140,
        accuracy: 90
    },
    "Discharge": {
        type: "electric",
        power: 80,
        accuracy: 100
    },
    "Lava Plume": {
        type: "fire",
        power: 80,
        accuracy: 100
    },
    "Leaf Storm": {
        type: "grass",
        power: 140,
        accuracy: 90
    },
    "Power Whip": {
        type: "grass",
        power: 120,
        accuracy: 85
    },
    "Rock Wrecker": {
        type: "rock",
        power: 150,
        accuracy: 90
    },
    "Cross Poison": {
        type: "poison",
        power: 70,
        accuracy: 100
    },
    "Gunk Shot": {
        type: "poison",
        power: 120,
        accuracy: 70
    },
    "Iron Head": {
        type: "steel",
        power: 80,
        accuracy: 100
    },
    "Magnet Bomb": {
        type: "steel",
        power: 60,
        accuracy: Infinity
    },
    "Stone Edge": {
        type: "rock",
        power: 100,
        accuracy: 80
    },
    "Captivate": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Stealth Rock": {
        type: "rock",
        power: 0,
        accuracy: Infinity
    },
    "Grass Knot": {
        type: "grass",
        power: "?",
        accuracy: 100
    },
    "Chatter": {
        type: "flying",
        power: 60,
        accuracy: 100
    },
    "Judgment": {
        type: "normal",
        power: 100,
        accuracy: 100
    },
    "Bug Bite": {
        type: "bug",
        power: 60,
        accuracy: 100
    },
    "Charge Beam": {
        type: "electric",
        power: 50,
        accuracy: 90
    },
    "Wood Hammer": {
        type: "grass",
        power: 120,
        accuracy: 100
    },
    "Aqua Jet": {
        type: "water",
        power: 40,
        accuracy: 100
    },
    "Attack Order": {
        type: "bug",
        power: 90,
        accuracy: 100
    },
    "Defend Order": {
        type: "bug",
        power: 0,
        accuracy: Infinity
    },
    "Heal Order": {
        type: "bug",
        power: 0,
        accuracy: Infinity
    },
    "Head Smash": {
        type: "rock",
        power: 150,
        accuracy: 80
    },
    "Double Hit": {
        type: "normal",
        power: 35,
        accuracy: 90
    },
    "Roar of Time": {
        type: "dragon",
        power: 150,
        accuracy: 90
    },
    "Spacial Rend": {
        type: "dragon",
        power: 100,
        accuracy: 95
    },
    "Lunar Dance": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Crush Grip": {
        type: "normal",
        power: "?",
        accuracy: 100
    },
    "Magma Storm": {
        type: "fire",
        power: 120,
        accuracy: 75
    },
    "Dark Void": {
        type: "dark",
        power: 0,
        accuracy: 80
    },
    "Seed Flare": {
        type: "grass",
        power: 120,
        accuracy: 85
    },
    "Ominous Wind": {
        type: "ghost",
        power: 60,
        accuracy: 100
    },
    "Shadow Force": {
        type: "ghost",
        power: 120,
        accuracy: 100
    },
    "Hone Claws": {
        type: "dark",
        power: 0,
        accuracy: Infinity
    },
    "Wide Guard": {
        type: "rock",
        power: 0,
        accuracy: Infinity
    },
    "Guard Split": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Power Split": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Wonder Room": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Psyshock": {
        type: "psychic",
        power: 80,
        accuracy: 100
    },
    "Venoshock": {
        type: "poison",
        power: 65,
        accuracy: 100
    },
    "Autotomize": {
        type: "steel",
        power: 0,
        accuracy: Infinity
    },
    "Rage Powder": {
        type: "bug",
        power: 0,
        accuracy: Infinity
    },
    "Telekinesis": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Magic Room": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Smack Down": {
        type: "rock",
        power: 50,
        accuracy: 100
    },
    "Storm Throw": {
        type: "fighting",
        power: 40,
        accuracy: 100
    },
    "Flame Burst": {
        type: "fire",
        power: 70,
        accuracy: 100
    },
    "Sludge Wave": {
        type: "poison",
        power: 95,
        accuracy: 100
    },
    "Quiver Dance": {
        type: "bug",
        power: 0,
        accuracy: Infinity
    },
    "Heavy Slam": {
        type: "steel",
        power: "?",
        accuracy: 100
    },
    "Synchronoise": {
        type: "psychic",
        power: 70,
        accuracy: 100
    },
    "Electro Ball": {
        type: "electric",
        power: "?",
        accuracy: 100
    },
    "Soak": {
        type: "water",
        power: 0,
        accuracy: 100
    },
    "Flame Charge": {
        type: "fire",
        power: 50,
        accuracy: 100
    },
    "Coil": {
        type: "poison",
        power: 0,
        accuracy: Infinity
    },
    "Low Sweep": {
        type: "fighting",
        power: 60,
        accuracy: 100
    },
    "Acid Spray": {
        type: "poison",
        power: 40,
        accuracy: 100
    },
    "Foul Play": {
        type: "dark",
        power: 95,
        accuracy: 100
    },
    "Simple Beam": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "Entrainment": {
        type: "normal",
        power: 0,
        accuracy: 100
    },
    "After You": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Round": {
        type: "normal",
        power: 60,
        accuracy: 100
    },
    "Echoed Voice": {
        type: "normal",
        power: 40,
        accuracy: 100
    },
    "Chip Away": {
        type: "normal",
        power: 70,
        accuracy: 100
    },
    "Clear Smog": {
        type: "poison",
        power: 50,
        accuracy: Infinity
    },
    "Stored Power": {
        type: "psychic",
        power: 20,
        accuracy: 100
    },
    "Quick Guard": {
        type: "fighting",
        power: 0,
        accuracy: Infinity
    },
    "Ally Switch": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Scald": {
        type: "water",
        power: 80,
        accuracy: 100
    },
    "Shell Smash": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Heal Pulse": {
        type: "psychic",
        power: 0,
        accuracy: Infinity
    },
    "Hex": {
        type: "ghost",
        power: 50,
        accuracy: 100
    },
    "Sky Drop": {
        type: "flying",
        power: 60,
        accuracy: 100
    },
    "Shift Gear": {
        type: "steel",
        power: 0,
        accuracy: Infinity
    },
    "Circle Throw": {
        type: "fighting",
        power: 60,
        accuracy: 90
    },
    "Incinerate": {
        type: "fire",
        power: 30,
        accuracy: 100
    },
    "Quash": {
        type: "dark",
        power: 0,
        accuracy: 100
    },
    "Acrobatics": {
        type: "flying",
        power: 55,
        accuracy: 100
    },
    "Reflect Type": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Retaliate": {
        type: "normal",
        power: 70,
        accuracy: 100
    },
    "Final Gambit": {
        type: "fighting",
        power: "?",
        accuracy: 100
    },
    "Bestow": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Inferno": {
        type: "fire",
        power: 100,
        accuracy: 50
    },
    "Water Pledge": {
        type: "water",
        power: 50,
        accuracy: 100
    },
    "Fire Pledge": {
        type: "fire",
        power: 50,
        accuracy: 100
    },
    "Grass Pledge": {
        type: "grass",
        power: 50,
        accuracy: 100
    },
    "Volt Switch": {
        type: "electric",
        power: 70,
        accuracy: 100
    },
    "Struggle Bug": {
        type: "bug",
        power: 30,
        accuracy: 100
    },
    "Bulldoze": {
        type: "ground",
        power: 60,
        accuracy: 100
    },
    "Frost Breath": {
        type: "ice",
        power: 40,
        accuracy: 90
    },
    "Dragon Tail": {
        type: "dragon",
        power: 60,
        accuracy: 90
    },
    "Work Up": {
        type: "normal",
        power: 0,
        accuracy: Infinity
    },
    "Electroweb": {
        type: "electric",
        power: 55,
        accuracy: 95
    },
    "Wild Charge": {
        type: "electric",
        power: 90,
        accuracy: 100
    },
    "Drill Run": {
        type: "ground",
        power: 80,
        accuracy: 95
    },
    "Dual Chop": {
        type: "dragon",
        power: 40,
        accuracy: 90
    },
    "Heart Stamp": {
        type: "psychic",
        power: 60,
        accuracy: 100
    },
    "Horn Leech": {
        type: "grass",
        power: 75,
        accuracy: 100
    },
    "Sacred Sword": {
        type: "fighting",
        power: 90,
        accuracy: 100
    },
    "Razor Shell": {
        type: "water",
        power: 75,
        accuracy: 95
    },
    "Heat Crash": {
        type: "fire",
        power: "?",
        accuracy: 100
    },
    "Leaf Tornado": {
        type: "grass",
        power: 65,
        accuracy: 90
    },
    "Steamroller": {
        type: "bug",
        power: 65,
        accuracy: 100
    },
    "Cotton Guard": {
        type: "grass",
        power: 0,
        accuracy: Infinity
    },
    "Night Daze": {
        type: "dark",
        power: 85,
        accuracy: 95
    },
    "Psystrike": {
        type: "psychic",
        power: 100,
        accuracy: 100
    },
    "Tail Slap": {
        type: "normal",
        power: 25,
        accuracy: 85
    },
    "Hurricane": {
        type: "flying",
        power: 120,
        accuracy: 70
    },
    "Head Charge": {
        type: "normal",
        power: 120,
        accuracy: 100
    },
    "Gear Grind": {
        type: "steel",
        power: 50,
        accuracy: 85
    },
    "Searing Shot": {
        type: "fire",
        power: 100,
        accuracy: 100
    },
    "Techno Blast": {
        type: "normal",
        power: 85,
        accuracy: 100
    },
    "Relic Song": {
        type: "normal",
        power: 75,
        accuracy: 100
    },
    "Secret Sword": {
        type: "fighting",
        power: 85,
        accuracy: 100
    },
    "Glaciate": {
        type: "ice",
        power: 65,
        accuracy: 95
    },
    "Bolt Strike": {
        type: "electric",
        power: 130,
        accuracy: 85
    },
    "Blue Flare": {
        type: "fire",
        power: 130,
        accuracy: 85
    },
    "Fiery Dance": {
        type: "fire",
        power: 80,
        accuracy: 100
    },
    "Freeze Shock": {
        type: "ice",
        power: 140,
        accuracy: 90
    },
    "Ice Burn": {
        type: "ice",
        power: 140,
        accuracy: 90
    },
    "Snarl": {
        type: "dark",
        power: 55,
        accuracy: 95
    },
    "Icicle Crash": {
        type: "ice",
        power: 85,
        accuracy: 90
    },
    "V-create": {
        type: "fire",
        power: 180,
        accuracy: 95
    },
    "Fusion Flare": {
        type: "fire",
        power: 100,
        accuracy: 100
    },
    "Fusion Bolt": {
        type: "electric",
        power: 100,
        accuracy: 100
    },
    "Shadow Rush": {
        type: "shadow",
        power: 55,
        accuracy: 100
    },
    "Shadow Blast": {
        type: "shadow",
        power: 80,
        accuracy: 100
    },
    "Shadow Blitz": {
        type: "shadow",
        power: 40,
        accuracy: 100
    },
    "Shadow Bolt": {
        type: "shadow",
        power: 75,
        accuracy: 100
    },
    "Shadow Break": {
        type: "shadow",
        power: 75,
        accuracy: 100
    },
    "Shadow Chill": {
        type: "shadow",
        power: 75,
        accuracy: 100
    },
    "Shadow End": {
        type: "shadow",
        power: 120,
        accuracy: 60
    },
    "Shadow Fire": {
        type: "shadow",
        power: 75,
        accuracy: 100
    },
    "Shadow Rave": {
        type: "shadow",
        power: 70,
        accuracy: 100
    },
    "Shadow Storm": {
        type: "shadow",
        power: 95,
        accuracy: 100
    },
    "Shadow Wave": {
        type: "shadow",
        power: 50,
        accuracy: 100
    },
    "Shadow Down": {
        type: "shadow",
        power: 0,
        accuracy: 100
    },
    "Shadow Half": {
        type: "shadow",
        power: "?",
        accuracy: 100
    },
    "Shadow Hold": {
        type: "shadow",
        power: 0,
        accuracy: Infinity
    },
    "Shadow Mist": {
        type: "shadow",
        power: 0,
        accuracy: 100
    },
    "Shadow Panic": {
        type: "shadow",
        power: 0,
        accuracy: 90
    },
    "Shadow Shed": {
        type: "shadow",
        power: 0,
        accuracy: Infinity
    },
    "Shadow Sky": {
        type: "shadow",
        power: 0,
        accuracy: Infinity
    }
}
