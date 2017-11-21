const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setGame('Hmmm. VERY dificult');
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'pinghat') {
    message.reply('pong');
  }
});

//
// Add user to role
//
client.on('message', message => {
  if(message.content.startsWith('!notify') || message.content.startsWith('!raid') || message.content.startsWith('!rs') || message.content.startsWith('!hide') || message.content.startsWith('!legen') || message.content.startsWith('!ultra') || message.content.startsWith('!big') || message.content.startsWith('!dex')) {
    //Ignore if Raider Bot command
    if(message.content.startsWith("!raider")) return;
    //Ignore if currently Dyno bot command
    if(message.content === "!rsplease") return;
    //Change notify RS to just RS
    else if(message.content.startsWith('!notify rs') || message.content.startsWith('!notifyrs')) {
      // Get channel name and ignore leading !notify
      let rsrolename = message.content.toLowerCase().substr(7).replace(/\s/g,"");
      // Get role as name (JSON formatting)
      let rsrole = message.guild.roles.find("name", message.content.toLowerCase().substr(7).replace(/\s/g,""));
      if(rsrole) {
        // Convert user's command into role ID
        let roleID = rsrole.id;
        // Check if member has the role already.
        if (message.member.roles.has(roleID)) {
          message.reply("You're already a member of **@" + rsrolename + "**, nothing changed");
        }
        // Add user to role
        else {
          console.log("Adding " + message.author.username + " to \t\t\t" + rsrolename);
          message.member.addRole(roleID).catch(console.error);
          message.reply("Added to **@" + rsrolename + "**");
        }
      }
    }
    else if(message.content) {
      console.log("Role request from: " + message.author.username + "\t" + message.content);
      // Get role name as string and ignore leading !
      let rolename = message.content.toLowerCase().substr(1).replace(/\s/g,"");
      // Get role as name (JSON formatting)
      let role = message.guild.roles.find("name", message.content.toLowerCase().substr(1).replace(/\s/g,""));
      // If Role exists
      if(role) {
        // Convert user's command into role ID
        let roleID = role.id;
        // Check if member has the role already.
        if (message.member.roles.has(roleID)) {
          message.reply("You're already a member of **@" + rolename + "**, nothing changed");
        }
        // Add user to role
        else {
          console.log("Adding " + message.author.username + " to \t\t\t" + rolename);
          message.member.addRole(roleID).catch(console.error);
          message.reply("Added to **@" + rolename + "**");
        }
      }
      // User command is not a role
      else {
        message.reply("Sorry, I could not find **" + rolename + "** role. Please check spelling and try again.");
      }
    }
  }
});

//
// Remove user from role
//
client.on('message', message => {
  if(message.content.startsWith('!no') || message.content.startsWith('!un')) {
    // If !notify, ignore
    if(message.content.startsWith === '!notify') {
      console.log("Notify command, ignoring");
    }
    //If !nors command
    else if(message.content === "!nobots" || message.content === "!nors" || message.content === "!noraids" || message.content === "!quiet") {
      console.log("Role request from: " + message.author.username + "\t" + message.content);
      // Get role name as string and ignore leading !
      let rolename = message.content.toLowerCase().substr(1).replace(/\s/g,"");
      // Get role as name (JSON formatting)
      let role = message.guild.roles.find("name", message.content.toLowerCase().substr(1).replace(/\s/g,""));
      // If Role exists
      if(role) {
        // Convert user's command into role ID
        let roleID = role.id;
        // Check if member has the role already.
        if (message.member.roles.has(roleID)) {
          message.reply("You're already a member of **@" + rolename + "**, nothing changed");
        }
        // Add user to role
        else {
          console.log("Adding " + message.author.username + " to \t\t\t" + rolename);
          message.member.addRole(roleID).catch(console.error);
          message.reply("Added to **@" + rolename + "**");
        }
      }
    }
    //Change no notify RS to just no RS
    else if(message.content.startsWith("!no notify rs") || message.content.startsWith("!nonotifyrs") || message.content.startsWith("!nonotify rs") || message.content.startsWith("!no notifyrs")) {
      // Get channel name and ignore leading !nonotify
      let commandString = message.content.toLowerCase().replace(/\s/g,"");
      let rsrolename = commandString.substr(9);
      // Get role as name (JSON formatting)
      let rsrole = message.guild.roles.find("name", rsrolename);
      if(rsrole) {
        // Convert user's command into role ID
        let roleID = rsrole.id;
        // Check if member has the role already.
        if (message.member.roles.has(roleID)) {
          console.log("Removing " + message.author.username + " to \t\t\t" + rsrolename);
          message.member.removeRole(roleID).catch(console.error);
          message.reply("Removed from **@" + rsrolename + "**");
        }
        // Add user to role
        else {
          message.reply("You're not a member of **@" + rsrolename + "**, nothing changed");
        }
      }
    }
    else if(message.content) {
      console.log("Role removal request from: " + message.author.username + "\t" + message.content);
      // Get role name as string
      let rolename = message.content.toLowerCase().substr(3).replace(/\s/g,"");
      // Get role as name (JSON formatting)
      let role = message.guild.roles.find("name", message.content.toLowerCase().substr(3).replace(/\s/g,""));
      // If Role exists
      if(role) {
        // Convert user's command into role ID
        let roleID = role.id;
        // Check if member has the role already and remove if they do.
        if (message.member.roles.has(roleID)) {
          console.log("Removing " + message.author.username + " from \t\t\t" + rolename);
          message.member.removeRole(roleID).catch(console.error);
          message.reply("Removed from **@" + rolename + "**");
        }
        // User is not in role
        else {
          message.reply("You're not a member of **@" + rolename + "**, nothing changed");
        }
      }
    }
    // User command is not a role
    else {
      message.reply("Sorry, I could not find **" + rolename + "** role. Please check spelling and try again.");
    }
  }
});

client.on('message', message => {
  if(message.content.startsWith('!gryffindor')) {
    message.reply("\nYou might belong in Gryffindor,\nWhere dwell the brave at heart,\nTheir daring, nerve, and chivalry\nSet Gryffindors apart.");
  }
})

client.on('message', message => {
  if(message.content.startsWith('!ravenclaw')) {
    message.reply("\nOr yet in wise old Ravenclaw,\nIf you've a ready mind,\nWhere those of wit and learning,\nWill always find their kind.");
  }
});

client.on('message', message => {
  if(message.content.startsWith('!hufflepuff')) {
    message.reply("\nYou might belong in Hufflepuff,\nWhere they are just and loyal,\nThose patient Hufflepuffs are true,\nAnd unafraid of toil.");
  }
});

client.on('message', message => {
  if(message.content.startsWith('!slytherin')) {
    message.reply("\nOr perhaps in Slytherin,\nYou'll make your real friends,\nThose cunning folk use any means,\nTo achieve their ends.");
  }
});

client.login('');
