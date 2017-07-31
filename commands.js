var fs = require('fs');
var request = require('request');

module.exports = {
  pwd : function(arg, done){
    var cmd = process.cwd();
    //console.log("1");
    done(cmd);
  },
  date : function(arg, done){
    var cmd = new Date();
    done(cmd.toString());
  },

  ls : function(file, done){
    var output = "";
    fs.readdir('.', function(err, files) {
        if (err) throw err;
          files.forEach(function(file) {
          output += file.toString() +"\n";
        })
      done(output)
      });
  },

  echo : function(args, done){
    done(args.join(" ").trim());
  },
  cat : function(file, done){
    fs.readFile( file[0].trim() ,'UTF8', function (err,data){
    if(err){
      return console.log(err, "Error");
    } else {
      done(data);
    }
  })
  },
  head : function(file, done){
    var output = "";
   fs.readFile( file[0].trim() ,"UTF8", function (err, data){
     if(err){
       return console.log(err);
     }
      else {

        var lines = data.split("\n");
        for (var i = 0; i < 5; i++){
          output += lines[i] +"\n";
        }
        done(output);
      }
   });

  },
    tail : function(file, done){
      var output = "";
      fs.readFile( file[0].trim() ,"UTF8", function (err, data){
     if(err){
       return console.log(err);
     }
      else {

        var lines = data.split("\n");
        for (var i = lines.length-6; i < lines.length; i++){
          output += lines[i] + "\n";
        }
        done(output);
      }
   });
  },

curl: function(website, done){
  request(website[0].trim(), function(err, res, body){
    if(err){
       return console.log(err);
     }
      else if (body){
        done(body);
      }
  })
}
}
