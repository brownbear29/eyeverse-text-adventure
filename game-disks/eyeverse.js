const eyeDisk1 = () => ({
  roomId: 'foyer', // the ID of the room the player starts in
  rooms: [
    {
      id: 'foyer', // unique ID for this room
      name: 'The King\'s Foyer', // room name (shown when player enters the room)
      // room description (shown when player first enters the room)
      desc:  `Welcome to the **King's Foyer**, the grandest of entrances in King's Heaven. 

      Type **LOOK** to have a look around.`,
      img: `
      ..                                                                      ..                       . 
      .^.       .~^.  ...  .. ...                     ..                    ...   .   ..  .:^.      ..:. 
        ~^:      ~JJ7!~..... ......                .:^!BP7P7:.              ....... .....^~!?5~ .  .:::^  
        ^~^^:....7PPPP5J7:.:: .:.::.  .          .:~B&G&@B&@5^:..        .  ....:. ::::7YPBBP5! .. ^~:^^  
        ^77777~::?#BBBBBB5!::^..^.::. .     ..:~7?YP@@#@@&@@#5YY?^:...  .. ..::^..^^^7GB#####B!.:!!77!!^  
        :~~!7!77^?##&&####BY^^^.:^... .....^~7JY55PGBBB#B##BBGGP55Y7~:.... :.:^^.~~~5##&&&&&&#?:^77!77^.  
          ...^!!7#&&&&&&&##P~~^.~.......:~7??JY55PPGGGGPGGGPPPP5YYJJ!^....:..~:^!~P&&&&&&&&&#J~^!!:.     
          ..:. .!P&&&&&&&&&&P~^.::....:^^~7??JJYYY55P5PPPPPP55YJJJ?7!~~::.:..^:~!5&@@@@@&&&&&!:.::...    
          .:.    :5Y#@@@@@&&#?~:.:::.:^^^^~^~!7777777777777777!!!!~~~~^^:.::.:^!J&&@@@@@&&5Y!    :::     
      ..:         ^J#@@@@@@&&P~^::::^!!~^^~~^!777???777?7777777777~~~~^^~~::.^~!G@@@@@@@@&?^         ... 
          .        :P&@@@@@@@&#!!~^:~YJ7!~^^~^^~~~~!!~~!!!!~!!!!~~~~~~^~77??^:~!7#@@@@@@@@@G:             
      ...     .  .7#&&@@@@@@@@&J!?^~PBB57!!!~~^~~!77777?????77!!!!~~~~~!JJ5GY^!7J&@@@@@@@@@&GY   .        
        ...   .. :7B#&@@@@@&@&&5!?^Y#&&#577!!!!!!7?JYYYP5YY5YJ777!!!!77?GBBBB7!YP&@&@@@@&&@&55. ...  ...  
              .. :7B##@@@@@&&&BG!7!G&&&&G??777777?YY5GB&&#GBPYJ???777??Y###BB?^?P#&&&@@@&&&#JP. .....     
      .::  . .. :!GBB&@&&&#&#GY:~!5#&&&B?J???JJJ5PG##@@@@&@#GP5YJ7?7?7P####P!:~?G&##&@@B&&B75. ... ....  
        ..   .. :!PGG&@&#&B#B5?^~~Y#&##B????P#BG#&@@@@@@@@@@&&BG#G?7??5B##BY!:^!5#BB&&&G#&G7Y. ... ..    
        ..   ..  .~5PP&&&#&GBGJ7^~~J###BB?7?JGBB#&&&@@@@@@@@@&&#B##Y?7?JG#BGJ!:^~JBBG#&&PB#P!J. .... ...  
        .....    .^YP5#&#B#GBG?7:^~7B#BGG7!7JGB#&&######&##########Y7!7J5BBGJ7::~?GBP#&&5BBP~?.  ... ...  
            .   .^J5YB##G#PGP7!:^!?GBPPP7!7JG####BBGGGGGGGGGGB##BBY!!7?YGGG??::^7PG5B##5PG5^?  ....      
      ..:.       .:?YJG#BPG5P57~.^!?55YY5!~7JPBBGGGB555PP555PGGBBBBY~~!7JYYJ77::^!5PYG##Y5GY^7.  ... .....
        ..  .    .:7J?PBGYPY5Y!!.:~!YJ??J!^!?YGPYPPP?55!PP!!Y5PG5PGJ^~!!???7!!:.:~Y5JPBB?J5J^!.  ...   .:.
                ..~7!5GP?YJY?~~ .^^7!!77~:~7J5Y7Y5Y^^^.^~..?5557Y57^^~~!77~~~:.:~?Y75PG7?Y?^~   ..   ..  
      ... .     .:~!~J557JJJ7^^ .::!~^!7^.^!?YJ!??7.... .. ~?JJ!JY!:^^~~!!~^^..:^7J!J55!7J7:~   ...      
      .:.  .    ..~~~7YY!?7?!^: .::~~^!!^.^~7J?^!7~..    . :7??~7?~::^^^~~^:^...^!?~7YY!!?!:^   ...  ..  
        ..       ..^~^!??~!77~:: ..:~^:^~^.:~~!!^~~:......  .^~7~!7~^:^^^~~^::...^~7~!??~~7~:^   ... ...  
        ..       ..^^^~77^~!!^:: ...^^::^^::^^^^:::. .?5PP?. ..~^~!^^:^^^^^:::...:^!^~77^^~~.:       ..   
                  .:::^!!^^~~^.: ...:^^^^^.:^::...  :G&&#&&5. ...:^:^::~~^^^::...:^~^~~~::^^..            
                  .::::~~^::::.. ::::::..: ....   .7G&&&&&&&P.  ... .:..::^^:^...::^:^~~^:::..            
                  ....::^^:::^^: .........       ~JG#&&&&#&&G5J:..   ...........^:^^::^^:.::..            
                  ...::::^^^^::.  ..          .~YPBJPB&&&G#&B5#B7:.      . ... .:::^^^^::::...            
                .:.....:::..::.          .^7!?5GBG5B#&#BJ&&&!G#B7?!^.         .::..:::::::::.            
                  .. .. ......        .^!?YY?YGBP7PBBGGGGPPB?P##P~?5Y^:.       ....::.......             
                  .. .  ...        ^J55Y5Y!!G##PYBGJBBBG~Y#B5?B#&B77PG577!.        ........              
                                .?P5YPY55!7GBBPYBBG?BBBP~G##G~5BGBBJ^YGG5?YJ7:                           
                            .^!YP#BYYY5?^J###GJPGB5YBBBP7GBBB?PBGBB#?:755JYGBG?~:                        
                            ?#&&#PJYYY!.5B#BY!PGGG7YGGP?~YGBBJY55YB#&J.!YP5?5##BG^                       
                        .^!YPGBP??J??^^GBGBBYBBBBPJBBBGYYPBBBPGBBGGB##G!~JYY77PGP5Y7.                    
                      .5B#&&&B?!77!~.~#@@@@B?GGGGY5&#&&BJ&&&&&5PP5P#&&&&J:?JJ?^J&&&&#B?                  
                        :75PGY~~~~~^..?JY55Y?J????~!7777~^7?J??!???JYY55Y5^.!??7:~5GP57^                  
                  .:^~!?55Y7:^~^^. :YP555Y:!!!!!!:!!!!!:.!!7!!^!7?7?~75555! ^7!7^:JPP5J7^:.              
                :7YPPPPP5?^:^~^^. ^YYY?77^.~~^^^..^^^^^  :^^^^. ^^^~^.!77JY! :!!!~:!5PGBBGG5?            
                ^!!77?J?~.:^^^:. ^J???777.:~~^:: .^^^^:  .:^^^: .^~~~::??JJJ! .~~~^.:?YY?777!.           
          ...:....:^!7!:.::::.  ^77777!~. ...                     .... :!!77?!  ^^^^..~?!~^:. .:::.      
        :!???7~~7?J??!...::..  :!~~~~^:. .....   .:::.    ..::.  .::::. ^~!~~7!  :^::. :J555Y7^~????^.   
        :^~~~::^~!!^. ...:..  :~~~~~^:                              ...  :~~~!7~  .:::...:~!!!!::~~~^.   
      `,
      // optional callback when player issues the LOOK command
      // here, we use it to change the foyer's description
      onLook: () => {
        const room = getRoom('foyer');
        room.desc = `You are currently standing in the foyer. Two huge windows stretch to the ceiling, which must be at least 25 feet high.
        There's a locked door to the **STUDY** on your left, and a **FIREPLACE** on your right.
        Ahead is an archway leading to the **RECEPTION** room.

        __Hints__

        Rooms can have **exits** that take you to other rooms. For instance, to the **NORTH** is the **RECEPTION** room.

        Rooms can also contain **items**. Sometimes the player can **TAKE**, **LOOK AT** or **USE** items.

        Type **ITEMS** to see a list of items in the foyer. Or type **HELP** to see what else you can do!`;
      },
      // optional list of items in the room
      items: [
        {
          name: 'Study Door',
          desc: `There are 4" metal letters nailed to the door. They spell out: "STUDY".`,
          onUse() {
            const foyer = getRoom('foyer');
            const exit = getExit('west', foyer.exits);
            if (exit.block) {
              println(`The door is locked. But you notice the lock is made of brass.`);
            } else {
              goDir('north');
            }
          },
        },
        {
          name: ['Fireplace', 'Fire'], // player can refer to this item by any of these names
          desc: `Logs are burning gently in an open fire. The crackling sound makes you feel warm and cosy.

          You notice **SOMETHING SHINY** lodged in the burning embers.`,
          block: `If you play with fire, you're going to get burned.`, // optional reason player cannot pick up this item
          // when player looks in the fire, they discover a coin
          onLook: () => {
            if (getItem('coin')) {
              // the coin is already in the fire or the player's inventory
              return;
            }

            const foyer = getRoom('foyer');

            // put the coin in the fire
            foyer.items.push({
              name: ['shiny thing', 'something shiny', 'coin'],
              onUse() {
                const room = getRoom(disk.roomId);
                if (room.id === 'foyer') {
                  println(`You can't use the **COIN** in the foyer.`);
                } else if (room.id === 'bakery') {
                  println(`You give the **COIN** to the artist and receive a **COOKIE**!`);
                  /*// remove the block
                  const exit = getExit('east', room.exits);
                  delete exit.block;
                  // this item can only be used once
                  const key = getItem('coin');
                  key.onUse = () => println(`The lab has already been unlocked.`);*/
                } else {
                  println(`You can't use the **COIN** here.`);
                }
              },
              desc: `It's a silver **COIN**!`,
              onLook() {
                const key = getItem('coin');

                // now that we know it's a coin, place that name first so the engine calls it by that name
                key.name.unshift('coin');

                // let's also update the description
                key.desc = `It has a eye symbol on one side. You wonder if that could mean something.`;

                // remove this method (we don't need it anymore)
                delete key.onLook;
              },
              isTakeable: true,
              onTake() {
                println(`You bend down and pick up the tiny, shiny coin, being careful not to burn your hand.

                *Now it's in your **inventory**. You can try and use it at any time, but it might only work in one room.
      
                Type **INV** to see a list of items in your inventory.*`);
                /*// update the monstera's description, removing everything starting at the line break
                const plant = getItem('plant');
                plant.desc = plant.desc.slice(0, plant.desc.indexOf('\n'));*/
              },
            });
          },
        }
      ],
      // places the player can go from this room
      exits: [
        // GO NORTH command leads to the Reception Desk
        {dir: 'north', id: 'reception'},
        {dir: 'west', id: 'study'},
      ],
    },
    {
      id: 'reception',
      name: 'Main Reception Room',
      desc: `**RONALD** is here. I'm sure he'd be happy to tell you a little more about the features available in the castle.

      *You can speak with characters using the **TALK** command.*

      To the **NORTH** is a closed **DOOR**.

      To the **SOUTH** is the foyer where you started your adventure.

      Next to the **DESK** are some **STAIRS** leading **UP** and an archway with what looks like some stones steps leading **DOWN**.`,
      items: [
        {
          name: 'desk',
        },
        {
          name: 'door',
          desc: `The wooden letters on the door seem to be in code.
          
          -- ..- ... .. -.-. / .-. --- --- --`,
          onUse() {
            const reception = getRoom('reception');
            const exit = getExit('north', reception.exits);
            if (exit.block) {
              println(`It's locked.`);
            } else {
              goDir('north');
            }
          },
        },
        {
          name: 'Gate',
          desc: `A guilded gate is blocking the way to the **STAIRS**.`,
        },
        {
          name: ['Stairs', 'Staircase'],
          desc: `They lead up to a door. If you squint, you can make out the word **KING'S LANDING** on the door.`,
          onUse: () => println(`Try typing GO UPSTAIRS (once you've unlocked the gate).`),
        },
        {
          name: ['Downstairs', 'Kitchen'],
          desc: `Through an archway, you notice some stone steps leading down to what looks like a **KITCHEN**.`,
        },
      ],
      exits: [
        // exits with a BLOCK cannot be used, but print a message instead
        {dir: 'north', id: 'music', block: `The door is locked.`},
        {dir: ['upstairs', 'up'], id: 'landing', block: `There's a locked **GATE** blocking your path.`},
        {dir: ['downstairs', 'down'], id: 'kitchen'},
        {dir: 'south', id: 'foyer'},
      ],
    },
    {
      id: 'landing',
      name: 'King\'s Landing',
      desc: `A grand corridor with several doors leading off from it.

      To the **NORTH** is a balcony.

      To the **EAST** is a door marked 'Eye Lab'.

      To the **SOUTH** are the King's Chambers.`,
      exits: [
        {dir: ['west', 'down'], id: 'reception'},
        {dir: 'north', id: 'balcony'},
        {dir: 'east', id: 'lab'},
        {dir: 'south', id: 'chambers'},
      ],
    },
    {
      id: 'lab',
      name: 'Eye Lab',
      desc: `An **EYE KNIGHT** is hunched over a desk. (Type **TALK** to speak to the Eye Knight.)

      To the **WEST** is the door to the King's Landing.`,
      exits: [
        {dir: 'west', id: 'landing'},
      ],
    },
    {
      id: 'music',
      name: 'Music Room',
      desc: `There is a **RED EYEPHUNK** hovering silently in the center of a black void. They appear to be awaiting instructions. (Type **TALK** to speak to the EyePhunk.)

      **SOUTH** is the Reception Desk.`,
      exits: [
        {dir: 'south', id: 'reception'},
      ],
    },
    {
      id: 'kitchen',
      name: 'Kitchen',
      desc: `A grand stone kitchen, with a **CUPBOARD** in one corner.`,
      items: [
        {
          name: 'cupboard',
          desc: `A large wooden cupboard, with the door slightly ajar.`,
          onLook() {
            const key = getItem('cupboard');
            // update the description
            cupboard.desc = `You open the cupboard door. There is a **BRASS KEY** on a high shelf and a **LAMP**`;
          },
        },
        {
          name: 'brass key',
          desc: `A sizeable brass key.`,
          onTake() {
            println(`You take the key and wonder which door it might unlock.`);
          }
        },
        {
          name: 'lamp',
          desc: `An oil-filled lamp.`,
          onUse() {
            // add logic to light up the cellar when the lamp is used, only in that room
          },
        },    
      ],
      exits: [
        {dir: ['upstairs', 'up'], id: 'reception'},
        {dir: 'north', id: 'cellar'},
        {dir: 'south', id: 'bakery'},
      ],
    },
    // need to add more rooms here
  ],
  characters: [
    {
      name: ['Ronald', 'Ron', 'receptionist'],
      roomId: 'reception',
      desc: 'Although a littel dishevelled, he looks... helpful.', // printed when the player looks at the character
      // optional callback, run when the player talks to this character
      onTalk: () => println(`"Hello sir," he says, "how can I help you?"`),
      // things the player can discuss with the character
      topics: [
        {
          option: 'How can I change the visual **STYLE** of the game?',
          removeOnRead: true,
          // optional callback, run when the player selects this option
          onSelected() {
            println(`**RONALD** pulls a strange-looking *item* out of a desk drawer.
            "Here, take this." he says. "Try typing **USE STYLE-CHANGER**. That should give you some ideas."`)

            // add a special item to the player's inventory
            disk.inventory.push({
              name: ['style-changer', 'stylechanger'],
              desc: `This is a magical item. Type **USE STYLE-CHANGER** to try it out!`,
              onUse: () => {
                const currentStylesheet = document.getElementById('styles').getAttribute('href');
                const newName = currentStylesheet.includes('eyeverse') ? 'retro' : 'eyeverse';
                println(`You changed the stylesheet to ${newName.toUpperCase()}.css.`);
                selectStylesheet(`styles/${newName}.css`);
              }
            });
          },
        },
        {
          option: `Tell me about **EXITS**`,
          // text printed when the player selects this option by typing the keyword (EXITS)
          line: `"Sure! It looks like you've already figured out you can type **GO NORTH** to use an exit to the north. But did you know you can just type **GO** to get a list of exits from the room? If an exit leads you to a room you've been to before, it will even tell you the room's name.

          "There are also some shortcuts to make getting where you're going easier. Instead of typing **GO NORTH**, you can just type **NORTH** instead. Actually, for cardinal directions, you can shorten it to simply **N**.

          "Sometimes an **exit** will be temporarily blocked. Try going **NORTH** from here to see what I mean. You'll find the **DOOR** is locked. You'll need to find the **KEY** to get inside.

          "These **STAIRS** are also blocked by a locked **GATE**. There isn't a key to the gate, so if you want to see what's up there, you'll have to find another way to get past it."`,
          // instruct the engine to remove this option once the player has selected it
          removeOnRead: true,
        },
        {
          option: `Remind me what's up with that **DOOR** to the north...`,
          line: `"The exit has a *block*. Specifically, the **DOOR** it locked. You'll need to find a **KEY** to open it."`,
          prereqs: ['exits'], // optional list of prerequisite topics that must be discussed before this option is available
        },
        {
          option: `Remind me what's up with these **STAIRS**...`,
          line: `"The **STAIRS** are blocked by a locked **GATE**. There isn't a key, so you need to find another way to unlock it."`,
          prereqs: ['exits'],
        },
        {
          option: `How do I use **AUTOCOMPLETE**?`,
          line: `"If you type a few letters and press TAB, the engine will guess what you're trying to say."`,
          removeOnRead: true,
        },
        {
          option: `If I want to **REPEAT** a command, do I have to type it again?`,
          line: `"Wow, it's almost like you're reading my mind. No, you can just press the UP ARROW to see commands you've previously entered."`,
          removeOnRead: true,
        },
      ],
    },
    {
      name: 'Eye Knight',
      roomId: 'lab',
      onTalk: () => println(`"I can tell you about all things in the Eyeverse," they explain. "What would you like to know?"`),
      topics: [
        {
          option: `Can you unlock the **GATE** to the stairs by the reception desk?`,
          line: `Actually, you can do that yourself! There happens to be a secret, custom **UNLOCK** command. This powerful command will remove blocks on any exit. Just type **UNLOCK** to use it.`,
          removeOnRead: true,
        },
      ]
    },
    {
      name: 'Artist',
      roomId: 'bakery',
      onTalk: () => println(`"I can tell you all about cookies. Or if you'd like to buy a **COOKIE**, grace my palm with silver," they explain. "What would you like to know about?"`),
      topics: [
        {
          option: `Tell me about **COOKIES**`,
          line: `At https://eyeverse.world/cookies, you can select one of your army to have a custom image created, by one of the Eyeverse artists, like me.`
        },
      ],
    },
  ],
});

// custom functions used by this disk
// change the CSS stylesheet to the one with the passed name
const selectStylesheet = filename => document.getElementById('styles').setAttribute('href', filename);

// override commands to include custom UNLOCK command
// create the unlock function
const unlock = () => {
  disk.rooms.forEach(room => {
    if (!room.exits) {
      return;
    }

    // unblock all blocked exits in the room
    room.exits.forEach(exit => delete exit.block);
  });

  // update the description of the gate
  getItemInRoom('gate', 'reception').desc = `The gilded gate leads to the staircase.`;

  println(`All **exits** have been unblocked!`);
};

// attach it to the zero-argument commands object on the disk
commands[0] = Object.assign(commands[0], {unlock});
